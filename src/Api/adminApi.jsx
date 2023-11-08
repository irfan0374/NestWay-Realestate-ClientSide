import { adminAxiosInstance } from "./axiosInstance";

export async function adminLoginVerification(loginData){
    console.log("api is success")
    const data=await adminAxiosInstance.post('/adminLogin',loginData)
    return data
}

export async function userList(){
    const data=await adminAxiosInstance.post('/listUser')
    return data
}
export async function partnerList(){
    const data=await adminAxiosInstance.post('/listPartner')
    return data
}
export async function userBlock(userId,status){
    const data=await adminAxiosInstance.post('/userBlock',{userId,status})
    return data
}
export async function partnerBlock(partnerId,status){
    console.log("api")
    const data=await adminAxiosInstance.post('/partnerBlock',{partnerId,status})
    return data
}
