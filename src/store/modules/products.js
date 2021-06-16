import graphql from '../../api/graphql'
import { GET_FIRST_PRODUCT } from '../../api/_product'

// initial state
const state = () => ({
  data: []
})

// getters
const getters = {}

// actions
const actions = {
  async getAllProducts ({ commit }, first) {
    const response = await graphql.query({
      query: GET_FIRST_PRODUCT,
      variables: { first: Number.parseInt(first) }
    })
    commit('setProducts', response.data.products.edges)
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.data = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
