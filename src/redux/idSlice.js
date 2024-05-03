import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: null 
}

const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        ADD_ID: (state, actions) => {
            state.value = actions.payload;
        },
        DELETE: (state) => {
            state.value = '';

        }
    }
})

export const {ADD_ID, DELETE} = idSlice.actions;
export default idSlice.reducer;