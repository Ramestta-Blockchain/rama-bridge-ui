'use client'
import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, styled, useTheme } from '@mui/material';
import Image from 'next/image';
import tokenicon1 from '../../icons/asset/tokenicon1.svg'
import tokenicon2 from '../../icons/asset/tokenicon2.svg'
import tokenicon3 from '../../icons/asset/tokenicon3.svg'
import tokenicon4 from '../../icons/asset/tokenicon4.svg'
import tokenicon5 from '../../icons/asset/tokenicon5.svg'
import tokenicon6 from '../../icons/asset/tokenicon6.svg'
import tokenicon7 from '../../icons/asset/tokenicon7.svg'
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import TextTruncate from '@/theme/components/textTruncate';
import { ColorModeContext } from '@/context';
import ArrowDropList from '@/theme/components/arrowDropList';


const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: '10px'
}));

const FlexBox_One = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '10px'
}));


const Link_One = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.contrastText, textDecoration: 'none'
}));







export default function ListTable({ profileName, validatorSetData }: any) {
    const [isToggled, setIsToggled] = useState(false);
    const [isArrow, setIsArrow] = useState(false);
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    const handleToggleArrow = () => {
        setIsArrow(!isArrow);
    };

    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();


    const TableList = [
        {
            id: 1,
            TokenIcon: tokenicon1,
            NameLeft: 'USDC',
            NameRight: 'USD Coin',
            balance: '0.00',
            price: '0.99961',
        },
        {
            id: 2,
            TokenIcon: tokenicon2,
            NameLeft: 'MATIC',
            NameRight: 'Matic To...',
            balance: '0.00',
            price: '0.99961',
        },
        {
            id: 3,
            TokenIcon: tokenicon3,
            NameLeft: 'USDT',
            NameRight: 'Tether U...',
            balance: '0.00',
            price: '0.99961',
        },
        {
            id: 4,
            TokenIcon: tokenicon4,
            NameLeft: 'DAI',
            NameRight: 'Dai',
            balance: '0.00',
            price: '0.99961',
        },
        {
            id: 5,
            TokenIcon: tokenicon5,
            NameLeft: 'WBTC',
            NameRight: 'Wrapped ...',
            balance: '0.00',
            price: '0.99961',
        },
        {
            id: 6,
            TokenIcon: tokenicon6,
            NameLeft: 'AAVE',
            NameRight: 'Aave',
            balance: '0.00',
            price: '0.99961',
        },
        {
            id: 7,
            TokenIcon: tokenicon7,
            NameLeft: 'RNDR',
            NameRight: 'Render T...',
            balance: '0.00',
            price: '0.99961',
        },

    ]




    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };


    // console.log({validatorSetData});



    return (

        <>
            <Box sx={{
                backgroundColor: theme.palette.primary.main, border: `1px solid ${theme.palette.secondary.light}`,
                borderRadius: '4px',
                marginTop: '1rem',
                '@media(max-width : 1200px)': {
                    overflow: 'auto'
                }
            }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', backgroundColor: theme.palette.common.black,
                    border: `1px solid${theme.palette.secondary.light}`,
                    padding: '10px',
                    justifyContent: 'space-between'

                }}>
                    <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 270 }}>Token</Box>


                    <Box sx={{ minWidth: 130, }}>
                        <Box sx={{ color: theme.palette.primary.contrastText, }} >Balance</Box>
                    </Box>
                    <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 95, }} >Price</Box>
                    <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 100, }} >Action</Box>
                </Box>

                {TableList?.map((item, index) => (
                    <Box key={index}>
                        <Accordion
                            sx={{
                                margin: '0rem 0rem 0rem 0rem',
                                padding: '10px',
                                border: 'none',
                                borderTop: `1px solid${theme.palette.secondary.light}`,
                                outline: 'none',
                                boxShadow: 'inherit',
                                borderRadius: '0px !important',
                                backgroundColor: theme.palette.secondary.contrastText,
                                width: '100%',
                                '&.Mui-expanded': {
                                    margin: 0,
                                    backgroundColor: theme.palette.secondary.contrastText
                                },
                                '.css-wxucz8-MuiPaper-root-MuiAccordion-root::before': {
                                    backgroundColor: theme.palette.secondary.contrastText
                                }

                            }}
                            expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 270 }}>
                                    <FlexBox><FlexBox_One><Image src={item.TokenIcon} alt='' /><Link_One href={''}><Typography>{item.NameLeft}. <Typography component={'span'}>{item.NameRight}</Typography></Typography> <Typography color={'#999'}>All Chain</Typography></Link_One></FlexBox_One></FlexBox>
                                </Box>




                                <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 130 }} >
                                    <Typography>${item.balance}</Typography>
                                </Box>

                                <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 95 }} >
                                    <Typography>${item.price}</Typography>
                                </Box>

                                <Box sx={{ minWidth: 100, }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        sx={{
                                            width: '45px !important',
                                            minHeight: '45px !important',
                                            margin: '0px !important',
                                            backgroundColor: 'transparent',
                                            padding: '0px 10px 0px 10px',
                                            borderRadius: '5rem',
                                            cursor: 'pointer',
                                            border:`1px solid${theme.palette.secondary.light}`,
                                            '.MuiAccordionSummary-content': {
                                                display: 'none'
                                            },
                                            '.css-1vnj7dd-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded': {
                                                minHeight: 'unset', // Remove minHeight when expanded
                                            }
                                        }}
                                    >





                                    </AccordionSummary>
                                </Box>

                            </Box>


                            <AccordionDetails
                            sx={{
                                padding:'8px 0px 16px'
                            }}
                            >
                                <ArrowDropList />
                            </AccordionDetails>
                        </Accordion>

                    </Box>
                ))}
            </Box>
        </>

    );
}