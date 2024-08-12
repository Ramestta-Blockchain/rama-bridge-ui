import { Box, InputBase, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { ColorModeContext } from "@/context";



interface props {
    placeholder_Text: any;
}

const SearchCustom = ({ placeholder_Text }: props) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                backgroundColor: theme.palette.primary.main,
                border: `1px solid ${theme.palette.secondary.light}`,
                borderRadius: '6px',
                padding:'0px 10px'
            }}>

                <InputBase
                    sx={{
                        flex: 1, color: theme.palette.primary.contrastText,
                        width: '100%',

                    }}
                    placeholder={placeholder_Text}
                    type="search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Box sx={{
                    backgroundColor: theme.palette.secondary.light,
                    height: '50px',
                    width: '1px'
                }} />
                <SearchIcon sx={{ color: theme.palette.primary.contrastText, opacity: '30%' }} />
            </Box>
        </>
    )
}

export default SearchCustom;