<template>
  <div>
    <MainMenu v-if="current_view == 'mainMenu'"></MainMenu>
    <Battleground v-if="current_view == 'battleground'"></Battleground>

  </div>
</template>

<script>

import MainMenu from './components/screens/mainMenu/mainMenu.vue'
import Battleground from './components/battleground/battleground.vue'

export default {
  components: {
    MainMenu: MainMenu,
    Battleground: Battleground
  },
  computed: {
    current_view() {
      return this.$store.state.current_view
    }
  }
}
</script>

<style lang="scss">

</style>
