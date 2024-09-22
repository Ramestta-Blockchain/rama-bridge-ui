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
import DropdownTwo from '@/theme/components/dropdownThree';
import Modal from '@/theme/components/modal';
import ModalItem from './modalItem';
import Link from 'next/link';

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
    thirdparty:{
        textAlign:'center',
        display:'block',
        marginTop:'10px',
        textDecoration:'none',
       color:'#3dc1f2'
    }
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
