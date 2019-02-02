<template>
  <div class="home">
    <default-page :nav_categories="categories">
      <product-collection :products="products" />
    </default-page>
  </div>
</template>

<script>
import DefaultPage from '@/components/shared/default-page'
import ProductCollection from '@/components/shared/product-collection'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',  
  
  components: {
    DefaultPage,
    ProductCollection    
  },
  
  computed: {
    ...mapState('Product', ['products']),
    ...mapState('Category', ['categories'])
  },
  
  methods: {
    ...mapActions('Product', ['setProducts']),
    ...mapActions('Category', ['setCategories'])    
  },

  mounted: function() {
    this.setProducts()
    this.setCategories()
    document.title = "Palette Store"
  }
}
</script>
