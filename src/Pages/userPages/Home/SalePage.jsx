import React,{useState,useEffect} from 'react'
import Navbar from '../../../Component/userComponent.js/Navbar'
import MainCard from '../../../Component/CommonComponent/MainCard'
import { saleProperty } from '../../../Api/userApi'
import Loading from '../../../Component/Loading/Loading'
const SalePage = () => {
    const [loading,setLoading]=useState(true)
    const [property,setProperty]=useState([])
    useEffect(()=>{
        saleProperty().then((res)=>{
            setProperty(res?.data?.saleProperty)
        }).catch((error)=>{
            console.log(error.message)
        }).finally(()=>{
            setLoading(false)
        })
    },[])
  return (
    <>
  <Navbar/>
  <div className=' text-2xl font-normal m-12 h- '>sales</div>
  {loading?(<Loading/>):(
    <div className="mx-auto grid grid-cols-4">
    {property.map((data)=>(
    
        <MainCard property={data}/>
        ))}
         </div>

  )}

    </>
  )
}

export default SalePage
