import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, value: "111111" },
    { id: 2, value: "222222" },
  ]);

  const addTodos = (text) => {
    const newTodos = {
      id: Date.now(),
      value: text,
    };
    setTodos([...todos, newTodos]);
  };

  const deleteTodos = (todo) => {
    const tmp = todos.filter((item) => item.id !== todo.id);
    setTodos(tmp);
  };

  return (
    <div>
      <AddTodo handleAddTodo={addTodos} />
      <TodoList todos={todos} handleDelete={deleteTodos} />
    </div>
  );
}

export default App;
