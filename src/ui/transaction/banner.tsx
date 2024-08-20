import { ColorModeContext } from '@/context';
import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useContext } from 'react';
import topbgd from '../../icons/asset/topbgd.png';
import topbgl from '../../icons/asset/topbgl.png';
import { useAccount } from 'wagmi';
import historyimg from '../../icons/asset/historyimg.svg'

const useStyles = makeStyles({
    bg__image: {
        width: '100%',
        height: 'auto',
    },
    qrcode: {
        display: 'flex',
        alignItems: 'center',
    },
    box1: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    },
    box2: {
        padding: '10px',
        borderRadius: '6px',
    },
    box3: {
        textAlign: 'end',
    },
    box4: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    gifbox: {
        position: 'relative'
    },
    box5: {
        width: '100%',
        height: 'auto',
        marginTop: '2rem',
        '@media(max-width : 1200px)': {
            marginTop: '2rem',
        }
    }
});

const Banner = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const { address, isConnected } = useAccount();

    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${theme.palette.mode === 'dark' ? topbgd.src : topbgl.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    width: '100%',
                    height: 'auto',
                    padding:'1rem 2rem',
                    '@media(max-width:600px)': {
                        padding:'1rem 0rem',
                        border:`1px solid ${theme.palette.secondary.light}`,
                        borderRadius:'4px'
                    }
                }}
            >

                <Box className={classes.box4} sx={{
                    '@media(max-width : 1200px)': {
                        justifyContent: 'center',
                        '@media(max-width : 600px)': {
                        justifyContent: 'center',
                        flexWrap:'wrap',
                        flexDirection:'column-reverse'
                    }
                    }
                }}
                >

                    <Box mb={1} sx={{
                          '@media(max-width : 600px)':{
                          textAlign:'center'
                        }
                    }}>
                        <Typography sx={{
                            '@media(max-width : 1200px)':{
                                fontSize:36,
                                '@media(max-width : 600px)':{
                                fontSize:26
                            }
                            }
                        }} variant='h3' fontWeight={700}>Transaction History</Typography>
                        <Typography fontSize={15}>Transaction History only shows transactions from Native and Socket bridge.</Typography>
                    </Box>
                    <Box>
                        <Image src={historyimg} alt={''}/>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default Banner;
