"use client"
import { Box, Grid, Typography, useTheme } from "@mui/material";
 
import Header from "../shared/Header";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";
import dashiconl from '../../icons/dashiconl.svg'
import dashicond from '../../icons/dashicond.svg'
import Footer from "../shared/footer";
import arrowd from '../../icons/arrowd.svg'
import arrowl from '../../icons/arrowl.svg'
import Link from "next/link";
import Image from "next/image";
import Sidebardb from "../dashboard/sidebardb";
 
import Sidebarmob from "../dashboard/sidebarmob";
import ComingSoon from "../asset/comingSoon";
 
 

const Contact = () => {

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [active, setActive] = useState(false);


    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    minHeight: '100vh',
                    position: 'relative'
                }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: theme.palette.mode === "dark" ? "#1D1D20" : "#3DC1F2",
                        position: 'fixed',
                        top: '5rem',
                        zIndex: 1
                    }}
                />

                <Grid container spacing={0}>
                    <Grid item lg={active === false ? 2.2 : 0.8} md={active === false ? 3 : 1.1} sm={12} xs={12} sx={{
                        transition: 'all 0.3s ease',
                        borderRight: theme.palette.primary.light,
                        position: 'relative',
                    }}>
                        <Box
                            sx={{
                                position: 'fixed',
                                top: active === false ? '1.6rem' : '1.2rem',
                                left: active === false ? '17.2%' : '5.5%',
                                rotate: active === false ? '0deg' : '180deg',
                                zIndex: '1001',
                                transition: 'all 0.3s ease',
                                '@media(max-width : 1200px)': {
                                    top: active === false ? '1.6rem' : '1.2rem',
                                    left: active === false ? '23.5%' : '7.5%',
                                    '@media(max-width : 900px)': {
                                        display: 'none'

                                    }
                                }
                            }}
                        ><Link href={''} onClick={() => setActive(!active)}>
                                <Image src={theme.palette.mode === "dark" ? arrowd : arrowl} alt={''} width={30} />
                            </Link>
                        </Box>

                        <Box sx={{ '@media(max-width : 900px)': { display: 'none' } }}>
                            {active === false ? <Sidebardb /> : <Sidebarmob />}
                        </Box>

                    </Grid>
                    <Grid item lg={active === false ? 9.8 : 11.2} md={active === false ? 9 : 10.9} sm={12} xs={12}
                        sx={{ transition: 'all 0.3s ease', }}
                    >
                        <Header icon={theme.palette.mode === "dark" ? dashicond : dashiconl} text={"Dashboard"} />
                        <ComingSoon />
                        <Footer />
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}

export default Contact;