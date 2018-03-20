<template>
  <div class="hero">
    {{ health }}
    <div class="outer-health-bar">
      <div class="inner-health-bar" v-bind:style="healthStyle">

      </div>
    </div>
    {{ status }}
    <button v-on:click="incrementHealth(10)">Heal</button>
    <button v-on:click="decrementHealth(10)">Take Damage</button>
    <button v-on:click="togglePoison">Poison</button>
  </div>
</template>

<script>
// TODO: Poison status toggle is bugged!
export default {
  data() {
    return {
        status: "alive",
        health: 100,
    }
  },
  components: {

  },
  computed: {
    healthStyle() {
      let color
      if (this.status == "alive") color = 'red'
      if (this.status == "poisoned") color = 'green'
      return {
        width: this.health + '%',
        background: color
      }
    }
  },
  methods: {
    incrementHealth(val) {
      this.health = this.health + val
    },
    decrementHealth(val) {
      if (this.status == "dead") return

      this.health = this.health - val
      if (this.health <= 0) {
        this.status = 'dead'
      }
    },
    togglePoison(val) {
      if (this.status == "alive") {
        return this.status = "poisoned"
      }

      return this.status = "alive"
    }
  },
  watch: {
    status() {
      let self = this
      if(this.status == "poisoned") {
        let poisonCount = setInterval(function (){
          self.health = self.health - 1
          if (self.status == "dead" || self.status == "alive" || self.health <= 0) {
            clearInterval(poisonCount)
          }
        }, 1000)
      }
    },
    health() {
      if (this.health <= 0) {
        this.status = "dead"
      }
      if (this.health > 0 && this.status != "poisoned") {
        this.status = "alive"
      }
    }
  }

}
</script>

<style scoped>
  .outer-health-bar {
    width: 300px;
    border: 1px solid black;
    height: 10px;
  }
  .inner-health-bar {
    height: 100%;
    background: red;
  }
</style>
