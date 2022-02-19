import { computed } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();
  const user = store.state.user.user.data;

  const fetchFollowers = async () => {
    await store.dispatch("user/fetchUserFollowers", { ownerLogin: user.login });
  };

  fetchFollowers();

  return {
    fetchFollowers,
    followers: computed(() => store.state.user.userRepos.data),
    followersIsLoading: computed(() => store.state.user.userRepos.isLoading),
    followersError: computed(() => store.state.user.userRepos.error),
  };
};
