<script setup>

const imagenes = [
    {
        url: "https://ejemplo.com/viaje",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/naturaleza",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/comida",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/arquitectura",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/animales",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/deportes",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/tecnologia",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/moda",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/musica",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
    {
        url: "https://ejemplo.com/familia",
        fecha_creacion: "2024-05-25",
        fecha_modificacion: "2024-05-25",
    },
];




</script>

<template>
    <div class="container">
        <div class="enlace">
            <router-link to="/">Inicio</router-link>/
            <router-link :to="{ path: '/imagenes/crear' }">crear</router-link>
        </div>
        <br><br>
        <table>
            <th>URL</th>
            <th>Fecha_Creacion</th>
            <th>Fecha_Modificacion</th>
            <th>Acciones</th>
            <tr v-for="index in imagenes" :key="index.nombre">
                <img :src="index.url">
                <td>{{ index.fecha_creacion }}</td>
                <td>{{ index.fecha_modificacion }}</td>
                <td>
                    <RouterLink :to="{ path: '/imagenes/editar/' + index.id }"><button class="Editar">Editar</button>
                    </RouterLink>
                    <button @click="Delete" class="Delete">Eliminar</button>
                </td>
            </tr>
        </table>
    </div>
    <routerView></routerView>
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
