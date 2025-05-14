import PropTypes from "prop-types";
import { useSelector,useDispatch } from "react-redux"
import { reset,toggleComplete } from "../redux/Todoapplication/TaskContainer";
import { useState } from "react";

const TaskItem = (props) => {
  const { name,onDelete,statusTask,desc,color,itemsId,isCompleted } = props;
  const [ btnStyles,setBtnStyles ] = useState(false);

  const store = useSelector(state => state);
  const globalCon = store.taskCon.container;

  const dispatch = useDispatch();

  // handle completed task
  const handleCompleting = (itemId) => {
    dispatch(toggleComplete(itemId));
    setBtnStyles(!btnStyles);

    console.log(globalCon)
  }

  return (
    
    <div className="w-full h-[12vh] bg-gray-200 flex items-center justify-between
    px-4 rounded-lg">
      <div className="space-y-1">
        <h1 className="text-xl font-bold">{name || "None"}</h1>
        <h1>Description: {desc || "None"}</h1>
        <h4 className={`${color || "text-red-500"}`}>
            Status: {statusTask || "None"}
          </h4>
      </div>

      <div className="flex space-x-2 items-center">
        <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg categoryBtn">
            Edit
        </button>
        <button onClick={() => onDelete()} className="w-full bg-red-600 text-white py-2 px-2 rounded-lg categoryBtn">
            Delete
        </button>

        <button onClick={() => handleCompleting(itemsId)} className={`${isCompleted ? "bg-green-500" : "bg-black"} w-full w-full text-white py-2 px-2 rounded-lg categoryBtn`}>
            {btnStyles ? "Completed" : "Not Completed"}
        </button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFavourite: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
export default TaskItem;
