import React, { useEffect, useState } from 'react'
import ChatNav from '../../../Component/userComponent.js/chatComponet/ChatNav'
import MainPage from '../../../Component/userComponent.js/chatComponet/MainPage'
import { useParams } from 'react-router-dom'

import Loading from '../../../Component/Loading/Loading'
import { useSelector } from 'react-redux'


const ChatPage = () => {
    const { partnerId } = useParams()
    const {user}=useSelector((state)=>state.userReducer)
   const userId=user._id
   const [loading, setLoading] = useState(false)



    return (
        <>
            {loading ? (<Loading />) : (<> <ChatNav /> <MainPage /></>)}
        </>
    )
}

export default ChatPage
