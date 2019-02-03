import Vue from 'vue'
import Vuex from 'vuex'
import Product from '@/models/product/store'
import Category from '@/models/category/store'
import Cart from '@/models/cart/store'

Vue.use(Vuex)

const modules = {
  Product,
  Category,
  Cart
}

export default new Vuex.Store({
  modules
})
