import { getIssues, getUser, getUserLikes } from "../api/rest/user";

export const user = {
  namespaced: true,
  state: () => ({
    user: {
      data: [],
      isLoading: false,
      error: "",
    },
    likes: {
      data: [],
      isLoading: false,
      error: "",
    },
  }),
  getters: {
    avatarSrc(state) {
      return state?.user?.data?.avatar_url;
    },
    likes(state) {
      return state?.likes?.data?.map((post) => {
        const date = new Date(post.pushed_at);
        return {
          id: post.id,
          avatar: post.owner.avatar_url,
          username: post.owner.login,
          issues: post.issues || [],
          title: post.name,
          descriptionType: post.language,
          description: post.description,
          star: post.stargazers_count,
          fork: post.forks,
          content: post.content,
          date: `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        };
      });
    },
  },
  mutations: {
    setUser(state, data) {
      state.user.data = data;
    },
    updateIsLoading(state, value) {
      state.user.isLoading = value;
    },
    updateError(state, value) {
      state.user.error = value;
    },
    setLikes(state, data) {
      state.likes.data = data;
    },
    setIssues(state, { data, id }) {
      const likes = state.likes.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            issues: data,
          };
        }

        return item;
      });

      state.likes.data = likes;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        commit("updateIsLoading", true);
        const { data } = await getUser();
        commit("setUser", data);
      } catch (error) {
        commit("updateError", new Error(error).message);
        throw new Error(error);
      } finally {
        commit("updateIsLoading", false);
      }
    },

    async fetchUserLikes({ commit }) {
      try {
        const { data } = await getUserLikes();
        commit("setLikes", data);
      } catch (error) {
        throw new Error(error);
      }
    },

    async fetchIssues({ commit }, { owner, repo, id }) {
      try {
        const { data } = await getIssues({ owner, repo });
        commit("setIssues", { data, id });
      } catch (error) {
        throw new Error(error);
      }
    },

    logout() {
      localStorage.removeItem("token");
    },
  },
};
