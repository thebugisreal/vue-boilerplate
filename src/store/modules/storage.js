// initial state
const state = () => ({
  count: 0
})

// types
const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

// getters
const getters = {
  isEven ({ count }) {
    return count % 2 === 0
  }
}

// mutations
const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  },
  [types.RESET] (state) {
    state.count = 0
  }
}

// actions
const actions = {
  increment ({ commit }) {
    commit(types.INCREMENT)
  },
  decrement ({ commit }) {
    commit(types.DECREMENT)
  },
  reset ({ commit }) {
    commit(types.RESET)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
