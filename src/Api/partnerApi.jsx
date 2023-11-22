import { partnerAxiosInstance } from "./axiosInstance";

export async function signup(Signupdata){
    
    const data=await partnerAxiosInstance.post("/signup",Signupdata)
    return data;
}
export async function partnerOtpVerification(otp,otpId,partnerId){
    const data=await partnerAxiosInstance.post('/otpVerification',{otp,otpId,partnerId})
    return data
}
export async function loginVerification(LoginData){
    const data=await partnerAxiosInstance.post('/login',LoginData)
    return data
} 
export async function partnerKycUpload({partnerId,kycImage}){
    try{
            
        const data=await partnerAxiosInstance.patch('/partnerKycUpload',{partnerId,kycImage})
        return data;

    }catch(error){
        console.log(error.message)
    }
    
}
export async function addProperty(values){
    console.log({...values})
    
    const data=await partnerAxiosInstance.post("/addProperty",{...values})
  console.log(data,"addPropertyapi")
        return data;
    }

export async function listProperty(partnerId){
      
        const data=await partnerAxiosInstance.get(`/myProperty/${partnerId}`)
        return data;
}
export async function propertylist(propertyId){
    const data=await partnerAxiosInstance.get(`/propertyDetail/${propertyId}`)
    return data;
}