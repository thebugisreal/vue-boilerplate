import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import collections from './modules/collections'
import storage from './modules/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storage,
    products,
    collections
  }
})
