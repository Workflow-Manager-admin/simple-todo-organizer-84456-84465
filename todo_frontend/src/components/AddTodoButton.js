import React from "react";

// PUBLIC_INTERFACE
function AddTodoButton({ onClick }) {
  return (
    <button
      className="add-todo-btn"
      aria-label="Add new todo"
      title="Add new todo"
      onClick={onClick}
    />
  );
}

export default AddTodoButton;
