import React from "react";
import TodoCard from "./TodoCard";

// PUBLIC_INTERFACE
function TodoList({ todos, filter, onCheck, onEdit, onDelete }) {
  const filtered = filter === "completed"
    ? todos.filter(t => t.completed)
    : todos;

  return (
    <main className="todos-container">
      {filtered.length === 0 ? (
        <div style={{ opacity: 0.7, textAlign: "center" }}>
          <span>No todos {filter === "completed" && "(completed)"} found.</span>
        </div>
      ) : (
        filtered.map(todo =>
          <TodoCard
            key={todo.id}
            todo={todo}
            onCheck={onCheck}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      )}
    </main>
  );
}

export default TodoList;
