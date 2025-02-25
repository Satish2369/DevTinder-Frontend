import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({

  name:"requests",
  initialState:null,
  reducers:{
 
    addRequests:(state,action)=>{
        return action.payload;
    },
    removeRequests:(state,action)=>{
        const id = action.payload;
       return state.filter((x)=> x._id!== id);
    }




  }




})
export const {addRequests,removeRequests} = requestsSlice.actions;

export default requestsSlice.reducer;