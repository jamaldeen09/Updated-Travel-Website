import { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import TaskItem from "./TaskItem";
import { useSelector,useDispatch } from "react-redux";

// imports for handling typing (task name and description);
import { handleTask } from "../redux/Todoapplication/Task";
import { handleDesc } from "../redux/Todoapplication/Description";

// import for handling options ( todo, completed, inProgress )
import { handleTodo } from "../redux/options/ToDo";


// imports for handling global array
import { addTask,removeTask } from "/src/redux/Todoapplication/TaskContainer"

// imports for handling filter choice
import { handleChoice } from "../redux/options/filterOpt";

const TaskManagement = () => {

  // handle ref
  const handleRef = useRef(null);
  useEffect(() => {
    handleRef.current.focus();
    console.log(store)
  }, [])


  // main variables
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  // containers for global states

  // array containing tasks
  const globalCon = store.taskCon.container;

  // task name and description
  const taskName = store.userTask.task;
  const taskDesc = store.desc.description;

  // options 
  const todoOpt = store.userTodo.todo;
  useEffect (() => {
    console.log(todoOpt)
  }, [todoOpt])
  // filter choice

  const filterChoice = store.filter.choice;
  // functions to handle typing (name and description)
  const handleName = (event) => {
    dispatch(handleTask(event.target.value));
  }

  const handleDescription = (event) => {
    dispatch(handleDesc(event.target.value))
  }

  // functions to handle selecting options (complete, inprogress and todo / uncompleted)
  const handleOpt = (event) => {
    dispatch(handleTodo(event.target.value));
  }

  // function to handle adding of a task
  const handleTaskAdding = () => {
    const taskInfo = {
      name: taskName,
      description: taskDesc,
      status: todoOpt,
      isCompleted: false,
      id: globalCon.length,
    }

    dispatch(addTask(taskInfo))
  }

  // function to handle deleting
  const handleDeleting = (itemId) => {
    dispatch(removeTask(itemId))
  }

  // function for handling filter choice
  const handleChoiceFilter = (event) => {
    dispatch(handleChoice(event.target.value));
  }
  return (
    <div
      className="bg-white w-full max-sm: max-w-lg sm:max-w-xl md:max-w-3xl annoying:max-w-4xl lg:max-w-5xl
    rounded-lg flex flex-col items-center py-5 space-y-12 px-5"
    >
      <h1 className="text-3xl text-purple-700 font-bold">
        Task Management App
      </h1>

      <div
        className="w-full min-h-64
      flex flex-col space-y-5"
      >
        {/* task name input field */}
        <div className="flex flex-col space-y-5 w-full">
          <h2 className="text-purple-700 font-bold text-2xl">Add New Task</h2>
          <input
            value={taskName}
            onChange={handleName}
            ref={handleRef}
            style={{ border: "1px solid gray" }}
            type="text"
            className="
          rounded-lg h-[6vh] px-4 w-full"
            placeholder="Task Name"
          />
        </div>

        {/* task description input field */}
        <div className="w-full">
          <textarea
            onChange={handleDescription}
            value={taskDesc}
            style={{ border: "1px solid gray" }}
            rows={4}
            className="rounded-lg p-3 w-full"
            placeholder="Task Description"
          />
        </div>
      </div>

      {/* choose in progress, completed, to do */}
      <div className="w-full flex flex-col space-y-6">
        <Form.Select
          value={todoOpt}
          onChange={handleOpt}
          className="w-full h-[6vh] rounded-lg"
          aria-label="Default select example"
        >
          <option value="">Pick a Status For your Task</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Form.Select>

        {/* add button container */}
        <div className="w-full">
          <button onClick={handleTaskAdding} className="w-full py-3 bg-purple-700 text-white rounded-lg addButtonEffect">
            Add Task
          </button>
        </div>
      </div>

      {/* pick display category */}
      <div className="w-full flex items-center justify-between
      ">
        <h1 className="text-purple-700 font-bold text-2xl">
          Task List
        </h1>

        <div className="flex gap-2 items-center">
          <label className="text-md">Filter:</label>
           <Form.Select value={filterChoice} onChange={handleChoiceFilter} className="md:w-[15vw] annoying:w-[12vw] lg:w-[9.5vw]">
              <option value="">Select</option>
              <option value="All">All</option>
              <option value="To Do">To Do</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
           </Form.Select>
        </div>
      </div>

      {/* main display area */}
      <div className="w-full  min-h-64 border-yellow-500
      flex flex-col space-y-4">

        {
          (filterChoice === "All") ? globalCon.map((item,index) => {
            return  <TaskItem itemsId={item.id} color={item.status === "To Do" ? "text-yellow-500" : 
              item.status === "Completed" ? "text-green-500" : item.status === "In Progress" ? "text-blue-500" : "text-red-500"
            } onDelete={() => handleDeleting(item.id)} key={index} desc={item.description} name={item.name} statusTask={item.status}/>
          }) : (filterChoice === "To Do") ? globalCon.map((item,index) => {
            if (item.status === "To Do"){
              return <TaskItem itemsId={item.id} color={item.status === "To Do" ? "text-yellow-500" : 
                item.status === "Completed" ? "text-green-500" : item.status === "In Progress" ? "text-blue-500" : "text-red-500"
              } onDelete={() => handleDeleting(item.id)} key={index} desc={item.description} name={item.name} statusTask={item.status}/>
            }
            else{
              return null
            }
          }) : (filterChoice === "In Progress") ? globalCon.map((item,index) => {
            if (item.status === "In Progress"){
              return <TaskItem itemsId={item.id} color={item.status === "To Do" ? "text-yellow-500" : 
                item.status === "Completed" ? "text-green-500" : item.status === "In Progress" ? "text-blue-500" : "text-red-500"
              } onDelete={() => handleDeleting(item.id)} key={index} desc={item.description} name={item.name} statusTask={item.status}/>
            }
            else{
              return null
            }
          }) : globalCon.map((item , index) => {
            return <TaskItem itemsId={item.id} color={item.status === "To Do" ? "text-yellow-500" : 
              item.status === "Completed" ? "text-green-500" : item.status === "In Progress" ? "text-blue-500" : "text-red-500"
            } onDelete={() => handleDeleting(item.id)} key={index} desc={item.description} name={item.name} statusTask={item.status}/>
          })
        }
      </div>
    </div>
  );
};

export default TaskManagement;
