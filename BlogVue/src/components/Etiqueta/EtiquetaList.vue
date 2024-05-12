<script setup>

</script>

<template>
    <div>
        <router-link to="/">Inicio</router-link>
        <router-link :to="{path : 'Etiqueta/crear'}">Crear Nuevo</router-link>
        <router-link :to="{path : 'Etiqueta/editar'}">Editar</router-link>

    </div>
    <router-view></router-view>
</template>


<style scoped>

</style>