import React from 'react';
import { useState } from 'react';
import './nav.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const NavigationBar = () => {
    const navigate = useNavigate();
const [anchorEl, setAnchorEl] = useState(null);
const location = useLocation();
const header = location.state?.header || "คำแนะนำการใช้งาน";
const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
const navigateToPDFPage = (header, pdfName) => {
    navigate('/page', { state: { header, pdfName } }); // Send both header and pdfName
    handleMenuClose();
};


    const home = () => {
        navigate('/');
    };
    return (
        <div className="navigation-bar">
            <span>{header}</span>
                <button className="download-btn">DOWNLOAD</button>
                <div className="icons">
                    <span>🔍</span>  {/* Magnifying glass icon */}
                    <span onClick={home}>🏠</span>  {/* Home icon */}
                    <span onClick={handleMenuOpen}>
                        ☰
                    </span>
                    <Menu 
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                            <MenuItem value={'หน้าหลัก'} onClick={() => navigateToPDFPage('หน้าหลัก')}>หน้าหลัก</MenuItem>
                            <MenuItem value={'แบบฟอร์มเอกสาร'} onClick={() => navigateToPDFPage('แบบฟอร์มเอกสาร')}>แบบฟอร์มเอกสาร</MenuItem>
                            <MenuItem value={'คุณสมบัติผู้สมัคร'} onClick={() => navigateToPDFPage('คุณสมบัติผู้สมัคร','คุณสมบัติผู้สมัคร')}>คุณสมบัติผู้สมัคร</MenuItem>
                            <MenuItem value={'ข้อมูลเหล่าทหาร'} onClick={() => navigateToPDFPage('ข้อมูลเหล่าทหาร','ข้อมูลเหล่าทหาร')}>ข้อมูลเหล่าทหาร</MenuItem>
                            <MenuItem value={'การสอบ'} onClick={() => navigateToPDFPage('การสอบ')}>การสอบ</MenuItem>
                            <MenuItem value={'การตรวจร่างกายทางการแพทย์'} onClick={() => navigateToPDFPage('การตรวจร่างกายทางการแพทย์')}>การตรวจร่างกายทางการแพทย์</MenuItem>
                            <MenuItem value={'ถามตอบสารพันปัญหา'} onClick={() => navigateToPDFPage('ถามตอบสารพันปัญหา','QA')}>ถามตอบสารพันปัญหา</MenuItem>
                            <MenuItem value={'ติดต่อเรา'} onClick={() => navigateToPDFPage('ติดต่อเรา')}>ติดต่อเรา</MenuItem>
                        
                    </Menu>{/* Menu icon */}
                </div>
            </div>
    );
}

export default NavigationBar;