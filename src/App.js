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
    selectedTodosHandler();
  }, [todos, status]);

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

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <button onClick={() => console.log(selectedTodos)}>selectedTodos</button>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
