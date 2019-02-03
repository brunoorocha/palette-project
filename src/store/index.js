import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/product/store'
import Category from './modules/category/store'
import Cart from './modules/cart/store'

Vue.use(Vuex)

const modules = {
  Product,
  Category,
  Cart
}

export default new Vuex.Store({
  modules
})
