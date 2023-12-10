import React,{useState,useEffect} from 'react'
import Navbar2 from '../../../Component/userComponent.js/Navbar2'
import MainCard from '../../../Component/CommonComponent/MainCard'
import { saleProperty } from '../../../Api/userApi'
import Loading from '../../../Component/Loading/Loading'
import Footer from '../../../Component/CommonComponent/Footer'
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
   <div className='mb-28'>
<Navbar2 />
</div>
  <div className=' text-2xl font-normal m-12 h- '>sales</div>
  {loading?(<Loading/>):(
    <div className="mx-auto grid grid-cols-4">
    {property.map((data)=>(
    
        <MainCard property={data}/>
        ))}
         </div>

  )}
  <Footer/>

    </>
  )
}

export default SalePage
