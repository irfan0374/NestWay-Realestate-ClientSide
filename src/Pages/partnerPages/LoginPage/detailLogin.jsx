import React from 'react'

const DetailLogin = () => {
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMM6391V_4S13FktigwByHtfIGi83vNVobg&usqp=CAU)' }}>
        <div className='flex justify-around px-6'>
          <div className="max-w-md py-44 pl-30">
            <h1 className="mb-5 text-5xl font-bold decoration-double text-white">Hello there...</h1>
            <p className="text-5xl decoration-4  text-white">List your property on SevenSky.online</p>
          </div>

          {/* card  */}

          <div className='flex justify-end mx-4' >
          <div className="text-gray-700 bg-white shadow-md w-80  rounded-xl bg-clip-border ">
              <div className="p-14 ">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Let's partner to unlock a world of opportunities and growth
                </h5>
                <br></br>

                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  ✓ Full control over the Property and finance
                </p>
                <br></br>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  ✓ Registration is free
                </p>
                <br></br>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  ✓ Anytime cancel the property
                </p>
              </div>
              <div className="flex justify-center">
                <a href="/partner/registration">
                  <button class="w-40 h-14 px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md focus:outline-none transform hover:scale-105 transition-transform">Get Started </button>
                </a>

              </div>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>

    </>
  )
}

export default DetailLogin