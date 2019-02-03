<template>
  <default-page :title="this.product_uri">

      <div class="page-content">
        <div class="page-row">
          <h1>Produto</h1>
        </div>
      </div>

  </default-page>
</template>

<script>
import DefaultPage from '@/components/shared/default-page'

export default {
  name: 'product',
  
  props: {
    product_uri: String
  },

  components: {
    DefaultPage
  }
}
</script>

<style>

</style>
