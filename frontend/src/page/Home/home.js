import React from 'react';
import './home.css';
import Logo from '../../img/Logo.png'
import BG from '../../img/bgAir.png'
import BTN from '../../img/register.png'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();

    const navigateToPDFPage = (header, pdfName) => {
        navigate('/page', { state: { header, pdfName } });
    }

    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-md-8 left-half">
                <img src={Logo} alt="Logo" />
      <h1>โรงเรียนจ่าอากาศ</h1>
      <h2 className='pb-5'>กรมยุทธศึกษาทหารอากาศ</h2>
      <div className='pb-5'>
      <img style={{width: '50%'}} src={BG} alt="Logo" />
      </div>
      <div onClick={() => navigate('/login')}>
                    <img style={{width: '50%'}} src={BTN} alt="Logo" />
                </div>
                </div>
                <div className="col-md-4 right-half">
                    <div className='row' style={{width:'90%',justifyContent:'center'}}>
                        <div className='side p-5' onClick={() => navigateToPDFPage('หน้าหลัก')}>หน้าหลัก</div>
                        <div className='side p-5' onClick={() => navigateToPDFPage('แบบฟอร์มเอกสาร','form')}>แบบฟอร์มเอกสาร</div>
                        <div className='side p-5' onClick={() => navigateToPDFPage('คุณสมบัติผู้สมัคร','Qualifications')}>คุณสมบัติผู้สมัคร</div>
                        <div className='side p-5' onClick={() => navigateToPDFPage('ข้อมูลเหล่าทหาร','soldierBranch')}>ข้อมูลเหล่าทหาร</div>
                        <div className='side p-5' onClick={() => navigateToPDFPage('การสอบ','exam')}>การสอบ</div>
                        <div className='side p-5' onClick={() => navigateToPDFPage('การตรวจร่างกายทางการแพทย์','checkup')}>การตรวจร่างกายทางการแพทย์</div>
                        <div className='side p-5' onClick={() => navigateToPDFPage('ถามตอบสารพันปัญหา','QA')}>ถามตอบสารพันปัญหา</div>
                        <div className='side p-5' onClick={() => navigateToPDFPage('ติดต่อเรา','contract')}>ติดต่อเรา</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
