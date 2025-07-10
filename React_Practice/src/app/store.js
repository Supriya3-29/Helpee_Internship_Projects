import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: todoReducer,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(thunk)
})

// export type AppDispatch = typeof store.dispatch