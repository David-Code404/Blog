<script setup>

const etiqueta = [
  {
    id: 1,
    nombre: "Viaje",
    descripcion: "Viajes De Todo El mundo",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 2,
    nombre: "Naturaleza",
    descripcion: "Fotos de paisajes naturales",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 3,
    nombre: "Comida",
    descripcion: "Deliciosas recetas y platos",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 4,
    nombre: "Arquitectura",
    descripcion: "Imágenes de edificios y estructuras",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 5,
    nombre: "Animales",
    descripcion: "Fotos de animales salvajes y domésticos",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 6,
    nombre: "Deportes",
    descripcion: "Imágenes de diferentes disciplinas deportivas",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 7,
    nombre: "Tecnología",
    descripcion: "Fotos de dispositivos y avances tecnológicos",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 8,
    nombre: "Moda",
    descripcion: "Últimas tendencias en moda y estilo",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 9,
    nombre: "Música",
    descripcion: "Imágenes relacionadas con la música y conciertos",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25",
  },
  {
    id: 10,
    nombre: "Familia",
    descripcion: "Momentos especiales en familia",
    fecha_creacion: "2024-05-25",
    fecha_modificaion: "2024-05-25"
  },
];

const Delete = () => {
  alert("¿Estas Seguro De Eliminar?")
}

</script>

<template>
  <div class="container">
    <div class="enlace">
      <router-link to="/">Inicio</router-link>/
      <router-link :to="{ path: '/etiquetas/crear' }">crear</router-link>
    </div>
    <br><br>
    <table>
      <th>ID</th>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Fecha_Creacion</th>
      <th>Fecha_Modificacion</th>
      <th>Acciones</th>
      <tr v-for="index in etiqueta" :key="index.nombre">
        <td>{{ index.id }}</td>
        <td>{{ index.nombre }}</td>
        <td>{{ index.descripcion }}</td>
        <td>{{ index.fecha_creacion }}</td>
        <td>{{ index.fecha_modificaion }}</td>
        <td>
          <RouterLink :to="{ path: '/etiquetas/editar/' + index.id }" ><button class="Editar">Editar</button></RouterLink>
          <button @click="Delete" class="Delete">Eliminar</button>
        </td>
      </tr>
    </table>
  </div>
  <RouterView></RouterView>
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

.enlace{
  display: flex;
}

.Delete{
  border-radius: 20px;
}
.Delete:hover{
  background-color: red;
}

.Editar{
  border-radius: 20px;
}
.Editar:hover{
  background-color: rgb(101, 225, 230);
}


</style>
