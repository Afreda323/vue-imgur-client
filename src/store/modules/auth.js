import qs from 'qs'
import api from '../../api/imgur'
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('imgurToken'),
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login: () => {
    api.login()
  },
  finalizeLogin: ({ commit }, hash) => {
    const { access_token } = qs.parse(hash.replace('#', ''))
    window.localStorage.setItem('imgurToken', access_token)
    commit('setToken', access_token)
    router.push('/')
  },
  logout: ({ commit }) => {
    window.localStorage.removeItem('imgurToken')
    commit('setToken', null)
  }
}

const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export default { state, getters, actions, mutations }