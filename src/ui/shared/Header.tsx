"use client"
import Image from "next/image";
import { Box, Drawer, styled, Typography, useTheme, } from "@mui/material";
import Link from "next/link";
import Iconbuttoncustom from "@/theme/components/iconbuttoncustom";
import switchArrow from '../../icons/switchArrow.svg'
import switchArrowd from '../../icons/switchArrowd.svg'
import { useContext, useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import menud from '../../icons/menud.svg'
import menul from '../../icons/menul.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ConnectWallet from "./connectWallet";
import { ColorModeContext } from "@/context";
import Sidebarmob from "./sidebarmob";

import m1 from '../../icons/asset/m1.svg'
import m2 from '../../icons/asset/m2.svg'
import m3 from '../../icons/asset/m3.svg'
import m4 from '../../icons/asset/m4.svg'
import m5 from '../../icons/asset/m5.svg'
import m6 from '../../icons/asset/m6.svg'
import m7 from '../../icons/asset/m7.svg'

import ml1 from '../../icons/asset/ml1.svg'
import ml2 from '../../icons/asset/ml2.svg'
import ml3 from '../../icons/asset/ml3.svg'
import ml4 from '../../icons/asset/ml4.svg'
import ml5 from '../../icons/asset/ml5.svg'
import ml6 from '../../icons/asset/ml6.svg'
import ml7 from '../../icons/asset/ml7.svg'




const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
}));

const StyledBoxOne = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    '@media(max-width : 600px)': {
        display: 'none'
    }
}));
const StyledBoxTwo = styled(Box)(({ theme }) => ({
    display: 'none',

}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginLeft: '1rem',
    'img': {
        '@media(max-width : 600px)': {
            width: '170px',
            marginTop: '5px'
        }
    }
}));


interface props {
    icon: any;
    text: string;
}


const Header = ({ icon, text }: props) => {
    const [openMob, setOpenMob] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenMob(newOpen);
    };


    const DrawerList = (
        <Box sx={{
            width: 300,
            minHeight: '100vh',
            backgroundColor: theme.palette.primary.main, p: 3,
            'a': {
                width: '100%',
                justifyContent: 'center',
                marginTop: '1rem'
            }
        }}
            role="presentation" onClick={toggleDrawer(false)}>
            <Link href={"javascript:void(0)"}><KeyboardBackspaceIcon sx={{ color: theme.palette.primary.contrastText }} /></Link>
            <ConnectWallet />


        </Box>
    );
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 15px',
            height: '80px',
            position: 'sticky',
            zIndex: '100',
            top: '0px',
            '@media(max-width : 900px)': {
                padding: '10px 20px',
                flexDirection: 'row-reverse'
            }

        }}>
            <StyledBox>
                <StyledBoxTwo>
                    <Box sx={{ cursor: 'pointer', marginTop: 1 }} onClick={toggleDrawer(true)}>
                        {/* <Image src={theme.palette.mode === "dark" ? menublack : menuwhite} alt="" /> */}
                    </Box>
                    <Drawer open={openMob} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </StyledBoxTwo>

                <Box sx={{

                    display: 'none',
                    '@media(max-width : 900px)': {
                        display: 'block'
                    }
                }}>
                    <Sidebarmob />
                </Box>

                <Box sx={{
                    '@media(max-width : 900px)': {
                        display: 'none'
                    }
                }}>
                    <StyledLink href={"/"}>
                        <Image src={icon} alt="logo" />
                        <Typography color={theme.palette.primary.contrastText}>{text}</Typography>
                    </StyledLink>
                </Box>

                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            '@media(max-width : 600px)': {
                                gap: '0.5rem',
                            }
                        }}>
                        <StyledBoxOne>
                            {/* {chains.map((chain) => (
                                <button key={chain.id} onClick={async() => await switchChainAsync({ chainId: chain.id })}>
                                    {chain.name}
                                </button>
                            ))} */}


                            <ConnectWallet />
                        </StyledBoxOne>
                        <Link href={"#"} style={{

                            color: theme.palette.primary.contrastText,
                            padding: "0.4rem",
                            borderRadius: '8px',


                        }}
                            onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === "dark" ?

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <Image src={switchArrowd} alt="" />
                                </Box>
                                :
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        'img': {
                                            '@media(max-width : 600px)': {
                                                // width: '20px'
                                            }
                                        }
                                    }}
                                >
                                    <Image src={switchArrow} alt="" />

                                </Box>
                            }
                        </Link>
                        <Box>
                            <Button
                                sx={{

                                    minWidth: '50px',
                                    padding: '0px',
                                    borderRadius: '8px',

                                }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {theme.palette.mode === "dark" ? <Image src={menud} alt="menu" /> : <Image src={menul} alt="menu" />}
                            </Button>
                            <Menu
                                // sx={{
                                //     '.MuiMenu-list': {
                                //         backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#1C1C20",
                                //         border: theme.palette.mode === "dark" ? "1px solid #C6C5CA" : "1px solid #5A5A5C",
                                //         color: theme.palette.mode === "dark" ? "#000" : "#fff"
                                //     }

                                // }}
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem sx={{gap:1}} onClick={handleClose}>
                                    <Image src={theme.palette.mode === "dark" ? m1 : ml1} alt={""} />
                                    <Link style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }} href={"#"}>Support</Link>
                                </MenuItem>

                                <MenuItem sx={{gap:1}} onClick={handleClose}>
                                    <Image src={theme.palette.mode === "dark" ? m2 : ml2} alt={""} />
                                    <Link style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }} href={"#"}>Read FAQs</Link>
                                </MenuItem>

                                <MenuItem sx={{gap:1}} onClick={handleClose}>
                                    <Image src={theme.palette.mode === "dark" ? m3 : ml3} alt={""} />
                                    <Link style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }} href={"#"}>Documentation</Link>
                                </MenuItem>

                                <MenuItem sx={{gap:1}} onClick={handleClose}>
                                    <Image src={theme.palette.mode === "dark" ? m4 : ml4} alt={""} />
                                    <Link style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }} href={"#"}>  Network status</Link>
                                </MenuItem>

                                <MenuItem sx={{gap:1}} onClick={handleClose}>
                                    <Image src={theme.palette.mode === "dark" ? m5 : ml5} alt={""} />
                                    <Link style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }} href={"#"}>Privacy policy</Link>

                                </MenuItem>

                                <MenuItem sx={{gap:1}} onClick={handleClose}>
                                    <Image src={theme.palette.mode === "dark" ? m6 : ml6} alt={""} />
                                    <Link style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }} href={"#"}>Terms of Use</Link>

                                </MenuItem>

                                <MenuItem sx={{gap:1}} onClick={handleClose}>
                                    <Image src={theme.palette.mode === "dark" ? m7 : ml7} alt={""} />
                                    <Link style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }} href={"#"}>Cookie Policy</Link>

                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
            </StyledBox>
        </Box>

    );
}

export default Header