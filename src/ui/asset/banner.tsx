import { ColorModeContext } from '@/context';
import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { useContext } from 'react';
import topbgd from '../../icons/asset/topbgd.png';
import topbgl from '../../icons/asset/topbgl.png';
import gmd from '../../icons/asset/gmd.svg';
import gml from '../../icons/asset/gml.svg';
import qrd from '../../icons/asset/qrd.svg';
import qrl from '../../icons/asset/qrl.svg';
import TextCopy from '@/theme/components/textCopy';
import { useAccount } from 'wagmi';
import TextTruncate from '@/theme/components/textTruncate';
import shortenString from '@/lib/shortenString';
import Link from 'next/link';
import sun from '../../icons/asset/sun.gif'
import showboxd from '../../icons/asset/showboxd.svg'
import showboxl from '../../icons/asset/showboxl.svg'

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
        marginTop: '2rem'
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
                    padding: address ? '1rem' : '2rem',
                }}
            >
                {address ?
                    <Box className={classes.box4}>
                        <Box className={classes.box1}>
                            <Box className={classes.box2} bgcolor={theme.palette.common.black}>
                                <Image src={theme.palette.mode === 'dark' ? gmd : gml} alt={''} style={{ display: 'block' }} />
                            </Box>
                            <Box>
                                <Typography variant='h4' fontWeight={700}>gm, 0xbe...5d</Typography>
                                <Box className={classes.qrcode}>
                                    <TextCopy text={`${address ? address : '0.00'}`} address={shortenString(`${address ? address : '0.00'}`)} />
                                    <Link href={''}><Image src={theme.palette.mode === 'dark' ? qrd : qrl} alt={''} style={{ marginLeft: '-8px' }} /></Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.box3}>
                            <Typography>Total Balance</Typography>
                            <Typography variant='h3' fontWeight={700}>$0.00</Typography>
                        </Box>
                    </Box>
                    :
                    <Box className={classes.box4}>

                        <Box>
                            <Typography variant='h3' fontWeight={700}>Asset Page</Typography>
                            <Typography>Connect your wallet to view and bridge your assets.</Typography>
                        </Box>
                    </Box>
                }
            </Box>
            <Box className={classes.gifbox}>
                <Box sx={{
                    backgroundColor: '#3DC1F2',
                    padding: '8px',
                    borderRadius: '50rem',
                    display: 'inline-block',
                    width: '150px',
                    height: '150px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '-5rem'
                }}>
                    <Image src={sun} alt={''} style={{ width: '100%', height: 'auto', borderRadius: '50rem', mixBlendMode: 'darken' }} />
                </Box>
            </Box>
            <Box>
                <Image src={theme.palette.mode === "dark" ? showboxd : showboxl} alt={''} className={classes.box5} />
            </Box>
        </Box>
    );
};

export default Banner;
