import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: 'inline-flex',
    border:theme.palette.secondary.light,
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: '0.5s',
}));

interface Props {
    ButtonText: any;
    url:any;
}

const ButtonText = ({ ButtonText,url }: Props) => {
    return (
        <>
            <StyledLink href={url}>
                <Box m={0} component={'p'}>{ButtonText}</Box>
            </StyledLink>
        </>
    )
}

export default ButtonText;