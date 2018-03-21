<template>
  <div>
    <button v-on:click="damage(10)"> Deal 10</button>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  mounted() {
    
  },
  methods: {
    damage(value) {
      this.$store.commit('damage', value)
    }
  }
}
</script>

<style lang="scss">

</style>
