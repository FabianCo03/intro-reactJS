import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <>
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de{" "}
        <span>{totalTodos}</span> TODOs
        <br />
        <span id="messageCompletedTodos">
          {totalTodos && completedTodos === totalTodos ? "Felicidades!!" : ""}
        </span>
      </h1>
    </>
  );
}

export { TodoCounter };

// cómo se comparten los estados de un componente hijo a uno padre, NO SE PUEDE, solo se puede de padres a hijos (por ahora)
