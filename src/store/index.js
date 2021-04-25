import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts.store.js'
import comments from './comments.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    createWindow: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts,
    comments
  }
})
