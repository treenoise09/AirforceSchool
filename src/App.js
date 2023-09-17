import React from 'react';
import './App.css';
import Login from './page/Login/login';
import Photo from './page/Photo/photo'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './page/Form/form';

function App() {
  return (
    <Router>
       <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/photo" element={<Photo />} />
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
