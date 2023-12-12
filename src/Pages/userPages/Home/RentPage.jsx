import React, { useState, useEffect } from 'react'
import MainCard from '../../../Component/CommonComponent/MainCard'
import Navbar2 from '../../../Component/userComponent.js/Navbar2'
import { rentProperty } from '../../../Api/userApi'
import Loading from '../../../Component/Loading/Loading'

import Footer from '../../../Component/CommonComponent/Footer'

import SideBarFilter from '../../../Component/userComponent.js/SideBarFilter'


const RentPage = () => {
  // const {user}=useSelector((state)=>state.userReducer)
  const [property, setProperty] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    rentProperty().then((res) => {
      setProperty(res?.data?.rentProperty)

    }).catch((error) => {
      console.log(error.message)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
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
              {property.map((data) => (
                <MainCard key={data?._id} property={data} />
              ))}
            </div>
            <div className="join">
              <button className="join-item btn btn-sm">1</button>
              <button className="join-item btn btn-sm btn-active">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">4</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
export default RentPage;



