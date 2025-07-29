import React, { useState } from "react";
import "./App.css";
import "./todo_page.css";
import StatusBar from "./components/StatusBar";
import AppBar from "./components/AppBar";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AddTodoButton from "./components/AddTodoButton";
import AddTodoModal from "./components/AddTodoModal";

/*
App state model:
todos = [
  {id, title, subtitle, completed}
]
*/

const initialTodos = [
  { id: 1, title: "Buy groceries", subtitle: "Milk, Bread, Cheese", completed: false },
  { id: 2, title: "Walk dog", subtitle: "30min afternoon", completed: true },
  { id: 3, title: "Read a book", subtitle: "Fiction, 20 pages", completed: false }
];

// PUBLIC_INTERFACE
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");
  const [showAdd, setShowAdd] = useState(false);

  // PUBLIC_INTERFACE
  function handleAddTodo(title, subtitle) {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        title,
        subtitle,
        completed: false
      }
    ]);
  }

  // PUBLIC_INTERFACE
  function handleCheck(id) {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  // PUBLIC_INTERFACE
  function handleEdit(id, title, subtitle) {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, title, subtitle } : t)
    );
  }

  // PUBLIC_INTERFACE
  function handleDelete(id) {
    setTodos(prev =>
      prev.filter(t => t.id !== id)
    );
  }

  return (
    <div>
      <StatusBar />
      <AppBar />
      <Navbar filter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={todos}
        filter={filter}
        onCheck={handleCheck}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AddTodoButton onClick={() => setShowAdd(true)} />
      <AddTodoModal
        show={showAdd}
        onCreate={handleAddTodo}
        onClose={() => setShowAdd(false)}
      />
    </div>
  );
}

export default App;
