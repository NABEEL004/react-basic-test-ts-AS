const TODO_LIST = [
  {
    id: 1,
    text: "Create new component",
    completed: false,
  },
  {
    id: 2,
    text: "Create user form",
    completed: false,
  },
  {
    id: 3,
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
