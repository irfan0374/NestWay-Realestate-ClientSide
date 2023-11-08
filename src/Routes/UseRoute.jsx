import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Login } from '../Pages/userPages/Login/Login';
import Homepage from '../Pages/userPages/Home/Home';
import Otp from '../Pages/userPages/Otp';
import UserPublic from './UserPrivate/UserPublic';
import UserProtect from './UserPrivate/UserProtect';

const UseRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<UserPublic><Login /></UserPublic>} />
      <Route path='/otp' element={<UserPublic><Otp /></UserPublic>} />
    </Routes>
  );
};

export default UseRoute;
