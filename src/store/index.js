import Vue from 'vue'
import Vuex from 'vuex'
import Product from '@/models/product/store'

Vue.use(Vuex)

const modules = {
  Product
}

export default new Vuex.Store({
  modules
})
