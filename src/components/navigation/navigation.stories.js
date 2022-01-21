import Navigation from "./navigation";

export default {
  title: "Navigation",
  component: { Navigation },
};

export const defaultView = () => ({
  title: "Navigation",
  components: { Navigation },
  template: `<navigation />`,
});
