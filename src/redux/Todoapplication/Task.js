import { createSlice } from "@reduxjs/toolkit";

const initialState = { task: "" };

const taskSlice = createSlice({
  initialState,
  name: "usersTask",

  reducers: {
    handleTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

export const { handleTask } = taskSlice.actions;
export default taskSlice.reducer;