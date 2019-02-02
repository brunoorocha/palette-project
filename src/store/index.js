import Vue from 'vue'
import Vuex from 'vuex'
import Product from '@/models/product/store'
import Category from '@/models/category/store'

Vue.use(Vuex)

const modules = {
  Product,
  Category
}

export default new Vuex.Store({
  modules
})
