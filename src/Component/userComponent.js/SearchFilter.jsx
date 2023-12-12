import React, { useEffect, useState } from 'react';
import GoogleSearch from './googleSearch';
import { getThePropertyType, searchProperty } from '../../Api/userApi';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SearchFilter = ({}) => {
  const navigate=useNavigate()
  const [propertyFor, setPropertyfor] = useState([]);
  const[pickuplocation,setPickUpLocation]=useState('')
  const [propertyType, setPropertyType] = useState([]);
  const [searchProperties,setsearchProperties]=useState([])

  const handleLocationSelect = (selectedLocation) => {
    setPickUpLocation(selectedLocation.place_name)
  }


  const onSubmit = async() => {
    try {
      const result=await searchProperty({...values,pickuplocation})
      if(result?.status===201){
        setsearchProperties(result?.data?.Property)
        navigate('/searchProperty',{state:{searchProperty:searchProperties,propertyFor:propertyFor,propertyType:propertyType}})
      }
    } catch (error) {
      toast.error(error?.response?.message)
      console.log(error.message)
    }
  };

  const{values,errors,handleSubmit,getFieldProps}=useFormik({
    initialValues:{
      propertytype:"",
      propertfor:""
    },
    onSubmit,
  })

  const TypesofProperty = async () => {
    try {
      const res = await getThePropertyType()
      if (res?.status === 200) {

        setPropertyfor(res?.data?.propertyFor)
        setPropertyType(res?.data?.propertyType)
      }

    } catch (error) {
      toast.error("something went Wong")
      console.log(error.message)
    }
  }

  useEffect(() => {
    TypesofProperty()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-screen-xl mx-auto shadow-lg ">
        <div className="  bg-opacity-30 p-8 shadow-lg rounded-xl flex flex-col gap-8 border border-slate-100 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <label htmlFor="pickUpLocation" className="text-blue-500 block mb-2">
                Property location
              </label>
              <div className=''>
                <GoogleSearch onLocationSelect={handleLocationSelect} />


              </div>
            </div>

            <div>
              <label htmlFor="propertyStatus" className="text-blue-500 block mb-2">
                Property For
              </label>
              <select
               name="propertfor"
              className="select w-full max-w-xs"
              {...getFieldProps("propertfor")}
              >
                <option  selected>Pick the purpose</option>
                {propertyFor.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="propertyType" className="text-blue-500 block ">
                Property Type
              </label>
              <select 
              name="propertytype"
              className="select w-full max-w-xs "
              {...getFieldProps("propertytype")}
              >
                <option  selected>Pick the property Type</option>
                {propertyType.map((data) => (
                  <option key={data} value={data}>{data}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn-primary rounded-lg p-2">
            Find your property
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchFilter;
