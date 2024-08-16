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

interface DropdownTwoProps {
    value: string;
    onChange: (value: string) => void;
}

const Selector = ({ value, onChange }: DropdownTwoProps) => {


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
        {
            name: 'RAMA',
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
                    backgroundColor:theme.palette.primary.main,
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
                value={value}
                onChange={(e) => onChange(e.target.value as string)}
                displayEmpty
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

export default Selector;
