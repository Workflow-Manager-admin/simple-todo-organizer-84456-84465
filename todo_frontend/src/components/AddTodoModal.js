import React, { useState } from "react";

// PUBLIC_INTERFACE
function AddTodoModal({ show, onCreate, onClose }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate(title, subtitle || "");
    setTitle("");
    setSubtitle("");
    onClose();
  }

  if (!show) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.18)", display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 1000
    }}>
      <form
        className="add-todo-modal"
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 24px 0 #0005",
          padding: 32,
          minWidth: 280,
          display: "flex",
          flexDirection: "column",
          gap: 18
        }}
      >
        <div>
          <input
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
            required
            style={{
              width: "100%",
              fontSize: 16,
              fontWeight: 600,
              border: "1px solid #ccc",
              borderRadius: 6,
              padding: 8
            }}
          />
        </div>
        <div>
          <input
            placeholder="Subtitle"
            value={subtitle}
            onChange={e => setSubtitle(e.target.value)}
            style={{
              width: "100%",
              fontSize: 13,
              border: "1px solid #ddd",
              borderRadius: 6,
              padding: 8
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "#eee", color: "#424242", border: "none",
              padding: "6px 18px", borderRadius: 5, fontWeight: 500, cursor: "pointer"
            }}
          >Cancel</button>
          <button
            type="submit"
            style={{
              background: "#1976d2", color: "#fff", border: "none",
              padding: "6px 20px", borderRadius: 5, fontWeight: 600, cursor: "pointer"
            }}
          >Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoModal;
