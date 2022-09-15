import { users } from "./../../../mocks/users";
export default {
  getUser({ id }: { id: number }) {
    return users.find((el) => el.id == id);
  },
  getUsers() {
    return users;
  },
};
