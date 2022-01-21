import User from "./user";

export default {
  title: "User",
  component: { User },
};

export const defaultView = (args) => ({
  title: "User",
  components: { User },
  setup() {
    return {
      ...args,
    };
  },
  template: `<user :src="src" :name="name" />`,
});

defaultView.story = {
  name: "Default",
  args: {
    name: "Iloveanime",
    src: "https://picsum.photos/300/300",
  },
};