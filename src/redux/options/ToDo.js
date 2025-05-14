import { createSlice } from "@reduxjs/toolkit";

const initialState = { todo: "" };

const todoSlice = createSlice({
    initialState,
    name: "userTodo",

    reducers: {
        handleTodo: (state, action) => {
            state.todo = action.payload;
        }
    }
})

export const { handleTodo } = todoSlice.actions;
export default todoSlice.reducer;