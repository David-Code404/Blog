import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/usuario",
      name: "usuario",
      component: () => import("../views/UsuarioView.vue"),
    },
    {
      path: "/etiqueta",
      name: "etiqueta",
      component: () => import("../views/EtiquetaView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/Etiqueta/EtiquetaList.vue"),
        },
        {
          path: "crear",
          component: () => import("../components/Etiqueta/EtiquetaCreate.vue"),
        },
        {
          path: "editar/:id",
          component: () => import("../components/Etiqueta/EtiquetaUpdate.vue"),
        },
      ],
    },
    {
      path: "/publicacion",
      name: "publicacion",
      component: () => import('../views/PublicacionView.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/Publicacion/PublicacionUpdate.vue'),
        },
        {
          path: "crear",
          component: () => import('../components/Publicacion/PublicacionUpdate.vue'),
        },
        {
          path: "editar/:id ?",
          name : "editar",
          component: () => import('../components/Publicacion/PublicacionUpdate.vue'),
        },
      ],
    },
    {
      path : '/contacto',
      name : 'contacto',
      component : () => import('../views/ContactoView.vue')
    }
  ],
});

export default router;
