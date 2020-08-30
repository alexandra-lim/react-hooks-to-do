import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index, completeTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className='todo'
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='test'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Add To Do'
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn React Hooks",
      isCompleted: false,
    },
    {
      text: "Hug Sherlock",
      isCompleted: false,
    },
    {
      text: "Build an app with React Hooks",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div class='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
