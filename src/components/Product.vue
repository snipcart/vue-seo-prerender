<template lang="pug">
  div(class="product")
    router-link(v-bind:to="url").product
      img(v-bind:src="product.image" v-bind:alt="product.name" class="thumbnail" height="200")
      p {{ product.name }}
    
    button(class="snipcart-add-item"
      v-bind:data-item-name="product.name"
      v-bind:data-item-id="product.id"
      v-bind:data-item-image="product.image"
      v-bind:data-item-url="$config.baseUrl + $route.fullPath"
      v-bind:data-item-price="product.price")
        | Buy it for {{ product.price }}$
 
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  computed: {
    url(){
      return `/products/${this.product.id}`
    }
  }
}
</script>

<style>
  .product{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px;
  }

  .product:hover{
    background-color: #CFD8DC;
  }
</style>
