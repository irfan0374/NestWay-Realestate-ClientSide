import React, { useEffect, useRef, useState } from "react";
import { useFormik } from 'formik'
import { useNavigate, Link, Form } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import { userSignup } from "../../../Api/userApi";
import { basicScheme } from "../../../schema/SignupValidation"
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../../Component/Loading/Loading";
import Reg from "./reg";


import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import {

  UserCircleIcon,

} from "@heroicons/react/24/solid";
import axios from "axios";

;

export function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // SIGNUP FUNCTION START

  const onSubmit = async () => {
    try {
      setLoading(true)
      const res = await userSignup(values)
      if (res?.status === 201) {
        const { userData, otpId } = res.data;
        toast(res?.data?.status)
        navigate("/otp", {
          state: { userEmail: userData.email, otpId: otpId, userId: userData._id },
        });
        setLoading(false)
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.response?.data?.status)
      console.log(err.message)
    }
  }



  const { values, errors, touched, handleBlur, handleChange, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: '',
      phone: '',
      password: "",
      confirmPassword: ''
    },
    validationSchema: basicScheme,
    onSubmit,
  });
  //  SIGNUP FUNCTION END


  // LOGIN FORM

  const data = [
    {
      label: "Login",
      value: "Login",
      icon: UserCircleIcon,
      desc:
        <Reg />
      ,


    },
    // SIGNUP FROM
    {
      label: "SignUp",
      value: "SignUp",
      icon: UserCircleIcon,
      desc:
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                SignUp
              </h5>
              <div>
                <label
                  htmlFor="name"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >Username:
                </label>
                <input
                  type="text"
                  name='name'
                  id='name'
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"

                  // value={values.password}
                  // onChange={handleChange}
                  // onBlur={handleBlur}

                  //======= short of these three=====


                  {...getFieldProps('name')}
                  placeholder="Enter your name"
                  required
                />
                {errors.name && touched.name && (<p className="text-red-800">{errors.name}</p>)}

              </div>
              <div >
                <label
                  htmlFor="email"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...getFieldProps('email')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@example.com"
                  required=""
                />
                {errors.email && touched.email && (<p className="text-red-800">{errors.email}</p>)}

              </div>
              <div>
                <label
                  htmlFor='phone'
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone No
                </label>
                <input
                  type="phone"
                  name='phone'
                  id='phone'
                  {...getFieldProps('phone')}

                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="1234******"
                  required=""
                />
                {errors.phone && touched.phone && (<p className="text-red-800">{errors.phone}</p>)}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
                {errors.password && touched.password && (<p className="text-red-800">{errors.password}</p>)}
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confrim password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"


                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
                {errors.confirmPassword && touched.confirmPassword && (<p className="text-red-800">{errors.confirmPassword}</p>)}
              </div>
              <div className="flex items-start">
              
                <a
                  href="#"
                  className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SignUp your Account
              </button>

            </form>
          </div>
        </div>
      ,
    },

  ];
  return (
    <Tabs value="Login">
      <TabsHeader className="w-96 mx-auto flex justify-center">
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className="w-40"
          >
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}