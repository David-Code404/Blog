<script setup>
import { ref } from 'vue';


const categorias = ref([
  {
    id: 1,
    nombre: "Viaje",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 2,
    nombre: "Naturaleza",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 3,
    nombre: "Comida",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 4,
    nombre: "Arquitectura",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 5,
    nombre: "Animales",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 6,
    nombre: "Deportes",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 7,
    nombre: "Tecnología",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 8,
    nombre: "Moda",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 9,
    nombre: "Música",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
  {
    id: 10,
    nombre: "Familia",
    fecha_publicacion: "2024-05-25",
    fecha_modificacion: "2024-05-25",
  },
]);




</script>

<template>
  <div class="container">
    <div class="enlace">
      <RouterLink to="/">Inicio</RouterLink>/
      <RouterLink :to="{ path: '/categorias/crear' }">crear</RouterLink>
    </div>
    <br><br>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha_Creacion</th>
          <th>Fecha_Modificacion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.id }}</td>
          <td>{{ categoria.nombre }}</td>
          <td>{{ categoria.fecha_publicacion }}</td>
          <td>{{ categoria.fecha_modificacion }}</td>
          <td>
            <RouterLink :to="{ path: '/categorias/editar/' + categoria.id }">
              <button class="Editar">Editar</button>
            </RouterLink>
            <button @click="deleteCategoria(categoria.id)" class="Delete">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <router-view></router-view>
</template>

<style scoped>
table th {
  border: 2px solid rgb(21, 41, 40);
  border-radius: 4px;
}

tr td {
  border: 2px solid rgb(216, 216, 216);
}

.container {
  margin-left: 200px;
  background-color: rgb(235, 235, 235);
  border-radius: 20px;
  padding-top: 40px 40px;
}

.enlace {
  display: flex;
}

.Delete {
  border-radius: 20px;
}

.Delete:hover {
  background-color: red;
}

.Editar {
  border-radius: 20px;
}

.Editar:hover {
  background-color: rgb(101, 225, 230);
}
</style>
