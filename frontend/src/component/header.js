import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './header.css';
import Logo from '../img/Logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navigateToPDFPage = (header, pdfName) => {
    if (header === 'หน้าหลัก') {
      navigate('/');
    } else {
      navigate('/page', { state: { header, pdfName } });
    }
  }

  return (
    <AppBar position="static" className="myAppBar">
      <Toolbar className="flex-between">
        <div className="menu-items">
          <img src={Logo} alt="Logo" onClick={() => navigate('/')} style={{ width: '95px', height: '96px', cursor:'pointer' }} />
          <div className='link' onClick={() => navigateToPDFPage('หน้าหลัก')}>หน้าหลัก</div>
          <div className='link' onClick={() => navigateToPDFPage('แบบฟอร์มเอกสาร', 'form')}>แบบฟอร์มเอกสาร</div>
          <div className='link' onClick={() => navigateToPDFPage('คุณสมบัติผู้สมัคร', 'Qualifications')}>คุณสมบัติผู้สมัคร</div>
          <div className='link' onClick={() => navigateToPDFPage('ข้อมูลเหล่าทหาร', 'soldierBranch')}>ข้อมูลเหล่าทหาร</div>
          <div className='link' onClick={() => navigateToPDFPage('การสอบ', 'exam')}>การสอบ</div>
          <div className='link' onClick={() => navigateToPDFPage('การตรวจร่างกายทางการแพทย์', 'checkup')}>การตรวจร่างกายทางการแพทย์</div>
          <div className='link' onClick={() => navigateToPDFPage('ถามตอบสารพันปัญหา', 'QA')}>ถามตอบสารพันปัญหา</div>
          <div className='link' onClick={() => navigateToPDFPage('ติดต่อเรา', 'contract')}>ติดต่อเรา</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
