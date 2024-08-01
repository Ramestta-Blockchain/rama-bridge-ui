 

import { ColorModeContext } from "@/context";
import { styled, useTheme } from "@mui/material";
import { useContext } from "react";


const Heading = styled('h3')(({ theme }) => ({
    color:theme.palette.primary.contrastText,
    fontSize:'40px',
    fontWeight:500,
    '@media(max-width : 900px)':{
      textAlign:'center',
      '@media(max-width : 600px)':{
        fontSize:'24px',
      }
    }
}));

interface props {
    text: any;
}
const SubHeading = ({ text }: props) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Heading>{text}</Heading>
        </>
    )
}

export default SubHeading;