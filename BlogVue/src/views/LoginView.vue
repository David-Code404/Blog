<script setup>
import { ref } from "vue"


const ver = ref('password')

const Mostrar = ()=>{
  ver.value = ver.value === 'password' ? 'text' : 'password'
}

</script>

<template>
  <div class="Principal">
    <div class="Img">
      <div class="email"><input type="email" placeholder="                    Email ID" /></div>
      <div class="password"><input :type="ver" placeholder="                   Password" /></div>
      <input type="checkbox" @click="Mostrar">
      <br>
      <button class="BUTTON">LOGIN</button>
    </div>
  </div>
</template>
<style scoped>

*{
  border-radius: 10px;
}

.Principal{
  position: absolute;
  left: 330px;
  top: 120px;
  display: flex;
}


.Img {
  background: url(../assets/Imagen/white-cubes-3d-background.jpg);
  width: 300px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  box-shadow: 0px 40px 50px 10px cornsilk; 
}

.email,
.password {
  margin-bottom: 20px; 
}

.email input,
.password input {
  width: 200px; 
  height: 30px; 
}

.BUTTON {
  width: 150px;
  height: 30px;
  border: 2px solid #BCBABE;
  border-radius: 20px;
}

.BUTTON:hover {
  background-color: rgba(75, 75, 75, 0.397);
}


</style>
