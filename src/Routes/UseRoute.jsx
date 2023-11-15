import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Login } from '../Pages/userPages/Login/Login';
import Homepage from '../Pages/userPages/Home/Home';
import Otp from '../Pages/userPages/Otp';
import UserPublic from './UserPrivate/UserPublic';
import UserProtect from './UserPrivate/UserProtect';
import PropertyPage from '../Pages/userPages/Home/propertyPage';
import PropertyDetail from '../Pages/userPages/Home/propertyDetail';

const UseRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<UserPublic><Login /></UserPublic>} />
      <Route path='/otp' element={<UserPublic><Otp /></UserPublic>} />
      <Route path='/propertyList' element={<UserProtect><PropertyPage /></UserProtect>} />
      <Route path='/propertyDetails/:propertyId' element={<UserProtect><PropertyDetail /></UserProtect>} />
    </Routes>
  );
};

export default UseRoute;
