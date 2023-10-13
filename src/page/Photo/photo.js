import React, { useState } from 'react';
import Header from '../../component/header';  
import { Button, Typography } from '@mui/material';
import './photo.css'; 
import example from '../../img/example.jpg';
import exampleRow from '../../img/examplerow.jpg';
import { useNavigate  } from 'react-router-dom';

const Photo = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = React.createRef();
  const navigate  = useNavigate();


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleDivClick = () => {
    fileInputRef.current.click();
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
        <div className='upload-container'>
          <div className='d-flex justify-content-between row'>
            <div className='col'>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          ref={fileInputRef} 
          style={{ display: 'none' }}
        />
        <div onClick={handleDivClick} className="custom-upload-button">
        อัพโหลด รูปถ่าย
        </div>
        </div>
        <div className='col'>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          ref={fileInputRef} 
          style={{ display: 'none' }}
        />
        <div onClick={handleDivClick} className="custom-upload-button">
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
