import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createMemoryHistory(),
  routes: [
    {
      path: "/cashout",
      name: "cashout",
      component: () => import("../views/CashOutView.vue"),
      path: "/",
      name: "welcome",
      component: () => import("../views/WelcomeView.vue")
    },
  ],
});

export default router;
