import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/PerfilView.vue"),
  },
  {
    path: "/listAlumnos",
    name: "ListAlumnos",
    component: () => import("../views/ListAlumnosView.vue"),
  },
  {
    path: "/listAulas",
    name: "listAulas",
    component: () => import("../views/ListAulasView.vue"),
  },
  {
    path: "/paletas",
    name: "paletas",
    component: () => import("../views/PaletasView.vue"),
  },
  {
    path: "/asignacion/:dni/:subject",
    name: "asignacion",
    component: () => import("../views/AsignarAulasView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
