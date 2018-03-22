<template>
  <div class="hero">
     <span> Current Health: {{ health }} </span>
    <span> Max Health: {{ max_health }}</span>
    <div class="outer-health-bar">
      <div class="inner-health-bar" v-bind:style="healthStyle">

      </div>
    </div>
    <span> Status: {{ status }} </span>
    <button v-on:click="incrementHealth(10)">Heal</button>
    <button v-on:click="dealDamage(10)">Deal Damage</button>
    <button v-on:click="togglePoison">Poison</button>
  </div>
</template>

<script>
// TODO: Poison status toggle is bugged!
export default {
  data() {
    return {}
  },
  components: {

  },
  computed: {
    health() {
      return this.$store.state.health
    },
    max_health() {
      return this.$store.state.max_health
    },
    status() {
      return this.$store.state.status
    },
    power() {
      return this.$store.state.power
    },
    isAlive() {
      if (this.health > 0) return true
      return false
    },
    isPoisoned() {
      return this.$store.state.status == "poisoned"
    },
    healthStyle() {
      let color
      if (this.status == "alive") color = 'red'
      if (this.status == "poisoned") color = 'green'
      return {
        width: (this.health/this.max_health)*100 + '%',
        background: color
      }
    }
  },
  methods: {
    incrementHealth(val) {
      this.$store.commit('heal', val)
    },
    dealDamage(power) {
      this.$store.commit('dealDamage', power)
    },
    togglePoison(val) {
      if (this.$store.state.status == "poisoned") {
         return this.$store.state.status = "alive"
      }
      this.$store.state.status = "poisoned"

    }
  },
  watch: {
    isAlive() {
      if(this.isAlive) {
        return this.$store.commit('changeStatus', 'alive')
      }

      return this.$store.commit('changeStatus', 'dead')
    },
    isPoisoned() {
      let self = this
      if(this.status == "poisoned") {
        let poisonCount = setInterval(function (){
          self.$store.commit("damageHero", 1)
          if (self.status == "dead" || self.status == "alive" || self.health <= 0) {
            clearInterval(poisonCount)
          }
        }, 1000)
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
