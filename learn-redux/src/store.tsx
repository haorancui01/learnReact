import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { value: {username: ""} };
const userSlice = createSlice({
    name:"user",
    initialState,
    //func takes 2 arguments, return new states. descibe how states interact with each otehr
    //reducer
    reducers: {
        login:(state, action) => {
             state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialState.value;
        },
    },
});

export const {login , logout } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});