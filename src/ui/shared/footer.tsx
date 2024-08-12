"use client"
import { ColorModeContext } from "@/context";
import { Box, Typography, styled, useTheme } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    
    mainDiv: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        margin:'30px 30px 20px 30px',
        flexWrap:'wrap',
     '@media(max-width : 600px)':{
             justifyContent:'center'
        }
    },
    list:{
        margin:0,
        padding:0,
        listStyle:'none',
        display:'flex',
        alignItems:'center',
        gap:'1rem',
         flexWrap:'wrap',
        '@media(max-width : 600px)':{
             justifyContent:'center',
             marginTop:'15px'
        }
    },
     

});

const Footer = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box><Typography>© 2024 Bridge All rights reserved</Typography></Box>
               <Box component={'ul'} className={classes.list}>
                <Box component={'li'}>
                    <Link style={{textDecoration:'none', color:theme.palette.primary.contrastText}} href={""}>Cookie Policy</Link>
                </Box>
                <Box component={'li'}>
                    <Link style={{textDecoration:'none', color:theme.palette.primary.contrastText}}  href={""}>Terms of Use</Link>
                </Box>
                <Box component={'li'}>
                    <Link style={{textDecoration:'none', color:theme.palette.primary.contrastText}} href={""}>Privacy Policy</Link>
                </Box>
               </Box>
            </Box>
        </>
    )
}

export default Footer;