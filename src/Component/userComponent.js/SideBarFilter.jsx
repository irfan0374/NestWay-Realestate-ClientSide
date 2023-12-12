import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import GoogleSearch from './googleSearch';
import { useLocation } from 'react-router-dom';
const SideBarFilter = () => {
    const location=useLocation()
    const [locations,setLocations]=useState()
    const{propertyType,propertyFor}=location.state
    const handleLocationSearch=(selectedLocation)=>{
        setLocations(selectedLocation.place_name)
    }
    return (
        <>
            <div className="flex flex-col lg:border-1 border  py-2">
                <div >
                    <div className='flex justify-center'>
                        <h1 className='font-bold'>Location Search</h1>

                    </div>


                    <div className='flex relative h-16 w-full justify-center border-2 rounded-2xl'>
                        <GoogleSearch onLocationSelect={handleLocationSearch} />
                    </div>
                </div>

                <div className='px-2 border-b py-2'>
                    <div className='flex justify-center px-2 py-3 border rounded-lg bg-gray-400 font-bold font-serif'>
                        Property for
                    </div>
                    {propertyFor.map((data)=>(

                    <div key={data} className='flex  px-2 py-3 border rounded-lg mt-1 '>
                        <input type="checkbox" className="checkbox" />
                        <h1 className='font-sans px-3'>{data}</h1>
                    </div>
                    ))}
                   

                </div>
                <div className='px-2 border-b py-2'>
                    <div className='flex justify-center px-2 py-3 border rounded-lg bg-gray-400 font-bold font-serif'>
                        Property Type
                    </div>
                    {propertyType.map((data)=>(
                        
                        <div key={data} className='flex  px-2 py-3 border rounded-lg mt-1 '>
                        <input type="checkbox" className="checkbox" />
                        <h1 className='font-sans px-3'>{data}</h1>
                    </div>
                        ))}
                  
                </div>

            </div>
        </>
    )
}

export default SideBarFilter
