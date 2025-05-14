import { createSlice } from "@reduxjs/toolkit";

const initialState = { description: "" }

const descriptionSlice = createSlice ({
    initialState,
    name: "desc",

    reducers: {
        handleDesc: (state, action) => {
            state.description = action.payload;
        }
    }
})

export const { handleDesc } = descriptionSlice.actions;
export default descriptionSlice.reducer;