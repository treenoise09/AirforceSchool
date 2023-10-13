import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';
import Logo from '../img/Logo.png';

const Header = () => {
  return (
    <AppBar position="static" className="myAppBar">
      <Toolbar className="flex-between">
      <div className="menu-items">
        <img src={Logo} alt="Logo" style={{ width: '95px',height: '96px'}} />
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">หน้าหลัก</Typography></Link>
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">แบบฟอร์มเอกสาร</Typography></Link>
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">คุณสมบัติผู้สมัคร</Typography></Link>
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">ข้อมูลเหล่าทหาร</Typography></Link>
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">การตรวจร่างกายทางแพทย์</Typography></Link>
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">การสอบ</Typography></Link>
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">ถามตอบสารพันปัญหา</Typography></Link>
          <Link to="/blankpage"><Typography variant="body1" className="myTypography">ติดต่อเรา</Typography></Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
