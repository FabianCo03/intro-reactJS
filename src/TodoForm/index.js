import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Escribe un nuevo TODO</label>
      <textarea placeholder="Hacer tareas" />

      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => {
            console.log("Cancelar");
          }}
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          onClick={() => {
            console.log("Añadir");
          }}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
