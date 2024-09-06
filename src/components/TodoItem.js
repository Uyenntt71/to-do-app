export default function TodoItem({ todo, handleDelete }) {
  console.log("todo", todo);
  return (
    <div>
      {todo.value}
      <button onClick={() => handleDelete(todo)}>Delete</button>
    </div>
  );
}
