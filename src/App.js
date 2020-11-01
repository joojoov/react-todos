import React from "react";
import Title from "./title";
import CreateTodo from './createTodo';
import Todo from './todo';
import Stat from './stat';
import "./index.css";

function App() {
  return <div id="todoapp">
    <Title />
    <div className="content">
      <CreateTodo />
      <Todo />
      <Stat />
    </div>


  </div>
}
export default App;