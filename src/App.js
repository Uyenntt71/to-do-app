import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, value: "Learn English" },
    { id: 2, value: "Learn ReactJS" },
  ]);

  const addTodos = (text) => {
    const newTodos = {
      id: Date.now(),
      value: text.trim(),
    };
    setTodos([...todos, newTodos]);
  };

  const deleteTodos = (todo) => {
    const tmp = todos.filter((item) => item.id !== todo.id);
    setTodos(tmp);
  };

  return (
    <div className="max-w-md max-h-full mx-auto bg-white shadow-lg rounded-lg mt-16 p-4">
      <div className="font-bold text-left text-teal-800 text-2xl uppercase">
        TO-DO LIST
      </div>
      <AddTodo handleAddTodo={addTodos} />
      <TodoList todos={todos} handleDelete={deleteTodos} />
    </div>
  );
}

export default App;
