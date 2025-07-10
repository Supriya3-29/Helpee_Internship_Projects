import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface User{
    id: number,
    name: string,
    email: string,
    phone: string
} 

export interface loginState {
    email: string | null,
    isLoading: boolean,
    data: User[] | null,
    isError: boolean
}

const initialState : loginState = {
    email: null,
    isLoading: false,
    data: null,
    isError: false,
}

export const fetchData = createAsyncThunk('fetchData', async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    return response.json();
})

export const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.email = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchData.pending, (state, _action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state,action)=>{
            console.log("Error!", action.error);
            state.isLoading = false;
            state.isError = true;
        })
    },
})

export const {setUser} = LoginSlice.actions

export default LoginSlice.reducer