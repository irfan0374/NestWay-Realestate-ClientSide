
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { addProperty } from '../../Api/partnerApi'
import { propertyValidationSchema } from '../../schema/Partnervalidation/PropertyValidation'
import { useSelector } from 'react-redux'
import AddPropertyModal from './AddPropertyModal'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { FaTimes } from 'react-icons/fa';
import { partnerLogout } from '../../Redux/Slice/partnerSlice'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const handleLogout = async () => {
    localStorage.removeItem("partnerToken")
    dispatch(partnerLogout())
    navigate('/partner/registration')
  }
  return (
    <>
      <div className="navbar bg-black">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">nestWay</a>
        </div>
        <div className="flex-none space-x-6">
          <button className="btn btn-outline text-gray-600" onClick={() => document.getElementById('my_modal_4').showModal()}>
            Add Property</button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/src/assets/profile.png" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>

      </div>
      
      <AddPropertyModal/>
    </>
  )
}

export default Navbar
