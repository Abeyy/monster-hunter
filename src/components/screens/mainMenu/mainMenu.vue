<template>
  <div class="main-menu">
    <div class="space">

    </div>
    <img class="main-title" src="../../../assets/Monster-Hunter.png">
    <button v-on:click="changeView('battleground')" class="play-button">
      <img class="main-title" src="../../../assets/Play-Now.png">
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    changeView(view) {
      this.$store.commit('set_current_view', view)
    }
  }
}
</script>

<style lang="scss">

  .main-menu {
    background: url('../../../assets/mainBackground.gif') no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
  }

  .space {
    height: 100px
  }

  .main-title, .play-button {
    display: block;
    // margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .play-button {
    width: 40%;
    background: transparent;
    border: none;
    margin-top: 150px;
    img {
      cursor: pointer;
      &:hover {
        filter: brightness(1.5)
      }
    }
  }
</style>
