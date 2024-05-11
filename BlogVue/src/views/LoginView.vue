<script setup></script>

<template>
  <div class="Principal">
    <div class="Img">
      <div class="email"><input type="email" placeholder="                    Email ID" /></div>
      <div class="password"><input type="password" placeholder="                   Password" /></div>
      <button class="BUTTON">LOGIN</button>
    </div>
  </div>
</template>
<style scoped>



.Principal {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh; 
}

.Img {
  background-image: url(../assets/Imagen/white-cubes-3d-background.jpg);
  background-repeat: no-repeat;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  box-shadow: 0px 40px 50px 10px; 
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
  border: 2px solid black;
  border-radius: 20px;
}

.BUTTON:hover {
  background-color: rgba(75, 75, 75, 0.397);
}


</style>
