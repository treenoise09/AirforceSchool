import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Header from '../../component/header';
import { Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, Select, MenuItem, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './form.css'
const Form = () => {
  const navigate = useNavigate();
  const [degree, setDegree] = useState('');// For "วุฒิการศึกษา"
  const [applicantType, setApplicantType] = useState(''); // For "ประเภทผู้สมัคร"
  const [courseType, setCourseType] = useState(''); // For "แผนการเรียน / ประเภทวิชา"
  const [instituteName, setInstituteName] = useState(''); // For "ชื่อสถาบัน"
  const [gpa, setGpa] = useState(''); // For "ผลการศึกษาเฉลี่ยนสะสมตลอดหลักสูตร"
  const [province, setProvince] = useState(''); // For "จังหวัด"
const [educationStatus, setEducationStatus] = useState(''); // For "สถานะการศึกษา"
const [citizenID, setCitizenID] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [dob, setDOB] = useState(''); // Date of Birth
const [ethnicity, setEthnicity] = useState('');
const [nationality, setNationality] = useState('');
const [religion, setReligion] = useState('');
const [fatherPrefix, setFatherPrefix] = useState('');
const [fatherFirstName, setFatherFirstName] = useState('');
const [fatherLastName, setFatherLastName] = useState('');

const [raceFather, setRaceFather] = useState('');
const [nationalityFather, setNationalityFather] = useState('');
const [contactNumberFather, setContactNumberFather] = useState('');
const [fatherStatus, setFatherStatus] = useState('');

const [motherPrefix, setMotherPrefix] = useState('');
const [motherFirstName, setMotherFirstName] = useState('');
const [motherLastName, setMotherLastName] = useState('');

const [raceMother, setRaceMother] = useState('');
const [nationalityMother, setNationalityMother] = useState('');
const [contactNumberMother, setContactNumberMother] = useState('');
const [motherStatus, setMotherStatus] = useState('');
const [ethnicityEmergency, setEthnicityEmergency] = useState('');
const [nationalityEmergency, setNationalityEmergency] = useState('');
const [contactPhone, setContactPhone] = useState('');
const [militaryCourseCompleted, setMilitaryCourseCompleted] = useState(false);
const [militaryCourseYear, setMilitaryCourseYear] = useState('');
const [childOfMilitary, setChildOfMilitary] = useState(false);
const [dataComplete, setDataComplete] = useState('');
  const [webpageFormat, setWebpageFormat] = useState('');
  const [readableText, setReadableText] = useState('');
  const [webpageSpeed, setWebpageSpeed] = useState('');
  const [usability, setUsability] = useState('');
  const [newsChannels, setNewsChannels] = useState('');
  const [reasonForApplying, setReasonForApplying] = useState('');
  const [promoInterest, setPromoInterest] = useState('');
const [addressRegistered, setAddressRegistered] = useState({
  houseNo: '',
  villageNo: '',
  road: '',
  district: '',
  province: '',
  subDistrict: '',
  postalCode: '',
  phone: '',
  email: ''
});

const [addressCurrent, setAddressCurrent] = useState({
  houseNo: '',
  villageNo: '',
  road: '',
  district: '',
  province: '',
  subDistrict: '',
  postalCode: '',
  phone: '',
  email: ''
});

const [isSameAddress, setIsSameAddress] = useState(false);

useEffect(() => {
  if (isSameAddress) {
    setAddressCurrent(addressRegistered);
  }
}, [isSameAddress, addressRegistered]);





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

    // If it's the last step, compile the data and trigger download
    if (activeStep === steps.length - 1) {
        const data = compileDataToJson();
        console.log(data);
        downloadObjectAsJson(data, "mockdata"); // This will save the file as mockdata.json
    } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    }
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
  const compileDataToJson = () => {
    const data = {
      applicantType: applicantType,
      degree: degree,
      courseType: courseType,
      instituteName: instituteName,
      gpa: gpa,
      province: province,
educationStatus: educationStatus,
citizenID: citizenID,
firstName: firstName,
lastName: lastName,
dob: dob,
ethnicity: ethnicity,
nationality: nationality,
religion: religion,
fatherPrefix: fatherPrefix,
fatherFirstName: fatherFirstName,
fatherLastName: fatherLastName,
raceFather: raceFather,
nationalityFather: nationalityFather,
contactNumberFather: contactNumberFather,
fatherStatus: fatherStatus,
motherPrefix: motherPrefix,
motherFirstName: motherFirstName,
motherLastName: motherLastName,
raceMother: raceMother,
nationalityMother: nationalityMother,
contactNumberMother: contactNumberMother,
motherStatus: motherStatus,
ethnicityEmergency: ethnicityEmergency,
nationalityEmergency: nationalityEmergency,
contactPhone: contactPhone,
militaryCourseCompleted: militaryCourseCompleted,
militaryCourseYear: militaryCourseYear,
childOfMilitary: childOfMilitary,
dataComplete: dataComplete,
webpageFormat: webpageFormat,
readableText: readableText,
webpageSpeed: webpageSpeed,
usability: usability,
newsChannels: newsChannels,
reasonForApplying: reasonForApplying,
promoInterest: promoInterest,
addressRegistered: addressRegistered,
addressCurrent: addressCurrent
    };
  
    return JSON.stringify(data);
  }
  const downloadObjectAsJson = (exportObj, exportName) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

  // You can use the above function wherever you want to get the JSON string.
  
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

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="center mt-5">
              <Typography variant="h4" className="header-text">
                ข้อมูลพื้นฐานผู้สมัคร
              </Typography>
            </div>
            <div className='p-4'>
              <div className='mb-5' style={{ fontSize: '24px', color: '#F00', textAlign: 'start' }}>
                รับเฉพาะเพศชายเท่านั้น
              </div>
              <FormControl className='FormAlign'>
                <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>ประเภทผู้สมัคร</FormLabel>
                <RadioGroup
                  row
                  value={applicantType}
                  onChange={(e) => setApplicantType(e.target.value)}
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="บุคคลพลเรือน" />
                  <FormControlLabel value="male" control={<Radio />} label="ทหารกองหนุน สังกัด กองทัพอากาศ" />
                </RadioGroup>
                <div className='row d-flex'>
                  <div className='col'>
                    <FormLabel id="demo-province-label" style={{ fontSize: '14px' }}>วุฒิการศึกษา</FormLabel>
                    <input
                      type="text"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      placeholder='วุฒิการศึกษา'
                      className='ID-input'
                    />
                  </div>
                  <div className='col'>
                    <FormLabel id="demo-province-label" style={{ fontSize: '14px' }}>แผนการเรียน / ประเภทวิชา</FormLabel>
                    <input
                      type="text"
                      value={courseType}
                      onChange={(e) => setCourseType(e.target.value)}
                      placeholder='แผนการเรียน / ประเภทวิชา'
                      className='ID-input'
                    />
                  </div>

                  <div className='col'>
                    <FormLabel id="demo-province-label" style={{ fontSize: '14px' }}>ชื่อสถาบัน</FormLabel>
                    <input
                      type="text"
                      value={instituteName}
                      onChange={(e) => setInstituteName(e.target.value)}
                      placeholder='ชื่อสถาบัน'
                      className='ID-input'
                    />
                  </div>

                  <div className='col'>
                  <FormLabel id="demo-province-label" style={{ fontSize: '14px' }}>ผลการศึกษาเฉลี่ยนสะสมตลอดหลักสูตร</FormLabel>
                    <input
                      type="text"
                      value={gpa}
                      onChange={(e) => setGpa(e.target.value)}
                      placeholder='ผลการศึกษาเฉลี่ยนสะสมตลอดหลักสูตร'
                      className='ID-input'
                    />
                  </div>
                  <div className='col'></div>
                  <div className='col'></div>
                </div>
                <div className='row d-flex mb-5 align-items-start'>
    <div className='col'>
        <FormLabel id="demo-province-label" style={{ fontSize: '14px' }}>จังหวัด</FormLabel>
        <div>
            <input 
                type="text" 
                value={province} 
                onChange={(e) => setProvince(e.target.value)} 
                placeholder='จังหวัด' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-education-status-label" style={{ fontSize: '14px' }}>สถานะการศึกษา</FormLabel>
        <RadioGroup
            row
            value={educationStatus}
            onChange={(e) => setEducationStatus(e.target.value)}
            aria-labelledby="demo-education-status-label"
            name="education-status-radio-group"
        >
            <FormControlLabel value="studying" control={<Radio />} label="กำลังศึกษาอยู่" />
            <FormControlLabel value="completed" control={<Radio />} label="สำเร็จการศึกษา" />
        </RadioGroup>
    </div>
                  <div className='col'></div>
                  <div className='col'></div>
                  <div className='col'></div>
                </div>
                <div className='m-2' style={{ fontSize: '14px', textAlign: 'start' }}>
                  โปรดระบุชื่อและนามสกุลของท่านให้ตรงตามที่ปรากฎในบัตรประชาชนโดยไม่ต้องกรอกคำนำหน้าชื่อ
                </div>
                <div className='row d-flex mb-3'>
    <div className='col'>
        <FormLabel id="demo-citizen-id-label" style={{ fontSize: '14px' }}>เลขประจำตัวประชาชน</FormLabel>
        <div>
            <input 
                type="text" 
                value={citizenID} 
                onChange={(e) => setCitizenID(e.target.value)} 
                placeholder='เลขประจำตัวประชาชน' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-first-name-label" style={{ fontSize: '14px' }}>ชื่อ</FormLabel>
        <div>
            <input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder='ชื่อ' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-last-name-label" style={{ fontSize: '14px' }}>นามสกุล</FormLabel>
        <div>
            <input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder='นามสกุล' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-dob-label" style={{ fontSize: '14px' }}>เกิดวันที่</FormLabel>
        <div>
            <input 
                type="text" 
                value={dob} 
                onChange={(e) => setDOB(e.target.value)} 
                placeholder='เกิดวันที่' 
                className='ID-input' 
            />
        </div>
    </div>
                  <div className='col'></div>
                  <div className='col'></div>
                </div>
                <div className='row d-flex mb-3'>
    <div className='col'>
        <FormLabel id="demo-ethnicity-label" style={{ fontSize: '14px' }}>เชื้อชาติ</FormLabel>
        <div>
            <input 
                type="text" 
                value={ethnicity} 
                onChange={(e) => setEthnicity(e.target.value)} 
                placeholder='เชื้อชาติ' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-nationality-label" style={{ fontSize: '14px' }}>สัญชาติ</FormLabel>
        <div>
            <input 
                type="text" 
                value={nationality} 
                onChange={(e) => setNationality(e.target.value)} 
                placeholder='สัญชาติ' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-religion-label" style={{ fontSize: '14px' }}>ศาสนา</FormLabel>
        <div>
            <input 
                type="text" 
                value={religion} 
                onChange={(e) => setReligion(e.target.value)} 
                placeholder='ศาสนา' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
</div>

<div className='row d-flex mb-3'>
    <div className='col'>
        <FormLabel id="demo-father-prefix-label" style={{ fontSize: '14px' }}>คำนำหน้าชื่อบิดา</FormLabel>
        <div>
            <input 
                type="text" 
                value={fatherPrefix} 
                onChange={(e) => setFatherPrefix(e.target.value)} 
                placeholder='คำนำหน้าชื่อบิดา' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-father-firstname-label" style={{ fontSize: '14px' }}>ชื่อ</FormLabel>
        <div>
            <input 
                type="text" 
                value={fatherFirstName} 
                onChange={(e) => setFatherFirstName(e.target.value)} 
                placeholder='ชื่อ' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-father-lastname-label" style={{ fontSize: '14px' }}>นามสกุล</FormLabel>
        <div>
            <input 
                type="text" 
                value={fatherLastName} 
                onChange={(e) => setFatherLastName(e.target.value)} 
                placeholder='นามสกุล' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
</div>

<div className='row d-flex mb-3'>
    <div className='col'>
        <FormLabel id="demo-race-label" style={{ fontSize: '14px' }}>เชื้อชาติ</FormLabel>
        <div>
        <input 
    type="text" 
    value={raceFather} 
    onChange={(e) => setRaceFather(e.target.value)} 
    placeholder='เชื้อชาติ' 
    className='ID-input' 
/>
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-nationality-label" style={{ fontSize: '14px' }}>สัญชาติ</FormLabel>
        <div>
            <input 
                type="text" 
                value={nationalityFather} 
                onChange={(e) => setNationalityFather(e.target.value)} 
                placeholder='สัญชาติ' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'>
        <FormLabel id="demo-contact-number-label" style={{ fontSize: '14px' }}>เบอร์โทรศัพท์ที่ติดต่อได้</FormLabel>
        <div>
            <input 
                type="text" 
                value={contactNumberFather} 
                onChange={(e) => setContactNumberFather(e.target.value)} 
                placeholder='เบอร์โทรศัพท์ที่ติดต่อได้' 
                className='ID-input' 
            />
        </div>
    </div>
    <div className='col'></div>
    <div className='col'></div>
    <div className='col'></div>
</div>

                <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>บิดาผู้ให้กำเนิด</FormLabel>
                <RadioGroup
    row
    aria-labelledby="demo-row-radio-buttons-group-label"
    name="father-status"
    value={fatherStatus}
    onChange={(e) => setFatherStatus(e.target.value)}
>
    <FormControlLabel value="alive" control={<Radio />} label="ยังมีชีวิตอยู่" />
    <FormControlLabel value="deceased" control={<Radio />} label="ถึงแก่กรรม" />
</RadioGroup>

                <div className='row d-flex mb-3'>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>คำนำหน้าชื่อมารดา</FormLabel>
                    <div><input type="text" value={motherPrefix} onChange={(e) => setMotherPrefix(e.target.value)} placeholder='คำนำหน้าชื่อมารดา' className='ID-input' /></div>
                  </div>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>ชื่อ</FormLabel>
                    <div><input type="text" value={motherFirstName} onChange={(e) => setMotherFirstName(e.target.value)} placeholder='ชื่อ' className='ID-input' /></div>
                  </div>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>นามสกุล</FormLabel>
                    <div><input type="text" value={motherLastName} onChange={(e) => setMotherLastName(e.target.value)} placeholder='นามสกุล' className='ID-input' /></div>
                  </div>
                  <div className='col'></div>
                  <div className='col'></div>
                  <div className='col'></div>
                </div>
                <div className='row d-flex mb-3'>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>เชื้อชาติ</FormLabel>
                    <div><input 
    type="text" 
    value={raceMother} 
    onChange={(e) => setRaceMother(e.target.value)} 
    placeholder='เชื้อชาติ' 
    className='ID-input' 
/></div>
                  </div>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>สัญชาติ</FormLabel>
                    <div><input type="text" value={nationalityMother} onChange={(e) => setNationalityMother(e.target.value)} placeholder='สัญชาติ' className='ID-input' /></div>
                  </div>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>เบอร์โทรศัพท์ที่ติดต่อได้</FormLabel>
                    <div><input type="text" value={contactNumberMother} onChange={(e) => setContactNumberMother(e.target.value)} placeholder='เบอร์โทรศัพท์ที่ติดต่อได้' className='ID-input' /></div>
                  </div>
                  <div className='col'></div>
                  <div className='col'></div>
                  <div className='col'></div>
                </div>
                <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>มารดาผู้ให้กำเนิด</FormLabel>
                <RadioGroup
    row
    aria-labelledby="demo-row-radio-buttons-group-label"
    name="mother-status"
    value={motherStatus}
    onChange={(e) => setMotherStatus(e.target.value)}
>
    <FormControlLabel value="alive" control={<Radio />} label="ยังมีชีวิตอยู่" />
    <FormControlLabel value="deceased" control={<Radio />} label="ถึงแก่กรรม" />
</RadioGroup>
                <div className='text-center' style={{ fontSize: '24px' }}>บุคคลที่สามารถติดต่อได้</div>
                <div className='row d-flex mb-3'>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>เชื้อชาติ</FormLabel>
                    <div><input type="text" value={ethnicityEmergency} onChange={(e) => setEthnicityEmergency(e.target.value)} placeholder='เชื้อชาติ' className='ID-input' /></div>
                  </div>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>สัญชาติ</FormLabel>
                    <div><input type="text" value={nationalityEmergency} onChange={(e) => setNationalityEmergency(e.target.value)} placeholder='สัญชาติ' className='ID-input' /></div>
                  </div>
                  <div className='col'>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>เบอร์โทรศัพท์ที่ติดต่อได้</FormLabel>
                    <div><input type="text" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder='เบอร์โทรศัพท์ที่ติดต่อได้' className='ID-input' /></div>
                  </div>
                  <div className='col'></div>
                  <div className='col'></div>
                  <div className='col'></div>
                </div>
                <div className='text-center m-5' style={{ fontSize: '24px' }}>การขอรับสิทธิคะแนนเพิ่มพิเศษ</div>
                <div className='d-flex mb-5'>
                <FormControlLabel
          control={
            <Checkbox 
              checked={militaryCourseCompleted} 
              onChange={(e) => setMilitaryCourseCompleted(e.target.checked)} 
            />
          }
          label=""
          labelPlacement="end"
        />

                  {/* Custom label with dropdown */}
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
                    เป็นผู้สำเร็จฝึกวิชาทหาร ชั้นปีที่
                    <FormControl variant="outlined" size="small" style={{ marginLeft: '8px', marginRight: '8px' }}>
          <Select
            value={militaryCourseYear}
            onChange={(e) => setMilitaryCourseYear(e.target.value)}
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
          control={
            <Checkbox 
              checked={childOfMilitary} 
              onChange={(e) => setChildOfMilitary(e.target.checked)} 
            />
          }
                  label="เป็นบุตรของทหาร ข้าราชการ หรือลูกจ้าง ซึ่งได้กระทำหน้าที่ในระหว่างที่มีการรบหรือสงครามหรือมีการปราบปรามการจลาจล หรือในระหว่างที่มีพระบรมราชโอการสถานการณ์ฉุกเฉิน ซึ่งมีสิธิได้บีบเวลาราชการเป็นทวีคูณตามกฎหมายว่าด้วยการบำเหน็จ
          บำนาญ ข้าราชการ หรือเป็นบุตรของทหาร ข้าราชการ หรือลูกจ้าง ซึ่งต้องมีประสบอันตรายถึงทุพพลภาพ ในขณะปฎิบัติราชการในหน้าที่ หรือถูก ประทุษร้ายเพราะเหตุการณ์ทำตามหน้าที่ หรือต้องบาดเจ็บถึงตายเพราะเหตุนั้น ซึ่งได้รับบำเหน็จบำนาญพิเศษ
          ตามกฎหมายว่าด้วยบำเหน็จ บำนาญข้าราชการหรือได้รับเงินทำขวัญตามระเบียบกระทรวงการคลังว่าด้วยเงินทำขวัญข้าราชการและลูกจ้างหรือบุตรของผู้ที่ได้รับพระราชทาน เหรียญดุษฏีมาลาเข็มกล้าหาญหรือเหรียญกล้าหาญ"
                  labelPlacement="end"
                />
              </FormControl>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <Box className="p-5">
              <div className="center mt-5">
                <Typography variant="h4" className="header-text">
                  ที่อยู่ตามทะเบียนบ้าน
                </Typography>
              </div>
              <div className='row d-flex mb-3'>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>เลขที่บ้าน</FormLabel>
                  <div><input 
  type="text" 
  value={addressRegistered.houseNo} 
  onChange={(e) => setAddressRegistered(prevState => ({
      ...prevState, 
      houseNo: e.target.value
  }))} 
  placeholder='เลขที่บ้าน' 
  className='ID-input' 
/>
</div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>หมู่</FormLabel>
                  <div><input type="text" value={addressRegistered.villageNo} onChange={(e) => setAddressRegistered.villageNo(e.target.value)} placeholder='หมู่' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>ถนน / ซอย</FormLabel>
                  <div><input type="text" value={addressRegistered.road} onChange={(e) => setAddressRegistered.road(e.target.value)} placeholder='ถนน / ซอย' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>อำเภอ</FormLabel>
                  <div><input type="text" value={addressRegistered.district} onChange={(e) => setAddressRegistered.district(e.target.value)} placeholder='อำเภอ' className='ID-input' /></div>
                </div>
                <div className='col'></div>
                <div className='col'></div>
              </div>
              <div className='row d-flex mb-3'>( โปรดระบุที่อยู่ของท่านโดยละเอียด เช่น บ้านเลขที่ หมู่บ้าน อาคาร ชั้น ซอย และถนน )</div>
              <div className='row d-flex mb-3'>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>จังหวัด</FormLabel>
                  <div><input type="text" value={addressRegistered.province} onChange={(e) => setAddressRegistered.province(e.target.value)} placeholder='จังหวัด' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>อำเภอ / เขต</FormLabel>
                  <div><input type="text" value={addressRegistered.district} onChange={(e) => setAddressRegistered.district(e.target.value)} placeholder='อำเภอ / เขต' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>ตำบล / แขวง</FormLabel>
                  <div><input type="text" value={addressRegistered.subDistrict} onChange={(e) => setAddressRegistered.subDistrict(e.target.value)} placeholder='ตำบล / แขวง' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>รหัสไปรษณีย์</FormLabel>
                  <div><input type="text" value={addressRegistered.postalCode} onChange={(e) => setAddressRegistered.postalCode(e.target.value)} placeholder='รหัสไปรษณีย์' className='ID-input' /></div>
                </div>
                <div className='col'></div>
                <div className='col'></div>
              </div>
              <div className='row d-flex mb-3'>
              <FormControlLabel
        value="end"
        control={<Checkbox checked={isSameAddress} onChange={() => setIsSameAddress(prev => !prev)} />}
        label="ที่อยู่ปัจจุบันเป็นที่อยู่เดียวกับที่อยู่ตามทะเบียนบ้าน"
        labelPlacement="end"
      /></div>
              <div className="center mt-5 mb-5">
                <Typography variant="h4" className="header-text">
                  ที่อยู่ปัจจุบัน
                </Typography>
              </div>
              <div className='row d-flex mb-3'>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>เลขที่บ้าน</FormLabel>
                  <div><input type="text" value={addressCurrent.houseNo} onChange={(e) => setAddressCurrent.houseNo(e.target.value)} placeholder='เลขที่บ้าน' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>หมู่</FormLabel>
                  <div><input type="text" value={addressCurrent.villageNo} onChange={(e) => setAddressCurrent.villageNo(e.target.value)} placeholder='หมู่' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>ถนน / ซอย</FormLabel>
                  <div><input type="text" value={addressCurrent.road} onChange={(e) => setAddressCurrent.road(e.target.value)} placeholder='ถนน / ซอย' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>อำเภอ</FormLabel>
                  <div><input type="text" value={addressCurrent.district} onChange={(e) => setAddressCurrent.district(e.target.value)} placeholder='อำเภอ' className='ID-input' /></div>
                </div>
                <div className='col'></div>
                <div className='col'></div>
              </div>
              <div className='row d-flex mb-3'>( โปรดระบุที่อยู่ของท่านโดยละเอียด เช่น บ้านเลขที่ หมู่บ้าน อาคาร ชั้น ซอย และถนน )</div>
              <div className='row d-flex mb-3'>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>จังหวัด</FormLabel>
                  <div><input type="text" value={addressCurrent.province} onChange={(e) => setAddressCurrent.province(e.target.value)} placeholder='จังหวัด' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>อำเภอ / เขต</FormLabel>
                  <div><input type="text" value={addressCurrent.district} onChange={(e) => setAddressCurrent.district(e.target.value)} placeholder='อำเภอ / เขต' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>ตำบล / แขวง</FormLabel>
                  <div><input type="text" value={addressCurrent.subDistrict} onChange={(e) => setAddressCurrent.subDistrict(e.target.value)} placeholder='ตำบล / แขวง' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>รหัสไปรษณีย์</FormLabel>
                  <div><input type="text" value={addressCurrent.postalCode} onChange={(e) => setAddressCurrent.postalCode(e.target.value)} placeholder='รหัสไปรษณีย์' className='ID-input' /></div>
                </div>
                <div className='col'></div>
                <div className='col'></div>
              </div>
              <div className='row d-flex mb-3'>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>เบอร์โทรศัพท์ที่ติดต่อได้</FormLabel>
                  <div><input type="text" value={addressCurrent.phone} onChange={(e) => setAddressCurrent.phone(e.target.value)} placeholder='เบอร์โทรศัพท์ที่ติดต่อได้' className='ID-input' /></div>
                </div>
                <div className='col'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>อีเมล์</FormLabel>
                  <div><input type="text" value={addressCurrent.email} onChange={(e) => setAddressCurrent.email(e.target.value)} placeholder='อีเมล์' className='ID-input' /></div>
                </div>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
              </div>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Box className="p-5">
              <div className="center mt-5 mb-5">
                <Typography variant="h4" className="header-text">
                  แบบสอบถามความพึงพอใจที่มีต่อระบวนการรับสมัครเข้าเป็นนักเรียนจ่าอากาศ
                </Typography>
              </div>
              <div className='row d-flex mb-3'>ส่วนที่ 1 รูปแบบข้อมูลและการใช้งานหน้าเว็บเพ็จ</div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="data-complete-label" className='mt-2 mb-2' style={{ fontWeight: '700' }}>ข้อมูลในระเบียบการรับสมัครครบถ้วน อธิบายชัดเจน เป็นประโยชน์ต่อการสมัคร</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
              <RadioGroup
            row
            aria-labelledby="data-complete-label"
            name="dataComplete"
            value={dataComplete}
            onChange={(e) => setDataComplete(e.target.value)}
          >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="webpageFormat-lable" className='mt-2 mb-2' style={{ fontWeight: '700' }}>รูปแบบเว็บเพจมีความทันสมัย รูปภาพและสี มีความเหมาะสม น่าสนใจ</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
                <RadioGroup
                  row
                  aria-labelledby="webpageFormat-lable"
                  name="webpageFormat"
                  value={webpageFormat}
            onChange={(e) => setWebpageFormat(e.target.value)}
                >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="readableText-lable" className='mt-2 mb-2' style={{ fontWeight: '700' }}>อักษร อ่านง่าย ชัดเจน</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
                <RadioGroup
                  row
                  aria-labelledby="readableText-lable"
                  name="readableText"
                  value={readableText}
            onChange={(e) => setReadableText(e.target.value)}
                >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="webpageSpeed-lable" className='mt-2 mb-2' style={{ fontWeight: '700' }}>ความรวดเร็วในการเข้าถึงหน้าเว็บเพจ</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
                <RadioGroup
                  row
                  aria-labelledby="webpageSpeed-lable"
                  name="webpageSpeed"
                  value={webpageSpeed}
            onChange={(e) => setWebpageSpeed(e.target.value)}
                >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="usability-lable" className='mt-2 mb-2' style={{ fontWeight: '700' }}>ใช้งานง่าย สะดวก ไม่ซับซ้อน</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
                <RadioGroup
                  row
                  aria-labelledby="usability-lable"
                  name="usability"
                  value={usability}
            onChange={(e) => setUsability(e.target.value)}
                >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="newsChannels-lable" className='mt-2 mb-2' style={{ fontWeight: '700' }}>ช่องทางการรับทราบข่าวสารในการรับสมัคร ( สามารถต้อบได้มากกว่า 1 ข้อ )</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
                <RadioGroup
                  row
                  aria-labelledby="newsChannels-lable"
                  name="newsChannels"
                  value={newsChannels}
            onChange={(e) => setNewsChannels(e.target.value)}
                >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="reasonForApplying-lable" className='mt-2 mb-2' style={{ fontWeight: '700' }}>มูลเหตุจูงใจที่ทำให้ท่านมาสมัครเข้าเป็นนักเรียนจ่าอากาศ ( สามารถตอบได้มากกว่า 1 ข้อ )</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
                <RadioGroup
                  row
                  aria-labelledby="reasonForApplying-lable"
                  name="reasonForApplying"
                  value={reasonForApplying}
            onChange={(e) => setReasonForApplying(e.target.value)}
                >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='scoreheader FormAlign ps-2'>
                <FormLabel id="promoInterest-lable" className='mt-2 mb-2' style={{ fontWeight: '700' }}>ข้อมูลในการประชาสัมพันธ์น่าสนใจและเป็นประโยชน์</FormLabel>
              </div>
              <div className='scorebody FormAlign pt-2 ps-2'>
                <RadioGroup
                  row
                  aria-labelledby="promoInterest-lable"
                  name="promoInterest"
                  value={promoInterest}
            onChange={(e) => setPromoInterest(e.target.value)}
                >
                  <FormControlLabel value="worst" control={<Radio />} label="น้อยที่สุด" />
                  <FormControlLabel value="notgood" control={<Radio />} label="น้อย" />
                  <FormControlLabel value="normal" control={<Radio />} label="น้อยปานกลาง" />
                  <FormControlLabel value="good" control={<Radio />} label="มาก" />
                  <FormControlLabel value="best" control={<Radio />} label="มากที่สุด" />
                </RadioGroup>
              </div>
              <div className='row d-flex mb-3 mt-3'>
                <div className='col text-start'>
                  <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: '14px' }}>ข้อเสนอแนะ</FormLabel>
                  <div><input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} placeholder='ข้อเสนอแนะ' className='ID-input' /></div>
                </div>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
              </div>
              <div style={{ textAlign: "start" }}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="ข้าพเจ้าเต็มใจและยินยอมให้โรงเรียนจ่าอากาศ ฯ ใช้ข้อมูลส่วนบุคคลเพื่อการดำเนินการรับสมัคร ฯ และบรรจุเข้าเป็นนักเรียนจ่ากาศ"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="ข้าพเจ้า ขอให้คำรับรองว่าก่อนที่จะกรอกใบสมัคร ข้า ฯ ได้อ่านและทำความเข้าใจเนื้อความ ในคำแนะนำการสมัครของโรงเรียนจ่าอากาศ ที่ได้เผยแพร่ไว้เป็นอย่างที่ดีแล้ว ซึ่งต้องตรวจสอบตำแหน่งที่จะสมัครสอบและขอรับรองตนเองว่ามีคุณสมบัติทั่วไป"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="ข้าพเจ้า รู้แล้วว่าการเลือกเหล่าจะกระทำภายหลังการประกาศผลสอบคัดเลือกขั้นสุดท้าย และใช้คำแนะนำรวมทั้งสิ้นของการสอบคัดเลือกเป็นเกณฑ์ตัดสิน ผู้ที่มีคะแนนรวม ทั้งสิ้นสูงกว่า มีสิทธิ์เลือกเข้าการศึกษาในเหล่าทหารได้ตามความประสงค์ เว้นแต่ในเหล่าทหารนั้นมีผู้คะแนนสูงทั้งสิ้นที่สูงกว่า บรรจุไว้เต็มจำนวนแล้ว"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="ข้าพเจ้า ยินยอม/อนุญาต ให้ทางคณะกรรมการของโรงเรียนจ่าอากาศ เข้าถึงข้อมูลส่วนตัวของผู้สมัครบนสื่อออนไลน์ เช่น เฟสบุ๊ค เอ็กซ์ เป็นตั้น เพื่อเป็นประโยชน์แก่ทาง ข้าราชการ ตลอดระยะเวลาที่ผู้สมัครเข้าศึกษาที่โรงเรียนจ่าอากาศ โดยคุ้มครองข้อมูลส่วนบุคคลเป็นไปตามที่แจ้งไว้ในนโยบายคุ้มครองข้อมูลส่วนบุคคล/การแจ้งการ ประมวลผลข้อมูลส่วนบุคคล"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="ข้าพเจ้า ขอให้คำรับรองว่า ข้อความดังกล่าวข้างต้นนี้ เป็นจริงทุกประการ"
                  labelPlacement="end"
                />
              </div>
              <div className="center mt-5">
                <Typography className="header-text" style={{ fontSize: '20px' }}>
                  ( กรุณาตรวจสอบข้อมูลที่กรอกในใบสมัครไห้ถูกต้องและครบถ้วน ก่อนกดปุ่ม “ยืนยันข้อมูล” ซึ่งหลังจากกดปุ่มจะไม่สามารถแก้ไขข้อมูลได้อีกแล้ว )
                </Typography>
              </div>
            </Box>
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <Header />
      <Box sx={{ width: '100%', backgroundColor: '#3D3AD8' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>
        {getStepContent(activeStep)}
      </div>
      <div>
        <div className="footer-buttons">
          <Button variant="contained" color="primary" style={{ backgroundColor: '#A2A9AD', borderRadius: '0', color: '#000' }} disabled={activeStep === 0} onClick={handleBackStep}>
            กลับ
          </Button>
          <Button variant="contained" color="primary" type='submit' style={{ backgroundColor: '#1A8FDD', borderRadius: '0', color: '#000' }} onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'ถัดไป'}
          </Button>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Form;