import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_v1", []);

  const [searchValue, setSearchValue] = React.useState("");

  // !! convierte a booleano cualquier cosa que devolvamos

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("Log 1");

  // React.useEffect(() => {
  //   console.log("Loooooog 2");
  // });

  // React.useEffect(() => {
  //   console.log("Loooooog 2");
  // }, []);

  React.useEffect(() => {
    console.log("Loooooog 2");
  }, [totalTodos]);

  console.log("Log 3");

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

// const defaultTodos = [
//   { text: "Hacer trabajos", completed: false },

//   { text: "Jugar fulvol", completed: false },

//   { text: "Comer", completed: false },
// ];

// // localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos))
// // localStorage.removeItem('TODOS_v1')
