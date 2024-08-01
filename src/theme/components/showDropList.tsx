
 
import { ColorModeContext } from "@/context";
import { Box, MenuItem, TextField, Typography, styled, useTheme } from "@mui/material";
import { useContext, useState } from "react";


const StyledBox = styled('form')(({ theme }) => ({

}));

const StyledInput = styled('input')(({ theme }) => ({

}));

const currencies = [
    {
        value: 'USD',
        label: 'All networks',
    },
    {
        value: 'EUR',
        label: 'Ethereum',
    },
    {
        value: 'BTC',
        label: 'Polygon POS',
    },
    {
        value: 'JPY',
        label: 'Polygon zkEVM',
    },
     
];

const Opations = [
    {
        value: 'EUR',
        label: 'Opations',
    },
    {
        value: 'BTC',
        label: 'Opations2',
    },
    {
        value: 'JPY',
        label: 'Opations3',
    },
    {
        value: 'JPG',
        label: 'Opations4',
    },
];


const ShowDropList = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                '@media(max-width : 600px)': {
                    flexWrap: 'wrap',
                    width:'100%'
                }
            }}>
                 

                <StyledBox
                    sx={{
                        '@media(max-width : 600px)': {
                            minWidth: '100%'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
                        sx={{
                            '@media(max-width : 600px)': {
                                width: '100%'
                            },
                            color: theme.palette.primary.contrastText,
                            '& .MuiOutlinedInput-root': {
                                borderColor:'inherit',
                                border: theme.palette.info.contrastText,
                                 
                                backgroundColor: theme.palette.common.white,
                                    color: theme.palette.primary.contrastText,
                                    borderRadius: '6px',
                            },

                            '&:hover .MuiOutlinedInput-root': {
                                borderColor: theme.palette.common.white,
                            },
                            '&.Mui-focused .MuiOutlinedInput-root': {
                                borderColor: 'inherit',
                            },
                            '& .MuiSvgIcon-root': { color: theme.palette.primary.contrastText },

                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </StyledBox>

                 


            </Box>
        </>
    )
}

export default ShowDropList;