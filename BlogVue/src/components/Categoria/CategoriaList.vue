<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const categorias = ref([]);

async function getCategorias() {
    try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/categorias');
        categorias.value = response.data;
    } catch (error) {
        console.error('Erro Al Absorver datos de categorias :', error);
    }
}

function toEdit(id) {
    console.log('Edit category with id:', id);
}

function toDelete(id) {
    console.log('Delete category with id:', id);
}

onMounted(() => {
    getCategorias();
});
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Categorías</li>
            </ol>
        </nav>

        <div class="row">
            <h2>Lista de Categorías</h2>
            <div class="col-12">
                <RouterLink to="/categorias/crear">
                    <font-awesome-icon icon="fa-solid fa-plus" /> Crear Nueva Categoría
                </RouterLink>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr style="background-color: black;">
                        <th scope="col" style="color: white;">N°</th>
                        <th scope="col" style="color: white;">Descripción</th>
                        <th scope="col" style="color: white;">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(categoria, index) in categorias" :key="categoria.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ categoria.descripcion }}</td>
                        <td>
                            <button class="btn text-success" @click="toEdit(categoria.id)">
                                <font-awesome-icon icon="fa-solid fa-edit" />
                                Editar
                            </button>
                            <button class="btn text-danger" @click="toDelete(categoria.id)">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                                Eliminar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>

</style>
