import {createSlice} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState={
    user:null,
    token:cookies.get('jwt'),
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            const{user_id,token}=action.payload
            state.user=user_id
            state.token=token
            const expires = new Date(Date.now() + 600000); 
            cookies.set("jwt", token,{expires});
        },
        logOut:(state)=>{
            state.user=null
            state.token=null
            cookies.remove("jwt")
        }
    },
})

export const {setCredentials,logOut} = authSlice.actions;

export default authSlice.reducer;