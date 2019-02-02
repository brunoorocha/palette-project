<template>
  <div class="page">
    <nav-bar :categories="categories" />
    <div class="large-vspace"></div>
    <slot></slot>
  </div>
</template>

<script>
import NavBar from '../nav-bar'

export default {
  name: 'default-page',
  
  data() {
    return {
      categories: [
        { name: 'Tênis', link: '/', sub_categories: [
          { name: 'Nike', link: '/' }, 
          { name: 'Adidas', link: '/' },
          { name: 'Jordan', link: '/' },
          { name: 'Converse', link: '/' },
        ]},
        { name: 'Roupas', link: '/' },
        { name: 'Jerseys', link: '/', sub_categories: [
          { name: 'Bucks', link: '/' }, 
          { name: 'Celtics', link: '/' }, 
          { name: 'Cavaliers', link: '/' },
          { name: 'Lakers', link: '/' },
          { name: 'Knicks', link: '/' },
          { name: 'Rockets', link: '/' },
          { name: 'Thunder', link: '/' },
          { name: 'Warriors', link: '/' },
        ]},
        { name: 'Acessórios', link: '/' },
      ]
    }
  },

  components: {
    NavBar
  }
}
</script>

<style>
  
</style>
