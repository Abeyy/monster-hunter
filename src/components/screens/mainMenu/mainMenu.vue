<template>
  <div class="main-menu">
    <h1> Monster Hunter </h1>
    <button v-on:click="changeView('battleground')"> Play Now </button>
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

</style>
