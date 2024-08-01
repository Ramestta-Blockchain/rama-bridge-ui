
import { ColorModeContext } from '@/context';
import Headingcmp from '@/theme/components/headingcmp';
import { Box, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',
        minHeight: '80vh',
        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
        }
    },




});




const ComingSoon = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>

            <Box className={classes.mainDiv}>
                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        border: theme.palette.primary.light,
                        display: 'flex',
                        justifyContent: 'center',
                        height: '480px',
                        alignItems: 'center',
                        borderRadius: '12px'
                    }}
                >
                    <Headingcmp text={"Coming Soon"} /></Box>

            </Box>

        </>
    )
}

export default ComingSoon