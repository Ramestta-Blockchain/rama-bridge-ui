import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, ListItemText, useTheme, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ColorModeContext } from '@/context';
import usdtbsc from '../../icons/asset/usdtbsc.svg';
import usdtrx from '../../icons/asset/usdtrx.svg';
import rama from '../../icons/asset/lgsheild.svg';
import Image from 'next/image';
import SearchCustom from './searchCustom';
import cross from '../../icons/asset/cross.svg';
import HoverTool from './hoverTool';
import PropTypes from 'prop-types';

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

interface Location {
    id: number;
    name: string;
    description: string;
    Short: string;
    icon: string;
}

interface DropdownThreeProps {
    locations: Location[];
    defaultLocationId:any;
}

const DropdownThree: React.FC<DropdownThreeProps> = ({ locations,defaultLocationId }) => {
   const [selectedLocation, setSelectedLocation] = React.useState<any>(defaultLocationId);
    const handleChange = (event: { target: { value: any; }; }) => {
        setSelectedLocation(event.target.value as any);
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

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
                backgroundImage: 'none',
                '@media(max-width : 600px)':{
                    minWidth: '95% !important',
                    padding:'0px 10px',
                }
            },
        },
    };

    return (
        <Box>
            <CustomFormControl>
                <CustomSelect
                    sx={{
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
                    }}
                    MenuProps={menuProps}
                    labelId="map-select-label"
                    value={selectedLocation}
                    onChange={handleChange}
                    inputProps={{
                        sx: {
                            padding: '5px', // Zero padding on input
                        },
                    }}
                    renderValue={(selected) => {
                        const selectedItem = locations.find(location => location.id === Number(selected));
                        if (!selectedItem) return null;
                        return (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Image src={selectedItem.icon} alt={`${selectedItem.name} icon`} width={36} height={36} />
                                <Box>
                                    <Typography>{selectedItem.name}</Typography>
                                    <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <Typography color={'#999'} fontSize={12}>{selectedItem.description}</Typography>
                                        <Typography sx={{ backgroundColor: '#B6A727', color: '#000', padding: '1px 3px', borderRadius: '4px' }} fontSize={12}>{selectedItem.Short}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    }}
                >
                    <Box mb={3} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box><Typography variant='h6'>Select Token on Ethereum</Typography></Box>
                        <Box sx={{
                            backgroundColor: theme.palette.primary.main,
                            border: `1px solid ${theme.palette.secondary.light}`,
                            padding: '6px',
                            borderRadius: '30px',
                            width: '40px',
                            height: '40px',
                            textAlign: 'center'
                        }}> <HoverTool ImageItem={cross} Title={"You want to stop. click outside the box"} /></Box>
                    </Box>
                    <Box mb={3}>
                        <SearchCustom placeholder_Text={"Search Currency"} />
                    </Box>

                    {locations.map((location) => (
                        <CustomMenuItem
                            key={location.id}
                            value={location.id}
                            sx={{
                                display: 'inherit',
                                border: '1px solid transparent',
                                padding: '8px',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                    border: `1px solid ${theme.palette.primary.light}`,
                                    borderRadius: '6px',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Box>
                                        <Image src={location.icon} alt={`${location.name} icon`} width={36} height={36} />
                                    </Box>
                                    <Box>
                                        <Typography>{location.name}</Typography>
                                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                                            <Typography color={'#999'} fontSize={12}>{location.description}</Typography>
                                            <Typography sx={{ backgroundColor: '#B6A727', color: '#000', padding: '1px 3px', borderRadius: '4px' }} fontSize={12}>{location.Short}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </CustomMenuItem>
                    ))}
                </CustomSelect>
            </CustomFormControl>
        </Box>
    );
};

 

export default DropdownThree;
