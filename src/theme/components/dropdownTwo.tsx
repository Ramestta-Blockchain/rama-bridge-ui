import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, ListItemText, useTheme, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ColorModeContext } from '@/context';
import d4 from '../../icons/asset/d4.svg';
import sheild from '../../icons/asset/lgsheild.svg';
import Image from 'next/image';

const CustomFormControl = styled(FormControl)({
    border: 'none',
});

const CustomSelect = styled(Select)({
    borderRadius: '8px',
    border: 'none',
});

const CustomMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
    border: 'none',
});

const DropdownTwo = () => {
    const [selectedLocation, setSelectedLocation] = React.useState('MATIC');
    const handleChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedLocation(event.target.value);
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const locations = [
        {
            name: 'MATIC',
            icon: d4,
        },
        {
            name: 'ETH',
            icon: d4,
        },
        {
            name: 'DST',
            icon: sheild,
        },
    ];

    const menuProps = {
        PaperProps: {
            sx: {
                backgroundColor: theme.palette.secondary.main
            },
        },
    };

    return (
        <CustomFormControl>
            <CustomSelect
                sx={{
                    height: '52px',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: '6px',
                    border: 'none',
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
            >
                {locations.map((location, index) => (
                    <CustomMenuItem
                        sx={{
                            border: 'none',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                border: 'none',
                            },
                        }}
                        key={index}
                        value={location.name}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Image src={location.icon} alt={`${location.name} icon`} width={24} height={24} />
                            <ListItemText primary={location.name} />
                        </Box>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
        </CustomFormControl>
    );
};

export default DropdownTwo;
