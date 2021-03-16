import React from "react";
import Todo from "./Todo";

export default function TodoList({ filterTodos, todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo, i) => {
          return <Todo todo={todo} key={i} todos={todos} setTodos={setTodos} />;
        })}
      </ul>
    </div>
  );
}
