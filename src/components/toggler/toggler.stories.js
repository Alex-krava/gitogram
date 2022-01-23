import Toggler from "./toggler";
import { action } from "@storybook/addon-actions";

export default {
  title: "Toggler",
  component: { Toggler },
};

export const defaultView = () => ({
  title: "Toggler",
  components: { Toggler },
  template: `<toggler @onChange="onChange" />`,
  methods: {
    onChange: action("onChange"),
  },
});
