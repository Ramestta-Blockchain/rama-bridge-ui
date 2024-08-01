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
    padding: '10px 16px',
    borderRadius: '4px',
    transition: '0.5s',
    '&:hover': {
        backgroundColor: '#3DC1F2',
    },
}));

interface Props {
    icon: any;
    text: any;
}

const IconButtonBridge = ({ icon, text }: Props) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledLink href={"#"} style={{color:theme.palette.primary.contrastText}}>
                <Image src={icon} alt="icon__button" />
                <Box m={0} component={'p'}>{text}</Box>
            </StyledLink>
        </>
    )
}

export default IconButtonBridge;