import { Box, InputBase, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { ColorModeContext } from "@/context";



interface props {
    placeholder_Text: any;
    textType: any;
    onChange:any;
    value:any;
}

const TextFieldCustome = ({ placeholder_Text, textType,onChange,value }: props) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                // backgroundColor: theme.palette.info.main,
                border: theme.palette.info.contrastText,
                borderRadius: '6px',
                padding: '6px'
            }}>

                <InputBase
                onChange={onChange}
                value={value}
                    sx={{
                        flex: 1,
                        color: theme.palette.primary.contrastText,
                        width: '100%',
                        padding: '0.3rem 0.5rem',
                        ':-moz-placeholder': {
                            color: theme.palette.primary.contrastText,
                        }
                    }}
                    fullWidth
                    placeholder={placeholder_Text}
                    type={textType}

                />
            </Box>
        </>
    )
}

export default TextFieldCustome;