
import { ColorModeContext } from "@/context";
import { Box, styled, useTheme, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'inline-flex',
    border:`1px solid ${theme.palette.primary.light}`,
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    transition: '0.5s',
}));


interface Props {
    Text__button: any;
    onClick: any;
}


const Iconbuttoncustom = ({ Text__button, onClick }: Props) => {

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();


    return (
        <>
            <StyledLink href={"#"} onClick={onClick}>
                <Box m={0} component={'p'}>{Text__button}</Box>
            </StyledLink>
        </>
    )
}

export default Iconbuttoncustom;