import graphql from '../../api/graphql'
import { GET_FIRST_COLLECTION } from '../../api/_collection'

// initial state
const state = () => ({
  data: []
})

// getters
const getters = {}

// mutations
const mutations = {
  setCollections (state, collections) {
    state.data = collections
  }
}

// actions
const actions = {
  async getAllCollections ({ commit }, first) {
    const response = await graphql.query({
      query: GET_FIRST_COLLECTION,
      variables: { first: Number.parseInt(first) }
    })
    commit('setCollections', response.data.collections.edges)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
