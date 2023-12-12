import React, { useState } from 'react'
import SideBarFilter from '../../Component/userComponent.js/SideBarFilter'
import MainCard from '../../Component/CommonComponent/MainCard'
import Footer from '../../Component/CommonComponent/Footer'
import { useLocation } from 'react-router-dom'
import Loading from '../../Component/Loading/Loading'
import Navbar2 from '../../Component/userComponent.js/Navbar2'

const SearchProperty = () => {
    const [loading,setLoading]=useState(false)
   const location= useLocation()
   const {searchProperty}=location.state
  

  return (
    <>
    <div className='mb-28'>
      <Navbar2 />
    </div>

    <div className=' text-2xl font-normal m-12 '>Rent</div>
    {loading ? (
      <Loading />
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-[25%,75%] mt-3 gap-1  px-2">
        {/* ===== FROM SECTION ======== */}
      <SideBarFilter/>
        {/* ======= */}
        <div className="lg:order-2 h-full overflow-y-auto border rounded-lg px-2 py-3 ">
          <div className="overflow-y-auto flex flex-wrap justify-center">
          
              {/* <MainCard /> */}
      
          </div>
          
        </div>
      </div>
    )}
    <Footer />
  </>
  )
}

export default SearchProperty
