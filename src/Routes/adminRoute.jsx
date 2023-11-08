import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminLogin from '../Pages/adminPages/adminLogin/adminLogin'
import ShowList from '../Pages/adminPages/List'
import PartnerLists from '../Pages/adminPages/partnerList'
import AdminProtect from './AdminPrivate/AdminProtect'
import AdminPublic from './AdminPrivate/AdminPublic'
const AdminRoute = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<AdminPublic><AdminLogin/></AdminPublic>}/>
        <Route path='/dashboard' element={<AdminProtect><ShowList/></AdminProtect>} />
        <Route path='/partnerList' element={<AdminProtect><PartnerLists/></AdminProtect>} />
    </Routes>
    </>
  )
}
export default AdminRoute