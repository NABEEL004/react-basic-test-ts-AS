import { Task } from "../utils/Todo";
import { useState } from "react";

// Hints:
// 1. You can use type Task, imported above as the type for Task
// 2. You will need to have the following for each To Do item:
//   a. an input field of type checkbox: to display if task is completed/ to toggle task completion (toggleComplete function)
//   b. a button to delete task (use the deleteTask function)
// 3. This is an example of what a Task object looks like
// {
//   id: 1,
//   text: "Create new component",
//   completed: false,
// }

type TodoItemProps = {
  // Create the Type for your Props here
};

// function handleClick() {
  
// }

function TodoItem( {key, completed, task, deleteTask, toggleCompleted} : {key:number, completed:boolean, task:string, deleteTask: (id: number) => void, toggleCompleted: (id: number) => void}) {
  // Create your TodoItem component here
  const [complete, toggleComplete] = useState(completed)
  return (
    <div className="flex w-80 justify-between py-3 px-8 border border-grey-600 m-4 rounded-lg">
      <input type="checkbox" checked={complete} onChange={() => {toggleCompleted(key); toggleComplete(!complete) }}></input>
      <div>{task}</div>
      <button onClick={() => deleteTask(key)}>X</button>
    </div>
  )
}

export default TodoItem;
