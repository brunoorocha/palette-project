<template>
  <div class="home">
    <default-page title="Palette Store">
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
  },
  
  methods: {
    ...mapActions('Product', ['setProducts']),
  },

  mounted: function() {
    this.setProducts()    
  }
}
</script>
