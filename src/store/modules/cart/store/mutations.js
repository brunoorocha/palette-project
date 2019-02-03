
const ADD_PRODUCT_ON_CART = (state, { payload }) => {
  const cartProductsCopy = state.cartProducts
  cartProductsCopy.push(payload)
  state.cartProducts = cartProductsCopy
}

export default {
  ADD_PRODUCT_ON_CART
}
