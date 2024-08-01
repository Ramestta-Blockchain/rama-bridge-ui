
import { ColorModeContext } from '@/context';
import Headingcmp from '@/theme/components/headingcmp';
import { Box, Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';
import Banner from './banner';
import ShowDropList from '@/theme/components/showDropList';

const useStyles = makeStyles({
     
});




const NetworkSection = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>

            <Box sx={{
                backgroundColor:theme.palette.secondary.contrastText,
                border:theme.palette.primary.light,
                padding:'1rem',
                borderRadius:'4px'
            }}>
                
<Box>
    <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
            <ShowDropList/>
        </Grid>
    </Grid>
</Box>
            </Box>

        </>
    )
}

export default NetworkSection