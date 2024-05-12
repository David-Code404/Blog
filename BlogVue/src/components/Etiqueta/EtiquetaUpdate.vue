<script setup>
import router from '@/router';


function GoBack() {
    router.go(-1)
}

</script>

<template>
  <h1>Esto ES Editar Etiqueta</h1>
  <div>
    <button @click="GoBack">Cancelar</button>
  </div>
</template>


<style scoped>

</style>