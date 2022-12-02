<template>
    <header class="header">

      <div class="header-content">
        <div class="header-content__item">
          <router-link tag="a" to="/">
            <img class="logo" src="../../../assets/images/loading.gif" alt="logo">
          </router-link>
        </div>

        <router-link class="link" tag="a" to="/mars">
            <img src="../../../assets/images/mars.svg" alt="mars">
            Photos from the rover
        </router-link>
      </div>
        
    </header>
</template>

<script lang="js">

export default {

}

</script>

<style lang="scss">
@import  './style.scss';

</style>