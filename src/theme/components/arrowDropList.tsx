
import { Box, Button, IconButton, styled, Typography, useTheme } from "@mui/material";
import { useContext, } from "react";
import { ColorModeContext } from "@/context";
import { makeStyles } from '@mui/styles';
import aIcon1 from '../../icons/asset/aIcon1.svg'
import aIcon2 from '../../icons/asset/aIcon2.svg'
import aIcon3 from '../../icons/asset/aIcon3.svg'
import Image from "next/image";
import sideicond_02 from '../../icons/sideicond_02.svg'
import sideiconl_02 from '../../icons/sideiconl_02.svg'




const StyledBox = styled(Box)(({ theme }) => ({
    borderRadius: '8px',
    marginTop: '1rem',
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid${theme.palette.secondary.light}`,
}));


const useStyles = makeStyles({
    hide: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'end'
    }
});

const ListDropdown = [
    {
        id: 1,
        Icon: aIcon1,
        Name: 'Ethereum',
        balance: '0.00',
        price: '0.99961',
    },
    {
        id: 2,
        Icon: aIcon2,
        Name: 'Polygon POS Legacy',
        balance: '0.00',
        price: '0.99961',
    },
    {
        id: 3,
        Icon: aIcon2,
        Name: 'Polygon POS',
        balance: '0.00',
        price: '0.99961',
    },
    {
        id: 4,
        Icon: aIcon3,
        Name: 'Polygon zkEVM Legacy',
        balance: '0.00',
        price: '0.99961',
    },
    {
        id: 5,
        Icon: aIcon3,
        Name: 'Polygon zkEVM',
        balance: '0.00',
        price: '0.99961',
    },

]

const ArrowDropList = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledBox>
                {ListDropdown.map((item, index) => (
                    <Box key={index} sx={{
                        display: 'flex', alignItems: 'center', 
                        padding: '3px 5px',
                        justifyContent: 'space-between',
                        borderRadius: '4px'

                    }}>
                        <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 270 }}><Box sx={{ display: 'flex', gap: '8px' }}><Image src={item.Icon} alt={""} />  <Typography>{item.Name}</Typography></Box></Box>


                        <Box sx={{ minWidth: 130, }}>
                            <Box sx={{ color: theme.palette.primary.contrastText, }} >{item.balance}</Box>
                        </Box>
                        <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 95, }} >{item.price}</Box>
                        <Box sx={{ color: theme.palette.primary.contrastText, minWidth: 100, }} >
                            <Button sx={{
                                backgroundColor: theme.palette.primary.main,
                                border: `1px solid ${theme.palette.secondary.light}`,
                                boxShadow: 'inherit',
                                transition: '0.5s',
                                textTransform:'capitalize',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                    boxShadow: 'inherit',
                                    transform: 'translateY(-5px)'
                                }
                            }} variant="contained" startIcon={<Image src={theme.palette.mode === "dark" ? sideicond_02 : sideiconl_02} alt={""} />}>Bridge</Button></Box>

                    </Box>
                ))}
            </StyledBox>
        </>
    )
}

export default ArrowDropList