import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailLogin from '../Pages/partnerPages/LoginPage/detailLogin'
import Registration from '../Pages/partnerPages/LoginPage/registration'
import PartnerSignup from '../Pages/partnerPages/LoginPage/partnerSignup'
import PartnerOtp from '../Pages/partnerPages/LoginPage/partnerOtp'
import PartnerProtect from './partnerPrivate/PartnerProtector'
import PartnerPublic from './partnerPrivate/PartnerPublic'
import PartnerHome from '../Pages/partnerPages/PartnerHome'
const PartnerRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<PartnerPublic><DetailLogin/></PartnerPublic>}/>
        <Route path='/registration' element ={<PartnerPublic><Registration/></PartnerPublic>}/>
        <Route path='/otp' element ={<PartnerPublic><PartnerOtp/></PartnerPublic>}/>
        <Route path='/home' element={<PartnerHome/>}/>
        
    </Routes>
    </>
  )
}

export default PartnerRoute