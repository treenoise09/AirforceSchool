import React, { useState } from 'react';
import './pdf.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Document, Page } from 'react-pdf';
import { QA } from '../../pdfs/QA';
import { pdfjs } from 'react-pdf';
import { checkup } from './../../pdfs/checkup';
import { Qualifications } from './../../pdfs/Qualifications';
import { soldierBranch } from './../../pdfs/soldierBranch';
import {form} from '../../pdfs/form';
import ContactDetails from '../../component/ContactDetails';
import { exam } from './../../pdfs/exam';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFPage() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page


    const location = useLocation();
    const header = location.state?.header || "คำแนะนำการใช้งาน";
    const pdfName = location.state?.pdfName || "default";
    const pdfMapping = {
        'QA': QA,
        'checkup': checkup,
        'Qualifications': Qualifications,
        'soldierBranch': soldierBranch,
        'form': form,
        'exam': exam
        
    };
    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
      function previousPage() {
        changePage(-1);
      }
    
      function nextPage() {
        changePage(1);
      }

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

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <div className="pdf-page-container">
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
                            <MenuItem value={'แบบฟอร์มเอกสาร'} onClick={() => navigateToPDFPage('แบบฟอร์มเอกสาร','form')}>แบบฟอร์มเอกสาร</MenuItem>
                            <MenuItem value={'คุณสมบัติผู้สมัคร'} onClick={() => navigateToPDFPage('คุณสมบัติผู้สมัคร','Qualifications')}>คุณสมบัติผู้สมัคร</MenuItem>
                            <MenuItem value={'ข้อมูลเหล่าทหาร'} onClick={() => navigateToPDFPage('ข้อมูลเหล่าทหาร','soldierBranch')}>ข้อมูลเหล่าทหาร</MenuItem>
                            <MenuItem value={'การสอบ'} onClick={() => navigateToPDFPage('การสอบ','exam')}>การสอบ</MenuItem>
                            <MenuItem value={'การตรวจร่างกายทางการแพทย์'} onClick={() => navigateToPDFPage('การตรวจร่างกายทางการแพทย์','checkup')}>การตรวจร่างกายทางการแพทย์</MenuItem>
                            <MenuItem value={'ถามตอบสารพันปัญหา'} onClick={() => navigateToPDFPage('ถามตอบสารพันปัญหา','QA')}>ถามตอบสารพันปัญหา</MenuItem>
                            <MenuItem value={'ติดต่อเรา'} onClick={() => navigateToPDFPage('ติดต่อเรา','contract')}>ติดต่อเรา</MenuItem>
                        
                    </Menu>{/* Menu icon */}
                </div>
            </div>
            <div className="pdf-viewer container-fluid">
            {pdfName === 'contract' ? (
        <ContactDetails />
    ) : (
        <>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Document
                        file={pdfMapping[pdfName]}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page wrap={true} renderTextLayer={false} renderAnnotationLayer={false} scale={9.0} pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <p>
                        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                    </p>
                    <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )}
</div>
</div>
    );
}

export default PDFPage;