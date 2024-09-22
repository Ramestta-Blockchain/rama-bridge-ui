// components/VerticalStepperWithProgress.tsx

import React from 'react';
import { Stepper, Step, StepLabel, Button, Box, Typography } from '@mui/material';
import LinearProgressWithLabel from './linearProgressWithLabel';


interface StepContentProps {
  step: number;
}

const steps = [
  {
    title: 'Confirmation in progress',
    description: 'Once BNBBSC is confirmed in the blockchain, We’ll start exchanging it to USDTBSC. See input hash in explorer'
  },
  {
    title: 'Exchanging BNBBSC to USDTBSC',
    description: 'The process will take a few minutes. Please wait'
  },
  {
    title: 'Sending funds to your wallet',
    description: 'Once the transaction is completed your USDTBSC will sent to your crypto wallet. Typically it take a few minutes for your funds to show up.'
  },
  
];

const StepContent: React.FC<StepContentProps> = ({ step }) => {
  switch (step) {
    case 0:
      return <Typography>Content for Step 1</Typography>;
    case 1:
      return <Typography>Content for Step 2</Typography>;
    case 2:
      return <Typography>Content for Step 3</Typography>;
    
    default:
      return <Typography>Unknown Step</Typography>;
  }
};

const VerticalStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Calculate progress percentage based on the active step
  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Progress Bar with Label */}
      <Box sx={{ mb: 3 }}>
        <LinearProgressWithLabel value={progress} progressColor='red' textColor='green' />
      </Box>

      {/* Stepper */}
      <Stepper sx={{
        '.MuiStepLabel-root .Mui-active': {
          color: '#3DC1F2', // Customize active step color
        },
        '.MuiStepLabel-root .Mui-completed': {
          color: 'green', // Customize completed step color
        },
        '.MuiStepLabel-root .MuiStepLabel-label': {
          color: '#999', // Customize inactive step color
        },

      }} activeStep={activeStep} orientation="vertical">
        {steps.map((item, index) => (
          <Step key={index}>
            <StepLabel sx={{ fontSize: '18px !important' }}>{item.title}</StepLabel>
            <Typography fontSize={14} sx={{ ml: 4, color: '#666' }}>{item.description}</Typography>
          </Step>
        ))}
      </Stepper>

      {/* Reset Button */}
      {activeStep === steps.length && (
        <Box sx={{ p: 3 }}>
          <Typography>All steps completed</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      )}
    </Box>
  );
};

export default VerticalStepper;
