import React from "react";
import './App.css';
import TodoList from "./pages/ToDoList";
import Input from "./pages/Input";

const App: React.FC = () => {

  return (
    <>
    <div className="box">
      <h1>今日やること</h1>
      <Input />
      <TodoList />
    </div>
    </>
  )
}

export default App;
