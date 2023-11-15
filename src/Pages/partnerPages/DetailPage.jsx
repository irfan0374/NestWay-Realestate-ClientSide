import React, { useEffect, useState } from 'react'
import PropertyDetail from '../../Component/CommonComponent/PropertyDetail'
import { useParams } from 'react-router-dom'
import { propertylist } from '../../Api/partnerApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../../Component/userComponent.js/Navbar'

const DetailPage = () => {
    const navigate=useNavigate()
    const [propertyDetail,setPropertyDetail]=useState()
    const {propertyId}=useParams()
    const [loading,setLoading]=useState(true)
    
   useEffect(()=>{
    propertylist(propertyId)
    .then((res)=>{
        setPropertyDetail(res?.data?.detailProperty)

    }).catch((error)=>{
        console.log(error.message)
        if(error.response?.status){
            navigate('/partner/partnerHome')
            toast.error(error.response?.data?.message)
        }

    }).finally(()=>{
        setLoading(false)
    })
    
   },[propertyId])


  return (
   <>
   <Navbar/>
   {
loading?(<p>loading</p>):(   <PropertyDetail myProperty={propertyDetail}/>
)
   }
   </>
  )
}

export default DetailPage
