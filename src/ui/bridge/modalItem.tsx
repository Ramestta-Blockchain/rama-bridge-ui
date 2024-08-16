
import { ColorModeContext } from '@/context';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useContext } from 'react';
import recentTransd from '../../icons/asset/recentTransd.svg'
import recentTransl from '../../icons/asset/recentTransl.svg'
import Link from 'next/link';



const useStyles = makeStyles({
    recent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1.5rem 0rem'
    },
    linked: {
        color: '#3DC1F2',
        textDecoration: 'none'
    }
});




const ModalItem = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>

            <Box>
                <Box className={classes.recent}>
                    <Box>
                        <Typography>Recent Transaction</Typography>
                    </Box>

                    <Box>
                        <Link className={classes.linked} href={''}>View All</Link>
                    </Box>
                </Box>

                <Box sx={{
                    padding:'0rem 1rem',
                    '@media(max-width : 900px)':{
                        padding:'0rem',
                    }
                }}>
                    <Image src={theme.palette.mode === "dark" ? recentTransd : recentTransl} alt={''} style={{ display: 'block', width: '100%', height: 'auto' }} />
                </Box>
                <Typography mt={2} textAlign={'center'}>Please connect your wallet to view <Typography component={'br'} /> your recent transactions.</Typography>
            </Box>

        </>
    )
}

export default ModalItem