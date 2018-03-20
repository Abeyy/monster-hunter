<template>
  <div class="hero">
    {{ health }}
    {{ status }}
    <button v-on:click="incrementHealth(10)">Heal</button>
    <button v-on:click="decrementHealth(10)">Take Damage</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        status: "alive",
        health: 100
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    incrementHealth(val) {
      this.health = this.health + val
    },
    decrementHealth(val) {
      if (this.status == "dead") return
      if (this.status == "alive") {
        this.health = this.health - val
        if (this.health <= 0) {
          this.status = 'dead'
        }
      }
    }
  }

}
</script>

<style lang="scss">

</style>
