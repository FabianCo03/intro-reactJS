import React from "react";
import "./styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Search"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    ></input>
  );
}

export { TodoSearch };
