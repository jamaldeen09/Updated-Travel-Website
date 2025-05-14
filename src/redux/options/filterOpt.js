import { createSlice } from "@reduxjs/toolkit";

const initialState = { choice: "" };

const choiceSlice = createSlice({
    initialState,
    name: "filter",

    reducers: {
        handleChoice: (state,action) => {
            state.choice = action.payload;
        }
    }
}) 

export const { handleChoice } = choiceSlice.actions;
export default choiceSlice.reducer;