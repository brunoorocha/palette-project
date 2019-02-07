<template>
  <div class="product-info">
    <image-gallery :images="[product.image_url]" />
    <div class="product-properties">
      <h1 class="title-1">{{ product.name }}</h1>
      <h4 class="subtitle-uppercased">decoração</h4>
      <h2 class="title-2">R$ {{ product.price }}</h2>

      <dropdown label="cor" :options="['Preto', 'Vermelho', 'Verde', 'Amarelo', 'Azul']" />
    </div>
  </div>
</template>

<script>
import ImageGallery from '../image-gallery'
import Dropdown from '../drop-down'

export default {
  name: 'product-info',

  data: function () {
    return {
      // color: null
    }
  },

  props: {
    product: Object
  },

  components: {
    ImageGallery,
    Dropdown
  }

}

</script>

<style>

.product-info {
  display: flex;
  width: 100%;
  margin-top: 32px;
}

.product-info .image-gallery {
  flex-basis: 0;
  flex-grow: 3;
}

.product-info .product-properties {
  display: flex;
  flex-direction: column;
  padding: 32px 0px 0px 32px;
  flex-grow: 2;
  flex-basis: 0;
  box-sizing: border-box;
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .product-info .product-properties  {
    padding: 24px 16px 16px 24px;
  }
}

@media only screen and (max-width: 540px) {
  .product-info {
    flex-direction: column;
  }

  .product-info .image-gallery,
  .product-info .product-properties  {
    flex-grow: 1;
    flex-basis: auto;
  }

  .product-info .product-properties  {
    padding: 16px 0px;
  }

}

</style>
