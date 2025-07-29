import React from "react";

// PUBLIC_INTERFACE
function Navbar({ filter, onFilterChange }) {
  return (
    <nav className="navbar">
      <button
        className={`nav-btn${filter === "all" ? " active" : ""}`}
        onClick={() => onFilterChange("all")}
        aria-label="Show all todos"
      >
        <span className="nav-icon playlist"></span>
        <span className="nav-text">All</span>
      </button>
      <button
        className={`nav-btn${filter === "completed" ? " active" : ""}`}
        onClick={() => onFilterChange("completed")}
        aria-label="Show completed todos"
      >
        <span className="nav-icon tick"></span>
        <span className="nav-text">Completed</span>
      </button>
    </nav>
  );
}

export default Navbar;
