//import { CheckSquareOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export default function TodoItem({ todo, handleDelete }) {
  return (
    <li
      key={todo.id}
      className="py-2 text-gray-900 font-medium flex justify-between"
    >
      <div className="mr-2 flex gap-1">
        <button>
          <FontAwesomeIcon
            icon={faSquareCheck}
            size="lg"
            className="text-teal-800"
          />
        </button>
        <div>{todo.value}</div>
      </div>

      <button className="" onClick={() => handleDelete(todo)}>
        Delete
      </button>
    </li>
  );
}
