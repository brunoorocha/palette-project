<template>
  <default-page :title="product_uri">

      <div class="page-content">
        <div class="page-row">
          <h1>Produto {{ product_uri }}</h1>
        </div>
      </div>

  </default-page>
</template>

<script>
import DefaultPage from '@/components/shared/default-page'
import { mapActions } from 'vuex'

export default {
  name: 'product',
  
  data: function() {
    return {
      product: null,
      title: this.product_uri
    }
  },

  props: {
    product_uri: String
  },

  components: {
    DefaultPage
  },

  methods: {
    ...mapActions('Product', ['fetchProductForUri'])
  },

  mounted: function() {
    this.fetchProductForUri({ product_uri: this.product_uri })
    .then(product => { 
      this.product = product 
      this.title = product.name
    })
    .catch(error => console.log(error))
  }
}
</script>

<style>

</style>
