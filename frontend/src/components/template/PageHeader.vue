<template>
  <header class="header">
    <h1 class="title">
      <i :class="`fa-solid fa-${icon} title__icon`"></i>  
      <span class="title__text">{{ title }}</span>
    </h1>
    <span class="subtitle">{{ subtitle }}</span>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: String,
    subtitle: String,
    icon: String
  }
}
</script>

<style>
header.header {
  grid-area: header;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  box-shadow: var(--shadow);
}

.title {
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 500;
}

.title__text {
  font-size: 1.7rem;
}

.title__icon {
  margin-right: 10px;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: 200;
}
</style>