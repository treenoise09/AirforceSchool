import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/login.css';
import Logo from '../../img/Logo.png';
import ReCAPTCHA from "react-google-recaptcha";
import Header from '../../component/header';
import {login} from '../../api/api'; // Import your API module
import { useUser } from '../../component/UserContext';

const Login = () => {
  const [citizenID, setCitizenID] = useState('');
  const { userData, setUserData, setLogin } = useUser();
  const [captcha,setCaptcha] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(captcha === ''){
      alert("Please verify captcha")
      return 
    }
    if(citizenID.length !== 13){
      alert("Citizen Id should be exactly 13 characters long")
      return
    }
    try {
      const response = await login({ citizenID });

      if (response.data) {
        setUserData(response.data); // Set user data in the context
        setLogin(true)
        navigate('/register/profile', { state: { userData: response.data } });
      } else {
        setLogin(true)
        navigate('/register/photo', { state: { citizenID } });
      }
    } catch (error) {
      console.error("Login error:", error);
      return alert("Please try again.")
    }
  };

  const handleRecaptcha = (value) => {
    setCaptcha(value)
  }

  return (
    <>
      <div className='nav-container' style={{position: 'relative'}}>
        <Header />
      </div>
      <div className="container">
        <img src={Logo} alt="Logo" />
        <h1>ระบบสมัคร Online</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              เลขบัตรประจำตัวประชาชน
              <div>
                <input type="text" value={citizenID} onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if(value.length <= 13){
                    setCitizenID(value)
                  }
                }} maxLength="13" placeholder='เลขบัตรประจำตัวประชาชน' className='ID-input' />
              </div>
            </label>
          </div>
          <div style={{justifyContent: "center", display: "flex"}}>
            <ReCAPTCHA sitekey="6LfQ4BsoAAAAABTYHI7E-6BjBAZS_BAsHWTWYZrz" onChange={handleRecaptcha} />
          </div>
          <div style={{color:'#7E1919'}}>ผู้สมัครกรุณาอ่านเพื่อทำความเข้าใจก่อนเข้าสู่ระบบสมัคร</div>
          <div style={{color:'#B7B4B4'}}>ท่านต้องการดำเนินการสมัครด้วยตนเองเท่านั้น หากให้ผู้อื่นดำเนินการแทนแล้วข้อมูลของท่านไม่ถูกต้องท่านอาจเสียสิทธิ์ในการสมัครสอบ</div>
          <button type="submit">เข้าสู่ระบบ</button>
        </form>
      </div>
    </>
  );
};

export default Login;
