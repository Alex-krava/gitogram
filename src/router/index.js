import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/main/main.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
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

export default router;
