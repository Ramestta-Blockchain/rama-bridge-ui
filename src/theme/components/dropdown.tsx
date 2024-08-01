import React, { useContext } from 'react';
import { Select, MenuItem, InputLabel, FormControl, ListItemIcon, ListItemText, useTheme, Box } from '@mui/material';
import { Place } from '@mui/icons-material';
import { styled } from '@mui/system';
import { ColorModeContext } from '@/context';
import d1 from '../../icons/asset/d1.svg'
import d2 from '../../icons/asset/d2.svg'
import d3 from '../../icons/asset/d3.svg'
import d4 from '../../icons/asset/d4.svg'
import Image from 'next/image';
import sheild from '../../icons/asset/lgsheild.svg'


const CustomFormControl = styled(FormControl)({
    margin: '20px 0',
});

const CustomSelect = styled(Select)({
    minWidth: '200px',
    borderRadius: '8px',
});

const CustomMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
});

const CustomListItemIcon = styled(ListItemIcon)({
    minWidth: '40px',
});

const locations = [
    {
        name: 'All networks',
        icon: d1,
    },
    {
        name: 'Ramestta',
        icon: sheild,
    },
    {
        name: 'Ramestta POS',
        icon: sheild,
    },
    {
        name: 'Ramestta zkEVM',
        icon: sheild,
    },
];

const Dropdown = () => {
    const [selectedLocation, setSelectedLocation] = React.useState('Ramestta');
    const handleChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedLocation(event.target.value);
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <CustomFormControl fullWidth>

            <CustomSelect
                sx={{
                    backgroundColor: theme.palette.secondary.contrastText,
                    border: theme.palette.primary.light,
                }}
                labelId="map-select-label"
                value={selectedLocation}
                onChange={handleChange}
            >
                {locations.map((location, index) => (
                    <CustomMenuItem sx={{
                        
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.contrastText,
                        },
                    }} key={index} value={location.name}>
                       <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
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
