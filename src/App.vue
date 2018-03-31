<template>
  <div>
    <MainMenu v-if="current_view == 'mainMenu'"></MainMenu>
    <Battleground v-if="current_view == 'battleground'"></Battleground>
    <WinScreen v-if="current_view == 'winScreen'"></WinScreen>
  </div>
</template>

<script>

import MainMenu from './components/screens/mainMenu/mainMenu.vue'
import Battleground from './components/battleground/battleground.vue'
import WinScreen from './components/screens/mainMenu/winScreen.vue'
export default {
  components: {
    MainMenu: MainMenu,
    Battleground: Battleground,
    WinScreen: WinScreen
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
