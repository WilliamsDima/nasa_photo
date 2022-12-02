<template>
    <main class="main">

        <div class="loader">
            <transition name="fade">
                <img v-if="loading && !photoOfDay" class="loading" src="../../../assets/images/loading.gif" alt="">
            </transition>
        </div>

        <PhotoDay v-if="photoOfDay" v-bind:data="photoOfDay" />
        
    </main>

</template>

<script lang="js">
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import PhotoDay from '../../organisms/PhotoDay/index.vue'

export default {
    components: {
        PhotoDay
    },
    computed: {
        ...mapState({
            photoOfDay: state => state.photoOfDay,
            loading: state => state.loading,
        }),
    },
    methods: {
        ...mapActions({
            fetchMain: 'fetchMain',
        }),
    },
      mounted() {
    this.fetchMain()
  }
}

</script>

<style lang="scss" scope>
@import  './style.scss';

</style>