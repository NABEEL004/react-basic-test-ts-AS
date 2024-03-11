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
    setText("");
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

  // ---------------------------------------------------------------------------------------------------------//
  // TASK 1:
  // Create a new component called TodoItem, in a filed called TodoItem.tsx
  // The component should take in the following props:
  // 1. task
  // 2. deleteTask
  // 3. toggleComplete
  // ---
  // Task should have the following functionalities:
  // 1. Have a toggle button to display completed, and toggle completed
  // 2. Have a delete button to delete task
  // 3. Should display the task text
  // 4. (optional) Some simple Tailwind styling
  // ---------------------------------------------------------------------------------------------------------//
  // TASK 2:
  // Create a form for users to fill up a text input.
  // The form should have a simple input field and a submit button
  // When users click on the submit button, the text in the input field should be added as a task
  // The input field should be resetted to "" after submitting
  // ---------------------------------------------------------------------------------------------------------//
  // TASK 3:
  // Showcase your Tailwind CSS skills by injecting style and creativity into the To-Do list. Styling objectives include:

  // 1. Arrange each task item card in a three-column grid layout.
  // 2. Feel free to make additional stylistic adjustments as you see fit — creativity is encouraged!

  return (
    <div>
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
