import React, { useContext, useState } from 'react';
import { Box, Grid, Select, MenuItem, Button, Avatar, Typography, useTheme, SelectChangeEvent, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ColorModeContext } from '@/context';
import Image from 'next/image';
import transferArrow from '../../icons/asset/transferArrow.svg';
import ModalItem from '@/ui/bridge/modalItem';
import PercentageBtn from '@/theme/components/percentageBtn';
import DropdownTwo from '@/theme/components/dropdownTwo';
import tipd from '../../icons/asset/tipd.svg';
import tipl from '../../icons/asset/tipl.svg';
import infod from '../../icons/asset/infod.svg';
import infol from '../../icons/asset/infol.svg';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import HoverTool from '@/theme/components/hoverTool';
import HoverToolTwo from '@/theme/components/hoverToolTwo';
import ButtonText from '@/theme/components/buttonText';
import Modal from '@/theme/components/modal';
import d4 from '../../icons/asset/d4.svg';
import d5 from '../../icons/asset/d5.svg';
import sheild from '../../icons/asset/lgsheild.svg';
 


const useStyles = makeStyles({
    hide: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'end',
    },
    flex_box: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    flex_box2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    connectBridge: {
        backgroundColor: '#3DC1F2 !important',
        textDecoration: 'none',
        padding: '10px 16px !important',
        borderRadius: '6px !important',
        transition: '0.5s',
        width: '100%',
        marginTop: '1rem !important',
        '&:hover': {
            backgroundColor: '#3DC1F2',
        },
    },
    save: {
        backgroundColor: '#3DC1F2 !important',
        textDecoration: 'none',
        padding: '10px 16px !important',
        borderRadius: '6px !important',
        transition: '0.5s',
        marginTop: '8px !important',
        '&:hover': {
            backgroundColor: '#3DC1F2',
        },
    },
    connectBridgeOutline: {

        textDecoration: 'none',
        padding: '10px 16px !important',
        borderRadius: '6px !important',
        transition: '0.5s',
        width: '100%',
        marginTop: '1rem !important',
        border: '1px solid #1D1D20 !important',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    rotateArrow: {
        transition: 'transform 0.5s ease',
    },
    rotated: {
        transform: 'rotate(180deg)',
    },
    thirdparty: {
        textAlign: 'center',
        display: 'block',
        marginTop: '10px',
        textDecoration: 'none',
        color: '#3dc1f2'
    }
});
// Initial Data
const initialLocationsData2 = [
    {
        id: 1,
        name: 'MATIC',
        icon: d4,
    },
    {
        id: 2,
        name: 'ETH',
        icon: d5,
    },
    {
        id: 3,
        name: 'RUSD',
        icon: sheild,
    },
];


const SelectDrop = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [isRotated2, setIsRotated2] = useState(false);

    const [selected1, setSelected1] = useState<number>(1); // Default to id 1
    const [selected2, setSelected2] = useState<number>(2); // Default to id 2

    const handleSelect1Change = (event: SelectChangeEvent<number>) => {
        const value = event.target.value as number;
        setSelected1(value);

        // If the new selection matches selected2, reset selected2
        if (value === selected2) {
            const availableIds = initialLocationsData2.filter(loc => loc.id !== value);
            setSelected2(availableIds[0].id); // Select the first available ID
        }
    };

    const handleSelect2Change = (event: SelectChangeEvent<number>) => {
        const value = event.target.value as number;
        setSelected2(value);

        // If the new selection matches selected1, reset selected1
        if (value === selected1) {
            const availableIds = initialLocationsData2.filter(loc => loc.id !== value);
            setSelected1(availableIds[0].id); // Select the first available ID
        }
    };

    const handleTransfer = () => {
        const temp = selected1;
        setSelected1(selected2);
        setSelected2(temp);
        setIsRotated2(!isRotated2);
    };

    // Filter logic to prevent selecting the same ID in both dropdowns
    const availableLocations1 = initialLocationsData2.filter(location => location.id !== selected2);
    const availableLocations2 = initialLocationsData2.filter(location => location.id !== selected1);

    const { openConnectModal } = useConnectModal();
    const { address } = useAccount();
    return (
        <>







            <Grid container spacing={2}>
                <Grid item lg={2.5} md={2.5} sm={12} xs={12}></Grid>
                <Grid item lg={6} md={7} sm={12} xs={12}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.secondary.contrastText,
                            border: `1px solid ${theme.palette.primary.light}`,
                            borderRadius: '4px',
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: theme.palette.background.default,
                                borderRadius: '4px',
                                padding: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Typography>Bridge</Typography>
                            <HoverTool
                                ImageItem={theme.palette.mode === 'dark' ? tipd : tipl}
                                Title={
                                    'The Ramestta Native Bridge is a decentralized bridge for asset transfers between Polygon and RAMA networks.'
                                }
                            />
                        </Box>

                        <Box sx={{ padding: '10px' }}>
                            <Typography>Transfer from</Typography>
                            <Box
                                sx={{
                                    backgroundColor: theme.palette.secondary.light,
                                    marginTop: '10px',
                                    padding: '10px',
                                    borderRadius: '8px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Select sx={{
                                        height: '52px',
                                        backgroundColor: theme.palette.primary.main,
                                        boxShadow: 'none',
                                        borderRadius: '6px',
                                        border: '1px solid transparent',
                                        padding: '0px', // Zero padding
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                            boxShadow: 'inherit',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                            boxShadow: 'inherit',
                                        },
                                    }} value={selected1} onChange={handleSelect1Change}>
                                        {availableLocations1.map((location) => (
                                            <MenuItem key={location.id} value={location.id}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <Box>
                                                        <Image src={location.icon} alt={location.name} style={{display:'block'}} width={36} height={36} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>{location.name}</Typography>
                                                         
                                                    </Box>
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <Typography color={'#999'}>
                                        Balance:{' '}
                                        <Typography component={'span'} color={theme.palette.primary.contrastText}>
                                            0
                                        </Typography>
                                    </Typography>
                                </Box>

                                <Box
                                    className={classes.flex_box2}
                                    sx={{
                                        backgroundColor: theme.palette.secondary.contrastText,
                                        padding: '10px',
                                        borderRadius: '6px',
                                        marginTop: '10px',
                                        '@media(max-width : 600px)': {
                                            flexWrap: 'wrap',
                                            justifyContent: 'center'
                                        }

                                    }}
                                >
                                    <Box>
                                        <InputBase
                                            sx={{
                                                flex: 1, color: theme.palette.primary.contrastText,
                                                width: '100%',
                                                fontSize: 20,
                                                '& input': {
                                                    '-moz-appearance': 'textfield', // Firefox
                                                    '&::-webkit-outer-spin-button': {
                                                        '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                        margin: 0,
                                                    },
                                                    '&::-webkit-inner-spin-button': {
                                                        '-webkit-appearance': 'none', // Chrome, Safari, Edge
                                                        margin: 0,
                                                    },
                                                },
                                            }}
                                            placeholder={'0'}
                                            type="number"

                                            inputProps={{ 'aria-label': 'search google maps' }}
                                        />
                                    </Box>

                                    <Box className={classes.flex_box}
                                        sx={{
                                            '@media(max-width : 600px)': {
                                                flexWrap: 'wrap',
                                                justifyContent: 'center',
                                                gap: '5px'
                                            }
                                        }}
                                    >
                                        <Box className={classes.flex_box}>
                                            <PercentageBtn Text={'25%'} />
                                            <PercentageBtn Text={'50%'} />
                                            <PercentageBtn Text={'Max'} />
                                        </Box>
                                        <Box
                                            sx={{
                                                backgroundColor: theme.palette.secondary.light,
                                                width: '1px',
                                                height: '50px',
                                                '@media(max-width : 600px)': {
                                                    display: 'none'
                                                }
                                            }}
                                        />
                                        <DropdownTwo />
                                    </Box>
                                </Box>
                            </Box>

                            <Box textAlign={'center'} my={2}>
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        backgroundColor: theme.palette.primary.main,
                                        border: `1px solid ${theme.palette.secondary.light}`,
                                        borderRadius: '40px',
                                        padding: '4px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleTransfer}
                                    className={`${classes.rotateArrow} ${isRotated2 ? classes.rotated : ''}`}  
                                >
                                    <Image src={transferArrow} alt={''} style={{ display: 'block' }} />
                                </Box>
                            </Box>

                            <Box className={classes.flex_box2}
                                sx={{
                                    '@media(max-width : 600px)': {
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '5px'
                                    }
                                }}
                            >
                                <Box>
                                    <Typography>Transfer To</Typography>
                                </Box>
                                <Box className={classes.flex_box}>
                                    <Typography color={'#999'}>
                                        + Transfer to different address
                                    </Typography>
                                    <HoverToolTwo
                                        ImageItem={theme.palette.mode === 'dark' ? infod : infol}
                                        Title={
                                            'You can also transfer the requested amount to a different wallet address Than the connected wallet.'
                                        }
                                    />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    backgroundColor: theme.palette.secondary.light,
                                    marginTop: '10px',
                                    padding: '10px',
                                    borderRadius: '8px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Select sx={{
                                        height: '52px',
                                        backgroundColor: theme.palette.primary.main,
                                        boxShadow: 'none',
                                        borderRadius: '6px',
                                        border: '1px solid transparent',
                                        padding: '0px', // Zero padding
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                            boxShadow: 'inherit',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                            boxShadow: 'inherit',
                                        },
                                    }} value={selected2} onChange={handleSelect2Change}>
                                        {availableLocations2.map((location) => (
                                            <MenuItem key={location.id} value={location.id}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <Box>
                                                        <Image src={location.icon} alt={location.name} style={{display:'block'}} width={36} height={36} />
                                                    </Box>
                                                    <Box>
                                                        <Typography>{location.name} </Typography>
                                                        
                                                    </Box>
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <Typography color={'#999'}>
                                        Balance:{' '}
                                        <Typography component={'span'} color={theme.palette.primary.contrastText}>
                                            0
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                className={classes.flex_box2}
                                sx={{
                                    border: `1px solid ${theme.palette.secondary.light}`,
                                    padding: '10px',
                                    borderRadius: '6px',
                                    marginTop: '1rem',
                                }}
                            >
                                <Box className={classes.flex_box}>
                                    <Typography>Refuel Gas</Typography>
                                    <HoverTool
                                        ImageItem={theme.palette.mode === 'dark' ? tipd : tipl}
                                        Title={'Access tools and resources for the Polygon network.'}
                                    />
                                </Box>
                                <Box className={classes.flex_box}>
                                    <Typography>Not Supported</Typography>
                                    <HoverTool
                                        ImageItem={theme.palette.mode === 'dark' ? tipd : tipl}
                                        Title={'This feature is currently not supported.'}
                                    />
                                </Box>
                            </Box>
                            {address ? (
                                <>
                                    <Box mt={1.5}>
                                        <ButtonText
                                            ButtonText={'Enter Amount'} url={'#'} />
                                    </Box>
                                    <Link className={classes.thirdparty} href={''}>Bridge using Third-Party Bridges What does → </Link>
                                </>
                            ) : (
                                <Button
                                    sx={{ textTransform: 'capitalize' }}
                                    onClick={openConnectModal}
                                    className={classes.connectBridge}
                                >
                                    Connect Wallet and Bridge
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3.5} md={2.5} sm={12} xs={12}>

                    <Box>
                        <Box sx={{
                            '@media(max-width : 900px)': {
                                display: 'none'
                            }
                        }}>
                            <Modal />
                            <Box
                                sx={{ position: 'relative' }}
                            >
                                <Typography
                                    sx={{

                                        backgroundColor: theme.palette.background.default,
                                        border: `1px solid ${theme.palette.secondary.light}`,
                                        color: theme.palette.primary.contrastText,
                                        padding: '0.8rem 1rem',
                                        borderRadius: '8px',
                                        rotate: '90deg',
                                        display: 'inline-block',
                                        position: 'absolute',
                                        top: '6rem',
                                        right: '-5rem'

                                    }}
                                >0 pending transaction</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'none',
                            '@media(max-width : 900px)': {
                                display: 'block'
                            }
                        }}>
                            <ModalItem />
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SelectDrop;
