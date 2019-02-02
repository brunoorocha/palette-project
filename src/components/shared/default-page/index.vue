<template>
  <div class="page">
    <nav-bar :categories="categories" :cart_badge="true" />    
    <div class="large-vspace"></div>
    <carousel-bar />
    
    <div class="page-content">
      <slot></slot>
    </div>

    <div class="large-vspace"></div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '../nav-bar'
import CarouselBar from '../carousel-bar'
import PageFooter from '../page-footer'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'default-page',  

  props: {
    title: String
  },

  components: {
    NavBar,
    CarouselBar,
    PageFooter
  },

  computed: {
    ...mapState('Category', ['categories'])
  },

  methods: {
    ...mapActions('Category', ['setCategories'])    
  },

  mounted: function() {
    this.setCategories()
    document.title = this.title
  }

}
</script>

<style>
  
</style>
