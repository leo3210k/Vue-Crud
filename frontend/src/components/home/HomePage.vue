<template>
  <transition-group>
    <PageHeader title="Início" icon="house" 
      subtitle="Segundo Projeto do Capítulo de React.">
    </PageHeader>
    <div className="main">
      <div className="card">
        <h1 className="welcome__title">Bem Vindo!</h1>
        <hr />
        <p className="welcome__text">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
      </div>
    </div>
  </transition-group>
</template>

<script>
import PageHeader from '../template/PageHeader'

export default {
  components: {
    PageHeader
  }
}
</script>

<style>

</style>