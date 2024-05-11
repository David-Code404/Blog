<script setup></script>

<template>
  <div class="Principal">
    <div class="Img">
      <div class="email"><input type="email" placeholder="Email ID" /></div>
      <div class="password">
        <input type="password" placeholder="Password" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.Principal{
    margin: 0px 0px 250px 400px;
}

.Img {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/Imagen/white-cubes-3d-background.jpg);
  background-repeat: no-repeat;
  width: 400px;
  height: 500px;
  border-radius: 20px;
}

.email {
  background: transparent;
  opacity: 0.1;
}

.password {
  background: transparent;
  opacity: 0.1;
  margin: 0px 0px 0px 0px;
}
</style>
