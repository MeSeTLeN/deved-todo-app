import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    function getLocalTodo(params) {
      if (localStorage.getItem("todos")) {
        setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    }
    getLocalTodo();
  }, []);

  useEffect(() => {
    function setLocalTodo(params) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    setLocalTodo();
  }, [todos]);

  useEffect(() => {
    function filterTodoHandler(params) {
      switch (status) {
        case "completed":
          setFilterTodos(todos.filter((el) => el.completed === true));
          break;
        case "uncompleted":
          setFilterTodos(todos.filter((el) => el.completed === false));
          break;

        default:
          setFilterTodos(todos);
          break;
      }
    }
    filterTodoHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
