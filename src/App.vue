<template>
  <div>

    <div class="hero-area">
        <Hero></Hero>
    </div>

    <div class="monster-area">
        <Basicmon></Basicmon>
    </div>
  </div>
</template>

<script>
  import Hero from './components/hero/hero.vue'
  import Basicmon from './components/monsters/basicmon.vue'
export default {
  components: {
    Hero: Hero,
    Basicmon: Basicmon
  }
}
</script>

<style lang="scss">
  .hero-area, .monster-area {
    width: 49%;
    display: inline-block;
  }
</style>
