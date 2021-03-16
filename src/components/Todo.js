import React from "react";

export default function Todo({ todo, todos, setTodos }) {
  function completeTodoHandler(params) {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !todo.completed,
          };
        }
        return el;
      })
    );
  }

  return (
    <div className="todo">
      <li className="todo-item">{todo.text}</li>
      <button onClick={completeTodoHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
