"use client"
import { styled } from "@mui/material";

 


const Heading = styled('h2')(({ theme }) => ({
    color:theme.palette.primary.contrastText,
    fontSize:'36px',
    fontWeight:500,
    '@media(max-width : 900px)':{
      textAlign:'center',
      '@media(max-width : 600px)':{
        fontSize:'20px',
      }
    }
}));

interface props {
    text: any;
}
const Headingcmp = ({ text }: props) => {
    return (
        <>
            <Heading>{text}</Heading>
        </>
    )
}

export default Headingcmp;