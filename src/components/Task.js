import React from "react";

function Task({task, button, text, category}) {
  if(task===""){
    return (
      <div className="task">
        
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={button}>X</button>
      </div>
    );
  } 
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={button}>X</button>
      
    </div>
  );
}

export default Task;
