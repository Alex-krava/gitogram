import CFooter from "./footer.vue";

export default {
  title: "Footer",
  component: CFooter,
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CFooter },
  template: `<c-footer v-bind="$props" />`,
});
