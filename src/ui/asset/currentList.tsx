import { ColorModeContext } from "@/context";
import { Box, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import settingd from '../../icons/asset/settingd.svg'
import settingl from '../../icons/asset/settingl.svg'
import green from '../../icons/asset/green.svg'



const useStyles = makeStyles({
    mainBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
});




const CurrentList = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>

            <Box className={classes.mainBox} sx={{
                backgroundColor:theme.palette.secondary.contrastText,
                border:`1px solid ${theme.palette.secondary.light}`,
                borderRadius:'4px',
                marginTop:'10px'
                }}>
                <Box className={classes.flex}>
                    <Image src={green} alt={""} />
                    <Typography>Current List: <Typography component={'span'} fontWeight={700}>Popular tokens</Typography></Typography>
                </Box>
                <Box className={classes.flex}>
                    <Image src={theme.palette.mode === "dark" ? settingd : settingl} alt={""} />
                    <Typography>Manage Tokens</Typography>
                </Box>
            </Box>

        </>
    )
}

export default CurrentList