import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Paglogin from "@/views/LoginView.vue";
import Perfil from "@/views/PerfilView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/folder/Inbox",
  },
  {
    path: "/folder/:id",
    component: () => import("../views/FolderPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Paglogin,
  },
  {
    path: "/profile",
    name: "profile",
    component: Perfil,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
