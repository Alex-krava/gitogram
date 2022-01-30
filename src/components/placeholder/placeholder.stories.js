import Placeholder from "./placeholder.vue";

export default {
  title: "Placeholder",
  component: Placeholder,
};

export const Default = (args) => ({
  setup() {
    return {
      ...args,
    };
  },
  components: { Placeholder },
  template: `<placeholder v-bind="$props" :paragraphs="paragraphs" />`,
});

Default.stories = {
  args: {
    paragraphs: 1,
  },
};
