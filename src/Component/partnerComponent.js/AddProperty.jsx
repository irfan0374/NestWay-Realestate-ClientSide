// import React, { useState } from 'react'
// import Navbar from './Navbar'
// import { useFormik } from 'formik'
// import { addProperty } from '../../Api/partnerApi'
// import { propertyValidationSchema } from '../../schema/Partnervalidation/PropertyValidation'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// const AddProperty = () => {
//   const navigate=useNavigate()
//   const [propertyImage, setPropertyImage] = useState([])
//   const [propertyFor,setPropertyFor] = useState('')
//   const [bhk,setBhk] = useState('')
//   const {_id}=useSelector(state=>state.partnerReducer.partner)
//   const partnerId=_id
//   const onSubmit = async () => {
//     try {

//       const res = await addProperty({ ...values, propertyImage,bhk,propertyFor,partnerId })
//       if(res?.status===200){
//         console.log("successfully added")
//       console.log(res)



//       }

//     } catch (error) {
//       console.log(error.message, "error in response")
//     }
//   }
//   const { values, errors, touched, checked, getFieldProps, handleSubmit } = useFormik({
//     initialValues: {
//       type: "",
//       propertyname: "",
//       state: "",
//       city: "",
//       price: "",
//       floor: "",
//       bathrooms: "",
//       description: "",
//     },
   
//     onSubmit,
//   })
//   console.log(values)
//   const handleRadioButton1 = e => {
    
//    setPropertyFor(e.target.value)
//   }
//   const handleRadioButton2 = e => {
    
//     setBhk(e.target.value)
//    }
//   console.log(bhk,"kfkds")



//   const handleImage = (e) => {
//     const file = Array.from(e.target.files)
//     setImageToBase(file)
//   }

//   const setImageToBase = (file) => {

//     for (let i = 0; i < file.length; i++) {
//       const reader = new FileReader()
//       reader.readAsDataURL(file[i])
//       reader.onloadend = () => {
//         setPropertyImage((prev) => [...prev, reader.result])
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>



//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
//               <div className="sm:col-span-2">
//                 <h1 className='font-bold p-2'>Tell us little about your property</h1>
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div>
//                     Property for*
//                   </div>
//                   <input
//                     type="radio"
//                     id="propertyType1"
//                     name="propertyFor"
//                     value="property1"
//                     required
//                     onChange={e => handleRadioButton1(e)}
//                     className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-blue-300"
//                   />
//                   <label for="propertyType1" class="block text-sm font-medium text-gray-900 dark:text-white">Rent/Lease</label>

//                   <input
//                     type="radio"
//                     id="Propertyfor2"
//                     name="propertyFor"
//                     value="property2"
//                     onChange={e => handleRadioButton1(e)}
//                     className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-blue-300"
//                   />
//                   <label for="propertyType2" class="block text-sm font-medium text-gray-900 dark:text-white">Sell</label>
//                 </div>
//                 <div className='my-3'>
//                   <label
//                     htmlFor="type"
//                     className="block text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Property type
//                   </label>
//                   <select
//                     id="type"
//                     name="type"
//                     {...getFieldProps("type")}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   >
//                     <option selected="">Select category</option>
//                     <option value="FL">Flat</option>
//                     <option value="AT">Appartment</option>
//                     <option value="HS">Independent/House</option>
//                     <option value="OF">Office Space</option>
//                     <option value="OT">Other</option>
//                   </select>
//                 </div>

//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Property Name
//                 </label>
//                 <input
//                   type="text"
//                   name="propertyname"
//                   id="name"
//                   {...getFieldProps("propertyname")}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Property name"
//                   required=""
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="state"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >

//                   State
//                 </label>
//                 <input
//                   type="text"
//                   name="state"
//                   id="state"
//                   {...getFieldProps("state")}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter the state"
//                   required=""
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="city"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >

//                   City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   {...getFieldProps("city")}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter the city"
//                   required=""
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="city"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >

//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   {...getFieldProps("city")}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Enter the exact location"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="Property-floor"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Property of floor
//                 </label>
//                 <input
//                   type="number"
//                   name="floor"
//                   id="floor"
//                   {...getFieldProps("floor")}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder={1}
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="Property-floor"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   no.of Bathroom
//                 </label>
//                 <input
//                   type="number"
//                   name="bathrooms"
//                   id="bathrooms"
//                   {...getFieldProps("bathrooms")}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder={1}
//                   required=""
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="price"
//                   className="block  text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Expected Price
//                 </label>
//                 <input
//                   type="price"
//                   name="price"
//                   id="price"
//                   {...getFieldProps("price")}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="₹2999"
//                   required=""
//                 />
//               </div>

              



//               <div className="my-3 flex flex-col">
//                 <label
//                   htmlFor="bhk"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   No. of Bedrooms
//                 </label>


//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="radio"
//                     id="1rk"
//                     name="bhk"
//                     value="1rk"
//                     onChange={e => handleRadioButton2(e)}

//                     className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-blue-300"
//                   />
//                   <label htmlFor="1rk" className="text-gray-700">
//                     1RK
//                   </label>
//                   <input
//                     type="radio"
//                     id="1bhk"
//                     name="bhk"
//                     value="1bhk"
//                     onChange={e => handleRadioButton2(e)}
//                     className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-blue-300"
//                   />
//                   <label htmlFor="1bhk" className="text-gray-700">
//                     1BHK
//                   </label>
//                   <input
//                     type="radio"
//                     id="2bhk"
//                     name="bhk"
//                     value="2bhk"
//                     onChange={e => handleRadioButton2(e)}
//                     className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-blue-300"
//                   />
//                   <label htmlFor="2bhk" className="text-gray-700">
//                     2BHK
//                   </label>
//                   <input
//                     type="radio"
//                     id="3bhk"
//                     name="bhk"
//                     value="3bhk"
//                     onChange={e => handleRadioButton2(e)}
//                     className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-blue-300"
//                   />
//                   <label htmlFor="3bhk" className="text-gray-700">
//                     3BHK
//                   </label>
//                   <input
//                     type="radio"
//                     id="4bhk"
//                     name="bhk"
//                     value="4bhk"
//                     onChange={e => handleRadioButton2(e)}
//                     className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-blue-300"
//                   />
//                   <label htmlFor="4bhk" className="text-gray-700">
//                     4BHK
//                   </label>
//                 </div>


//               </div>

//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="description"
//                   className="block text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   rows={8}
//                   {...getFieldProps("description")}

//                   className="block p-2.5 w-full h-16 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Add additional information"
//                   defaultValue={""}
//                 />
//               </div>

//               <div className='flex flex-none items-center'>
//                 <div className="space-y-3">
//                   <h1>Upload an image:</h1>


//                   <input aria-describedby="file_input_help"
//                     id="file_input"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImage}
//                     multiple
//                     required />


//                   <button
//                     type="submit"
//                     className="bn54 relative outline-none text-decoration-none rounded-full flex justify-center items-center cursor-pointer uppercase h-12 w-40 opacity-100 bg-white border border-black border-opacity-60 transition duration-400 ease-in-out transform hover:rotate-6 hover:translate-x-2"
//                   >
//                     <span className="bn54span font-sans text-black text-sm font-medium tracking-wide">
//                       Submit
//                     </span>
//                   </button>



//                 </div>
//               </div>
//             </div>

//           </form>
//         </div>




//       </dialog>



//     </>
//   )
// }

// export default AddProperty
