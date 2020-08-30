import React, { useState } from "react";
import './App.css';

const Todo = ({ todo, index }) => {
  return <div className='todo'>{todo.text}</div>;
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

  return (
    <div className='app'>
      <div class='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
