import React, { useEffect, useState } from 'react'
import ChatNav from '../../../Component/chatComponet/ChatNav'
import MainPage from '../../../Component/chatComponet/MainPage'
import { useParams } from 'react-router-dom'
import { findPartner } from '../../../Api/userApi'
import Loading from '../../../Component/Loading/Loading'

const ChatPage = () => {
    const {partnerId}=useParams()
    const [partner,setpartner]=useState()
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        findPartner(partnerId).then((res)=>{
            setLoading(false)
            setpartner(res?.data?.Partner)
            
        }).catch((error)=>{
            setLoading(false)

            console.log(error.message)
        })

    },[partnerId])
  return (
    <>
    {loading?(<Loading/>):(  <> <ChatNav/> <MainPage data={partner}/></>)}
    </>
  )
}

export default ChatPage
