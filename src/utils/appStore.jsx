import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx"
import feedReducer from "./feedSlice.jsx"
import connectionsReducer from "./connectionsSlice.jsx"
import requestsReducer from "./requestsSlice.jsx"


const appStore = configureStore({

  reducer:{
    
    user:userReducer,
    feed:feedReducer,
    connections:connectionsReducer,
    requests:requestsReducer



    }





})

export default appStore;