import CProgress from "./progress.vue";

export default {
  title: "Progress",
  component: CProgress,
  argTypes: {
    onFinish: {
      action: "onFinish",
    },
  },
};

export const Default = (args) => ({
  data() {
    return { ...args };
  },
  components: { CProgress },
  template: `<c-progress v-bind="$props" @onFinish="onFinish" />`,
});
