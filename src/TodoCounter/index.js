import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <>
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        <br />
        <span id="messageCompletedTodos">
          {total && completed === total ? "Felicidades!!" : ""}
        </span>
      </h1>
    </>
  );
}

export { TodoCounter };

// cómo se comparten los estados de un componente hijo a uno padre, NO SE PUEDE, solo se puede de padres a hijos (por ahora)
