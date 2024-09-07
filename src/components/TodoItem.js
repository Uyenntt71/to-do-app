//import { CheckSquareOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function TodoItem({ todo, handleDelete }) {
  return (
    <li
      key={todo.id}
      className="py-2 text-gray-900 font-medium flex justify-between"
    >
      <div className="mr-2 flex gap-1">
        <input
          type="checkbox"
          className="appearance-none w-5 h-5
           border-2 border-teal-400 rounded-sm
           shadow-sm shadow-gray-100
           flex self-center  items-center justify-center
           relative cursor-pointer bg-white 
           hover:opacity-50 transition-opacity
           checked:bg-teal-400 checked:text-white checked:border-none
           checked:after:content-['✓'] checked:after:absolute"
        ></input>
        <div>{todo.value}</div>
      </div>

      <button className="" onClick={() => handleDelete(todo)}>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="w-5 h-5 text-red-400 shadow-sm shadow-gray-100 hover:opacity-50 transition-opacity"
        />
      </button>
    </li>
  );
}
