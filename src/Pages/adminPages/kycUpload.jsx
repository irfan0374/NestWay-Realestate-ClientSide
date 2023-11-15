import React, { useState, useEffect } from 'react'
import Navbar from "../../Component/adminComponet.js/NavBar"
import ApprovalCard from '../../Component/adminComponet.js/ApprovalCard'
import { useParams } from 'react-router-dom'
import { findPartner } from '../../Api/adminApi'

const kycUpload = () => {
    const [partnerdata, setPartnerData] = useState()
    const { partnerId } = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        findPartner(partnerId)
            .then((res) => {
                console.log(res?.data)
                if(res.status===200){

                    setPartnerData(res?.data?.partnerGet)
                }
                console.log(partnerdata, "datatata ")

            }).catch((error) => {
                console.log(error.message)

            }).finally(() => {
                setLoading(false)
            })
    }, [partnerId])
    console.log(partnerdata, "datatata ")
    return (
        <>
            <Navbar />
            {loading ? (<p>loading</p>) : (<ApprovalCard props={partnerdata} />)}
        </>
    )
}

export default kycUpload
