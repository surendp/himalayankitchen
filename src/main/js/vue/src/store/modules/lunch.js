import moment from 'moment'
import axios from '../../services/axios'

const state = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
}

const getters = {
  sortedLunchMenu (state) {
    let today = moment().format('dddd').toLowerCase()
    if (today === 'saturday' || today === 'sunday') today = 'monday'
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    const i = weekdays.indexOf(today)
    const l = weekdays.length
    const daysBeforeToday = weekdays.slice(0, i)
    const daysAfterToday = weekdays.slice(i, l)
    const sortedDayArr = [].concat(daysAfterToday, daysBeforeToday)
    return sortedDayArr.map(day => {
      return {day:day, data: state[day] }
    })
  }
}

const mutations = {
  UPDATE_LUNCH_MENU (state, payload) {
    const { data, day } = payload
    state[day] = [...data]
  } 
}
const actions = {
  getLunchMenu ({ state, commit}, payload) {
    const { day, url } = payload
    axios()
    .get(url)
    .then(({ data }) => {
      const payload = Object.assign({ data, day } )
      commit('UPDATE_LUNCH_MENU', payload)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
