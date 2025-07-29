import React, { useState } from "react";

// PUBLIC_INTERFACE
function TodoCard({ todo, onCheck, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [subtitle, setSubtitle] = useState(todo.subtitle);

  // Handle save edit
  function handleEditSubmit(e) {
    e.preventDefault();
    onEdit(todo.id, title, subtitle);
    setEditing(false);
  }

  return (
    <section className="todo-card">
      <div className="todo-content">
        {editing ? (
          <form className="todo-edit-form" onSubmit={handleEditSubmit}>
            <input
              className="todo-title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              style={{fontWeight:600, fontSize:13, marginBottom:2}}
            />
            <input
              className="todo-subtitle"
              value={subtitle}
              onChange={e => setSubtitle(e.target.value)}
              required
              style={{fontWeight:400, fontSize:10}}
            />
          </form>
        ) : (
          <>
            <div
              className="todo-title"
              style={
                todo.completed ? { textDecoration: "line-through", opacity: 0.54 } : {}
              }
            >
              {todo.title}
            </div>
            <div className="todo-subtitle">{todo.subtitle}</div>
          </>
        )}
      </div>
      <div className="todo-actions">
        <button
          className="todo-btn check"
          title="Mark complete/incomplete"
          aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
          onClick={() => onCheck(todo.id)}
          style={todo.completed ? { filter: "grayscale(100%)" } : {}}
        ></button>
        <button
          className="todo-btn edit"
          title="Edit"
          aria-label="Edit todo"
          onClick={() => setEditing(!editing)}
        ></button>
        <button
          className="todo-btn trash"
          title="Delete"
          aria-label="Delete todo"
          onClick={() => onDelete(todo.id)}
        ></button>
      </div>
    </section>
  );
}

export default TodoCard;
