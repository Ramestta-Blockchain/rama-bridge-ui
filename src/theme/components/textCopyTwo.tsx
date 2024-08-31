import { Box, Snackbar, styled, useTheme } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";
import Image from "next/image";
import copyboxd from '../../icons/asset/copyboxd.svg'
import copyboxl from '../../icons/asset/copyboxl.svg'

interface props {
    text: any;
    address: any;
}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
}));

const TextCopyTwo = ({ text, address }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCopy = () => {
        copy(text);
        setOpenSnackbar(true);
        // alert('Text copied to clipboard!');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledBox>
                <StyledLink href={'#'}>
                    {address}
                </StyledLink>
                <Box onClick={handleCopy}>
                    <Image src={theme.palette.mode === "dark" ? copyboxd : copyboxl} alt={""} />
                </Box>

                <Snackbar

                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message="Address copied"

                    sx={{
                        width: '100px !important',
                        height: '60px !important',
                        '& .MuiSnackbarContent-root': {
                            width: '100%',
                            height: '100%',
                            boxShadow: 'none !important',
                            color:`${theme.palette.primary.contrastText} !important`,
                            padding: '0px',
                            display: 'flex',
                            justifyContent: 'center',
                        },
                    }}

                />
            </StyledBox>
        </>
    );
};

export default TextCopyTwo;