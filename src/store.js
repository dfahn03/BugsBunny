import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let _api = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/DallinTest"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {},
    notes: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setBug(state, data) {
      state.bug = data
    },
    setNotes(state, data) {
      state.notes = data
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('/bugs')
        commit('setBugs', res.data.results)
      } catch (err) {
        console.error(err)
      }
    },
    async getBugById({ commit, dispatch }, id) {
      try {
        let res = await _api.get('/bugs/' + id)
        commit('setBug', res.data.results)
      } catch (err) { console.error(err) }
    },
    async createBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('/bugs', payload)
        dispatch('getBugs')
      } catch (err) { console.error(err) }
    },
    async editBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.put('/bugs/' + payload.id, payload)
        commit('setBug', res.data.results)
      } catch (err) { console.error(err) }
    },
    async closeBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.delete('bugs/' + payload._id)
        commit('setBug', res.data.results)
        dispatch('getNotes')
      } catch (err) { console.error(err) }
    },
    async getNotes({ commit, dispatch }, payload) {
      try {
        let res = await _api.get('/bugs/' + payload + '/notes')
        commit('setNotes', res.data.results)
      } catch (err) { console.error(err) }
    },
    async createNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('/bugs/' + payload.bug + '/notes', payload)
        dispatch('getNotes', payload.bug)
      } catch (err) { console.error(err) }
    },
    async deleteNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.delete('bugs/' + payload.bug + '/notes/' + payload._id, payload)
        dispatch('getNotes', payload.bug)
      } catch (e) { console.error(e) }
    }
  }
})
