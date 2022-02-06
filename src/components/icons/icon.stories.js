import Icon from "./icon";

export default {
  title: "Icon",
  component: { Icon },
};

export const defaultView = ({ name }) => ({
  title: "Icon",
  components: { Icon },
  setup() {
    return {
      name,
    };
  },
  template: `<icon width="30" :name="name" />`,
});

defaultView.story = {
  name: "Default",
  args: {
    name: "arrow",
  },
  argTypes: {
    name: {
      options: [
        "arrow",
        "fork",
        "home",
        "sign-out",
        "star",
        "close",
        "arrow-left",
        "github",
      ],
      control: { type: "select" },
    },
  },
};
