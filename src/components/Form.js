import React, { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");

  function inputValueHandler(e) {
    setInputValue(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputValue, completed: false, id: Math.random() * 1000 },
    ]);

    setInputValue("");
  }

  return (
    <form>
      <input
        value={inputValue}
        onChange={inputValueHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
