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
      path: "/publicaciones",
      name: "publicaciones",
      component: () => import("../views/PublicacionView.vue"),
      children: [
        {
          path: "",
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
    {
      path: "/imagenes",
      name: "imagenes",
      component: () => import("../views/ImagenView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/Imagen/ImagenCreate.vue"),
        },
        {
          path: "crear",
          name: "crear",
          component: () => import("../components/Imagen/ImagenList.vue"),
        },
        {
          path: "editar/:id",
          name: "editar",
          component: () => import("../components/Imagen/ImagenUpdate.vue"),
        },
      ],
    },
    {
      path: "/etiquetas_publicaciones",
      name: "etiquetas_publicaciones",
      component: () => import("../views/Etiqueta_PublicacionView.vue"),
      children: [
        {
          path: "",
          component: () =>
            import(
              "../components/Etiqueta_Publicacion/Etiqueta_PublicacionCreate.vue"
            ),
        },
        {
          path: "crear",
          name: "crear",
          component: () =>
            import(
              "../components/Etiqueta_Publicacion/Etiqueta_PublicacionList.vue"
            ),
        },
        {
          path: "editar/:id",
          name: "editar",
          component: () =>
            import(
              "../components/Etiqueta_Publicacion/Etiqueta_PublicacionUpdate.vue"
            ),
        },
      ],
    },
    {
      path: "/publicaciones_categorias",
      name: "publicaciones_categorias",
      component: () => import("../views/Publicacion_CategoriaView.vue"),
      children: [
        {
          path: "",
          component: () =>
            import(
              "../components/Publicacion_Categoria/Publicacion_CategoriaCreate.vue"
            ),
        },
        {
          path: "crear",
          name: "crear",
          component: () =>
            import(
              "../components/Publicacion_Categoria/Publicacion_CategoriaList.vue"
            ),
        },
        {
          path: "editar/:id",
          name: "editar",
          component: () =>
            import(
              "../components/Publicacion_Categoria/Publicacion_CategoriaUpdate.vue"
            ),
        },
      ],
    },
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("../views/CategoriaView.vue"),
      children: [
        {
          path: "",
          name: "lista",
          component: () => import("../components/Categoria/CategoriaList.vue"),
        },
        {
          path: "crear",
          name: "crear",
          component: () => import("../components/Categoria/CategoriaCreate.vue"),
        },
        {
          path: "editar/:id",
          name: "editar",
          component: () => import("../components/Categoria/CategoriaUpdate.vue"),
        },
      ],
    },
    
  ],
});

export default router;
