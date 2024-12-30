import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';
import SearchInput from './components/SearchInput/SearchInput';
import './App.css';

const API_URL = "http://localhost:3001/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [query]);

  const fetchTodos = async () => {
    const url = query ? `${API_URL}?q=${query}` : API_URL;
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (text) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: false }),
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  const toggleTodoStatus = async (id, completed) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    fetchTodos();
  };

  return (
      <div className="app-container">
        <h1>TODO List</h1>
        <h2>Total Tasks: {todos.length}</h2>
        <TodoInput addTodo={addTodo}/>
        <SearchInput setQuery={setQuery}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus}/>
      </div>
  );
}

export default App;
