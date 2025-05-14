import { createSlice } from "@reduxjs/toolkit";

const initialState = { container: [] };

const taskConSlice = createSlice({
    initialState,
    name: "taskCon",

    reducers: {
        addTask: (state, action) => {
            const currentTask = action.payload;
            if (state.container.includes(currentTask)){
                alert("Task Already exists");
            }
            else{
                state.container.push(currentTask);
            }
        },
        removeTask: (state, action) => {
            const newArray = state.container.filter((item) => item.id !== action.payload);
            state.container = newArray;
        },
        reset: (state) => {
            state.container = [];
        },
        toggleComplete: (state, action) => {
            const finding = state.container.find((item) => item.id === action.payload);
        
            if (finding){
                finding.isCompleted = !finding.isCompleted;
            }
        }
     }
})

export const { addTask,removeTask,reset,toggleComplete } = taskConSlice.actions;
export default taskConSlice.reducer;