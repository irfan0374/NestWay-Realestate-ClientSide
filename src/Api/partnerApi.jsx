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