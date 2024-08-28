import { configureStore } from "@reduxjs/toolkit";
import Apidata from "./src/components/redux/api";
import { Myreducer } from "./src/components/redux/reducer";



export const store=configureStore({
    reducer:{
        [Apidata.reducerPath]:Apidata.reducer,
        Myreducer:Myreducer.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Apidata.middleware),
})