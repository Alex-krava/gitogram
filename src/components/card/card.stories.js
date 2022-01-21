import Card from "./card";

export default {
  title: "Card",
  component: { Card },
};

export const defaultView = (args) => {
  return {
    title: "Card",
    components: { Card },
    setup() {
      return {
        args: {
          ...args,
        },
      };
    },
    template: `<card :post="args.post" />`,
  };
};

defaultView.story = {
  name: "Default",
  args: {
    post: {
      title: "Vue.js",
      descriptionType: "JavaScript",
      description: "framework for building interactive web applications ⚡",
      star: "156k",
      fork: "4",
    },
  },
};
