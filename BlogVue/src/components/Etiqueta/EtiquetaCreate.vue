<script setup>

import { ref } from 'vue';


const id = ref(0)
const nombre = ref('')
const descripcion = ref('')
const fecha_creacion = ref('')
const fecha_modificacion = ref('')



</script>

<template>
    <div class="container">
        <nav class="breadcrumb">
            <ul>
                <li><router-link to="/">Inicio</router-link></li>
                <li>
                    <RouterLink to="/etiquetas">Etiquetas</RouterLink>
                </li>
                <li>crear</li>
            </ul>
        </nav>
        <form class="form-container">
            <div class="form-group">
                <label for="Nombre">Nombre</label>
                <input type="text" id="Nombre" v-model="nombre" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Descripcion">Descripción</label>
                <input type="text" id="Descripcion" v-model="descripcion" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Fecha_Creacion">Fecha de Creación</label>
                <input type="date" id="Fecha_Creacion" v-model="fecha_creacion" class="form-control" />
            </div>
            <div class="form-group">
                <label for="Fecha_Modificacion">Fecha de Modificación</label>
                <input type="date" id="Fecha_Modificacion" v-model="fecha_modificacion" class="form-control" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">crear</button>
            </div>
        </form>
    </div>
</template>


<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-right: 100px;
}

.breadcrumb {
    margin-bottom: 1rem;
}

.breadcrumb ul {
    display: flex;
    list-style: none;
    padding: 0;
}

.breadcrumb li {
    margin-right: 1rem;
}

.breadcrumb a {
    text-decoration: none;
    color: #575757;
}

.breadcrumb a:hover {
    text-decoration: underline;
}

.form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
}

.form-control {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 880px;
    box-sizing: border-box;
}

.btn {
    padding: 1rem 2rem;
    font-size: 1rem;
    color: #fff;
    background-color: #303030;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn:hover {
    background-color: #030405;
}

@media (max-width: 600px) {
    .container {
        padding: 1rem;
    }

    .breadcrumb ul {
        flex-direction: column;
        align-items: flex-start;
    }

    .form-container {
        gap: 0.5rem;
    }

    .btn {
        width: 100px;
        justify-self: center;
    }
}
</style>