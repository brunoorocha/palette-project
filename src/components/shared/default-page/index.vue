<template>
  <div class="page">
    <nav-bar :categories="nav_categories" cart_badge="true" />    
    <div class="large-vspace"></div>
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NavBar from '../nav-bar'

export default {
  name: 'default-page',
  
  props: {
    nav_categories: Array
  },

  components: {
    NavBar
  }
}
</script>

<style>
  
</style>
