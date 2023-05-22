import React from "react";
import "./styles/TodoSearch.css";
function TodoSearch() {
  return (
    <input
      className="TodoSearch"
      placeholder="Hacer ejercicio"
      onChange={(event) => {
        console.log(event.target.value);
      }}
    ></input>
  );
}

export { TodoSearch };
