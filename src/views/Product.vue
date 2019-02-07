<template>
  <default-page :title="title">

      <div class="page-content">
        <div class="page-row">
          <product-info v-if="product" :product="product" />
        </div>
      </div>

  </default-page>
</template>

<script>
import DefaultPage from '@/components/shared/default-page'
import ProductInfo from '@/components/shared/product-info'
import { mapActions } from 'vuex'

export default {
  name: 'product',

  data: function () {
    return {
      product: null,
      title: ''
    }
  },

  props: {
    product_uri: String
  },

  components: {
    DefaultPage,
    ProductInfo
  },

  methods: {
    ...mapActions('Product', ['fetchProductForUri'])
  },

  mounted: function () {
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
