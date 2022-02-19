import Slider from "./slider.vue";

export default {
  title: "Slider",
  component: Slider,
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Slider },
  template: `<slider v-bind="$props" />`,
});
