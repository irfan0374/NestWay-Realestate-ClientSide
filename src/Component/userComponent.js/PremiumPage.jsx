import React, { useState } from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createSubscription } from '../../Api/userApi';

let stripePromise;
const getstrip = () => {
    if (!stripePromise) {

        stripePromise = loadStripe("pk_test_51OFr1pSB3NLla9eMkflIN058py6nnlYYZaTplPo90zwVxeuGbKgykFCllNFwZ3sUPSJILtGufMQFnXDkFlzNMK6d00cnKRlbN6");
    }
    return stripePromise;
}

const PremiumPage = () => {
    const [stripError, setStripError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const prices = [
        {
            id: "price_1OFrApSB3NLla9eMTcfWFjp9",
            amount: 49,
            interval: "week",
        },
        {
            id: "price_1OGbm3SB3NLla9eM589nR7Z2",
            amount: 99,
            interval: "month",
        },
    ];
    
    const User = useSelector((state) => state.userReducer.user)
    console.log(User);

    const redirectToCheckout = async (prices,User) => {
        console.log(prices,"price")
        const res=await createSubscription(prices,User)
        if(res.status===200){
            window.location.href=res?.data?.session.url
        }
    }
   

    return (
        <>
            <div className=' bg-gray-200 h-full pb-6'>
                <div className='container flex justify-center bg-gray-200 '>
                    <div className=' mt-3'>
                        <img src="/src/assets/premium.png" alt=""
                            className='w-32 mx-16 '
                        />
                        <div className=' text-center font-mono mx-8 text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-yellow-700 to-yellow-600'>
                            Get Premium
                        </div>


                    </div>

                </div>
                <div className=' container mx-44 r w-2/3 flex flex-col items-center'>
                    <p className='font-serif text-center text-lg my-9 '>

                        Upgrade to our premium subscription for an enhanced experience, featuring more detailed property information, an expanded property listing selection,  Chat Feature and an ad-free browsing
                    </p>



                    <div className='items-start my-1'>
                        <div className='flex my-2 '>
                            <IoMdCheckmarkCircleOutline />
                            <h1 className='mx-3'>
                                Embark on an exploration of exquisite properties at your fingertips.                            </h1>
                        </div>
                        <div className='flex my-2'>
                            <IoMdCheckmarkCircleOutline />
                            <h1 className='mx-3'>
                                Uncover intricate details about each property, elevating your real estate experience.

                            </h1>
                        </div>
                        <div className='flex my-2'>
                            <IoMdCheckmarkCircleOutline />
                            <h1 className='mx-3'>
                                Enjoy the luxury of seamless, ad-free browsing for an immersive property journey.


                            </h1>
                        </div>
                        <div className='flex'>
                            <IoMdCheckmarkCircleOutline />
                            <h1 className='mx-3'>
                            Connect easily with an agent using the chat Feature.


                            </h1>
                        </div>
                    </div>

                    <h1 className='text-xl font-bold font-serif my-3'>
                        Choose a plan
                    </h1>
                    <div className='flex space-x-5 '>
                        <div className='h-56 rounded-xl px-16 pt-3 shadow-2xl'>
                            <h1 className='text-lg'>
                                Weekly Plan
                            </h1>

                            <h1 className='flex my-12'>
                                <MdCurrencyRupee className='w-9 h-9' />
                                <h1 className='text-3xl font-bold font-mono '>
                                    49
                                </h1>
                            </h1>

                            <button
                                className="Btn relative font-bold w-28 h-9 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-cover bg-left text-gray-600 flex items-center justify-center cursor-pointer transition duration-1000 overflow-hidden focus:outline-none hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-400 hover:before:bg-gradient-to-r hover:before:from-yellow-700 hover:before:to-yellow-400 active:scale-95"
                                onClick={() => redirectToCheckout(prices[0])}
                                disabled={loading}
                            >
                               Buy Now                  
                                </button>
                        </div>

                        <div className='h-56 rounded-xl px-16 pt-3 shadow-2xl'>
                            <h1 className='text-lg'>
                                Monthly Plan
                            </h1>

                            <h1 className='flex my-12'>
                                <MdCurrencyRupee className='w-9 h-9' />
                                <h1 className='text-3xl font-bold font-mono'>
                                    99
                                </h1>
                            </h1>

                            <button
                                className="Btn font-bold relative w-28 h-9 rounded-lg bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-cover bg-left text-gray-600 flex items-center justify-center cursor-pointer transition duration-1000 overflow-hidden focus:outline-none hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-400 hover:before:bg-gradient-to-r hover:before:from-yellow-700 hover:before:to-yellow-400 active:scale-95"
                                onClick={() => redirectToCheckout(prices[1])}
                                disabled={loading}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default PremiumPage
