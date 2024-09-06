import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem todo={todo} handleDelete={handleDelete} />;
      })}
    </div>
  );
}
