import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// const defaultTodos = [
//   { text: "Hacer trabajos", completed: false },

//   { text: "Jugar fulvol", completed: false },

//   { text: "Comer", completed: false },
// ];

// localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_v1')

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_v1");

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_v1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);

  const [searchValue, setSearchValue] = React.useState("");

  // !! convierte a booleano cualquier cosa que devolvamos

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText.toLowerCase());
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_v1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            // key es cuando queremos renderizar distintos elementos a partir de un array
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
