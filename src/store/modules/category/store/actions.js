
const categories = [
  {
    name: 'Eletrônicos',
    link: '/eletronicos',
    sub_categories: [
      {
        name: 'Câmeras',
        link: '/camera'
      },
      {
        name: 'Headphones',
        link: '/headphones'
      },
      {
        name: 'Mouses',
        link: '/mouses'
      },
      {
        name: 'Teclados',
        link: '/teclados'
      }
    ]
  },
  {
    name: 'Decoração',
    link: '/decoracao',
    sub_categories: [
      {
        name: 'Vasos',
        link: '/vasos'
      },
      {
        name: 'Luminárias',
        link: '/luminarias'
      },
      {
        name: 'Tapetes',
        link: '/tapetes'
      }
    ]
  },
  {
    name: 'Mobília',
    link: '/mobilia',
    sub_categories: [
      {
        name: 'Mesas',
        link: '/mesas'
      },
      {
        name: 'Bancos e Cadeiras',
        link: '/bancos-cadeiras'
      },
      {
        name: 'Aparadores',
        link: '/aparadores'
      },
      {
        name: 'Cabideiros',
        link: '/cabideiros'
      }
    ]
  },
  {
    name: 'Blog',
    link: '/blog'
  }
]

const setCategories = ({ commit }, payload) => {
  commit('SET_CATEGORIES', { categories })
}

export default {
  setCategories
}
