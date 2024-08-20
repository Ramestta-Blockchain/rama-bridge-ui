"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Chip, Grid, styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { makeStyles } from '@mui/styles';
import Empty from '../asset/empty';
import Headingcmp from '@/theme/components/headingcmp';
import Buttonwithcolor from '@/theme/components/buttonwithcolor';
import Link from 'next/link';
import Image from 'next/image';
import readarrow from '../../icons/readarrow.svg'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import cwd from '../../icons/cwd.svg'
import cwl from '../../icons/cwl.svg'
import { useAccount } from 'wagmi';
import SearchCustom from '@/theme/components/searchCustom';
import Dropdown from '@/theme/components/dropdown'
import droplogod from '../../icons/asset/droplogod.svg'
import droplogol from '../../icons/asset/droplogol.svg'
import no_recordsd from '../../icons/asset/no_recordsd.svg'
import no_recordsl from '../../icons/asset/no_recordsl.svg'
import documentd from '../../icons/asset/documentd.svg'
import documentl from '../../icons/asset/documentl.svg'
import arD from '../../icons/asset/arD.svg'
import arL from '../../icons/asset/arL.svg'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '2.2rem'
}));
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles({
    mainDiv: {},
    box_hding: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '6px'
    },
    readfaq: {
        color: '#3DC1F2',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
    },
    readfaqBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    topBox: {
        textAlign: 'center',

    },


    br: {
        '@media(max-width : 600px)': {
            display: 'none'
        }
    },
    connectBridge: {
        backgroundColor: '#3DC1F2 !important',
        textDecoration: 'none',
        padding: '10px 16px !important',
        borderRadius: '6px !important',
        transition: '0.5s',
        marginTop: '1rem !important',
        color: '#fff !important',
        '&:hover': {
            backgroundColor: '#3DC1F2',
        },
    },
    ListDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    link: {
        '@media(max-width : 600px)': {
            width: '100% !important'
        }
    },
    imgDoc:{
        '@media(max-width : 600px)':{
            display:'none'
        }
    }
});




export default function TransactionTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const { openConnectModal } = useConnectModal();
    const { address } = useAccount();



    const locationData = [
        {
            name: 'All Transactions',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: 'Completed',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: 'Ready to Claims',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: 'Pending',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: 'Failed',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },

    ];
    const locationData2 = [
        {
            name: 'Last 24 hours',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: 'Last 7 days',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: 'Last 30 days',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: 'Last 90 days',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },

    ];
    const locationData3 = [
        {
            name: 'By Token',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: '$ Low to High',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },
        {
            name: '$ High to Low',
            icon: theme.palette.mode === "dark" ? droplogod : droplogol,
        },

    ];
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <Box className={classes.mainDiv}>


            <Box sx={{ width: '100%', }}>

                <Box sx={{ textTransform: 'capitalize', }}>
                    <Tabs

                        sx={{
                            backgroundColor: theme.palette.background.default,
                            border: `1px solid ${theme.palette.secondary.light}`,
                            borderRadius: '6px',
                            padding: '4px 6px 6px 6px',
                            '.MuiTabs-indicator': {
                                height: 46,
                                color: '#000',
                                background: `linear-gradient(0deg, ${theme.palette.primary.main},${theme.palette.primary.main})`,
                                border: `1px solid ${theme.palette.secondary.light}`,
                                borderRadius: '8px',
                                backgroundColor: 'transparent',
                            },
                            '.Mui-selected': {
                                color: `${theme.palette.primary.contrastText} !important`,
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", borderRadius: '6px', }} label="All Transactions" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", borderRadius: '6px', }} label="Pending" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box>
                        {address ?
                            <>
                                <Box mt={2}>
                                    <Grid container spacing={2}>
                                        <Grid item lg={4.3} md={6} sm={6} xs={12}>
                                            <SearchCustom placeholder_Text={"Search: Address, Txn Hash, Token Name"} />
                                        </Grid>


                                        <Grid item lg={2.7} md={6} sm={6} xs={12}>
                                            <Dropdown locations={locationData} currentValue={'All Transactions'} />
                                        </Grid>
                                        <Grid item lg={2.5} md={6} sm={6} xs={12}>
                                            <Dropdown locations={locationData2} currentValue={'Last 24 hours'} />
                                        </Grid>
                                        <Grid item lg={2.5} md={6} sm={6} xs={12}>
                                            <Dropdown locations={locationData3} currentValue={'By Token'} />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    border: `1px solid ${theme.palette.secondary.light}`,
                                    padding: '1rem',
                                    borderRadius: '20px',
                                    margin: '1rem auto 0.4rem auto',
                                    width: '600px',
                                    '@media(max-width : 600px)':{
                                        width:'100%',
                                        borderRadius: '6px',
                                    }
                                }}>
                                    <Box sx={{
                                        textAlign: 'center',
                                        padding: '2rem 0rem',
                                        '@media(max-width : 600px)': {
                                        padding: '0.5rem 0rem',
                                }
                                    }} >
                                        <Image src={theme.palette.mode === "dark" ? no_recordsd : no_recordsl} alt={''} width={50} />

                                        <Typography>There are no pending transactions, but you can <Box component={'br'} />
                                            start one with a single click.</Typography>
                                        <Box my={2}>
                                            <Button
                                                sx={{
                                                    textTransform: 'capitalize', width: '300px',
                                                    '@media(max-width : 600px)': {
                                                        width: '100% !important'
                                                    }
                                                }}

                                                className={classes.connectBridge}
                                            >
                                                Bridge Token in 1-click
                                            </Button>
                                        </Box>
                                        <Link className={classes.link} href={''} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            border: `1px solid ${theme.palette.secondary.light}`,
                                            textDecoration: 'none',
                                            color: theme.palette.primary.contrastText,
                                            padding: '10px',
                                            borderRadius: '6px',
                                            justifyContent: 'space-between',
                                            width: '300px',
                                            margin: 'auto',

                                        }}>
                                            <Image className={classes.imgDoc} src={theme.palette.mode === "dark" ? documentd : documentl} alt={''} />
                                            <Typography>Check doc to learn more</Typography>
                                            <Image src={theme.palette.mode === "dark" ? arD : arL} alt={''} />
                                        </Link>

                                    </Box>

                                </Box>
                                <Box sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    border: `1px solid ${theme.palette.secondary.light}`,
                                    padding: '10px',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    marginTop: '2.5rem',
                                    '@media(max-width : 600px)':{
                                        marginTop: '1rem',
                                    }
                                }}>
                                    <Typography fontSize={14}> Transaction older than <Typography component={'span'} fontWeight={700}>1st Jan. 2024</Typography> will not be visible on the Portal. If you have any pending claims, please <Typography component={'span'}><Link href={''} style={{ color: theme.palette.primary.contrastText }}>contact support</Link></Typography>.</Typography>
                                </Box>
                            </>
                            :
                            <Box sx={{
                                backgroundColor: theme.palette.background.default,
                                border: `1px solid ${theme.palette.secondary.light}`,
                                padding: '1rem',
                                borderRadius: '20px',
                                margin: '1rem auto 0.4rem auto',
                                width: '600px',
                                '@media(max-width : 600px)':{
                                    width:'100%',
                                    borderRadius: '6px',
                                }
                            }}>
                                <Box sx={{
                                    textAlign: 'center',
                                    padding: '2rem 0rem'
                                }} >
                                    <Image src={theme.palette.mode === "dark" ? cwd : cwl} alt={''} width={50} />
                                    <Box><Headingcmp text={"Connect your Wallet"} /></Box>
                                    <Typography>Connect your wallet to view and bridge your assets.</Typography>
                                    <Box my={2}>
                                        <Button
                                            sx={{ textTransform: 'capitalize' }}
                                            onClick={openConnectModal}
                                            className={classes.connectBridge}
                                        >
                                            Connect Your Wallet
                                        </Button>
                                    </Box>
                                    <Box className={classes.readfaqBox}>
                                        <Typography>Having problems with connecting your wallet?</Typography>
                                        <Link className={classes.readfaq} href={""}>Read FAQs <Image src={readarrow} alt={""} /></Link>
                                    </Box>

                                </Box>

                            </Box>
                        }

                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box>
                        {address ?
                            <>
                                <Box mt={2}>
                                    <Grid container spacing={2}>
                                        <Grid item lg={5} md={12} sm={9.5} xs={12}>
                                            <SearchCustom placeholder_Text={"Search: Address, Txn Hash, Token Name"} />
                                        </Grid>


                                        <Grid item lg={2} md={2} sm={2.5} xs={12}>
                                            <Box textAlign={'end'}>
                                                <Chip sx={{
                                                    padding: '10px 8px',
                                                    height: '50px',
                                                    borderRadius: '6px',
                                                    '@media(max-width : 600px)':{
                                                        width:'100%',
                                                        justifyContent:'space-between'
                                                    }
                                                }} label="Pending" onDelete={handleDelete} />
                                            </Box>
                                        </Grid>
                                        <Grid item lg={2.5} md={5} sm={6} xs={12}>
                                            <Dropdown locations={locationData2} currentValue={'Last 24 hours'} />
                                        </Grid>
                                        <Grid item lg={2.5} md={5} sm={6} xs={12}>
                                            <Dropdown locations={locationData3} currentValue={'By Token'} />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    border: `1px solid ${theme.palette.secondary.light}`,
                                    padding: '1rem',
                                    borderRadius: '20px',
                                    margin: '1rem auto 0.4rem auto',
                                    width: '600px',
                                    '@media(max-width : 600px)': {
                                        width: '100%',
                                        borderRadius: '6px',
                                    }
                                }}>
                                    <Box sx={{
                                        textAlign: 'center',
                                        padding: '2rem 0rem'
                                    }} >
                                        <Image src={theme.palette.mode === "dark" ? no_recordsd : no_recordsl} alt={''} width={50} />

                                        <Typography>There are no pending transactions, but you can <Box component={'br'} />
                                            start one with a single click.</Typography>
                                        <Box my={2}>
                                            <Button
                                                sx={{ textTransform: 'capitalize', width: '300px',
                                                    '@media(max-width : 600px)':{
                                                        width:'100%'
                                                    }
                                                 }}

                                                className={classes.connectBridge}
                                            >
                                                Bridge Token in 1-click
                                            </Button>
                                        </Box>
                                        <Link className={classes.link} href={''} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            border: `1px solid ${theme.palette.secondary.light}`,
                                            textDecoration: 'none',
                                            color: theme.palette.primary.contrastText,
                                            padding: '10px',
                                            borderRadius: '6px',
                                            justifyContent: 'space-between',
                                            width: '300px',
                                            margin: 'auto',
                                            
                                        }}>
                                            <Image src={theme.palette.mode === "dark" ? documentd : documentl} alt={''} />
                                            <Typography>Check doc to learn more</Typography>
                                            <Image src={theme.palette.mode === "dark" ? arD : arL} alt={''} />
                                        </Link>

                                    </Box>

                                </Box>
                                <Box sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    border: `1px solid ${theme.palette.secondary.light}`,
                                    padding: '10px',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    marginTop: '2.5rem'
                                }}>
                                    <Typography fontSize={14}> Transaction older than <Typography component={'span'} fontWeight={700}>1st Jan. 2024</Typography> will not be visible on the Portal. If you have any pending claims, please <Typography component={'span'}><Link href={''} style={{ color: theme.palette.primary.contrastText }}>contact support</Link></Typography>.</Typography>
                                </Box>
                            </>
                            :
                            <Box sx={{
                                backgroundColor: theme.palette.background.default,
                                border: `1px solid ${theme.palette.secondary.light}`,
                                padding: '1rem',
                                borderRadius: '20px',
                                margin: '1rem auto 0.4rem auto',
                                width: '600px',
                                '@media(max-width : 600px)': {
                                     width: '100%',
                                     borderRadius: '6px',
                                }
                            }}>
                                <Box sx={{
                                    textAlign: 'center',
                                    padding: '2rem 0rem',
                                    '@media(max-width : 600px)': {
                                        padding: '0.5rem 0rem',
                                }
                                }} >
                                    <Image src={theme.palette.mode === "dark" ? cwd : cwl} alt={''} width={50} />
                                    <Box><Headingcmp text={"Connect your Wallet"} /></Box>
                                    <Typography>Connect your wallet to view and bridge your assets.</Typography>
                                    <Box my={2}>
                                        <Button
                                            sx={{ textTransform: 'capitalize' }}
                                            onClick={openConnectModal}
                                            className={classes.connectBridge}
                                        >
                                            Connect Your Wallet
                                        </Button>
                                    </Box>
                                    <Box className={classes.readfaqBox}>
                                        <Typography>Having problems with connecting your wallet?</Typography>
                                        <Link className={classes.readfaq} href={""}>Read FAQs <Image src={readarrow} alt={""} /></Link>
                                    </Box>

                                </Box>

                            </Box>
                        }

                    </Box>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
