import React, { useEffect, useState } from 'react'
import NavBar from '../../Component/adminComponet.js/NavBar'
import ApprovalCard from '../../Component/adminComponet.js/ApprovalCard'
import { useParams } from 'react-router-dom'
import { findProperty } from '../../Api/adminApi'
import PropertyApprovalCard from '../../Component/adminComponet.js/PropertyApproval'
import Loading from '../../Component/Loading/Loading'

const PropertyApproval = () => {
    const [propertyData, setPropertyApproval] = useState()
    const { propertyId } = useParams()
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        findProperty(propertyId)
        setLoading(true)
            .then((res) => {
                if (res.status === 200) {
                    setPropertyApproval(res?.data?.property)
                    setLoading(false)

                }
            }).catch((error) => {
                console.log(error.message)
            })
    }, [propertyId])

    return (
        <>
            <NavBar />
            {loading ? (<Loading/>) : (<PropertyApprovalCard props={propertyData} />)}
        </>
    )
}

export default PropertyApproval
