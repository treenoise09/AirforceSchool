import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './header';
import { useUser } from './UserContext'; 

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = useUser();
  // Check if userData exists in location state before accessing it
  const bufferToBase64 = (buf) => {
    return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

  if (!userData) {
    // Handle the case where userData is not available
    // You can choose to navigate to another page or display an error message.
    return (
      <>
        <Header />
        <Box className="p-5">
          <div className="center mt-5" style={{ backgroundColor: '#000a23', color: "#fff" }}>
            <Typography variant="h4" className="header-text">
              Error: User Data Not Found
            </Typography>
          </div>
        </Box>
      </>
    );
  }

   return (
        <>
            <Header />
            <Box className="p-5">
                <div className="center mt-5" style={{ backgroundColor: '#000a23', color: "#fff" }}>
                    <Typography variant="h4" className="header-text">
                        ข้อมูลผู้สมัคร
                    </Typography>
                </div>
                <div className="center p-5" style={{ boxShadow: "2px 2px 5px black", height: 'auto' }}>
                    <div className='row' style={{ width: "100vh" }}>
                        <div className='col-4 d-flex flex-column align-items-center'>
                            <Typography>
                                รูปถ่ายหน้าตรง
                            </Typography>
                            <img src={bufferToBase64(userData.imagePhoto)} alt="User's Photo" />
                        </div>
                        <div className='col-4 d-flex flex-column align-items-center'>
                            <Typography>
                                รูปถ่ายบัตรประชาชน
                            </Typography>
                            <img src={bufferToBase64(userData.imageIDCard)} alt="User's ID Card" />
                        </div>
                        <div className='col-4 d-flex flex-column align-self-center text-start'>
                            <p>เลขประจำตัวประชาชน: {userData.citizenID}</p>
                            <p>ชื่อ: {userData.firstName} {userData.lastName}</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </Box>
        </>
    );
}

export default Profile;