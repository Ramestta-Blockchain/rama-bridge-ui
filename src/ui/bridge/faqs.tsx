import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography, styled, useTheme } from "@mui/material"
import SouthIcon from '@mui/icons-material/South';
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";
 



const Accordion_list = [
    {
        id: 1,
        title: 'What is the difference between fixed and floating rates?',
        text: 'The Fixed exchange rate represents the final amount displayed to the user on the first step of exchange. This amount will not change until the transaction is finished. The rate is fixed only for 15 minutes for the current transaction In order to enable the fixed rate option, choose it on the first screen of your exchange. When choosing a floating rate the final sum might change depending on marked conditions. Once your exchange is finished you might see a slightly different rate.'
    },
    {
        id: 2,
        title: 'What is a hash?',
        text: 'A hash (or txID) is the unique address of a transaction in a blockchain that acts as a record or proof that the transaction has taken place. Usually, the hash is combination of digits and lowercase letters (uppercase in the case of XRP). Whenever you make a payment in cryptocurrency, you receive a hash displayed in your wallet.'
    },
    {
        id: 3,
        title: 'How do I cancel my transaction?',
        text: "Once confirmed, the crypto transaction is irreversible. Neither you nor our specialists can cancel it. That's why we recommend you double-check (or even triple-check) the recipient's address." 
    },
  
     

]


const StyledBox = styled(Box)(({ theme }) => ({
    

}));

const Faqs = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel: any | any | ((prevState: any) => any)) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <StyledBox>


                 
                <Grid container spacing={2}>

                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        {Accordion_list.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}` as any}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    backgroundColor: theme.palette.secondary.contrastText,
                                    border: `1px solid ${theme.palette.primary.light}`,
                                    borderRadius: '6px',
                                    boxShadow: 'inherit',
                                    marginTop: '1rem',
                                    padding: '0px',
                                    '&.Mui-expanded': {
                                        background: 'linear-gradient(359deg, #3DC1F2, #3DC1F2)',
                                        marginTop: '1rem',
                                        color: '#000',
                                    },
                                }}>
                                <AccordionSummary

                                    sx={{
                                        fontSize:14,
                                        fontWeight: 700,
                                        color: expanded === `panel${index}` as any ? '#000' : '#fff',
                                         
                                    }}
                                    expandIcon={<SouthIcon sx={{ color: expanded === `panel${index}` as any ? '#000' : '#fff' }} />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}

                                >
                                    {item.title}
                                </AccordionSummary>
                                <AccordionDetails sx={{fontSize:14}}>

                                    {item.text}

                                </AccordionDetails>
                            </Accordion>
                        ))}

                    </Grid>

                </Grid>

            </StyledBox>
 
        </>
    )
}

export default Faqs


