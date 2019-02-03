<template>
  <div class="cart">
    <default-page title="Carrinho de Compras">

      <div class="page-content">
        <div class="page-row">
          <h1>Meu Carrinho</h1>
        </div>
      </div>

    </default-page>
  </div>
</template>

<script>
import DefaultPage from '@/components/shared/default-page'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'cart',

  components: {
    DefaultPage
  },

  computed: {
    ...mapState('Cart', ['cartProducts'])
  },

  methods: {
    ...mapActions('Cart', ['addProductOnCart'])
  },

  mounted: function () {

  }
}
</script>
