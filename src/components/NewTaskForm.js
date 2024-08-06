import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText && taskCategory) {
      onTaskFormSubmit({
        text: taskText,
        category: taskCategory
      });
      setTaskText(""); 
      setTaskCategory(""); 
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          <option value="">Select a Category</option>
          {/* Render <option> elements for each category */}
          {categories
            .filter(category => category !== "All") 
            .map(category => (
              <option key={category} value={category}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
