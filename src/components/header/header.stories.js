import XHeader from "./header";

export default {
  title: "Header",
  component: { XHeader },
};

export const defaultView = () => ({
  title: "Header",
  components: { XHeader },
  template: `<x-header />`,
});
