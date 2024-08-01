"use client"
import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.contrastText,
    display: 'block',
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    transition: '0.5s',
}));

interface Props {
    Text: any;
}

const TextBtn = ({ Text }: Props) => {
    return (
        <>
            <StyledLink href={"#"}>
                <Box m={0} component={'p'}>{Text}</Box>
            </StyledLink>
        </>
    )
}

export default TextBtn;