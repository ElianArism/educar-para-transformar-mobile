import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("usuario")) {
        next({ path: "/profile", replace: true });
      } else {
        next();
      }
    },
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem("usuario");
      if (!user) {
        next({ path: "/login", replace: true });
      } else {
        next();
      }
    },
    component: () => import("../views/PerfilView.vue"),
  },
  {
    path: "/listAlumnos",
    name: "ListAlumnos",
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem("usuario");
      if (!user) {
        next({ path: "/login", replace: true });
      } else {
        next();
      }
    },
    component: () => import("../views/ListAlumnosView.vue"),
  },
  {
    path: "/listAulas",
    name: "listAulas",
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem("usuario");
      if (!user) {
        next({ path: "/login", replace: true });
      } else {
        next();
      }
    },
    component: () => import("../views/ListAulasView.vue"),
  },
  {
    path: "/paletas",
    name: "paletas",
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem("usuario");
      if (!user) {
        next({ path: "/login", replace: true });
      } else {
        next();
      }
    },
    component: () => import("../views/PaletasView.vue"),
  },
  {
    path: "/asignacion/:dni/:subject",
    name: "asignacion",
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem("usuario");
      if (!user) {
        next({ path: "/login", replace: true });
      } else {
        next();
      }
    },
    component: () => import("../views/AsignarAulasView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
