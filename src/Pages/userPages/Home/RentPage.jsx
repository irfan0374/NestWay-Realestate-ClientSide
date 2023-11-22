import React,{useState,useEffect} from 'react'
import MainCard from '../../../Component/CommonComponent/MainCard'
import Navbar from '../../../Component/userComponent.js/Navbar'
import { rentProperty } from '../../../Api/userApi'
import Loading from '../../../Component/Loading/Loading'
const RentPage = () => {
    const [property,setProperty]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        rentProperty().then((res)=>{
            console.log(res,"dataaa")
           setProperty(res?.data?.rentProperty)

        }).catch((error)=>{
            console.log(error.message)
        }).finally(()=>{
            setLoading(false)
        })
    },[])
  return (
    <>
    <Navbar />
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
  </>
);
        }
export default RentPage;
