import React from "react";

export default function TodoList({ todos }) {
  return (
    <div className="todo-continer">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title} </li>
        ))}
      </ul>
    </div>
  );
}
