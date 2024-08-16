import { ColorModeContext } from "@/context";
import { Box, styled, useTheme, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: '#3DC1F2',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    padding: '8px 24px',
    borderRadius: '4px',
    transition: '0.5s',
    '&:hover': {
        backgroundColor: '#3DC1F2',
    },
}));

interface Props {
    text: any;
}

const Buttonwithcolor = ({ text }: Props) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledLink href={"#"} style={{ color: theme.palette.primary.contrastText }}>
                <Box m={0} component={'p'}>{text}</Box>
            </StyledLink>
        </>
    )
}

export default Buttonwithcolor;