
import { ADD_PRODUCT_ON_CART } from './mutation-types'

const addProductOnCart = ({ commit }, payload) => {
  commit(ADD_PRODUCT_ON_CART, { payload })
}

export default {
  addProductOnCart
}
