import React from "react";
import "./TodosLoading.css";
import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "#36d7b7",
};

function TodosLoading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  return (
    <>
      <CircleLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.9}
      />
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>
    </>
  );
}

export { TodosLoading };
