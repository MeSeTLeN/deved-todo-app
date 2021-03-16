import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    function getLocalTodo(params) {
      if (localStorage.getItem("todos")) {
        setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    }
    getLocalTodo();
  }, []);

  useEffect(() => {
    function setLocalTodos(params) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    setLocalTodos();
  }, [todos]);

  useEffect(() => {
    function filterTodosHandler(params) {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((el) => el.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((el) => el.completed === false));
          break;

        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterTodosHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
