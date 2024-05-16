<script setup> 
const usuarios = [
    {
        nombre: "Juan Perez",
        clave: "ju4np3r3z",
        correo: "juan.perez@example.com",
        fecha_creacion: "2023-01-10",
        fecha_modificacion: "2024-01-10"
    },
    {
        nombre: "Maria Garcia",
        clave: "m4r14g4rc14",
        correo: "maria.garcia@example.com",
        fecha_creacion: "2023-02-15",
        fecha_modificacion: "2024-02-15"
    },
    {
        nombre: "Carlos Rodriguez",
        clave: "c4rl0sr0d",
        correo: "carlos.rodriguez@example.com",
        fecha_creacion: "2023-03-20",
        fecha_modificacion: "2024-03-20"
    },
    {
        nombre: "Ana Martinez",
        clave: "4n4m4rt1n3z",
        correo: "ana.martinez@example.com",
        fecha_creacion: "2023-04-25",
        fecha_modificacion: "2024-04-25"
    }
];


</script>

<template>
    <router-link :to="{publicaciones}"></router-link>
</template>


<style scoped>

</style>