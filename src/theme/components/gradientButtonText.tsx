"use client"
import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#fff',
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    transition: '0.5s',
    '&:hover': {
        background: 'linear-gradient(0deg, #7B35D8,#932AC3)',
    },
}));

interface Props {
    Gradient__button: any;
    url:any;
}


const GradientButtonText = ({ Gradient__button,url }: Props) => {

    return (
        <>
            <StyledLink href={url}>
                <Box m={0} component={'p'}>{Gradient__button}</Box>
            </StyledLink>
        </>
    )
}

export default GradientButtonText;