<template>
  <div>
    <div class="hero-area">
        <Hero></Hero>
    </div>

    <div class="monster-area">
        <!-- <Basicmon></Basicmon> -->
        <Monster></Monster>
    </div>
  </div>
</template>

<script>

import Hero from '../hero/hero.vue'
import Basicmon from '../monsters/basicmon.vue'
import Monster from '../monsters/monster.vue'

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
    Basicmon: Basicmon,
    Monster: Monster
  }
}

</script>

<style scoped lang="scss">
  .hero-area, .monster-area {
    width: 49%;
    display: inline-block;
  }
</style>
