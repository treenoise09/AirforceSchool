import React from 'react';
import './App.css';
import Login from './page/Login/login';
import Photo from './page/Photo/photo'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './page/Form/form';
import Home from './page/Home/home';
import PDFPage from './page/Pdf/pdf';
import { UserProvider } from './component/UserContext';
import Profile from './component/profile';
function App() {
  return (
    
    <Router>
      <UserProvider>
       <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/photo" element={<Photo />} />
      <Route path='/form' element={<Form/>}/>
      <Route path='/page' element={<PDFPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </div>
    </UserProvider>
    </Router>
    
  );
}

export default App;
