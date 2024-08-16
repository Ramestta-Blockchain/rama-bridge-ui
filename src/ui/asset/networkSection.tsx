
import { ColorModeContext } from '@/context';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';
import Dropdown from '@/theme/components/dropdown';
import SearchCustom from '@/theme/components/searchCustom';
import SwitchCustom from '@/theme/components/switchCustom';
import ListTable from './listTable';
import CurrentList from './currentList';
import Empty from './empty';
import { useAccount } from 'wagmi';


const useStyles = makeStyles({
    hide: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'end'
    }
});




const NetworkSection = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const { address, isConnected } = useAccount();
    return (
        <>

            <Box sx={{
                backgroundColor: theme.palette.secondary.contrastText,
                border: `1px solid ${theme.palette.primary.light}`,
                padding: '10px',
                borderRadius: '4px'
            }}>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={3.5} sm={12} xs={12}>
                        <Dropdown />
                    </Grid>

                    <Grid item lg={6} md={4.5} sm={7} xs={12}>
                        <SearchCustom placeholder_Text={"Search Tokens..."} />
                    </Grid>

                    <Grid item lg={3} md={4} sm={5} xs={12}>
                        <Box className={classes.hide}>
                            <Typography>Hide Zero Balances</Typography>
                            <SwitchCustom />
                        </Box>
                    </Grid>
                </Grid>
                {address ?
                    <>
                        <ListTable />
                        <CurrentList />
                    </>
                    :
                    <>
                    <Empty />
                    </>
                    }
            </Box>

        </>
    )
}

export default NetworkSection