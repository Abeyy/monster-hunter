<template>
  <div>
    <div class="hero">
      <span> Name: {{ name }}</span>
       <span> Current Health: {{ health }} </span>
      <span> Max Health: {{ max_health }}</span>
      <div class="outer-health-bar">
        <div class="inner-health-bar" v-bind:style="healthStyle">

        </div>
      </div>
      <span> Status: {{ status }} </span>
      <button v-on:click="dealDamage()"> Deal 15</button>

      <span>  Slain: {{ slainMonsters }}</span>
      <span> Monsters List:  {{ monsterNames }}</span>
    </div>

  </div>
</template>

<script>
import monstersList from './monsterList.json'
export default {
  data(){
    return{
      slainMonsters: []
    }
  },
  mounted() {
    this.initializeMonster()
  },
  computed: {
    name() {
      return this.$store.state.current_monster_name
    },
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
    monsterNames() {
      return Object.keys(monstersList)
    },
    healthStyle() {
      let color
      if (this.status == "alive") color = 'red'
      if (this.status == "poisoned") color = 'green'
      return {
        width: (this.health/this.max_health)*100 + '%',
        background: color
      }
    },
  },
  methods: {
    initializeMonster(monster) {
      if (!this.$store.state.current_monster_name) {
        //TODO: Should not be basicmons stats being preloaded
        this.$store.commit('set_current_monster_name', 'Basicmon')
        this.$store.commit('set_current_monster_status', 'alive')
        this.$store.commit('set_current_monster_max_health', 50)
        this.$store.commit('set_current_monster_health', 50)
        this.$store.commit('set_current_monster_damage', 15)
        return
      }
      this.$store.commit('set_current_monster_name', monster.name)
      this.$store.commit('set_current_monster_status', monster.status)
      this.$store.commit('set_current_monster_max_health', monster.max_health)
      this.$store.commit('set_current_monster_health', monster.health)
      this.$store.commit('set_current_monster_damage', monster.damage)
    },
    setNewMonster() {
      this.monsterNames.map((monster) => {
        if (this.slainMonsters.indexOf(monster) > -1) {
          let index = this.monsterNames.indexOf(monster)
          this.monsterNames.splice(index, 1)
        }
      })

      this.initializeMonster(monstersList[this.monsterNames[0]])
    },
    dealDamage() {
      this.$store.commit('damageHero', this.damage)
    }
  },
  watch: {
    status() {
      if (this.status == 'dead') {
        this.slainMonsters.push(this.name)
        this.setNewMonster()
      }
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
