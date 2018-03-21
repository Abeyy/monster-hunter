<template>
  <div>
    <Hero></Hero>
    <Basicmon></Basicmon>
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

</style>
