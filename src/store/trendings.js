import { getTrendings } from "../api/rest/trendings";

export const trendings = {
  namespaced: true,
  state: () => ({
    data: [],
    isLoading: false,
    error: "",
  }),
  getters: {
    posts(state) {
      return state?.data?.items?.map((post) => {
        return {
          id: post.id,
          avatar: post.owner.avatar_url,
          username: post.owner.login,
          issues: [],
          title: post.name,
          descriptionType: post.language,
          description: post.description,
          star: post.stargazers_count,
          fork: post.forks,
        };
      });
    },
    dataForCard() {},
  },
  mutations: {
    setTrendings(state, data) {
      state.data = data;
    },
    updateIsLoading(state, value) {
      state.isLoading = value;
    },
    updateError(state, value) {
      state.error = value;
    },
  },
  actions: {
    async fetchTrendings({ commit }) {
      try {
        commit("updateIsLoading", true);
        const { data } = await getTrendings();
        commit("setTrendings", data);
      } catch (error) {
        commit("updateError", new Error(error).message);
      } finally {
        commit("updateIsLoading", false);
      }
    },
  },
};
