import React from "react";
import "./styles/TodoSearch.css";
function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log("los usuarios buscan ToDO'S de " + searchValue);
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
