import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import setting from '../../icons/asset/setting.svg';
import cross from '../../icons/asset/cross.svg';
import { Box, IconButton, ListItemText, Typography, useTheme, Slide, SlideProps } from '@mui/material';
import { ColorModeContext } from '@/context';
import { useContext } from 'react';
import SearchCustom from './searchCustom';
import AddIcon from '@mui/icons-material/Add';

import mt1 from '../../icons/asset/mt1.svg';
import mt2 from '../../icons/asset/mt2.svg';
import mt3 from '../../icons/asset/mt3.svg';
import mt4 from '../../icons/asset/mt4.svg';
import mt5 from '../../icons/asset/mt5.svg';
import mt6 from '../../icons/asset/mt6.svg';
import ModalManageToken from './modalManageToken';
import Add from './add';



const locations = [
    {
        name: 'LINK',
        icon: mt1,
        description: 'ChainLink Token',
    },
    {
        name: 'QUICK',
        icon: mt2,
        description: 'Quickswap',
    },
    {
        name: 'EMON',
        icon: mt3,
        description: 'EthermonToken',
    },
    {
        name: 'COMBO',
        icon: mt4,
        description: 'Furucombo',
    },
    {
        name: 'BUSD',
        icon: mt5,
        description: 'Binance USD',
    },
    {
        name: 'MM',
        icon: mt6,
        description: 'Mintopoly Money',
    },
];

function TransitionComponent(props: React.JSX.IntrinsicAttributes & SlideProps) {
    return <Slide direction="up" {...props} />;
}

export default function ModalTwo() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen('paper')}><Image src={setting} alt={''} /></Button>
            <Dialog
                open={open}
                TransitionComponent={TransitionComponent}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                sx={{
                    '& .MuiPaper-root': {
                        background: `linear-gradient(0deg, ${theme.palette.mode === "dark" ? "#0C0C0D" : "#F7F7F8"} 100%, ${theme.palette.mode === "dark" ? "#0C0C0D" : "#F7F7F8"} 100%)`,
                        backgroundColor: 'transparent',
                        border: `1px solid ${theme.palette.primary.light}`,
                        boxShadow: '0px 0px 6px -1px #3DC1F2',
                        padding: '1rem',
                        borderRadius: '20px',
                        width: '420px',
                        height:'100vh'

                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant='h6'>Manage Tokens</Typography>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            border: `1px solid ${theme.palette.secondary.light}`,
                            padding: '8px',
                            borderRadius: '30px',
                            width: '40px',
                            height: '40px',
                            textAlign: 'center'
                        }}>
                        <Box onClick={handleClose} sx={{ cursor: 'pointer' }}>
                            <Image src={cross} alt="" />
                        </Box>
                    </Box>
                </Box>
                <Box my={2}>
                    <SearchCustom placeholder_Text={"Search by token name or address"} />
                </Box>
                <Box
                    sx={{
                        overflowY: 'auto',
                        height: '600px',

                        '&::-webkit-scrollbar': {
                            width: '3px',

                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: theme.palette.background.default,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: theme.palette.primary.light,
                            borderRadius: '10px',
                        },
                    }}>
                    <Box mr={1}>


                        {locations.map((location, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                justifyContent: 'space-between',
                                backgroundColor: 'transparent',
                                border: `1px solid transparent`,
                                borderRadius: '6px',
                                padding: '10px',

                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                    border: `1px solid ${theme.palette.primary.light}`,
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex', alignItems: 'center', gap: '10px',

                                }}>
                                    <Box>
                                        <Image src={location.icon} alt={`${location.name} icon`} width={36} height={36} />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={500}>{location.name}</Typography>
                                        <Typography color={'#999'}>{location.description}</Typography>
                                    </Box>
                                </Box>

                                <Box>
                                    <Add/>
                                    
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{
                    position: 'absolute',
                    bottom: '1.2rem',
                    right: '1rem'
                }}>
                    <ModalManageToken />
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
