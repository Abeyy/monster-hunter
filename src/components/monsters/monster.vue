<template>
  <div>
    <div class="monster col-s-6 col-md-3 col-lg-3 col-xl-3">
      <button v-on:click="dealDamage()"> Deal 15</button>
      <div class="monster-name"> {{ name }}</div>
      <div class="outer-health-bar monster">
        <div class="inner-health-bar" v-bind:style="healthStyle"></div>
      </div>
      <img class="monster-image" :src="image">


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
    image() {
      return this.$store.state.current_monster_image
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
    experience() {
      return this.$store.state.current_monster_experience
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
        console.log('NOTTT supposed to be here')
        this.$store.commit('set_current_monster_name', 'Basicmon')
        this.$store.commit('set_current_monster_image', 'https://firebasestorage.googleapis.com/v0/b/monster-hunter-cb36c.appspot.com/o/basicmon.gif?alt=media&token=5863f184-ce00-4a0d-b3d2-01d3d222f9ee')
        this.$store.commit('set_current_monster_status', 'alive')
        this.$store.commit('set_current_monster_max_health', 50)
        this.$store.commit('set_current_monster_health', 50)
        this.$store.commit('set_current_monster_damage', 15)
        this.$store.commit('set_current_monster_experience', 15)
        return
      }
      console.log('supposed to be here')
      this.$store.commit('set_current_monster_name', monster.name)
      this.$store.commit('set_current_monster_image', monster.image)
      this.$store.commit('set_current_monster_status', monster.status)
      this.$store.commit('set_current_monster_max_health', monster.max_health)
      this.$store.commit('set_current_monster_health', monster.health)
      this.$store.commit('set_current_monster_damage', monster.damage)
      this.$store.commit('set_current_monster_experience', monster.experience)
    },
    setNewMonster() {
      this.monsterNames.map((monster) => {
        if (this.slainMonsters.indexOf(monster) > -1) {
          let index = this.monsterNames.indexOf(monster)
          this.monsterNames.splice(index, 1)
        }
      })

      if (this.monsterNames.length > 0) {
        this.initializeMonster(monstersList[this.monsterNames[0]])
      } else {
        this.$store.commit('set_current_view', 'winScreen')
      }
    },
    dealDamage() {
      this.$store.commit('damageHero', this.damage)
    },
    giveExp() {
      this.$store.commit('giveExp', this.experience)
    }
  },
  watch: {
    status() {
      if (this.status == 'dead') {
        this.giveExp()
        this.slainMonsters.push(this.name)
        this.setNewMonster()
      }
    }
  }
}
</script>

<style lang="scss">
  .outer-health-bar.monster {
    margin-left: 25%;
    width: 200px;
    border: 1px solid black;
    height: 15px;
  }
  .inner-health-bar {
    height: 100%;
    background: red;
  }
  .monster-name {
    color: white;
    margin-left: 60%;
    font-size: 26px;
    white-space: nowrap;
  }
  .monster button{
    width: 100px;
    margin-left: 60%;
  }
  .monster-image {
    height: 250px;
  }
</style>
