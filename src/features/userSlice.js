import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        user: null, 
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
// export const userReducer = userSlice.reducer; // Export the reducer as userReducer

export default userSlice.reducer; // Export the entire slice for potential use in other files