import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, styled, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import { ColorModeContext } from '@/context';
import { useContext } from 'react';
import rightArrow from '../../icons/asset/rightArrow.svg'
import Image from 'next/image';
import ModalItem from '@/ui/bridge/modalItem';
import collapse from '../../icons/asset/collapse.svg'

const useStyles = makeStyles({
    social: {
        color: '#3DC1F2',
        transition: '0.5s',
        '&:hover': {
            color: '#fff'
        }
    },
    logoutbtn: {
        backgroundColor: '#00FFFF',
        color: '#000',
        padding: '1rem 2rem',
        borderRadius: '30px',
        margin: '0rem 1rem',
        textDecoration: 'none',
        position: 'absolute',
        top: '30rem'
    }
});

const StyledMenu = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.secondary.light}`,
    color: '#000 !important',
    padding: '1.1rem 0.8rem',
    display: 'inline-flex',
    textDecoration: 'none',
    fontWeight: '700 !important',
    borderRadius: '8px',
    transition: '0.5s',
    ':hover': {
        backgroundColor: theme.palette.background.default,
        color: "#000"
    }
}));

const styles = {
    color: '#000 !important'
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Modal() {
    const classes = useStyles();
    const [state, setState] = React.useState<Record<Anchor, boolean>>({
        left: false,
        top: false,
        right: false,
        bottom: false,
    });
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <>
            <Box>
                <Box
                    sx={{
                        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,
                        textAlign: 'left',

                        '& .MuiDrawer-paper': {
                            backgroundColor: 'transparent', // Your desired background color
                        },
                    }}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                >
                    <Link
                        style={{
                            backgroundColor: theme.palette.background.default,
                            border: `1px solid ${theme.palette.secondary.light}`,
                            color: theme.palette.primary.contrastText,
                            padding: '0.8rem 1rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            gap: '10px',
                            alignItems: 'center'

                        }}
                        href={'#'}>
                        <Typography> Collapse</Typography>
                        <Image src={collapse} alt={''} />
                    </Link>
                    
                </Box>

                <ModalItem />
            </Box>
        </>
    );

    return (
        <Box textAlign={'end'}>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <StyledMenu
                        onClick={toggleDrawer(anchor, true)}
                        href={""}
                    >
                        <Image src={rightArrow} alt={''} />
                    </StyledMenu>
                    <Drawer
                        sx={{
                            '& .MuiDrawer-paper': {
                                backgroundColor: theme.palette.background.default,
                                border: `1px solid ${theme.palette.secondary.light}`,
                                height: '83vh',
                                top: '5.5rem',
                                right: '2.1rem',
                                borderRadius: '8px',
                                boxShadow: 'inherit',
                                backgroundImage: 'linear-gradient(rgb(255 255 255 / 0%), rgb(255 255 255 / 0%))',
                                padding: '1rem'
                            },
                            '& .MuiBackdrop-root': {
                                backgroundColor: 'transparent', // Change backdrop color here
                            },
                        }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </Box>
    );
}
