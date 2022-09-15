export type DBUser = {
  id: number;
  username: string;
  bio: string;
  age: number;
  password: string;
  role: string;
};

const Roles = {
  admin: "ADMIN",
  user: "USER",
};

export const users: Array<DBUser> = [
  {
    id: 1,
    username: "user1",
    bio: "Love music 1",
    age: 18,
    role: Roles.admin,
    password: "$2b$10$KnCrCoRe9gpQurXwxghGgOwN.UTBaZSrlHK0j/BPIoU1qNwENKhGa",
  },
  {
    id: 2,
    username: "user2",
    bio: "Love music 2",
    age: 19,
    role: Roles.admin,
    password: "$2b$10$KnCrCoRe9gpQurXwxghGgOwN.UTBaZSrlHK0j/BPIoU1qNwENKhGa",
  },
  {
    id: 3,
    username: "user3",
    bio: "Love music 3",
    age: 20,
    role: Roles.admin,
    password: "$2b$10$KnCrCoRe9gpQurXwxghGgOwN.UTBaZSrlHK0j/BPIoU1qNwENKhGa",
  },
  {
    id: 4,
    username: "user4",
    bio: "Love music 4",
    age: 21,
    role: Roles.admin,
    password: "$2b$10$KnCrCoRe9gpQurXwxghGgOwN.UTBaZSrlHK0j/BPIoU1qNwENKhGa",
  },
  {
    id: 5,
    username: "user5",
    bio: "Love music 5",
    age: 22,
    role: Roles.admin,
    password: "$2b$10$KnCrCoRe9gpQurXwxghGgOwN.UTBaZSrlHK0j/BPIoU1qNwENKhGa",
  },
];
