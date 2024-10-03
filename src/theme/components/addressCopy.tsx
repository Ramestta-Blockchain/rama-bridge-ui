import { Box, IconButton, Snackbar, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";
import React, { useState } from "react";

interface props {
    text: any;
    address: any;
    
}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'space-between',
     backgroundColor:'#3DC1F2',
    padding: '0.5rem 1rem',
    color: '#000 !important',
    borderRadius: '4px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    fontWeight: 300
}));

const AddressCopy = ({ text, address,  }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCopy = () => {
        copy(text);
        setOpenSnackbar(true);
        // alert('Text copied to clipboard!');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <StyledBox>
                <StyledLink href={'#'} sx={{color:'#000 !important'}}>
                    {address}
                </StyledLink>

                <Box onClick={handleCopy}>
                    <ContentCopyIcon sx={{ color: '#000', width: 18 }} />
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

                />
            </StyledBox>
        </>
    );
};

export default AddressCopy;