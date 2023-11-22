import { userAxiosInstance } from "./axiosInstance";
export const userSignup=async(signupdata)=>{
    console.log("signup")
    const data= await userAxiosInstance.post('/signup',signupdata)
    
return data;

}
export const otpVerification= async (otp,otpId,userId)=>{
    const data=await userAxiosInstance.post('/otpVerify',{otp,userId});
    return data;
}
export const userlogin=async(loginData)=>{
        const data=await userAxiosInstance.post('/userLogin',loginData)
        return data;
};
export const userLoginWithGoogle=async(userEmail)=>{
    const data=await userAxiosInstance.post('/googleUserLogin',{userEmail})
    console.log(data,"data")
    return data;
}
export const listProperty=async()=>{
    const data=await userAxiosInstance.get('/propertyList')
    return data;
}
export const detailProperty=async(propertyId)=>{
    const data=await userAxiosInstance.get(`/propertyDetails/${propertyId}`)
    return data;
}
export const findUser=async(id)=>{
    const data=await userAxiosInstance.get(`/findUser/${id}`)

    return data;
}
export const updateProfile=async(values)=>{
  
    const data=await userAxiosInstance.patch('/updateProfile',{...values})
    return data;
}

export const updataImage=async(image,id)=>{
  
    const data =await userAxiosInstance.patch('/updataImage',{image,id})
    console.log(data)
    return data
}

export const rentProperty=async()=>{

    const data=await userAxiosInstance.get('/rentProperty')
    
    return data;
}
export const saleProperty=async()=>{
    const data=await userAxiosInstance.get('/saleProperty')
    return data;
}
export const DetailsProperty=async(propertyId)=>{
    console.log('alo deatila')
    const data=await userAxiosInstance.get(`/propertyDetails/${propertyId}`)
    return data;
}