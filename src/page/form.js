import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Header from '../../component/header';
import { Button,Typography,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Checkbox,Select, MenuItem, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './form.css'
const Form = () => {
  const navigate  = useNavigate();
  const [degree, setdegree] = useState('');
  const [year, setYear] = React.useState('');
const steps = [
  '1',
  '2',
  '3',
];
const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
const handleSubmit = (e) => {
  e.preventDefault();
  // Implement your login logic here
  navigate('/form');
};
const handleBack = (e) => {
  e.preventDefault();
  // Implement your login logic here
  navigate('/');
};
return(
    <>
    <Header/>
    <Box sx={{ width: '100%', backgroundColor:'#3D3AD8' }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    {activeStep === steps.length ? (
        <React.Fragment>
    <div className="center mt-5">
    <Typography variant="h4" className="header-text">
    ข้อมูลพื้นฐานผู้สมัคร
        </Typography>
        </div>
        <div className='p-4'>
       <div className='mb-5' style={{fontSize: '24px',color: '#F00',textAlign:'start'}}>
       รับเฉพาะเพศชายเท่านั้น
       </div>
       <FormControl className='FormAlign'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>ประเภทผู้สมัคร</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="บุคคลพลเรือน" />
        <FormControlLabel value="male" control={<Radio />} label="ทหารกองหนุน สังกัด กองทัพอากาศ" />

      </RadioGroup>
      <div className='row d-flex'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>วุฒิการศึกษา</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='วุฒิการศึกษา' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>แผนการเรียน / ประเภทวิชา</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='แผนการเรียน / ประเภทวิชา' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>ชื่อสถาบัน</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='ชื่อสถาบัน' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>ผลการศึกษาเฉลี่ยนสะสมตลอดหลักสูตร</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='ผลการศึกษาเฉลี่ยนสะสมตลอดหลักสูตร' className='ID-input'/></div>
    </div>
    <div className='col'>
    </div>
    <div className='col'>
    </div>
    </div>
    <div className='row d-flex mb-5 align-items-start'>
    <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>จังหวัด</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='จังหวัด' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>สถานะการศึกษา</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="กำลังศึกษาอยู่" />
        <FormControlLabel value="male" control={<Radio />} label="สำเร็จการศึกษา" />

      </RadioGroup>
    </div>
    <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <div className='m-2' style={{fontSize: '14px',textAlign:'start'}}>
    โปรดระบุชื่อและนามสกุลของท่านให้ตรงตามที่ปรากฎในบัตรประชาชนโดยไม่ต้องกรอกคำนำหน้าชื่อ
       </div>
       <div className='row d-flex mb-3'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เลขประจำตัวประชาชน</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เลขประจำตัวประชาชน' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>ชื่อ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='ชื่อ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>นามสกุล</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='นามสกุล' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เกิดวันที่</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เกิดวันที่' className='ID-input'/></div>
    </div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <div className='row d-flex mb-3'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เชื้อชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เชื้อชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>สัญชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='สัญชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>ศาสนา</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='ศาสนา' className='ID-input'/></div>
      </div>
      <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <div className='row d-flex mb-3'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>คำนำหน้าชื่อบิดา</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='คำนำหน้าชื่อบิดา' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>ชื่อ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='ชื่อ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>นามสกุล</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='นามสกุล' className='ID-input'/></div>
      </div>
      <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <div className='row d-flex mb-3'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เชื้อชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เชื้อชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>สัญชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='สัญชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เบอร์โทรศัพท์ที่ติดต่อได้</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เบอร์โทรศัพท์ที่ติดต่อได้' className='ID-input'/></div>
      </div>
      <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>บิดาผู้ให้กำเนิด</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="ยังมีชีวิตอยู่" />
        <FormControlLabel value="male" control={<Radio />} label="ถึงแก่กรรม" />

      </RadioGroup>
      <div className='row d-flex mb-3'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>คำนำหน้าชื่อมารดา</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='คำนำหน้าชื่อมารดา' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>ชื่อ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='ชื่อ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>นามสกุล</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='นามสกุล' className='ID-input'/></div>
      </div>
      <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <div className='row d-flex mb-3'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เชื้อชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เชื้อชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>สัญชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='สัญชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เบอร์โทรศัพท์ที่ติดต่อได้</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เบอร์โทรศัพท์ที่ติดต่อได้' className='ID-input'/></div>
      </div>
      <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>มารดาผู้ให้กำเนิด</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="ยังมีชีวิตอยู่" />
        <FormControlLabel value="male" control={<Radio />} label="ถึงแก่กรรม" />

      </RadioGroup>
      <div className='text-center' style={{fontSize:'24px'}}>บุคคลที่สามารถติดต่อได้</div>
      <div className='row d-flex mb-3'>
        <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เชื้อชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เชื้อชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>สัญชาติ</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='สัญชาติ' className='ID-input'/></div>
      </div>
      <div className='col'>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontSize: '14px'}}>เบอร์โทรศัพท์ที่ติดต่อได้</FormLabel>
      <div><input type="text" value={degree} onChange={(e) => setdegree(e.target.value)} placeholder='เบอร์โทรศัพท์ที่ติดต่อได้' className='ID-input'/></div>
      </div>
      <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
    </div>
    <div className='text-center m-5' style={{fontSize:'24px'}}>การขอรับสิทธิคะแนนเพิ่มพิเศษ</div>
    <div className='d-flex mb-5'>
    <FormControlLabel
        value="end"
        control={<Checkbox />}
        label=""
        labelPlacement="end"
      />
      
      {/* Custom label with dropdown */}
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
        เป็นผู้สำเร็จฝึกวิชาทหาร ชั้นปีที่ 
        <FormControl variant="outlined" size="small" style={{ marginLeft: '8px', marginRight: '8px' }}>
          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ width: '60px' }} // Adjust width as needed
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>{num}</MenuItem>
            ))}
          </Select>
        </FormControl>
        และมีหนังสือรับรองของกรมรักษาดินแดนแล้ว
      </div>
      </div>
    <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="เป็นบุตรของทหาร ข้าราชการ หรือลูกจ้าง ซึ่งได้กระทำหน้าที่ในระหว่างที่มีการรบหรือสงครามหรือมีการปราบปรามการจลาจล หรือในระหว่างที่มีพระบรมราชโอการสถานการณ์ฉุกเฉิน ซึ่งมีสิธิได้บีบเวลาราชการเป็นทวีคูณตามกฎหมายว่าด้วยการบำเหน็จ
          บำนาญ ข้าราชการ หรือเป็นบุตรของทหาร ข้าราชการ หรือลูกจ้าง ซึ่งต้องมีประสบอันตรายถึงทุพพลภาพ ในขณะปฎิบัติราชการในหน้าที่ หรือถูก ประทุษร้ายเพราะเหตุการณ์ทำตามหน้าที่ หรือต้องบาดเจ็บถึงตายเพราะเหตุนั้น ซึ่งได้รับบำเหน็จบำนาญพิเศษ
          ตามกฎหมายว่าด้วยบำเหน็จ บำนาญข้าราชการหรือได้รับเงินทำขวัญตามระเบียบกระทรวงการคลังว่าด้วยเงินทำขวัญข้าราชการและลูกจ้างหรือบุตรของผู้ที่ได้รับพระราชทาน เหรียญดุษฏีมาลาเข็มกล้าหาญหรือเหรียญกล้าหาญ"
          labelPlacement="end"
        />
    </FormControl>
    </div>
    </React.Fragment>
    ):(<React.Fragment>
      <div className="center mt-5">
    <Typography variant="h4" className="header-text">
    ที่อยู่ตามทะเบียนบ้าน
        </Typography>
        </div>
    </React.Fragment>)}
       <div className="center mt-5">
    <div className="footer-buttons">
          <Button variant="contained" color="primary" style={{backgroundColor:'#A2A9AD',borderRadius:'0'}} onClick={handleBack}>
          กลับ
          </Button>
          <Button variant="contained" color="primary" type='submit' style={{backgroundColor:'#1A8FDD',borderRadius:'0'}} onClick={handleNext}>
          ถัดไป
          </Button>
        </div>
        </div>
    </>
)
        };
export default Form;