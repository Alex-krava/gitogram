import { createStore } from "vuex";
import { trendings } from "./trendings";
import { user } from "./user";

export default createStore({
  modules: {
    trendings: trendings,
    user: user,
  },
});
