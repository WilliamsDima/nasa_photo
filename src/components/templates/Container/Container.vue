<template>
    <div class="container">
        <Header />
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="js">
import Header from '../../organisms/Header/index.vue'
export default {
  components: {
    Header,
  }
}

</script>

<style lang="scss">
@import  './style.scss';

</style>