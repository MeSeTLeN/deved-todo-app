import React from "react";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
}) {
  const onChangeTitleHandler = (event) => {
    setInputText(event.target.value);
  };

  function submitTodoHandler(event) {
    event.preventDefault();

    if (inputText.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), completed: false, title: inputText },
      ]);
      setInputText("");
    }
  }

  function selectTodoHandler(event) {
    setStatus(event.target.value);
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={onChangeTitleHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={selectTodoHandler}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className="todo-continer">
        <ul className="todo-list"></ul>
      </div>
    </form>
  );
}
