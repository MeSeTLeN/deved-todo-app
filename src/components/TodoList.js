import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, i) => {
          return <Todo todo={todo} key={i} />;
        })}
      </ul>
    </div>
  );
}
