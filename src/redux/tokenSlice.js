import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 'kimdir'
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        ADD_USER: (state, actions) => {
            state.value = actions.payload;
        },
        DELETE: (state) => {
            state.value = '';

        }
    }
})

export const {ADD_USER, DELETE} = tokenSlice.actions;
export default tokenSlice.reducer;