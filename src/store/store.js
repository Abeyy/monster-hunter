import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Hero
    health: 100,
    max_health: 110,
    power: 10,
    status: 'alive',

    //Current monster
    current_monster_name: '',
    current_monster_health: undefined,
    current_monster_max_health: undefined,
    current_monster_status: 'alive',
    current_monster_damage: undefined,
    current_monster_drops: undefined,
  },
  getters: {

  },
  mutations: {
    heal: (state, value) => {
      if(state.health + value > state.max_health) {
        return state.max_health
      }
      state.health = state.health + value
    },
    damageHero: (state, value) => {
      if (state.health - value <= 0) {
        state.status = 'dead'
        state.health = 0

        return
      }
      state.health = state.health - value
    },
    dealDamage: (state, value) => {
      if (state.current_monster_health - value <= 0) {
        state.current_monster_status = 'dead'
        state.current_monster_health = 0

        return
      }
      state.current_monster_health = state.current_monster_health - value
    },
    changeStatus: (state, newStatus) => {
      state.status = newStatus
    },
    set_current_monster_name: (state, name) => {
      state.current_monster_name = name
    },
    set_current_monster_health: (state, health) => {
      state.current_monster_health = health
    },
    set_current_monster_max_health: (state, max_health) => {
      state.current_monster_max_health = max_health
    },
    set_current_monster_status: (state, newStatus) => {
      state.current_monster_status = newStatus
    },
    set_current_monster_damage: (state, damage) => {
      state.current_monster_damage = damage
    },
    set_current_monster_drops: (state, drops ) => {
      state.current_monster_drops = drops
    }
  }
})

export default store
