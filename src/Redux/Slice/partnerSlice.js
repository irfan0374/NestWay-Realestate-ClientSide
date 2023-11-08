import { createSlice } from "@reduxjs/toolkit";

const partnerSlice=createSlice({
    name:"partner",
    initialState:{
        partner:null,
        token:""
    },
    reducers:{
        partnerLogin:(state,action)=>{
            state.token=action.payload.token
            state.partner=action.payload.partner
        },
        partnerLogout:(state)=>{
           
            state.partner={
                token:"",
                partner:null

            }
        }
    }
})
export const {partnerLogin,partnerLogout}=partnerSlice.actions
export default partnerSlice.reducer