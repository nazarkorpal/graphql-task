import userHandlers from "./user";
import authHandlers from "./auth";
import eventHandlers from "./event";

export default {
  ...userHandlers,
  ...authHandlers,
  ...eventHandlers,
};
