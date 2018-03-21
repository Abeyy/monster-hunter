import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Hero
    health: 100,
    max_health: 110,
    status: 'alive',

    //Current monster
    current_monster_name: '',
    current_monster_health: undefined,
    curent_monster_damage: undefined,
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
    damage: (state, value) => {
      if (state.health - value <= 0) {
        state.status = 'dead'
        state.health = 0

        return
      }
      state.health = state.health - value
    },
    changeStatus: (state, newStatus) => {
      state.status = newStatus
    },
    set_current_monster_name: (state, name) => {
      state.current_monster_name = name
    },
    set_current_monster_name: (state, name) => {
      state.current_monster_name = name
    },
    set_current_monster_name: (state, name) => {
      state.current_monster_name = name
    },
  }
})

export default store
