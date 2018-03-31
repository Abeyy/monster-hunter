<template>
  <div class="hero row">
    <div class="hero-stats-left col-s-3 col-md-3 col-lg-3 col-xl-3">
      <div> Current Level: {{ level }}</div>
      <div> Health: {{ health }} / {{ max_health }}</div>
      <div> Mana: </div>
      <div> Experience: {{ experience}} / {{ max_exp}} </div>

    </div>

    <div class="col-s-6 col-md-6 col-lg-6 col-xl-6">
      <div class="outer-health-bar">
        <div class="inner-health-bar" v-bind:style="healthStyle">

        </div>
      </div>
    </div>

    <div class="hero-stats-right col-s-3 col-md-3 col-lg-3 col-xl-3">
      <div> Status: {{ status }} </div>
      <div> Attack Power: {{ power }} </div>
      <div> Ability Power: {{ }} </div>
      <button class="btn-success" v-on:click="incrementHealth(10)">Heal</button>
      <button class="btn-danger" v-on:click="dealDamage(10)">Deal Damage</button>
      <button class="btn-warning" v-on:click="togglePoison">Poison</button>
    </div>
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
    level() {
      return this.$store.state.level
    },
    experience() {
      return this.$store.state.exp
    },
    max_exp() {
      return this.$store.state.max_exp
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
    border: 2px solid black;
    height: 35px !important;
    border-radius: 10px;
    width: 100%;
    margin-top: 10px;
  }

  .inner-health-bar {
    height: 100%;
    background: red;
    border-radius: 10px;
  }

  .hero {
    bottom: 0;
    background: url('../../assets/wood.jpg');
    background-size: 100%;
  }

  .hero-stats-left{
    color: white;
    margin-top: 10px;
    padding: 15px 0px 15px 30px;
    font-size: 20px;
  }

  .hero-stats-right{
    font-size: 20px;
    color: white;
    padding: 15px;
    text-transform: capitalize;
  }
</style>
