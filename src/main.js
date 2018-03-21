import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Store from './store/store.js'

new Vue({
  el: '#app',
  render: h => h(App),
  store: Store
})
