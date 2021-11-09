import React from 'react';
import {Route, Routes,Link } from 'react-router-dom';
import useAuth from './components/auth/useAuth';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App(){
  return(
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/*' element={<Admin />} />      
      </Routes>
    </>
  );
}


export default App;
