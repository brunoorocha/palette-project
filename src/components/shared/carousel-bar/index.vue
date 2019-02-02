<template>  
  <div class="carousel-bar">
    <div class="carousel-bar-content">
      <div class="carousel-bar-control">
        <chevron-left-icon />
      </div>
      
      <div class="text-display">
        🔒 Produtos de primeira qualidade com preço justo!
      </div>

      <div class="carousel-bar-control">
        <chevron-right-icon />
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons'

export default {
  name: 'carousel-bar',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  }  
}
</script>

<style>
.carousel-bar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 56px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #efefef;
}

.carousel-bar .carousel-bar-content {
  display: flex;
  width: 100%;
  max-width: 640px;
  height: 56px;
}

.carousel-bar .carousel-bar-content .carousel-bar-control {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  cursor: pointer;
}

.carousel-bar .carousel-bar-content .text-display {
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-grow: 1;  
  height: 56px;
}

</style>
