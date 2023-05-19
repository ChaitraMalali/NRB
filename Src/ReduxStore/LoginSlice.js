import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "login",
    initialState : {
        value : "",
        isLoggedIn: false
    },

    reducers : {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.value = action.payload;
            
        }
    }
})

export const { login } = LoginSlice.actions;

export default LoginSlice.reducer;