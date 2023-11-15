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
    const data=await adminAxiosInstance.post('/partnerBlock',{partnerId,status})
    return data
}
export async function findPartner(partnerid){
    const data=await adminAxiosInstance.get(`/getPartner/${partnerid}`)
    return data
}
export async function kycApprove(partnerId,status){
    const data=await adminAxiosInstance.patch('/kycApproval',{partnerId,status})
    return data;
}
export async function propertylist(){
    const data=await adminAxiosInstance.get("/getProperty")
    return data;
}
export async function findProperty(propertyId){
   
    const data=await adminAxiosInstance.get(`/findProperty/${propertyId}`)
    return data;
}
export async function propertyApproval(propertyId,status){
    const data=await adminAxiosInstance.patch('/propertyApproval',{propertyId,status})
    console.log(data,"data")
    return data;
}

