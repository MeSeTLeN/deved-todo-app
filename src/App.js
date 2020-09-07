import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [selectedTodos, setSelectedTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    function selectedTodosHandler() {
      switch (status) {
        case "completed":
          setSelectedTodos(todos.filter((el) => el.completed === true));
          break;

        case "uncompleted":
          setSelectedTodos(todos.filter((el) => el.completed === false));
          break;

        default:
          setSelectedTodos(todos);
          break;
      }
    }

    selectedTodosHandler();
    saveLocalTodos();
  }, [todos, status]);

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>New Todo App</h1>
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
        selectedTodos={selectedTodos}
      />
    </div>
  );
}

export default App;
