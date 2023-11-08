import { useFormik } from 'formik';
import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { loginSchema } from '../../../schema/loginValidation';
import { adminLoginVerification } from '../../../Api/adminApi';
import { adminLogin } from '../../../Redux/Slice/adminSlice';
const AdminLogin = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const onSubmit=async()=>{
    try{
      console.log("onsubmit")
      const res=await adminLoginVerification(values)
      if(res?.status===200){
        const {token,userName}=res.data
        localStorage.setItem("admintoken",token);
        dispatch(
          adminLogin({
            token:token,
            admin:userName
          })
        )
        toast.success(res?.data?.message);
        navigate('/admin/dashboard')
      }
    }catch(error){
      toast.error(error.response?.data?.message)
      console.log(error.message)
    }
  }

  const {errors,values,touched,getFieldProps,handleSubmit}=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:loginSchema,
    onSubmit
  })
  return (
    <div>
          <div className="container mx-auto py-20 h-screen">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div
                className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)",
                }}
              >
                <h1 className="text-black text-3xl mb-3">
                 Admin
                </h1>
                <div>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    
                  </p>
                </div>
              </div>
              <div className="w-full lg-w-1/2 py-16 px-12">
                <div className="pb-2">
                
                </div>
                <h2 className="text-3xl mb-4">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      {...getFieldProps("email")}
                      className="border border-gray-400 rounded-lg shadow py-2 px-4 w-full"
                    />
                    {errors.email&&touched.email&&<p className='text-red-800'>{errors.email}</p>}
                  </div>
                  <div className="mt-5">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      {...getFieldProps("password")}
                      className="border border-gray-400 rounded-lg shadow-md py-2 px-4 w-full"
                    />
                      {errors.email&&touched.email&&<p className='text-red-800'>{errors.email}</p>}
                  </div>
                  <div className="mt-5">
                    <button 
                    type='submit'
                    className="w-full bg-blue-500 py-3 text-center text-white rounded-lg shadow-md">
                      Sign in
                    </button>
                  </div>
                  <div className="flex items-center justify-center mt-2 dark:bg-gray-800">
                    <button 
                    type='submit'
                    className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                      <img
                        className="w-6 h-6"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span>Login with Google</span>
                    </button>
                  </div>

                  <div className="mt-3">
                    <p>
                      <a href="/forgetPassword" className="text-purple-500">
                        Forgot Password?
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AdminLogin;