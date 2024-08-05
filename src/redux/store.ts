import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { LoginSlice } from "./Slices/LoginSlices";


export const store = configureStore({
    reducer: {
        user: LoginSlice.reducer
    },
})

export default store;