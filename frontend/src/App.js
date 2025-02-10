import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get('http://localhost:5000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>To-Do List</h1>
      <TodoForm onTodoAdded={fetchTodos} />
      <TodoList todos={todos} onTodoDeleted={fetchTodos} />
    </div>
  );
}

export default App;
