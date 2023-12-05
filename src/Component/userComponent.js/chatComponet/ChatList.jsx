import React, { useEffect,useState } from 'react'
import { findPartner } from '../../../Api/chatAxios'


const ChatList = ({data,currentUserId}) => {

    const [partnerData,setpartnerData]=useState(null)

   
    useEffect(()=>{
        const partnerId=data?.members?.find((id)=>id !==currentUserId)
               
        const getPartner=async()=>{
            try{
                console.log(partnerId,"partnerId")
                const {data}=await findPartner(partnerId)
                setpartnerData(data)
    
            }catch(error){
                console.log(error.message)
            }
        }
        getPartner()
    },[data,currentUserId])
  return (
    <>
        <div className="flex flex-row px-5 py-3 justify-center items-center border-b-2 bg-gray-200 hover:bg-gray-50">
      <div className="w-1/4">
        <img
          src={partnerData?.profile || "/images/person-304893_1280.png"}
          className="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="text-lg font-semibold">{partnerData?.name}</div>
        <span className="text-gray-500"></span>
      </div>
    </div>
    <hr style={{width:"85%", border:"0.1px solid #ececec"}}/>
    </>
 
  )
}

export default ChatList
