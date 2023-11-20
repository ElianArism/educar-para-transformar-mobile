import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Paglogin from "@/views/LoginView.vue";
import Perfil from "@/views/PerfilView.vue";
import ListAlumnos from "@/views/ListAlumnosView.vue";
import ListAulas from "@/views/ListAulasView.vue";
import Paletas from "@/views/PaletasView.vue";
import AsignacionAulas from "@/views/AsignarAulasView.vue";

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
  {
    path: "/listAlumnos",
    name: "ListAlumnos",
    component: ListAlumnos,
  },
  {
    path: "/listAulas",
    name: "listAulas",
    component: ListAulas,
  },
  {
    path: "/paletas",
    name: "paletas",
    component: Paletas,
  },
  {
    path: "/asignacion",
    name: "asignacion",
    component: AsignacionAulas,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
