<template>
  <div class="main-menu">
    <div class="space">

    </div>
    <img class="main-title" src="https://firebasestorage.googleapis.com/v0/b/monster-hunter-cb36c.appspot.com/o/Monster-Hunter.png?alt=media&token=c2d750d3-2320-46a7-a34d-0b95adc1833a">
    <button v-on:click="changeView('battleground')" class="play-button">
      <img class="main-title" src="https://firebasestorage.googleapis.com/v0/b/monster-hunter-cb36c.appspot.com/o/Play-Now.png?alt=media&token=5d870585-4ba4-4476-a443-cca169e46909">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    changeView(view) {
      this.$store.commit('set_current_view', view)
    }
  }
}
</script>

<style lang="scss">

  .main-menu {
    background: url('https://firebasestorage.googleapis.com/v0/b/monster-hunter-cb36c.appspot.com/o/mainBackground.gif?alt=media&token=b705ed65-dd48-4f53-9ea8-c62747332be6') no-repeat center center fixed;
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
