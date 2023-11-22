import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Login } from '../Pages/userPages/Login/Login';
import Homepage from '../Pages/userPages/Home/Home';
import Otp from '../Pages/userPages/Otp';
import UserPublic from './UserPrivate/UserPublic';
import UserProtect from './UserPrivate/UserProtect';
import PropertyPage from '../Pages/userPages/Home/propertyPage';
import PropertyDetail from '../Pages/userPages/Home/propertyDetail';
import Profile from "../Pages/userPages/Home/Profile"
import SentMailCard from '../Component/userComponent.js/sentMailCard';
import RentPage from '../Pages/userPages/Home/RentPage';
import SalePage from '../Pages/userPages/Home/SalePage';

const UseRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<UserPublic><Login /></UserPublic>} />
      <Route path='/otp' element={<UserPublic><Otp /></UserPublic>} />
      <Route path='/propertyList' element={<PropertyPage />} />
      <Route path='/propertyDetails/:id' element={<PropertyDetail />} />
      <Route path='/account' element={<UserProtect><Profile/></UserProtect>} />
      <Route path='/rent' element={<RentPage/>} />
      <Route path='/sale' element={<SalePage/>} />




      <Route path='/sample' element={<SentMailCard/>} />
    </Routes>
  );
};

export default UseRoute;
