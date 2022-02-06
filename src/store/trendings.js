import { getTrendings, onDeleteFollow, onFollow } from "../api/rest/trendings";
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
          following: post.following,
        };
      });
    },
  },
  mutations: {
    setTrendings(state, data) {
      state.data = {
        ...data,
        items: data.items.map((item) => {
          return {
            ...item,
            following: {
              status: false,
              loading: false,
              error: "",
            },
          };
        }),
      };
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
    setFollowing(state, data) {
      state.data = {
        ...state.data,
        items: state.data.items.map((item) => {
          if (data.id === item.id) {
            return {
              ...item,
              following: {
                ...item.following,
                ...data,
              },
            };
          } else {
            return item;
          }
        }),
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
    async followRepo({ commit, state }, id) {
      try {
        commit("setFollowing", { id: id, loading: true });
        const post = state.data.items.find((post) => post.id === id);
        await onFollow({ owner: post.owner.login, repo: post.name });
        commit("setFollowing", { id: id, status: true });
      } catch (error) {
        commit("setFollowing", { id: id, error: new Error(error).message });
      } finally {
        commit("setFollowing", { id: id, loading: false });
      }
    },
    async unfollowRepo({ commit, state }, id) {
      try {
        commit("setFollowing", { id: id, loading: true });
        const post = state.data.items.find((post) => post.id === id);
        await onDeleteFollow({ owner: post.owner.login, repo: post.name });
        commit("setFollowing", { id: id, status: false });
      } catch (error) {
        commit("setFollowing", { id: id, error: new Error(error).message });
      } finally {
        commit("setFollowing", { id: id, loading: false });
      }
    },
  },
};
