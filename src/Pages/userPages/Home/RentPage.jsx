import React,{useState,useEffect} from 'react'
import MainCard from '../../../Component/CommonComponent/MainCard'
import Navbar2 from '../../../Component/userComponent.js/Navbar2'
import { rentProperty } from '../../../Api/userApi'
import Loading from '../../../Component/Loading/Loading'
import { useSelector } from 'react-redux'
import Footer from '../../../Component/CommonComponent/Footer'
const RentPage = () => {
  // const {user}=useSelector((state)=>state.userReducer)
    const [property,setProperty]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        rentProperty().then((res)=>{
           setProperty(res?.data?.rentProperty)

        }).catch((error)=>{
            console.log(error.message)
        }).finally(()=>{
            setLoading(false)
        })
    },[])
  return (
    <>
  <div className='mb-28'>
<Navbar2 />
</div>
    <div className=' text-2xl font-normal m-12 '>Rent</div>
    {loading ? (
      <Loading />
    ) : (
      <div className="mx-auto grid grid-cols-4">
        {property.map((data) => (
          <MainCard property={data} />
        ))}
      </div>
    )}
    <Footer/>
  </>
);
        }
export default RentPage;
