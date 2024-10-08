import React, { useContext, useState } from 'react';
import { Box, Grid, Select, MenuItem, Button, Avatar, Typography, useTheme, SelectChangeEvent, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ColorModeContext } from '@/context';
import Image from 'next/image';
import transferArrow from '../../icons/asset/transferArrow.svg';
import usdtbsc from '../../icons/asset/usdtbsc.svg';
import usdtrx from '../../icons/asset/usdtrx.svg';
import rama from '../../icons/asset/lgsheild.svg';
import { initialLocationsData } from './bridgeTab';


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
        color: '#000 !important',
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


interface props {
    fromValue: string,
    setFromValue: any,
    toValue: string
    setToValue: any,
    onClick: any;
    selected1: number,
    setSelected1: any,
    selected2: number,
    setSelected2: any,
    open?: boolean,
}
const Transfer = ({ fromValue, setFromValue, toValue, setToValue, onClick, selected1, setSelected1, selected2, setSelected2, open }: props) => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [isRotated2, setIsRotated2] = useState(false);

    // const [selected1, setSelected1] = useState<number>(1); // Default to id 1
    // const [selected2, setSelected2] = useState<number>(2); // Default to id 2

    const handleSelect1Change = (event: SelectChangeEvent<number>) => {
        const value = event.target.value as number;
        setSelected1(value);

        // If the new selection matches selected2, reset selected2
        if (value === selected2) {
            const availableIds = initialLocationsData.filter(loc => loc.id !== value);
            setSelected2(availableIds[0].id); // Select the first available ID
        }
    };

    const handleSelect2Change = (event: SelectChangeEvent<number>) => {
        const value = event.target.value as number;
        setSelected2(value);

        // If the new selection matches selected1, reset selected1
        if (value === selected1) {
            const availableIds = initialLocationsData.filter(loc => loc.id !== value);
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
    const availableLocations1 = initialLocationsData.filter(location => location.id !== selected2);
    const availableLocations2 = initialLocationsData.filter(location => location.id !== selected1);



    return (
        <>


            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.contrastText,
                    border: `1px solid ${theme.palette.primary.light}`,
                    borderRadius: '4px',
                }}
            >
                <Box sx={{ padding: '10px' }}>
                    <Typography>You send</Typography>
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
                                '@media(max-width : 1200px)': {
                                    flexWrap: 'wrap',
                                    '@media(max-width : 900px)': {
                                        flexWrap: 'inherit',
                                        '@media(max-width : 600px)': {
                                            flexWrap: 'wrap',
                                        }
                                    }
                                }
                            }}
                        >
                            <Select sx={{
                                height: '52px',
                                backgroundColor: theme.palette.primary.main,
                                boxShadow: 'none',
                                borderRadius: '6px',
                                border: '1px solid transparent',
                                padding: '0px !important', // Zero padding
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
                                                <Image src={location.icon} alt={location.symbol} width={36} height={36} />
                                            </Box>
                                            <Box>
                                                <Typography>{location.symbol} ({location.Short})</Typography>
                                                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                                    <Typography color={'#999'} fontSize={11.1}>{location.description}</Typography>
                                                    <Typography sx={{ backgroundColor: '#B6A727', color: '#000', padding: '1px 3px', borderRadius: '4px' }} fontSize={12}>{location.Short}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>

                            <Box sx={{
                                 textAlign:'end',
                                width: '100%',
                                padding: '8px 10px',
                                '@media(max-width : 600px)':{
                                                textAlign: 'left',
                                                 
                                            },
                                
                            }}>
                                {/* <Typography fontSize={20} color={theme.palette.primary.contrastText}>
                                    0.5
                                </Typography> */}
                                <Box>
                                    <InputBase
                                        onChange={(e) => { setFromValue(e.target.value); setToValue(e.target.value) }}
                                        value={toValue || fromValue}
                                        sx={{
                                            flex: 1, color: theme.palette.primary.contrastText,
                                            width: '100%',
                                            fontSize: 20,
                                            
                                            '& input': {
                                                '-moz-appearance': 'textfield', // Firefox
                                                textAlign: 'end',
                                                '@media(max-width : 600px)':{
                                                textAlign: 'left',
                                                marginTop:'8px',
                                            },
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
                                {
                                   (Number(toValue)!==0 && Number(toValue)<25) && <Typography fontSize={12.5} color={'#3DC1F2'}>Min is 25 USDT</Typography>
                                }
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
                            <Typography color={'#999'}>You get</Typography>
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
                                '@media(max-width : 1200px)': {
                                    flexWrap: 'wrap',
                                    '@media(max-width : 900px)': {
                                        flexWrap: 'inherit',
                                        '@media(max-width : 600px)': {
                                            flexWrap: 'wrap',
                                        }
                                    }
                                }
                            }}
                        >
                           <Box>
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
                                                <Image src={location.icon} alt={location.symbol} width={36} height={36} />
                                            </Box>
                                            <Box>
                                                <Typography>{location.symbol} ({location.Short})</Typography>
                                                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                                    <Typography color={'#999'} fontSize={12}>{location.description}</Typography>
                                                    <Typography sx={{ backgroundColor: '#B6A727', color: '#000', padding: '1px 3px', borderRadius: '4px' }} fontSize={12}>{location.Short}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                           </Box>
                            <Box>
                                <InputBase
                                    onChange={(e) => { setFromValue(e.target.value); setToValue(e.target.value) }}
                                    value={fromValue || toValue}
                                    sx={{
                                        // flex: 1, 
                                        color: theme.palette.primary.contrastText,
                                        width: '100%',
                                        fontSize: 20,
                                        '& input': {
                                            '-moz-appearance': 'textfield', // Firefox
                                            textAlign: 'end',
                                            '@media(max-width : 600px)':{
                                                textAlign: 'left',
                                                marginTop:'8px',
                                            },
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
                        </Box>
                    </Box>

                    {!open && <Button
                        sx={{
                             textTransform: 'capitalize',
                             opacity: !(
                                ((toValue)==='' || Number(toValue)<25)
                            )
                                ? "1" : '0.3'
                             }}
                        disabled={((toValue)==='' || Number(toValue)<25)}
                        className={classes.connectBridge}
                        onClick={onClick}>
                        Exchange Now
                    </Button>
                    }
                </Box>
            </Box>
        </>
    );
};

export default Transfer;
