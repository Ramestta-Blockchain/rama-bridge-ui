import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import setting from '../../icons/asset/plusb.svg';
import cross from '../../icons/asset/cross.svg';
import { Box, IconButton, ListItemText, Typography, useTheme, Slide, SlideProps, InputBase } from '@mui/material';
import { ColorModeContext } from '@/context';
import { useContext } from 'react';
import SearchCustom from './searchCustom';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import mt1 from '../../icons/asset/mt1.svg';
import mt2 from '../../icons/asset/mt2.svg';
import mt3 from '../../icons/asset/mt3.svg';
import mt4 from '../../icons/asset/mt4.svg';
import mt5 from '../../icons/asset/mt5.svg';
import mt6 from '../../icons/asset/mt6.svg';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SearchIcon from '@mui/icons-material/Search';
import TextCopy from './textCopy';
import { useAccount } from 'wagmi';
import shortenString from '@/lib/shortenString';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Buttonwithcolor from './buttonwithcolor';
import TextCopyTwo from './textCopyTwo';



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

const useStyles = makeStyles({
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },

    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0rem'

    },
    list_small: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    messBox: {
        backgroundColor: '#1B4252',
        padding: 10,
        borderRadius: '8px',
        marginTop: '1rem',
        textAlign: 'center'
    }

});

export default function Add() {
    const classes = useStyles();
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

    const { address, isConnected } = useAccount();

    return (
        <React.Fragment>
            <Button
                sx={{
                    padding: '8px 10px',
                    backgroundColor: theme.palette.background.default,
                    borderRadius: '6px',
                    border: `1px solid ${theme.palette.primary.light}`,
                }}
                onClick={handleClickOpen('paper')} variant="contained" startIcon={<AddIcon />}>
                Add
            </Button>

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
                        height: '100vh'

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
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            border: `1px solid ${theme.palette.secondary.light}`,
                            padding: '7px',
                            borderRadius: '30px',
                            width: '40px',
                            height: '40px',
                            textAlign: 'center'
                        }}>
                        <Box onClick={handleClose} sx={{ cursor: 'pointer' }}>
                            <KeyboardArrowLeftIcon sx={{ color: '#3DC1F2' }} />
                        </Box>
                    </Box>
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
                <Box my={1.5}>
                    <Box sx={{
                        display: 'flex',
                        gap: '5px',
                        alignItems: 'center',
                        backgroundColor: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.secondary.light}`,
                        borderRadius: '6px',
                        padding: '10px 10px'
                    }}>
                        <SearchIcon sx={{ color: theme.palette.primary.contrastText, opacity: '30%' }} />
                        <InputBase
                            sx={{
                                flex: 1, color: theme.palette.primary.contrastText,
                                width: '100%',
                                fontSize: 13.5
                            }}
                            placeholder={"0x514910771AF9Ca656af840dff83E8264EcF986"}
                            type="search"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />


                    </Box>
                </Box>

                <Box component={'ul'} className={classes.list}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.secondary.light}`,
                        borderRadius: '6px',
                        padding: '15px 15px 0px 15px'
                    }}>
                    <Box component={'li'} className={classes.listItem} borderBottom={`1px solid ${theme.palette.secondary.light}`} height={'53px'}>
                        <Box>
                            <Typography>Ethereum Address</Typography>
                        </Box>
                        <Box className={classes.list_small}>
                            <TextCopyTwo text={address} address={shortenString(address as string)} />
                            <ArrowOutwardIcon />
                        </Box>
                    </Box>
                    <Box component={'li'} className={classes.listItem} borderBottom={`1px solid ${theme.palette.secondary.light}`}>
                        <Box>
                            <Typography>Project Name</Typography>
                        </Box>
                        <Box>
                            <Typography>ChainLink Token</Typography>
                        </Box>
                    </Box>

                    <Box component={'li'} className={classes.listItem} borderBottom={`1px solid ${theme.palette.secondary.light}`}>
                        <Box>
                            <Typography>Ticker Name</Typography>
                        </Box>
                        <Box>
                            <Typography>Link</Typography>
                        </Box>
                    </Box>

                    <Box component={'li'} className={classes.listItem} >
                        <Box>
                            <Typography>Token Decimal</Typography>
                        </Box>
                        <Box>
                            <Typography>18</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.messBox}>
                    <Typography color={'#3DC1F2'} fontSize={13}>
                        ATTN: The information on this page has been extracted from an independent source, and has not been verified or otherwise investigated, and no representations or warranties are made about the information contained here. Learn more
                    </Typography>
                </Box>
                <Box mt={1.5} />
                <Buttonwithcolor text={"Add LINK token"} />



            </Dialog>
        </React.Fragment>
    );
}
