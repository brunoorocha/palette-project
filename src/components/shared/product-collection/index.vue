<template>
  <div class="page-row page-row-vertical">
    <h1 class="page-section-title">Destaques</h1>
    <div class="product-collection">
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        class="collection-item" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../product-card'

export default {
  name: 'product-collection',

  props: {
    products: Array
  },

  components: {
    ProductCard
  }
}
</script>

<style>

.product-collection {
  width: 100%;
  column-count: 4;
  column-gap: 32px;
  margin-top: 16px;
}

.product-collection .collection-item {
  display: inline-block;
  vertical-align: top;
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .product-collection {
    column-count: 3;
    column-gap: 16px;
  }
}

@media only screen and (max-width: 540px) {
  .product-collection {
    column-count: 2;
    column-gap: 16px;
  }
}

</style>
