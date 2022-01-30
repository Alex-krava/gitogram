import Logo from "./logo";

export default {
  title: "Logo",
  component: { Logo },
};

export const defaultView = (args) => ({
  title: "Logo",
  components: { Logo },
  setup() {
    return { ...args }
  },
  template: `<logo :white="white" />`,
});


defaultView.story = {
  args: {
    white: false
  }
}