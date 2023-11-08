import { Navigate } from "react-router-dom";
// import jwt_decode from 'jwt-decode'

const PartnerPublic=(props)=>{
    try{
        const token =localStorage.getItem("partnerToken")
        if(token){

            // const decodedToken=jwt_decode(token)
            // const currentTime=Date.now()/1000;
            // if(decodedToken.exp>currentTime){
                return <Navigate to ="/partner/home"/>
            }else{
                <Navigate to="/partner"/>
                return props.children
            }
        // }else{
        //      <Navigate to="/partner"/>
        //      return props.children
        // }
        
    }catch(error){
        console.log(error.message)
    }
}
export default PartnerPublic;