import React from 'react';
import axios from 'axios';

const TodoList = ({ todos, onTodoDeleted }) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => onTodoDeleted())
      .catch(error => console.error('Error deleting todo:', error));
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} style={{ margin: '10px 0', padding: '10px', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
          <span>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)} style={{ padding: '5px 10px' }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
