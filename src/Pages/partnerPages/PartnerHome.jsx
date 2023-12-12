import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/partnerComponent.js/Navbar';
import PartnerCard from '../../Component/partnerComponent.js/PartnerCard';
import { listProperty } from '../../Api/partnerApi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Component/Loading/Loading';

  const PartnerHome = () => {
    const { _id } = useSelector((state) => state.partnerReducer.partner);
    const [loading,setLoading]=useState(false)
    const partnerId = _id;
    const [myProperty, setProperty] = useState([]);
    const navigate = useNavigate();
    const propertystate =useSelector((state)=>state.partnerReducer.propertystate)


  useEffect(() => {
    setLoading(true)
    listProperty(partnerId)
      .then((res) => {
        setProperty(res?.data?.Property);
        setLoading(false)
       
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
    setLoading(true)
    listProperty(partnerId)
      .then((res) => {
        setProperty(res?.data?.Property);
        setLoading(false)
       
      })
      .catch((error) => {
        console.error(error.message);
        if (error.response?.status) {
          navigate('/partner/login');
          toast.error(error.response?.data?.message);
        }
      });

  },[propertystate])


  return (
    <>
    <Navbar/>
      <div className='font-bold text-2xl m-4 '>My property</div>
     {loading?(<Loading/>):( <div className=' flex flex-col-1'>

      
{myProperty.map((data) => (
    
   <div  key={data._id} className='grid-cols-2'onClick={()=>navigate('/partner/propertyDetail',{state:{data:data._id,role:"partner"}})}>
    <PartnerCard imgsrc={data.propertyImage[0]}>
      <h1>{data.propertyName}</h1>
      <p>{data.propertyFor}</p>
    </PartnerCard>
  </div>

))}
</div>)}
    </>
  );
};

export default PartnerHome;
