<template lang="pug">
  div(id="app")
    TopContext
    router-view

</template>

<script>
import TopContext from './components/TopContext.vue'

export default {
  name: 'app',
  components: { TopContext }
}
</script>

<style>
.snipcart-add-item{
  background-color: #3F51B5;
  font-size: 18px;
  color: white;
  border: 0px;
  border-radius: 3%;
}

.snipcart-add-item:hover{
  box-shadow: 0px 3px 5px #888888;
}

.snipcart-add-item:active{
  box-shadow: 0 0 0 0;
}
</style>
