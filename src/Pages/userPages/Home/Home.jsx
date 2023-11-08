
import assert from 'assert'
import Navbar from '../../../Component/userComponent.js/Navbar'
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Homepage=()=>{
  const user=useSelector(state=>state.userReducer.user.name)
  
    return (
<>
<Navbar/>
<div className="hero min-h-screen"  style={{
    backgroundImage: "url('/src/assets/backgroung.jpeg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
 
  }}>

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">

      <h1 className="mb-5 text-5xl font-bold">{`hello ${user}`}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

</>
    )
}
export default Homepage