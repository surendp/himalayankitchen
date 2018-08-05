import axios from '../../services/axios'

const state = {
  menu: null,
  menuList: [
    'Appetizers',
    'Salads',
    'Children Menu',
    'Drinks',
    'Desserts',
    'Group Menu',
    'Vegetarian Dishes',
    'Chicken Dishes',
    'Lamb Dishes',
    'Sea Dishes',
    'Duck Dishes',
    'Tandoori Dishes',
    'Thali Dishes'
  ]
}
const mutations = {
  UPDATE_MENU (state, payload) {
    const { data, menuListItem } = payload
    state.menu = data
  }
}

const actions = {
  getMenu({ commit }, menuListItem) {
    const url = `/api/alakartmenu/${menuListItem}`
    axios()
    .get(url)
    .then(({ data }) => {
      const payload = Object.assign({ data, menuListItem } )
      commit('UPDATE_MENU', payload)
    })
  }
}

export default {
  state,
  mutations,
  actions
}