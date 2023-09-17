import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Header from '../../component/header';
const Form = () => {
const steps = [
  '1',
  '2',
  '3',
];
return(
    <>
    <Header/>
    <Box sx={{ width: '100%', backgroundColor:'#3D3AD8' }}>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </>
)
        };
export default Form;