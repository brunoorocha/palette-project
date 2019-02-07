<template>
  <div class="image-gallery">
    <div class="image-gallery-slider">
      <img :src="images[0]" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'image-gallery',

  props: {
    images: Array
  }

}

</script>

<style>

.image-gallery {
  display: flex;
  width: 100%;
}

.image-gallery .image-gallery-slider {
  /* display: flex;   */
  width: 100%;
  overflow: hidden;
}

.image-gallery .image-gallery-slider img {
  width: 100%;
}

</style>
