import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./styles/TodoItem.css";

function TodoItem(props, setTodos) {
  return (
    <li className="TodoItem">
      <CompleteIcon />
      {/* <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        ✓
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon />
      {/* <span onClick={props.onDelete} className="Icon Icon-delete">
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
