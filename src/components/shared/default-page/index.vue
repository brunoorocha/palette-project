<template>
  <div class="page">
    <nav-bar :categories="categories" :cart_badge="hasProducts" />
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
import { mapState, mapActions, mapGetters } from 'vuex'

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
    ...mapGetters('Cart', ['hasProducts']),
    ...mapState('Category', ['categories'])
  },

  methods: {
    ...mapActions('Category', ['setCategories'])
  },

  watch: {
    title: function (newValue) {
      document.title = this.title
    }
  },

  mounted: function () {
    this.setCategories()
  }

}
</script>

<style>

</style>
