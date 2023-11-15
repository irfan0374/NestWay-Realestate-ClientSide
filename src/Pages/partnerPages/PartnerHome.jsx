import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/userComponent.js/Navbar';
import PartnerCard from '../../Component/partnerComponent.js/PartnerCard';
import { listProperty } from '../../Api/partnerApi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

  const PartnerHome = () => {
    const { _id } = useSelector((state) => state.partnerReducer.partner);
    const partnerId = _id;
    const [myProperty, setProperty] = useState([]);
    const navigate = useNavigate();
    const propertystate =useSelector((state)=>state.partnerReducer.propertystate)


  useEffect(() => {
    listProperty(partnerId)
      .then((res) => {
        setProperty(res?.data?.Property);
       
      })
      .catch((error) => {
        console.lo(error.message);
        if (error.response?.status) {
          navigate('/partner/login');
          toast.error(error.response?.data?.message);
        }
      });
  }, [partnerId]);

  useEffect(()=>{
    listProperty(partnerId)
      .then((res) => {
        setProperty(res?.data?.Property);
       
      })
      .catch((error) => {
        console.error(error.message);
        if (error.response?.status) {
          navigate('/partner/login');
          toast.error(error.response?.data?.message);
        }
      });

  },[propertystate ])


  return (
    <>
    <Navbar/>
      <div className='font-bold text-2xl m-4 '>My property</div>
      <div className=' flex flex-col-1'>

      
      {myProperty.map((data) => (
        <Link to={`/partner/propertyDetail/${data._id}`}>       
         <div key={data._id}className='grid-cols-2'>
          <PartnerCard imgsrc={data.propertyImage[0]}>
            <h1>{data.propertyName}</h1>
            <p>{data.description}</p>
          </PartnerCard>
        </div>
        </Link>

      ))}
      </div>
    </>
  );
};

export default PartnerHome;
