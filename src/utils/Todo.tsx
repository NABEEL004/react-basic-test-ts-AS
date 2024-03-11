const TODO_LIST = [
  {
    id: 1,
    text: "Create addTask",
    completed: false,
  },
  {
    id: 2,
    text: "Create deleteTask",
    completed: false,
  },
  {
    id: 3,
    text: "Create toggleComplete",
    completed: false,
  },
  {
    id: 4,
    text: "Create form for users to add tasks",
    completed: false,
  },
  {
    id: 5,
    text: "Design with Tailwind",
    completed: false,
  },
];

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export { TODO_LIST };
export type { Task };
