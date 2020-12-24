import React, { useState, useEffect } from "react";
import "App.css";

import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {

  const filterTodos = () => {
    switch(filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    console.log("hey");
    filterTodos();
  }, [todos, filter]);

  return (
    <div>
      <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter} 
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
