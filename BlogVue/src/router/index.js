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
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: () => import("../views/UsuarioView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/Usuario/UsuarioList.vue"),
        },
        {
          path: "crear",
          component: () => import("../components/Usuario/UsuarioCreate.vue"),
        },
        {
          path: "editar/:id",
          component: () => import("../components/Usuario/UsuarioUpdate.vue"),
        },
      ],
    },
    {
      path: "/etiquetas",
      name: "etiquetas",
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
      path: '/publicaciones',
      name: "publicaciones",
      component: () => import("../views/PublicacionView.vue"),
      children: [
        {
          path: '',
          component: () =>
            import("../components/Publicacion/PublicacionList.vue"),
        },
        {
          path: "crear",
          component: () =>
            import("../components/Publicacion/PublicacionCreate.vue"),
        },
        {
          path: "editar/:id",
          name: "editar",
          component: () =>
            import("../components/Publicacion/PublicacionUpdate.vue"),
        },
      ],
    },
  ],
});

export default router;
