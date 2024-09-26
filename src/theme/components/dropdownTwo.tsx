import React, { useContext, useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, ListItemText, useTheme, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ColorModeContext } from '@/context';
import tokenicon1 from '../../icons/asset/tokenicon1.svg';
import tokenicon2 from '../../icons/asset/tokenicon2.svg';
import tokenicon3 from '../../icons/asset/tokenicon3.svg';
import tokenicon4 from '../../icons/asset/tokenicon4.svg';
import tokenicon5 from '../../icons/asset/tokenicon5.svg';
import tokenicon6 from '../../icons/asset/tokenicon6.svg';
import Image from 'next/image';
import SearchCustom from './searchCustom';
import cross from '../../icons/asset/cross.svg';
import ModalTwo from './modalTwo';

const CustomFormControl = styled(FormControl)({
    border: 'none',
});

const CustomSelect = styled(Select)({
    borderRadius: '8px',
    border: 'none',
});

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    border: '1px solid transparent',
    '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: '6px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.light}`,
        }
    },
}));

const DropdownTwo = () => {
    const [selectedLocation, setSelectedLocation] = useState('USDC');
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedLocation(event.target.value);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const locations = [
        { name: 'USDC', icon: tokenicon1, description: 'USD Coin' },
        { name: 'MATIC', icon: tokenicon2, description: 'Matic Token' },
        { name: 'USDT', icon: tokenicon3, description: 'Tether USD' },
        { name: 'DAI', icon: tokenicon4, description: 'Dai' },
        { name: 'WBTC', icon: tokenicon5, description: 'Wrapped BTC' },
        { name: 'CRV', icon: tokenicon6, description: 'CRV' },
    ];

    // useEffect to trigger page refresh 3 seconds after modal closes
    useEffect(() => {
        if (!isModalOpen) {
            const timer = setTimeout(() => {
                window.location.reload(); // Refresh the page after 3 seconds
            }, 1000);

            return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
        }
    }, [isModalOpen]); // Dependency on isModalOpen

    const menuProps = {
        PaperProps: {
            sx: {
                minWidth: '400px !important',
                backgroundColor: theme.palette.mode === "dark" ? '#0C0C0D !important' : "#F7F7F8",
                top: '50% !important',
                left: '50% !important',
                transform: 'translate(-50%, -50%) !important',
                borderRadius: '12px',
                boxShadow: '0px 0px 6px -1px #3DC1F2',
                maxHeight: 'inherit',
                padding: '0.5rem 1rem',
                border: `1px solid ${theme.palette.primary.light}`,
                backgroundImage: 'none'
            },
        },
    };

    return (
        <Box>
            {isModalOpen && (
                <Box>
                    <CustomFormControl>
                        <CustomSelect
                            sx={{
                                height: '52px',
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                borderRadius: '6px',
                                border: '1px solid transparent',
                                padding: '0px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'transparent',
                                    boxShadow: 'inherit',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'transparent',
                                    boxShadow: 'inherit',
                                },
                            }}
                            MenuProps={menuProps}
                            labelId="map-select-label"
                            value={selectedLocation}
                            onChange={handleChange}
                            inputProps={{
                                sx: {
                                    padding: '5px',
                                },
                            }}
                            renderValue={(selected) => {
                                const selectedItem = locations.find(location => location.name === selected);
                                if (!selectedItem) return null;
                                return (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Image src={selectedItem.icon} alt={`${selectedItem.name} icon`} width={24} height={24} />
                                        <ListItemText primary={selectedItem.name} />
                                    </Box>
                                );
                            }}
                        >
                            <Box mb={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box><Typography variant='h6'>Select Token on Ethereum</Typography></Box>
                                <Box
                                    onClick={handleCloseModal}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        border: `1px solid ${theme.palette.secondary.light}`,
                                        padding: '6px',
                                        borderRadius: '30px',
                                        width: '40px',
                                        height: '40px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                    }}>
                                    <Image src={cross} alt="close" />
                                </Box>
                            </Box>
                            <Box mb={3}>
                                <SearchCustom placeholder_Text={"Search by token name or address"} />
                            </Box>

                            {locations.map((location, index) => (
                                <CustomMenuItem
                                    sx={{
                                        display: 'inherit',
                                        border: '1px solid transparent',
                                        padding: '8px',
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.main,
                                            border: `1px solid ${theme.palette.primary.light}`,
                                            borderRadius: '6px'
                                        },
                                    }}
                                    key={index}
                                    value={location.name}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <Box>
                                                <Image src={location.icon} alt={`${location.name} icon`} width={24} height={24} />
                                            </Box>
                                            <Box>
                                                <ListItemText primary={location.name} />
                                                <Typography color={'#999'}>{location.description}</Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                padding: '10px',
                                                backgroundColor: theme.palette.background.default,
                                                borderRadius: '6px',
                                                border: `1px solid ${theme.palette.primary.light}`
                                            }}
                                        >
                                            <Typography>0</Typography>
                                        </Box>
                                    </Box>
                                </CustomMenuItem>
                            ))}
                            <Box sx={{ position: 'absolute', bottom: '0.7rem', right: '0rem' }}>
                                <ModalTwo />
                            </Box>
                        </CustomSelect>
                    </CustomFormControl>
                </Box>
            )}
        </Box>
    );
};

export default DropdownTwo;
