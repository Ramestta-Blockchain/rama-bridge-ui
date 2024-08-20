import React, { useContext, useState } from 'react';
import { Box, Grid, Typography, useTheme, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { ColorModeContext } from '@/context';

import tipd from '../../icons/asset/tipd.svg';
import tipl from '../../icons/asset/tipl.svg';
import transferArrow from '../../icons/asset/transferArrow.svg';
import infod from '../../icons/asset/infod.svg';
import infol from '../../icons/asset/infol.svg';

import HoverTool from '@/theme/components/hoverTool';
import PercentageBtn from '@/theme/components/percentageBtn';
import Selector from '@/theme/components/selector';
import HoverToolTwo from '@/theme/components/hoverToolTwo';
import ConnectWallet from '../shared/connectWallet';
import ButtonText from '@/theme/components/buttonText';
import DropdownTwo from '@/theme/components/dropdownTwo';
import Modal from '@/theme/components/modal';
import ModalItem from './modalItem';

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
    rotateArrow: {
        transition: 'transform 0.5s ease',
    },
    rotated: {
        transform: 'rotate(180deg)',
    },
});

const BridgeCard = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const { address } = useAccount();
    const { openAccountModal } = useAccountModal();
    const { openConnectModal } = useConnectModal();

    // State for the dropdowns
    const [dropdownOneValue, setDropdownOneValue] = useState<string>('MATIC');
    const [dropdownTwoValue, setDropdownTwoValue] = useState<string>('RAMA');

    // State for arrow rotation
    const [isRotated, setIsRotated] = useState(false);

    // Function to handle swapping of dropdown values and arrow rotation
    const handleSwap = () => {
        const temp = dropdownOneValue;
        setDropdownOneValue(dropdownTwoValue);
        setDropdownTwoValue(temp);
        setIsRotated(!isRotated);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item lg={2.5} md={2.5} sm={12} xs={12}></Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>
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
                                    <Selector value={dropdownOneValue} onChange={setDropdownOneValue} />
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
                                        <Typography variant="h6">0</Typography>
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
                                    onClick={handleSwap}
                                    className={`${classes.rotateArrow} ${isRotated ? classes.rotated : ''}`}
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
                                    <Selector value={dropdownTwoValue} onChange={setDropdownTwoValue} />
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
                                <Box mt={1.5}>
                                    <ButtonText
                                        ButtonText={'Enter Amount'} url={'#'} />
                                </Box>
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
                <Grid item lg={2.5} md={2.5} sm={12} xs={12}>

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

                </Grid>
            </Grid>
        </Box>
    );
};

export default BridgeCard;
