import React from "react";
import Task from "./Task";
function TaskList({tasks, onRemoveTask}) {
  return (
    <div className="tasks">
       {tasks.map((task) => (
        <Task key={task.id} task={task} text={"text!"} category={"category!"} button={()=>onRemoveTask(task)}/>
      ))}
    </div>
  );
}

export default TaskList;
