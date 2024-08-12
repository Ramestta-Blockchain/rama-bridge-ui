
import { ColorModeContext } from '@/context';
import Headingcmp from '@/theme/components/headingcmp';
import { Box, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';
import Banner from './banner';
import NetworkSection from './networkSection';
 

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',
        minHeight: '80vh',
        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
        }
    },
});




const Main = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>

            <Box className={classes.mainDiv}>
                <Banner />
                <NetworkSection />
            </Box>

        </>
    )
}

export default Main