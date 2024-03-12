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

  return (
    <div>
      {/* Your newly created component should be called below like so: */}
      {/* {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))} */}
      <div className="flex gap-3">{/* Add your Form here (Task 2) */}</div>
    </div>
  );
}
export default TodoList;
