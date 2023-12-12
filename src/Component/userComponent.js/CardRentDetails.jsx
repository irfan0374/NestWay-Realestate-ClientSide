import React, { useState, useEffect } from 'react'
import { BhkDataRent, RentBudget, RentData } from '../../Api/userApi'
import Loading from '../Loading/Loading'
import MainCard from '../CommonComponent/MainCard'

const CardRentDetails = ({ datas,values }) => {
  console.log(datas,values,"valuessssssssss")
 
  const [RentProperty, setRentProperty] = useState([])
  const [loading, setLoading] = useState(false)

  const budgetRent = async () => {
   
    try {
      setLoading(true)
      const res = await RentBudget(datas)

      if (res?.status === 200) {
     
        setLoading(false)
        setRentProperty(res?.data?.Result)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
  }

  const RentDetails = async () => {
   
    try {
      setLoading(true)
      const res = await RentData(datas)
      if (res?.status === 200) {
        setLoading(false)
        setRentProperty(res?.data?.Result)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
  }
  const propertyByBhk=async()=>{
    try {
      setLoading(true)
      const res = await BhkDataRent(datas)
      if (res?.status === 200) {
        setLoading(false)
        setRentProperty(res?.data?.Result)
      }
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
  }


  useEffect(() => {
    if(values==="property"){
      console.log(datas,values,"property nnnnnnnnnnnnnnnnn")
      RentDetails()
    }else if(values==="budget"){
     budgetRent()
    }else{
      propertyByBhk()
    }

  }, [values])


  return (
    <>
      {loading ? (<Loading />) : (<div>

        <div className=" grid grid-cols-4 gap-2">
        {RentProperty.map((data) => (
          <div key={data._id}>
            <MainCard property={data} />
              </div>
        ))}

        </div>
      </div>)}
    </>
  )
}

export default CardRentDetails
