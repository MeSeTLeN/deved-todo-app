import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.length
          ? todos.map((todo) => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
                todo={todo}
              />
            ))
          : "No todo yet!"}
        {/* <Todo todos={todos} /> */}
      </ul>
    </div>
  );
}
