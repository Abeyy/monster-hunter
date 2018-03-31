import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Hero
    level: 1,
    exp: 0,
    max_exp: 100,
    health: 100,
    max_health: 100,
    power: 10,
    status: 'alive',

    //Current monster
    current_monster_name: '',
    current_monster_image: '',
    current_monster_health: undefined,
    current_monster_max_health: undefined,
    current_monster_status: 'alive',
    current_monster_damage: undefined,
    current_monster_experience: undefined,
    current_monster_drops: undefined,

    //Views
    current_view: 'mainMenu'
  },
  getters: {

  },
  mutations: {
    heal: (state, value) => {
      if(state.health + value > state.max_health) {
        return state.health = state.max_health
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
    giveExp: (state, exp) => {
      if (state.exp + exp > state.max_exp) {
        //TODO: The below is broken!
        state.exp = (state.exp + exp) - state.max_exp
        state.level += 1
        state.power += 5
        state.max_exp = (state.level * 150)
      } else {
        state.exp = state.exp + exp
      }
    },
    set_current_monster_name: (state, name) => {
      state.current_monster_name = name
    },
    set_current_monster_image: (state, image) => {
      state.current_monster_image = image
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
    set_current_monster_experience: (state, experience) => {
      state.current_monster_experience = experience
    },
    set_current_monster_drops: (state, drops ) => {
      state.current_monster_drops = drops
    },
    set_current_view: (state, view) => {
      state.current_view = view
    }
  }
})

export default store
