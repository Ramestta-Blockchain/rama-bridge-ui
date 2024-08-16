import { Box, Typography, useTheme } from "@mui/material"
import ConnectWallet from "../shared/connectWallet"
import Link from "next/link"
import Headingcmp from "@/theme/components/headingcmp"
import { makeStyles } from '@mui/styles';
import { useContext } from "react";
import { ColorModeContext } from "@/context";
import Image from "next/image";
import readarrow from '../../icons/readarrow.svg'
import CurrentList from "./currentList";
import Buttonwithcolor from "@/theme/components/buttonwithcolor";



const useStyles = makeStyles({

    readfaq: {
        color: '#3DC1F2',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
    },
    readfaqBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    topBox: {
        textAlign: 'center',

    },


    br: {
        '@media(max-width : 600px)': {
            display: 'none'
        }
    }

});

const Empty = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                backgroundColor: theme.palette.common.white, 
                border: `1px solid ${theme.palette.secondary.light}`,
                padding:'1rem',
                borderRadius:'4px',
                marginTop:'1rem'
            }}>
                <Box sx={{
                    textAlign:'center',
                    padding:'2rem 0rem'
                }} >
                    <Box><Headingcmp text={"Your Wallet is empty!"} /></Box>
                    <Typography>Deposit tokens to your wallet account to bridge tokens.</Typography>
                    <Box my={2}>
                        <Buttonwithcolor text={"Add Funds"} />
                    </Box>
                    <Box className={classes.readfaqBox}>
                        <Typography>Having any issues?</Typography>
                        <Link className={classes.readfaq} href={""}>Read FAQs <Image src={readarrow} alt={""} /></Link>
                    </Box>
                    
                </Box>
                <CurrentList />
            </Box>
        </>
    )
}

export default Empty