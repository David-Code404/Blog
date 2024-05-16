<script setup>
const etiqueta = [
  {
    id: 1,
    nombre: "Viaje",
    descripcion: "Viajes De Todo El mundo",
    url: "https://concepto.de/wp-content/uploads/2023/01/avion.jpg",
  },
  {
    id: 2,
    nombre: "Naturaleza",
    descripcion: "Fotos de paisajes naturales",
    url: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    nombre: "Comida",
    descripcion: "Deliciosas recetas y platos",
    url: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
  },
  {
    id: 4,
    nombre: "Arquitectura",
    descripcion: "Imágenes de edificios y estructuras",
    url: "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    nombre: "Animales",
    descripcion: "Fotos de animales salvajes y domésticos",
    url: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    nombre: "Deportes",
    descripcion: "Imágenes de diferentes disciplinas deportivas",
    url: "https://images.pexels.com/photos/20006304/pexels-photo-20006304/free-photo-of-coche-deportes-rally-acto-electoral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    nombre: "Tecnología",
    descripcion: "Fotos de dispositivos y avances tecnológicos",
    url: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    nombre: "Moda",
    descripcion: "Últimas tendencias en moda y estilo",
    url: "https://images.pexels.com/photos/1187954/pexels-photo-1187954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    nombre: "Música",
    descripcion: "Imágenes relacionadas con la música y conciertos",
    url: "https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    nombre: "Familia",
    descripcion: "Momentos especiales en familia",
    url: "https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
</script>

<template>
  <div>

  </div>
  <br>
  <div>
    <table>
      <th>ID</th>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Url</th>
      <th>Acciones</th>
      <tr v-for="index in etiqueta" :key="index.nombre">
        <td>{{ index.id }}</td>
        <td>{{ index.nombre }}</td>
        <td>{{ index.descripcion }}</td>
        <td>{{ index.url }}</td>
        <td>
          <RouterLink :to="{ path: '/etiquetas/editar/' + index.id }"
            >Editar</RouterLink
          >
          <button @click="">Eliminar</button>
        </td>
      </tr>
    </table>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
table th {
  border: 2px solid rgb(148, 144, 144);
  border-radius: 4px;
}

tr td {
  border: 2px solid rgb(109, 109, 109);
}
</style>
