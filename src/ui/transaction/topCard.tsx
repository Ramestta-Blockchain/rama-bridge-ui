import React, { useContext, useState } from 'react';
import { Box, Grid, Typography, useTheme, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import { ColorModeContext } from '@/context';
import TransactionTab from './transactionTab';



const useStyles = makeStyles({

});

const BridgeCard = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();



    return (
        <Box>
            <Box sx={{
                backgroundColor: theme.palette.secondary.contrastText,
                border: `1px solid ${theme.palette.primary.light}`,
                padding: '10px',
                borderRadius: '4px',
                marginTop: '1.2rem'
            }}>
                <TransactionTab />
            </Box>
        </Box>
    );
};

export default BridgeCard;
