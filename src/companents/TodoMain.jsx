import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoMain = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTodo = (value) => {
    setTodos((prev) => [...prev, { id: uuidv4(), value: value, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    );
  };

  const editTask = (value, id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, value, isEditing: !todo.isEditing } : todo))
    );
  };

  return (
    <div className='todo-main'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((value) => value.isEditing ? (
        <EditTodoForm editTask={editTask} value={value} key={value.id} />
      ) : (
        <Todo
          value={value}
          key={value.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      )
      )}
    </div>
  );
};

export default TodoMain;
