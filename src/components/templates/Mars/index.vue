<template>
    <main class="main">

            <div class="loader">
                <transition name="fade">
                    <img v-if="loading && !marsPhoto" class="loading" src="../../../assets/images/loading.gif" alt="">
                </transition>
            </div>

            <div v-if="marsPhoto" class="list-photo">
                <div class="carosel_content"  v-for="(photo, index) in marsPhoto" :key="photo.id">
                    <div class="carousel__item">{{index + 1}}: {{ photo.camera.full_name }}</div>
                    <img :src="photo.img_src" alt="">
                </div>

                <transition name="fade">
                    <img v-if="loading" class="loading" src="../../../assets/images/loading.gif" alt="">
                </transition>
            </div>

            <div v-if="marsPhoto"  v-intersection="fetchMars" class="observer"></div>
                    
    </main>

</template>

<script lang="js">
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    components: {

    },
    computed: {
        ...mapState({
            marsPhoto: state => state.marsPhoto,
            loading: state => state.loading,
        }),
    },
    methods: {
        ...mapActions({
            fetchMars: 'fetchMars',
        }),
    },
    mounted() {
        this.fetchMars()
    }
}

</script>

<style lang="scss" scope>
@import  './style.scss';

</style>