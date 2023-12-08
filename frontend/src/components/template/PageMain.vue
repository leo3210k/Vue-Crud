<template>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>
.main {
  grid-area: main;

  overflow: auto;
}

.card {
  margin: 20px;
  padding: 5px 20px;

  background-color: var(--white-lilac);
  box-shadow: 0px 0px 15px #0004;
}

.welcome__title {
  font-size: 3rem;
  font-weight: 400;
}

.welcome__text {
  font-weight: 400;
}
</style>