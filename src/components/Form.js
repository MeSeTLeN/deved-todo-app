import React from "react";

export default function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (event) => {
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

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
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
      <div className="todo-continer">
        <ul className="todo-list"></ul>
      </div>
    </form>
  );
}
// onClick={()=>}
// onChange={()=>}
