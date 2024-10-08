import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: 'inline-block',
    border:theme.palette.secondary.light,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '10px 16px',
    borderRadius: '6px',
    transition: '0.5s',
    width:'100%'
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