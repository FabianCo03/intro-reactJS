import { TodoItem } from "./TodoItem";
import "./styles/CreateTodoButton.css";
function CreateTodoButton(props) {
  return (
    <button
      onClick={(event) => {
        console.log(event.target);
      }}
      className="CreateTodoButton"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
