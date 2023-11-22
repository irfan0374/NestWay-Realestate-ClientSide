import React from 'react'
import Navbar from '../../../Component/userComponent.js/Navbar'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import MainCard from '../../../Component/CommonComponent/MainCard'

const Homepage=()=>{
  const user=useSelector(state=>state.userReducer)
  
    return (
<>
<Navbar/>
<div className="hero min-h-screen" style={{
    backgroundImage: "url('/src/assets/backgroung.jpeg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
 
  }} >

  <div className="hero-overlay bg-opacity-60 sticky"></div>
  <div className="hero-content text-center text-neutral-content">

  </div>
</div>
<div>
  
</div>

</>
    )
}
export default Homepage