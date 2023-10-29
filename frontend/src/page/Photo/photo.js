import React, { useState } from 'react';
import Header from '../../component/header';  
import { Button, Typography } from '@mui/material';
import './photo.css'; 
import example from '../../img/example.jpg';
import exampleRow from '../../img/examplerow.jpg';
import { useNavigate,useLocation   } from 'react-router-dom';

const Photo = () => {
  const location = useLocation();
  const citizenID = location.state?.citizenID;
  const [imagePhoto, setImagePhoto] = useState(null);
  const [imageIDCard, setImageIDCard] = useState(null);
  const fileInputRefPhoto = React.createRef();
  const fileInputRefIDCard = React.createRef();
  const navigate  = useNavigate();

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleDivClickPhoto = () => {
    fileInputRefPhoto.current.click();
};

const handleDivClickIDCard = () => {
    fileInputRefIDCard.current.click();
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Pass the images as state to the /form route
  navigate('/form', { state: { imagePhoto, imageIDCard ,citizenID} });
};

  const handleBack = (e) => {
    e.preventDefault();
    // Implement your login logic here
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="center mt-5">
        <Typography variant="h4" className="header-text">
          อัพโหลดรูปภาพสำหรับการสมัครสอบ
        </Typography>
        <div className="example-image-grid">
          <div className='row'>
          <div className='col'>
        <div className='col'>
      <img src={example} alt="Example 1" className="example-image example"/>
      <div>รูปถ่ายที่ถูกต้อง</div>
</div>
<div className='col'>
      <img src={exampleRow} alt="Example 2" className="example-image exampleRow"/>
      <div>ตัวอย่างรูปบัตรประชาชนที่ถูกต้อง</div>
      </div>
      </div>
      </div>
      <div className='row'>
          <div className='col'>
        <div className='col'>
        <div className='row'>
          <div className='col'>
      <img src={example} alt="Example 1" className="example-image example"/>
      </div>
      <div className='col'>
      <img src={example} alt="Example 1" className="example-image example"/>
      </div>
      <div className='col'>
      <img src={example} alt="Example 1" className="example-image example"/>
      </div>
      </div>
      <div>รูปถ่ายที่ไม่ถูกต้อง</div>
      </div>
      <div className='col'>
      <img src={exampleRow} alt="Example 2" className="example-image exampleRow"/>
      <div>ตัวอย่างรูปบัตรประชาชนที่ไม่ถูกต้อง</div>
      </div>
      </div>
      </div>
        </div>
        <div className="background-text">
        ผู้สมัครโปรดใช่รูปถ่ายครึ่งตัว ขนาด 1 นิ้วเท่านั้น หน้าตรงไม่สวมหมวกและแว่นตาสีเข้ม ซึ่งถ่ายไม่เกิน 6 เดือน ( นับถึงวันปิดรับสมัคร ) และบัตรประจำตัวประชาชน ( ฉบับจริง ) เท่านั้น ( ใช้บัตรอื่นทางราชการออกให้ แทนไม่ได้ ) หากรูปถ่ายรูปบัตรประชาชนไม่ถูกต้องตามที่ระบุในประกาศรับสมัคร อาจจะถูกพิจารณาตัดสิทธิ์
        </div>
        <div>
        {imagePhoto && <img src={imagePhoto} alt="Uploaded Photo" className="uploaded-image"/>}
      </div>
      <div>
      {imageIDCard && <img src={imageIDCard} alt="Uploaded ID Card" className="uploaded-image"/>}
      </div>

      <div className='upload-container'>
        <div className='d-flex justify-content-between row'>
          <div className='col'>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => handleImageChange(e, setImagePhoto)} 
              ref={fileInputRefPhoto} 
              style={{ display: 'none' }}
            />
            <div onClick={handleDivClickPhoto} className="custom-upload-button">
    อัพโหลด รูปถ่าย
</div>
          </div>
          <div className='col'>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => handleImageChange(e, setImageIDCard)} 
              ref={fileInputRefIDCard} 
              style={{ display: 'none' }}
            />
            <div onClick={handleDivClickIDCard} className="custom-upload-button">
    อัพโหลด รูปบัตรประชาชน
</div>
          </div>
        </div>
      </div>
        <div className="footer-buttons">
          <Button variant="contained" color="primary" style={{backgroundColor:'#A2A9AD',borderRadius:'0',color:'#000'}} onClick={handleBack}>
          กลับ
          </Button>
          <Button variant="contained" color="primary" type='submit' style={{backgroundColor:'#1A8FDD',borderRadius:'0',color:'#000'}} onClick={handleSubmit}>
          ถัดไป
          </Button>
        </div>
      </div>
    </>
  
  );
  

};

export default Photo;
