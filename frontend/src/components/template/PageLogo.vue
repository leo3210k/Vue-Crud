<template>
  <router-link to="/" class="logo">
    <img src="../../assets/logo.png" alt="logo" class="logo"/>
  </router-link>
</template>

<script>
export default {
  
}
</script>

<style>
.logo {
  grid-area: logo;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--ebony-clay);
}

.logo img {
  width: 100%;
  padding: 0px 20px;
}

.logo img:hover {
  cursor: pointer;
}

@media (max-width: 1190px) {
  .logo img {
    width: auto;
    height: 100%;
    padding: 20px 10px;
  }
}
</style>