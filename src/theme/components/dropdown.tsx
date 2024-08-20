import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, ListItemText, useTheme, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ColorModeContext } from '@/context';
import d1 from '../../icons/asset/d1.svg';
import dl1 from '../../icons/asset/dl1.svg';
import d4 from '../../icons/asset/d4.svg';
import sheild from '../../icons/asset/lgsheild.svg';
import Image from 'next/image';

// Define the prop interface (if using TypeScript)
interface DropdownProps {
    locations: {
        name: string;
        icon: string;
    }[];
    currentValue:string;
}

const CustomFormControl = styled(FormControl)({});

const CustomSelect = styled(Select)({
    borderRadius: '8px',
});

const CustomMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
});

const Dropdown: React.FC<DropdownProps> = ({ locations, currentValue }) => {
    const [selectedLocation, setSelectedLocation] = React.useState(currentValue);
    const handleChange = (event: { target: { value: React.SetStateAction<any>; }; }) => {
        setSelectedLocation(event.target.value);
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const menuProps = {
        PaperProps: {
            sx: {
                backgroundColor: theme.palette.secondary.main,
            },
        },
    };

    return (
        <CustomFormControl fullWidth>
            <CustomSelect
                sx={{
                    height: '52px',
                    backgroundColor: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.secondary.light}`,
                    boxShadow: 'none',
                    borderRadius: '6px',

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
            >
                {locations.map((location, index) => (
                    <CustomMenuItem
                        sx={{
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.contrastText,
                                border: 'none',
                            },
                        }}
                        key={index}
                        value={location.name}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Image src={location.icon} alt={location.name} />
                            <ListItemText primary={location.name} />
                        </Box>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
        </CustomFormControl>
    );
};

export default Dropdown;
