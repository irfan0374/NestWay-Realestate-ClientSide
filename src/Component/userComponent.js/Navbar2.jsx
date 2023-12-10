import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../../Redux/Slice/userSlice'

const Navbar = () => {

  const navigate=useNavigate()
  const user=useSelector((state)=>state.userReducer.user)
  const dispatch=useDispatch()
  const handleLogout=()=>{
    localStorage.removeItem("usertoken")
    dispatch(userLogout())
    navigate('/login')

  }

  return (
  <>
<nav
  className=
    'bg-gray-200  w-full fixed top-0 start-0 z-50 '  
>

    <div className="flex items-center justify-between mx-auto p-2 ">
    <div className="flex-none">
      <img src="/src/assets/Seven_Sky.png" className="h-16 w-auto" alt="sevenSky Logo" />
    </div>

    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x mx-3">
        
      <div className="flex space-x-3 md:space-x-0 mx-5">
        <Link to={"/partner/"}>
        <button className="border hover:border-black rounded-xl py-3 px-2">List Your Property</button>
        </Link>
      </div>
    

      <button
  className="bg-yellow-800 text-white border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:text-gray-80"
  onClick={() => {
    user ?navigate('/subscription') :  document.getElementById('my_modal_3').showModal();
  }}
>
  <span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Get premium+
</button>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-32 mx-1">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z" stroke="#141B34" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="#141B34" strokeWidth="1.5"/>
<path d="M19.5 7.14286V8M19.5 7.14286C18.777 7.14286 18.14 6.76405 17.7664 6.18888M19.5 7.14286C20.223 7.14286 20.86 6.76405 21.2336 6.18888M19.5 2.85714C20.223 2.85714 20.8601 3.236 21.2336 3.81125M19.5 2.85714C18.777 2.85714 18.1399 3.236 17.7664 3.81125M19.5 2.85714V2M22 3.28571L21.2336 3.81125M17.0003 6.71429L17.7664 6.18888M17 3.28571L17.7664 3.81125M21.9997 6.71429L21.2336 6.18888M21.2336 3.81125C21.4545 4.15141 21.5833 4.56023 21.5833 5C21.5833 5.43982 21.4545 5.84869 21.2336 6.18888M17.7664 3.81125C17.5455 4.15141 17.4167 4.56023 17.4167 5C17.4167 5.43982 17.5455 5.84869 17.7664 6.18888" stroke="#141B34" strokeWidth="1.5" stroke-linecap="round"/>
</svg>

          </div>
        </label>
        {user?(
        <>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link to={'/account'}>
          <a className="justify-between">
            Profile
          </a>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
      </>):(<>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to={'/login'}>Login</Link></li>
          </ul>
        </>)}
        
      </div>
    </div>

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
        <li>
          <Link to={'/'}  className="block py-2 px-6  text-gray-900 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to={'/rent'} className="block py-2 px-6  text-gray-900 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500">Rent</Link>
        </li>
        <li>
          <Link to={"/sale"} className="block py-2 px-6  text-gray-900 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500">Sale</Link>
        </li>
        <li>
          <a href="#" className="block py-2 px-6  text-gray-900 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4 font-bold text-gray-600">🚀 Hold on! You've found the premium button! To unlock the awesomeness, you need to login first.</p>
    <div className='flex justify-center'>

  <Link to={"/login"}>  <button className='text-white bg-blue-600 rounded-lg p-3'>Login Now</button></Link>
    </div>
  </div>
</dialog>

  </>
  )
}

export default Navbar
