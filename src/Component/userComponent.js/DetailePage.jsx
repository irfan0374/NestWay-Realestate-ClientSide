import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { MdCurrencyRupee } from "react-icons/md";
const DetailePage = ({ property }) => {
    console.log(property, "ressssssssssssssss")

    return (
        <>
            <div className='flex justify-center'>
                <div className=' flex  flex-col items-start  mx-4 bg-gray-200  w-full '>
                    <div className='m-8'>
                        <h1 className='text-5xl font-normal'>
                            {property.propertyName}
                        </h1>
                        <div className='flex '>
                            <h1 className='flex  font-bold text-2xl my-4'><span><MdCurrencyRupee />

                            </span>{property.Price}</h1>
                        </div>
                        <div className='text-gray-400 bg-gray-700 w-12 rounded px-2'>
                            {property.propertyFor}
                        </div>
                        <div className='my-2 flex space-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="location"><path fill-rule="nonzero" d="M3.413 1.722c.239 0 .455.094.611.245a.821.821 0 0 1 0 1.184.875.875 0 0 1-.61.245.875.875 0 0 1-.611-.245.821.821 0 0 1 0-1.184.875.875 0 0 1 .61-.245zm.46.392a.659.659 0 0 0-.46-.185c-.18 0-.342.07-.46.185a.618.618 0 0 0 0 .89c.118.115.28.185.46.185s.343-.07.46-.184a.618.618 0 0 0 0-.891z"></path><path fill-rule="nonzero" d="M3.319 5.838c-.138-.252-.305-.538-.48-.836-.367-.63-.767-1.312-.985-1.842a1.577 1.577 0 0 1-.119-.6c0-.45.188-.856.492-1.15A1.7 1.7 0 0 1 3.413.933 1.7 1.7 0 0 1 4.6 1.41a1.596 1.596 0 0 1 .37 1.755c-.22.53-.615 1.208-.982 1.834-.174.298-.342.585-.48.84a.108.108 0 0 1-.189-.001zM3.025 4.9c.138.235.271.463.388.671.118-.21.252-.439.39-.675.363-.62.755-1.29.97-1.809a1.374 1.374 0 0 0 .105-.529c0-.392-.164-.747-.429-1.003a1.484 1.484 0 0 0-1.036-.416c-.404 0-.77.159-1.035.416a1.393 1.393 0 0 0-.327 1.528c.212.515.609 1.192.974 1.817z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>

                            <h1 className='m-y-2'>{property.location}</h1>
                        </div>
                    </div>

                    <div className='w-full flex '>

                        <div className='w-1/2 mr-2'>
                            <img className='object-cover w-full rounded-md h-[410px]' src={property.propertyImage[0]} alt=" 1 Image not found" />

                        </div>

                        <div className='w-1/2 grid grid-cols-2 gap-2'>

                            <img className='object-cover w-full rounded-md  h-[200px]' src={property.propertyImage[1]} alt=" 1 Image not found" />


                            <img className='object-cover w-full rounded-md  h-[200px]' src={property.propertyImage[2]} alt=" 1 Image not found" />


                            <img className='object-cover w-full rounded-md  h-[200px]' src={property.propertyImage[3]} alt=" 1 Image not found" />


                            <img className='object-cover w-full rounded-md  h-[200px]' src={property.propertyImage[4]} alt=" 1 Image not found" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gray-50 h-28 my-4 mx-4 '>
                <div className='text-xl flex-none mb-3'>
                    Overview:
                </div>
                <div className='flex space-x-24 mx-12'>


                    <div className='items-center'>
                        <h1>    Type of the property:</h1>
                        <h1 className='mx-4 font-extrabold'>{property.propertyType}</h1>
                    </div>
                    <div className='h-full flex space-x-24'>
                        <div className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="bathroom"><path d="M14.918 15.925c-.469.261-.635.852-.373 1.319l2.445 4.371c.176.317.506.496.846.496.16 0 .322-.04.473-.124.467-.261.635-.853.373-1.32l-2.445-4.371C15.975 15.83 15.387 15.663 14.918 15.925zM17.541 14.008c-.424.325-.506.933-.182 1.359l3.035 3.982c.191.25.48.381.773.381.203 0 .41-.065.586-.198.426-.325.508-.933.184-1.359L18.9 14.191C18.576 13.766 17.969 13.683 17.541 14.008zM24.27 17.386c.238 0 .475-.086.662-.26.391-.365.412-.979.047-1.371l-3.414-3.663c-.365-.392-.98-.413-1.371-.048-.393.365-.414.979-.049 1.371l3.416 3.663C23.752 17.283 24.01 17.386 24.27 17.386zM63.031 1.236H.971C.438 1.236 0 1.673 0 2.206s.438.97.971.97h33.648v2.454h1.939V3.176h2.23v2.454h1.939V3.176h2.23v2.454h1.938V3.176h2.23v2.454h1.939V3.176h2.24v2.454h1.939V3.176h1.9v2.454h1.939V3.176h5.945c.533 0 .969-.437.969-.97S63.564 1.236 63.031 1.236zM36.762 48.364c-.049-.155-.068-.32-.039-.475C36.693 48.043 36.703 48.208 36.762 48.364zM36.869 47.21V7.568h-1.184-.193-1.184V47.21c0 .698.572 1.28 1.279 1.28.533 0 .99-.33 1.184-.785C36.83 47.549 36.869 47.384 36.869 47.21z"></path><path d="M32.369 36.669H6.943V35.7v-.97-1.816h2.346c.535 0 .969-.434.969-.97 0-.535-.434-.969-.969-.969H6.943v-16.24c0-.029-.145-2.541 1.348-4.219.572-.64 1.318-1.096 2.24-1.348-.311 1.707.301 3.666 1.756 5.13.193.194.436.281.688.281s.494-.087.689-.281l5.449-5.45c.379-.378.379-.989 0-1.367-2.201-2.201-5.518-2.463-7.398-.582-.039.039-.078.078-.107.116C9.59 7.19 7.98 7.937 6.836 9.236c-2.045 2.308-1.832 5.499-1.832 5.566v16.173H2.723c-.535 0-.969.434-.969.969 0 .536.434.97.969.97h2.281v1.816.97.969H2.725c-.436 0-.785.349-.785.786 0 .427.359.786.785.786h29.645V36.669zM40.912 47.782c.02-.048.039-.087.059-.136.049-.136.076-.291.076-.436V7.568h-1.191H39.66h-.852V47.21c0 .262-.029.504-.088.747.039.058.078.106.135.165.242.243.563.378.902.378C40.252 48.5 40.689 48.218 40.912 47.782zM45.111 47.705c0-.01.01-.02.02-.039.047-.136.076-.301.076-.456V7.568h-1.182H43.83h-.844V47.21c0 .252-.027.514-.096.756.039.048.076.106.125.155.252.243.572.378.912.378C44.441 48.5 44.916 48.189 45.111 47.705zM49.281 47.714c.01-.039.027-.068.037-.106.049-.126.068-.262.068-.397V7.568h-1.191H48h-.854V47.21c0 .252-.029.504-.086.747.037.058.086.116.135.165.242.243.563.378.902.378C48.631 48.5 49.086 48.17 49.281 47.714zM52.18 7.568h-.854V47.21c0 .262-.029.504-.096.747.037.058.076.106.135.165.193.185.416.301.66.349.02 0 .029.01.047.01.02 0 .039.01.059 0 .059.01.098.02.146.02.436 0 .834-.223 1.076-.592 0-.01.01-.019.02-.029.115-.204.184-.427.184-.669V7.568h-1.184H52.18zM56.02 7.568h-.523V47.21c0 .349-.059.688-.164 1.008.223.184.494.281.785.281.707 0 1.279-.582 1.279-1.29V7.568h-1.184H56.02zM13.859 58.741l-1.01-.043v2.418c0 .909.734 1.648 1.639 1.648h.543c.902 0 1.639-.74 1.639-1.648v-2.356h-2.182C14.289 58.759 14.088 58.75 13.859 58.741zM40.859 58.742c-.199.008-.398.017-.598.017H38.08v2.356c0 .909.73 1.648 1.629 1.648h.553c.904 0 1.639-.74 1.639-1.648v-1.406l-.031-1.011L40.859 58.742z"></path><path d="M48.098,50.439c-0.766,0-1.504-0.271-2.086-0.776c-0.563,0.495-1.299,0.776-2.084,0.776c-0.775,0-1.504-0.271-2.084-0.776
		c-0.563,0.495-1.301,0.776-2.086,0.776s-1.512-0.271-2.084-0.776c-0.563,0.475-1.291,0.766-2.086,0.766
		c-1.773,0-3.219-1.445-3.219-3.219v-7.03H3.695v7.787c0,5.353,3.994,9.949,9.289,10.686c0.02,0,0.039,0.01,0.059,0.01
		c0.494,0.058,0.969,0.097,1.445,0.097h25.773c0.514,0,1.02-0.039,1.494-0.116c4.576-0.63,8.203-4.092,9.086-8.543
		c-0.232-0.117-0.445-0.262-0.65-0.437C49.629,50.148,48.893,50.439,48.098,50.439z"></path></svg>
                            <span className='font-bold'> {property.bathroom}</span>
                            <div className='flex-none'>
                                Bathroom
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" enable-background="new 0 0 2000 2000" viewBox="0 0 2000 2000" id="double-bed"><path d="M1586.5488,957.5288h-42.2246V582.3269c0-53.199-43.2803-96.4792-96.4785-96.4792H552.1553
	c-53.1992,0-96.4795,43.2803-96.4795,96.4792v375.2019h-42.2246c-53.1992,0-96.4795,43.2803-96.4795,96.479v430.1445
	c0,16.5684,13.4316,30,30,30s30-13.4316,30-30v-73.043h1246.0566v73.043c0,16.5684,13.4316,30,30,30s30-13.4316,30-30v-430.1445
	C1683.0283,1000.8091,1639.748,957.5288,1586.5488,957.5288z M515.6758,582.3269c0-20.1147,16.3643-36.4792,36.4795-36.4792
	h895.6904c20.1143,0,36.4785,16.3645,36.4785,36.4792v375.2019h-119.5117V855.5083c0-53.1987-43.2803-96.479-96.4785-96.479
	h-87.8877c-53.1982,0-96.4785,43.2803-96.4785,96.479v102.0205H916.0332V855.5083c0-53.1987-43.2803-96.479-96.4795-96.479H731.667
	c-53.1992,0-96.4795,43.2803-96.4795,96.479v102.0205H515.6758V582.3269z M1143.9678,957.5288V855.5083
	c0-20.1145,16.3643-36.479,36.4785-36.479h87.8877c20.1143,0,36.4785,16.3645,36.4785,36.479v102.0205H1143.9678z
	 M695.1875,957.5288V855.5083c0-20.1145,16.3643-36.479,36.4795-36.479h87.8867c20.1152,0,36.4795,16.3645,36.4795,36.479v102.0205
	H695.1875z M413.4512,1017.5288h1173.0977c20.1143,0,36.4795,16.3645,36.4795,36.479v127.5801H376.9717v-127.5801
	C376.9717,1033.8933,393.3369,1017.5288,413.4512,1017.5288z M376.9717,1351.1094v-109.5215h1246.0566v109.5215H376.9717z"></path>
                            </svg>
                            <span className='font-bold'> {property.propertyBHK}</span>
                            <div className='flex-none'>
                                BHK
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='flex justify-center  w-2/3 bg-gray-200  mx-4 my-3 rounded-md'>

                <div className=' w-5/6 mt-16 space-y-8'>

                    <div>


                        <div className='w-full h-[60px]  border-black border-b-2 text-xl '>
                            <div className=''>
                                Description
                            </div>
                        </div>
                        <div>
                            {property.description}
                        </div>
                    </div>

                    <div>


                        <div className='w-full h-[60px] border-black border-b-2 text-xl'>
                            <div className=''>
                                Details
                            </div>
                        </div>
                        <div className='border  border-black rounded-md w-full my-2'>
                            <div className='space-y-6 m-3 grid grid-cols-2'>
                                <div className='flex items-center'>
                                    <span className='font-bold'>propertyStatus:</span>
                                    <span className='ml-2'>{property.propertyFor}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='font-bold'>PropertyType:</span>
                                    <span className='ml-2'>{property.propertyType}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='font-bold'>price:</span>
                                    <span className='ml-2 flex'><span><MdCurrencyRupee /></span>{property.Price}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='font-bold'>Bathroom:</span>
                                    <span className='ml-2'>{property.bathroom}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='font-bold'>BHK:</span>
                                    <span className='ml-2'>{property.propertyBHK}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>

                        <div className='w-full h-[60px]  border-black border-b-2 text-xl'>
                            <div className=''>
                                Features:
                            </div>
                        </div>
                        <div className=' text-md'>
                            <div className='flex flex-col'>
                                {property.features.map((data, index) => (
                                    <div key={index} className='flex items-center space-y-3'>
                                        <TiTickOutline />
                                        <span className='text-lg'>{data}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailePage
