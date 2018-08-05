import Vue from 'vue'
import Vuex from 'vuex'
import _lunch from './modules/lunch'
import _menu from './modules/menu'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  modules: {
    _lunch,
    _menu
  }
})
