
import Headingcmp from "@/theme/components/headingcmp";
import { Box, Grid, Typography, useTheme, } from "@mui/material"
import { makeStyles } from '@mui/styles';
import ConnectWallet from "../shared/connectWallet";
import Link from "next/link";
import Image from "next/image";
import readarrow from '../../icons/readarrow.svg'
import topbg from '../../icons/topbg.svg'
import topbgl from '../../icons/topbgl.svg'
import { useContext } from "react";
import { ColorModeContext } from "@/context";
import transferd from '../../icons/transferd.svg'
import transferl from '../../icons/transferl.svg'
import tmd from '../../icons/tmd.svg'
import tml from '../../icons/tml.svg'
import ButtonText from "@/theme/components/buttonText";
import r1 from '../../icons/r1.svg'
import r2 from '../../icons/r2.svg'
import r3 from '../../icons/r3.svg'
import r4 from '../../icons/r4.svg'
import r5 from '../../icons/r5.svg'
import r6 from '../../icons/r6.svg'

import rl1 from '../../icons/rl1.svg'
import rl2 from '../../icons/rl2.svg'
import rl3 from '../../icons/rl3.svg'
import rl4 from '../../icons/rl4.svg'
import rl5 from '../../icons/rl5.svg'
import rl6 from '../../icons/rl6.svg'
import SliderBox from "./sliderBox";
import g1 from '../../icons/g1.svg'
import gl1 from '../../icons/gl1.svg'
import g2 from '../../icons/g2.svg'
import gl2 from '../../icons/gl2.svg'





const useStyles = makeStyles({
    mainDiv: {
        margin: '30px 30px 20px 30px',

        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
             
        }
    },
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
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        '@media(max-width : 600px)': {
            position: 'inherit',
        }
    },
    chainBox: {
        textAlign: 'center'
    },
    desk:{
        width: '100%', height: 'auto',
        '@media(max-width : 600px)':{
            display:'none'
        }
    },
    mob:{
        width: '100%', height: 'auto',
        display:'none',
        '@media(max-width : 600px)':{
            display:'block'
        }
    },

});


const ImageGrid = [
    {
        id: 1,
        Imaged: r1,
        ImageL: rl1,
    },
    {
        id: 2,
        Imaged: r2,
        ImageL: rl2,
    },
    {
        id: 3,
        Imaged: r3,
        ImageL: rl3,
    },
    {
        id: 4,
        Imaged: r4,
        ImageL: rl4,
    },
    {
        id: 5,
        Imaged: r5,
        ImageL: rl5,
    },
    {
        id: 6,
        Imaged: r6,
        ImageL: rl6,
    },
]





const Dsboard = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();


    return (
        <>
            <Box className={classes.mainDiv}>

                <Box sx={{
                    position: 'relative',
                    '@media(max-width : 600px)': {
                        display: 'grid',
                        border: theme.palette.primary.light,
                        padding: '6px',
                        borderRadius: '8px'
                    }
                }}>
                    <Box sx={{
                        '@media(max-width : 600px)': {
                            display: 'none'
                        }
                    }}>
                        <Image src={theme.palette.mode === "dark" ? topbg : topbgl} alt={""} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                    <Box className={classes.topBox} >
                        <Box sx={{ width: 'max-content' }}><Headingcmp text={"Your RAMA Journey Starts Here"} /></Box>
                        <Typography>Connect your wallet to view and bridge your assets.</Typography>
                        <Box my={2}>
                            <ConnectWallet />
                        </Box>
                        <Box className={classes.readfaqBox}>
                            <Typography>Having problems with connecting your wallet?</Typography>
                            <Link className={classes.readfaq} href={""}>Read FAQs <Image src={readarrow} alt={""} /></Link>
                        </Box>
                    </Box>
                </Box>

                <Box mt={2}>
                    <Image src={theme.palette.mode === "dark" ? transferd : transferl} alt={""} className={classes.desk} />
                    <Image src={theme.palette.mode === "dark" ? tmd : tml} alt={""} className={classes.mob} />
                </Box>

                <Box mt={2} className={classes.chainBox}>
                    <Headingcmp text={"Bridge your assets to the RAMA Chains"} />
                    <Typography>Bridge your assets on RAMA PoS and RAMA zkEVM chains</Typography>
                    <Typography>with a seamless UX.</Typography>
                    <Box mt={2}><ButtonText ButtonText={"Bridge your Asset"} url={""} /></Box>
                </Box>

                <Box mt={4}>
                    <Grid container spacing={2}>
                        {ImageGrid.map((item, index) => (
                            <Grid key={index} item lg={6} md={6} sm={12} xs={12}>
                                <Image src={theme.palette.mode === "dark" ? item.Imaged : item.ImageL} alt={""} style={{ width: '100%', height: 'auto' }} />
                            </Grid>
                        ))}

                    </Grid>
                </Box>

                <Box mt={3}>
                    <Typography variant="h4">Developer Tools</Typography>
                    <SliderBox />
                </Box>

                <Box mt={3}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box
                                sx={{
                                    background: theme.palette.mode === "dark" ? "linear-gradient(90deg, #010101, #232323, #010101)" : "linear-gradient(90deg, #fff, #E1E3E8, #fff)",
                                    border: theme.palette.primary.light,
                                    borderRadius: '4px',
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        textAlign: 'right'
                                    }}
                                >
                                    <Image src={theme.palette.mode === "dark" ? g1 : gl1} alt={""} />
                                </Box>
                                <Box
                                    sx={{
                                        margin: '-3rem 1rem 1rem 1rem'
                                    }}>
                                    <Typography variant="h4">Get Support or Give <Typography component={'br'} /> Feedback</Typography>
                                    <Typography>Find answers to all your queries through <Typography component={'br'} /> our curated FAQs, or raise a ticket to get in touch.</Typography>
                                    <Link style={{
                                        color: theme.palette.primary.contrastText,
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        marginTop: "10px",
                                        display: 'inline-block'
                                    }} href={"#"}>GET SUPPORT</Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box
                                sx={{
                                    background: theme.palette.mode === "dark" ? "linear-gradient(90deg, #010101, #232323, #010101)" : "linear-gradient(90deg, #fff, #E1E3E8, #fff)",
                                    border: theme.palette.primary.light,
                                    borderRadius: '4px',
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        textAlign: 'right'
                                    }}
                                >
                                    <Image src={theme.palette.mode === "dark" ? g2 : gl2} alt={""} />
                                </Box>
                                <Box
                                    sx={{
                                        margin: '-3rem 1rem 1rem 1rem'
                                    }}>
                                    <Typography variant="h4">Developer <Typography component={'br'} /> Documentation</Typography>
                                    <Typography>Get access to relevant polygon documentation</Typography>
                                    <Link style={{
                                        color: theme.palette.primary.contrastText,
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        marginTop: "10px",
                                        display: 'inline-block'
                                    }} href={"#"}>VIEW DOCUMENTATION</Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default Dsboard