import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "greenyellow" : "gray"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
