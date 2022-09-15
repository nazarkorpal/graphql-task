export type DBEvent = {
  id: number;
  title: string;
  description: string;
  price: number;
  capacity: number;
};

export const events: Array<DBEvent> = [
  {
    id: 1,
    title: "title 1",
    description: "description 1",
    price: 1,
    capacity: 1,
  },
  {
    id: 2,
    title: "title 2",
    description: "description 2",
    price: 2,
    capacity: 2,
  },
  {
    id: 3,
    title: "title 3",
    description: "description 3",
    price: 3,
    capacity: 3,
  },
  {
    id: 4,
    title: "title 4",
    description: "description 4",
    price: 4,
    capacity: 4,
  },
  {
    id: 5,
    title: "title 5",
    description: "description 5",
    price: 5,
    capacity: 5,
  },
];
