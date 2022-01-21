import Logo from "./logo";

export default {
  title: "Logo",
  component: { Logo },
};

export const defaultView = () => ({
  title: "Logo",
  components: { Logo },
  template: `<logo />`,
});
