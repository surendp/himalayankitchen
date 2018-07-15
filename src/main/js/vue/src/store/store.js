import Vue from 'vue'
import Vuex from 'vuex'
import lunch from './modules/lunch'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  modules: {
    lunch
  }
})
