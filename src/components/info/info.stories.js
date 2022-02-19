import Info from "./info.vue";

export default {
  title: "Info",
  component: Info,
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Info },
  template: `<info v-bind="$props" />`,
});
