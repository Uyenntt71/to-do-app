import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleDelete }) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} handleDelete={handleDelete} />;
      })}
    </ul>
  );
}
