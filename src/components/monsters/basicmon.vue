<template>
  <div>
    <div class="hero">
       <span> Current Health: {{ health }} </span>
      <span> Max Health: {{ max_health }}</span>
      <div class="outer-health-bar">
        <div class="inner-health-bar" v-bind:style="healthStyle">

        </div>
      </div>
      <span> Status: {{ status }} </span>
      <button v-on:click="dealDamage()"> Deal 15</button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  mounted() {
    this.initializeBasicmon()
  },
  computed: {
    health() {
      return this.$store.state.current_monster_health
    },
    max_health() {
      return this.$store.state.current_monster_max_health
    },
    status() {
      return this.$store.state.current_monster_status
    },
    damage() {
      return this.$store.state.current_monster_damage
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
    initializeBasicmon() {
      this.$store.commit('set_current_monster_name', 'Basicmon')
      this.$store.commit('set_current_monster_status', 'alive')
      this.$store.commit('set_current_monster_max_health', 50)
      this.$store.commit('set_current_monster_health', 50)
      this.$store.commit('set_current_monster_damage', 15)
    },
    dealDamage() {
      this.$store.commit('damageHero', this.damage)
    }
  }
}
</script>

<style lang="scss">
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
