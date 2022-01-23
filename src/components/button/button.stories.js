import CButton from "./button.vue";

export default {
  title: "Button",
  component: CButton,
};

export const Default = (args) => ({
  data() {
    return { ...args };
  },
  components: { CButton },
  template: `<c-button v-bind="$props" :hover-text="hoverText">follow</c-button>`,
});

Default.args = {
  hoverText: "unfollow",
};
