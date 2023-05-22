import "./App.css";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },

  { text: "Hacer trabajos", completed: true },

  { text: "Jugar fulvol", completed: true },
];

function App() {
  return (
    // <React.Fragment>
    <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
    // {/* </React.Fragment> */}
  );
}

export default App;
