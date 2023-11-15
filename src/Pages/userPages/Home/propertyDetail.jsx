import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropertyDetails from '../../../Component/CommonComponent/PropertyDetail'
import { detailProperty } from '../../../Api/userApi'
import Navbar from '../../../Component/userComponent.js/Navbar'
const PropertyDetail = () => {
    const[property,setProperty]=useState()
    const {propertyId}=useParams()
    const [loading,setLoading]=useState(true)

        useEffect(()=>{
            detailProperty(propertyId)
            .then((res)=>{
          
                setProperty(res?.data?.Property)
               
            }).catch((error)=>{
                console.log(error.message)
            }).finally(()=>{
                setLoading(false)
            })
        },[propertyId])

  return (
   <>
   <Navbar/>
   {loading?(<p>loading</p>):( 
   <div>
   <PropertyDetails myProperty={property}/>
   </div>
   )
}
   </>
  )
}

export default PropertyDetail
