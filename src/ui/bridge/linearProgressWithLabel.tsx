import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface LinearProgressWithLabelProps {
  value: number;
  progressColor?: string;
  
  textColor?: string;
}

const LinearProgressWithLabel: React.FC<LinearProgressWithLabelProps> = ({ 
  value, 
  progressColor = 'primary', 
  textColor = 'textSecondary' 
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress 
          variant="determinate" 
          value={value} 
          sx={{
            height: 10,
            backgroundColor: '#A8CBEE',
            borderRadius:'20px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#0790CD', // sets the color of the progress bar
            },
          }} 
        />
      </Box>
     
    </Box>
  );
};

export default LinearProgressWithLabel;
