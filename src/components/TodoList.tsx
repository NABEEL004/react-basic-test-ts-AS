import { useState } from "react";
import TodoItem from "./TodoItem";

import { TODO_LIST, Task } from "../utils/Todo";

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>(TODO_LIST);
  const [text, setText] = useState<string>("");

  // Function: addText - to add a user's input (text: string) as a new task
  function addTask(text: string) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  // Function: deleteTask - to delete a task based on id given
  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Function: toggleComplete - to toggle the boolean in a given task (completed: boolean) based on given id
  function toggleCompleted(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleSubmit() {
    addTask(text)
    setText("")
  }

  return (
    <div>
      {/* Your newly created component should be called below like so: */}
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.text}
          completed = {task.completed}
          deleteTask={() => deleteTask(task.id)}
          toggleCompleted={() => toggleCompleted(task.id)}
        />
      ))}
      <div className="flex gap-3 items-center justify-center">
        <input className="border border-gray-400 rounded-md" type="text" value={text} onChange={(e) => handleChange(e)}/>
        <button className="border border-gray-400 rounded-md bg-blue-500 text-white px-6" onClick = {() => {handleSubmit()}}>Add</button>
      </div>
    </div>
  );
}
export default TodoList;
