import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from '../store/LoginSlice'

export const store = configureStore ({
    reducer : {
        Login : LoginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
