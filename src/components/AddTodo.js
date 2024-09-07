import { useState } from "react";

export default function AddTodo({ handleAddTodo }) {
  const [input, setInput] = useState("");
  return (
    <form
      className="m-4 p-1 pr-0 border-b-teal-700 border-b-2 flex justify-between items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(input);
        setInput("");
      }}
    >
      <input
        className="w-full pr-2 text-gray-700 border-none outline-none"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        className="p-2 bg-teal-400 text-white rounded-md hover:opacity-50 transition-opacity"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
