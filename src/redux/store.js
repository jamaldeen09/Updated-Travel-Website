import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./Todoapplication/Task";
import taskConSlice from "./Todoapplication/TaskContainer"
import descriptionSlice from "./Todoapplication/Description";
import todoSlice from "./options/ToDo";
import choiceSlice from "./options/filterOpt";

const store = configureStore ({
    reducer:{
        // slices goes here
        userTask: taskSlice,
        taskCon: taskConSlice,
        desc: descriptionSlice,
        userTodo: todoSlice,
        filter: choiceSlice,
    }
})

export default store;