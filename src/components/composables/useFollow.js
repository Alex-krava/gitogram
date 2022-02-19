import { useStore } from "vuex";

export default () => {
  const store = useStore();

  return {
    followRepo: (id) => store.dispatch("trendings/followRepo", id),
  };
};
