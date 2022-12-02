<template>
    <div class="container-photo-day">
        <h1 class="app-title">Astronomical Picture of the day</h1>

        <div class="container-photo-day__content">
          <h2 class="subtitle">{{data.title}}</h2>

          <div class="container-photo-day__info">
            <a :href="data.hdurl" target="_blank">
              <img class="container-photo-day__info__img" :src="data.url" alt="">
            </a>

            <div>
              <p>
                {{data.explanation}}
              </p>

              <p class="date">
                Date: {{data.date}}
              </p>
            </div>

          </div>
          
        </div>
    </div>
</template>

<script lang="js">

export default {
  props: {
    data: {
      type: Object,
      requires: true
    }
  }
}

</script>

<style lang="scss" scope=true>
@import  './style.scss';

</style>