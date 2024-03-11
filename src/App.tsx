import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
