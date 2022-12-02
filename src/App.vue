<template>
  <Container>
      <router-view/>
  </Container>
</template>

<script>
import Container from './components/templates/Container/Container.vue'

export default {
  components: {
    Container
  }
}
</script>

<style lang="scss">

@import url('./App.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
