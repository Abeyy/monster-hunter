<template>
  <div class="winScreen">
    <div> YOUR FRIENDS ARE NOW AVENGED. </div>
    <button @click="returnToMainMenu"> Back To Main Menu</button>
  </div>
</template>

<script>
export default {
  methods: {
    returnToMainMenu() {
      this.$store.commit('set_current_view', 'mainMenu')
    }
  }
}
</script>

<style lang="scss">
  .winScreen {
    height: 100vh;
    background: black;
    color: white;
    text-align: center;
    font-size: 26px;
    button {
      margin-top: 5%;
      background: black;
      border: none;
    }
  }
</style>
