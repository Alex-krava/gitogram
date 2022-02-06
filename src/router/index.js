import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Main from "../pages/main/main.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../pages/auth/auth.vue"),
  },
  {
    path: "/stories",
    name: "Stories",
    component: () => import("../pages/stories/stories.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  try {
    await store.dispatch("user/fetchUser");
    if (to.name === "Auth") {
      next({ name: from.name });
    } else {
      next();
    }
  } catch (error) {
    if (to.name === "Auth") {
      next();
    } else {
      next({ name: "Auth" });
    }
  }
});

export default router;
