import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import tokenSlice from "./tokenSlice";
import idSlice from "./idSlice";

export const store = configureStore({
    reducer:{
        users: userSlice,
        token: tokenSlice,
        id: idSlice
    }
})
