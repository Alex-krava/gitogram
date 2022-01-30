import { getTrendings } from "../api/rest/trendings";
import { getReadme } from "../api/rest/readme";

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
          content: post.content,
        };
      });
    },
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
    updateContent(state, content) {
      const items = state.data.items.map((item) => {
        if (item.id === content.id) {
          return {
            ...item,
            content: content.data,
          };
        }

        return item;
      });

      state.data = {
        ...state.data,
        items,
      };
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
    async fetchReadme({ commit }, { id, owner, repo }) {
      try {
        const { data } = await getReadme({ owner, repo });
        commit("updateContent", {
          id,
          data,
        });
      } catch (error) {
        console.log(new Error(error).message);
      }
    },
  },
};
