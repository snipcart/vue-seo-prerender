<template lang="pug">
  div(class="product-details")
    
    img(v-bind:src="product.image" v-bind:alt="product.name" class="thumbnail" height="200")
     
    div(class="product-description" v-bind:href="url")
      p {{ product.name }}
      p {{ product. description}}

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
  name: 'ProductDetails',
  computed: {
    id(){
      return this.$store.state.route.params.id
    },
    product(){
      return this.$store.getters.getProductById(this.id)
    }
  }
}
</script>

<style>
  .product-description{
    width: 400px;
    padding: 25px;
    margin: 25px;
    background-color: #CFD8DC;
    font-size: 20px;
  }

  .product-details{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
