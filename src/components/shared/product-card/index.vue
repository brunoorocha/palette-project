<script>

export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
}

</script>

<template>
  <div class="product-card">
    <a :href=" '/#/product/'+ product.uri ">
      <div class="card-cover">      
        <img :src="product.image_url" :alt="product.name">
      </div>
      <div class="card-info">
        <p class="card-title">{{ product.name }}</p>
        <p class="card-subtitle">$ {{ product.price }}</p>
      </div>
    </a>
  </div>  
</template>

<style>
  
  .product-card {        
    box-sizing: border-box;             
  }

  .product-card a {        
    text-decoration: none;
    color: #333;
  }
  
  .product-card .card-cover {             
    overflow: hidden;
    width: 100%;
    margin-bottom: 8px;       
    display: flex;
    flex-direction: column;    
  }

  .product-card .card-cover img {    
    width: 100%;    
    transition: .3s ease-out;
  } 

  .product-card:hover .card-cover img {
    transform: scale(1.1);
  }

  .product-card .card-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;  
    margin-bottom: 32px;      
  }

  .product-card .card-info .card-title {    
    flex-grow: 1;    
    font-weight: 700;
    font-size: 16px;     
  }

  .product-card .card-info .card-subtitle {
    flex-grow: 1;        
    font-weight: 300;
    font-size: 20px;
    padding-top: 0;
  }

</style>
