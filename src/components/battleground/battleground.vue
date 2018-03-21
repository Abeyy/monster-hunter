<template>
  <div>
    <Hero :message="message"></Hero>
    <Monster></Monster>
  </div>
</template>

<script>

import Hero from '../hero/hero.vue'
import Monster from '../monsters/basicmon.vue'

export default {
  data() {
    return {
      message: {
        damage: 10,
        status: 'none'
      }
    }
  },
  components: {
    Hero: Hero,
    Monster: Monster
  }
}

</script>

<style lang="scss">

</style>
