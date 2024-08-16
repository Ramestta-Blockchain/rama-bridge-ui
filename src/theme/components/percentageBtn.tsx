import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    transition: '0.5s',
    display:'inline-block'
}));

interface Props {
    Text: string;
}

const PercentageBtn = ({ Text }: Props) => {
    return (
        <>
            <StyledLink href={"#"}>
                {Text}
            </StyledLink>
        </>
    )
}

export default PercentageBtn;