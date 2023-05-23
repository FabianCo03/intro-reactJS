import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },

  { text: "Hacer trabajos", completed: false },

  { text: "Jugar fulvol", completed: false },

  { text: "Comer", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");
  console.log("los usuarios buscan ToDO'S de " + searchValue);
  // !! convierte a booleano cualquier cosa que devolvamos
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            // key es cuando queremos renderizar distintos elementos a partir de un array
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
