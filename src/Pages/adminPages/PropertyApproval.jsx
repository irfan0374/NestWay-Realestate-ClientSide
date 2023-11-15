import React,{useEffect,useState} from 'react'
import NavBar from '../../Component/adminComponet.js/NavBar'
import ApprovalCard from '../../Component/adminComponet.js/ApprovalCard'
import { useParams } from 'react-router-dom'
import { findProperty } from '../../Api/adminApi'
import PropertyApprovalCard from '../../Component/adminComponet.js/PropertyApproval'

const PropertyApproval = () => {
    const [propertyData,setPropertyApproval]=useState()
    const {propertyId}=useParams()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        findProperty(propertyId)
        .then((res)=>{
            if(res.status===200){
                setPropertyApproval(res?.data?.property)
            }
        }).catch((error)=>{
            console.log(error.message)
        }).finally(()=>{
            setLoading(false)
        })
    },[propertyId])
    console.log(propertyData,"hsdflkj")
  return (
   <>
   <NavBar/>
  {loading?(<p>Loading</p>):( <PropertyApprovalCard props={propertyData}/>)}
   </>
  )
}

export default PropertyApproval
