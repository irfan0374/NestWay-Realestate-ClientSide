import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";

const   MainCard = ({ property }) => {

  return (
    <>
      <div className="max-w-sm bg-white border rounded-b-lg border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 my-4 mx-4 relative overflow-hidden">

        <img className="w-full h-[350px]" src={property.propertyImage[1]} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{property.propertyName}</h5>
          <p className="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">{property.propertyType}</p>
          <h5 className=" flex line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400"><span><CiLocationOn /></span>{property.location}</h5>
        </div>
        <div className='flex justify-end'>
            <Link to={`/propertyDetails/${property._id}`}>

        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">More</button>
            </Link>
        </div>

        <div className='flex items-center border-t-2 mx-3'>
          <VscAccount />
          <Link to={`/AgentDetails/${property.partnerId._id}`}>
            <div className='mx-4 my-4'>
              {property.partnerId.name}
            </div>
          </Link>
        </div>

      
      </div>
    </>
  );
};

export default MainCard;
