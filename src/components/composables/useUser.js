import { computed } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();

  return {
    user: computed(() => store.state.user.user.data),
  };
};
