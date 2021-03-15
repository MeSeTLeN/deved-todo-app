import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
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
    function filterHandler() {
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
    filterHandler();
  }, [todos, status]);

  useEffect(() => {
    function saveLocalTodo(params) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    saveLocalTodo();
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
