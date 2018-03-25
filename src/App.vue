<template>
  <div>
    <MainMenu></MainMenu>
    <Battleground></Battleground>

  </div>
</template>

<script>

import Battleground from './components/battleground/battleground.vue'
export default {
  components: {
    Battleground: Battleground
  }
}
</script>

<style lang="scss">

</style>
