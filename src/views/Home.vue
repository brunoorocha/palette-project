<template>
  <div class="home">
    <default-page>

    </default-page>
  </div>
</template>

<script>
import DefaultPage from '@/components/shared/default-page'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',  
  components: {
    DefaultPage
  },
  
  computed: {
    ...mapState('Product', ['products'])
  },
  
  methods: {
    ...mapActions('Product', ['setProducts'])
  },

  mounted: function() {
    this.setProducts()
  }
}
</script>
