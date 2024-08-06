import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [listData, setListData]=useState(TASKS);
  const [selectedCategory, setSelectedCategory]=useState("All");
  console.log(listData);
  function handleRemove(taskToRemove){
    const filteredTasks=listData.filter((task)=>task.id!==taskToRemove.id);
    setListData(filteredTasks)
  }
  const filteredCategories=selectedCategory==="All"?listData:listData.filter((task)=>task.category===selectedCategory); 
  function handleCategories(category){
    setSelectedCategory(category);
  }
  const handleNewTask=(newTask)=>{
    console.log(newTask)
    setListData([...listData, {...newTask,id:Date.now()}])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategorySelect={handleCategories} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={filteredCategories} onRemoveTask={handleRemove}/>
    </div>
  );
}

export default App;
