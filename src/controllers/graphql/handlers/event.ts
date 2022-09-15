import { events } from "./../../../mocks/events";
export default {
  getEvent({ id }: { id: number }) {
    return events.find((el) => el.id == id);
  },
  getEvents() {
    return events;
  },
};
