<template>
  <div>
    <div class="battleground">
      exist
      <div class="col-s-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="hero-display col-s-3 col-md-3 col-lg-3">
        <img src="https://firebasestorage.googleapis.com/v0/b/monster-hunter-cb36c.appspot.com/o/hero.gif?alt=media&token=9f264e57-1bf2-47f5-83f0-066db44029ec">
      </div>

      <div class="col-s-4 col-md-4 col-lg-4"></div>

      <div class="monster-section col-s-3 col-md-3 col-lg-3">
        <div class="monster-area">
            <Monster></Monster>
        </div>
      </div>

      <div class="col-s-1 col-md-1 col-lg-1 col-xl-1"></div>
    </div>

    <div class="hero-dashboard navbar-fixed-bottom">
      <div class="divider-bar">
      </div>
      <div class="hero-area ">
          <Hero></Hero>
      </div>
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
  .battleground {
      background: url('https://firebasestorage.googleapis.com/v0/b/monster-hunter-cb36c.appspot.com/o/Pixel%20Art%20GIF-source.gif?alt=media&token=86688015-0076-4c99-99fe-85830ffa3a46') no-repeat;
      background-size: 100%;
      height: 100vh;
  }

  .divider-bar {
    width: 100%;
    border-top: 5px solid grey;
  }

  .hero-display {
    margin-top: 30%;
    img {
      height: 250px;
    }
  }
  .monster-section {
      margin-top: 25.5%;
  }

  .hero-dashboard {
    height: 150px;
  }
</style>
