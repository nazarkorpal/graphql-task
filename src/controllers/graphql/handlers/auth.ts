import jwt from "jsonwebtoken";
import { users } from "./../../../mocks/users";
import bcrypt from "bcrypt";

type LoginReq = {
  username: string;
  password: string;
};

export default {
  login(req: LoginReq) {
    const user = users.find((el) => el.username == req.username);
    if (!user) {
      return new Error("invalid credentials");
    }

    const isValid = bcrypt.compareSync(req.password, user.password);
    if (!isValid) {
      return new Error("invalid credentials");
    }

    const token = jwt.sign({ id: user?.id, role: user?.role }, "secretkey"); //secret key shouldn't be here!!!

    return { token };
  },
};
