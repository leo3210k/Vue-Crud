<template>
  <aside className="navigation">
    <router-link to="/" class="link">
      <i className="fa-solid fa-house"></i> Início
    </router-link>
    <router-link to="/usercrud" class="link">
      <i className="fa-solid fa-users"></i> Usuários
    </router-link>
  </aside>
</template>

<script>
export default {

}
</script>

<style>
.navigation {
  grid-area: navigation;

  height: 100%;
  display: flex;
  flex-direction: column;

  box-shadow: var(--shadow);
  background-color: var(--ebony-clay);
}

.link {
  padding: 15px;
  color: var(--white);
  text-decoration: none;
}

.link i {
  margin-right: 10px;
}

.navigation a:hover {
  cursor: pointer;
  background: var(--button-gradient);
}

@media (max-width: 1190px) {
  .navigation {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>