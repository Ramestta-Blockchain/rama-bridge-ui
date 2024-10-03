import { ColorModeContext } from "@/context";
import { Box, Typography, useTheme } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useContext } from "react";

const useStyles = makeStyles({
  list: {
    margin: 0,
    padding: 0,
    listStyle:'none' 
  },
  listItem: {
   marginTop:'1rem'
  },
   
});

interface ListItem {
  title: string;
  data: string;
}

// Interface for props that contains the list
interface TransactionDetailsProps {
  items: ListItem[];
}


const TransactionDetails = ({ items }: TransactionDetailsProps) => {
  const classes = useStyles();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  
  return (
    <>
      <Box sx={{
           backgroundColor: theme.palette.secondary.contrastText,
           border: `1px solid ${theme.palette.primary.light}`,
           borderRadius: '4px',
           padding:'1rem',
        }}>
        <Typography variant="h6">Transaction Details</Typography>
        <Box>
          <Box component={'ul'} className={classes.list}>
            {items.map((item, index) => (
              <Box key={index} component={'li'} className={classes.listItem}>
                <Typography sx={{wordBreak:'break-all'}} color={'#999'}>{item.title}</Typography>
                <Typography sx={{wordBreak:'break-all'}}>{item.data}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
 

export default TransactionDetails