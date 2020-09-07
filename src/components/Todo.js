import React from "react";

function Todo({ todo, todos, setTodos }) {
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }
  return (
    <div className="todo">
      <li className="todo-item">{todo.title}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
