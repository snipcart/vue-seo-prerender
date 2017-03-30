<template lang="pug">
    div(class="products")
        div(v-for="product in products", class="product")
            product(:product="product")
</template>

<script>
import Product from './../components/Product.vue'

export default {
  name: 'home',
  components: { Product },
  computed: {
    products(){
      return this.$store.state.products
    }
  }
}
</script>

<style>
    .products{
        display: flex;
        justify-content: space-around;  
    }
</style>
