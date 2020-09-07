import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, selectedTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.length
          ? selectedTodos.map((todo) => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
                todo={todo}
              />
            ))
          : "No todo yet!"}
      </ul>
    </div>
  );
}
