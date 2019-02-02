
const products = [
  {
    name: 'Black Headphones',
    uri: 'black-headphones',
    price: 99.99,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'Wooden Stool',
    uri: 'wooden-stool',
    price: 49.99,
    image_url: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Green Cactus',
    uri: 'green-cactus',
    price: 29.99,
    image_url: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80',
  },
  {
    name: 'Polaroid Camera',
    uri: 'polaroid-camera',
    price: 159.99,
    image_url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'DSLR Lens',
    uri: 'dslr-lens',
    price: 89.99,
    image_url: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Floor Lamp',
    uri: 'floor-lamp',
    price: 129.99,
    image_url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },{
    name: 'Black Headphones',
    uri: 'black-headphones',
    price: 99.99,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'Wooden Stool',
    uri: 'wooden-stool',
    price: 49.99,
    image_url: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Green Cactus',
    uri: 'green-cactus',
    price: 29.99,
    image_url: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80',
  }
]

const setProducts = ({ commit }, payload) => {
  commit('SET_PRODUCTS', { products })
}

export default {
  setProducts
}
