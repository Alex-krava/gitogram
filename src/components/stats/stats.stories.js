import Stats from "./stats";

export default {
  title: "Stats",
  component: { Stats },
};

export const defaultView = (args) => ({
  title: "Stats",
  components: { Stats },
  setup() {
    return {
      ...args,
    };
  },
  template: `<stats :star="star" :fork="fork" />`,
});

defaultView.story = {
  name: "Default",
  args: {
    star: "156k",
    fork: "4",
  },
};
