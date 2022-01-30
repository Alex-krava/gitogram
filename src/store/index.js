import { createStore } from "vuex";
import { trendings } from "./trendings";

export default createStore({
  modules: {
    trendings: trendings,
  },
});
