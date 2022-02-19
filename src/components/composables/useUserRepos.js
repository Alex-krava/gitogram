import { computed } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();
  const user = store.state.user.user.data;

  const fetchRepos = async () => {
    await store.dispatch("user/fetchUserRepos", { ownerLogin: user.login });
  };

  fetchRepos();

  return {
    fetchRepos,
    repos: computed(() => store.state.user.userRepos.data),
    reposIsLoading: computed(() => store.state.user.userRepos.isLoading),
    reposError: computed(() => store.state.user.userRepos.error),
  };
};
