<template lang="pug">
  div
    div(class="topcontext")
      span 
        | Vue.js Demo Store
    
      div(class="snipcart-summary")
        a(href="#" class="snipcart-checkout") 
          | view cart (
          span(class="snipcart-total-items") 0
          | )

    p(class="notice")
      | Pre-rendering with Prerender SPA plugin, e-commerce with Snipcart

</template>

<script>
export default {
  name: 'TopContext'
}
</script>

<style>
  .topcontext{
      padding-top: 20px;
      width: 100%;
      height: 100px;
      background-color: #212121;
      color: #FAFAFA;
      text-align: center;
      font-weight: bold;
      font-size: 25pt;
  }
  
  .notice{
    font-style: italic;
    font-size: 18pt;
    color: #212121;
    text-align: center;
  }

  .snipcart-summary{
    float: right;
    font-size: 20pt;
    padding-right: 30px;
    position: absolute;
    float: right;
    float: none;
    margin-left: 90%;
  }

  .snipcart-checkout{
    text-decoration: none;
    color: gray;
  }
</style>
