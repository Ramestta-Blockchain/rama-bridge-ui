import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, ListItemText, useTheme, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ColorModeContext } from '@/context';
import d1 from '../../icons/asset/d1.svg';
import dl1 from '../../icons/asset/dl1.svg';
import d4 from '../../icons/asset/d4.svg';
import sheild from '../../icons/asset/lgsheild.svg';
import Image from 'next/image';

const CustomFormControl = styled(FormControl)({
     
});

const CustomSelect = styled(Select)({
    minWidth: '200px',
    borderRadius: '8px',

});

const CustomMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
});

const Dropdown = () => {
    const [selectedLocation, setSelectedLocation] = React.useState('Polygon');
    const handleChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedLocation(event.target.value);
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const locations = [
        {
            name: 'All networks',
            icon: theme.palette.mode === "dark" ? d1 : dl1,
        },
        {
            name: 'Polygon',
            icon: d4,
        },
        {
            name: 'Ramestta POS',
            icon: sheild,
        },
         
    ];

    return (
        <CustomFormControl fullWidth>
            <CustomSelect
                sx={{
                    height:'52px',
                    backgroundColor: theme.palette.primary.main,
                    border:`1px solid ${theme.palette.secondary.light}`,
                    borderRadius:'6px',
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.contrastText,
                        border: `1px solid ${theme.palette.secondary.light}`,
                    },
                }}
                labelId="map-select-label"
                value={selectedLocation}
                onChange={handleChange}
            >
                {locations.map((location, index) => (
                    <CustomMenuItem
                        sx={{
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.contrastText,
                                border: 'none', // Remove the border on hover
                            },
                        }}
                        key={index}
                        value={location.name}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Image src={location.icon} alt={''} />
                            <ListItemText primary={location.name} />
                        </Box>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
        </CustomFormControl>
    );
};

export default Dropdown;
