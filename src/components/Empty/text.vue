<template>
  <div class="text-container">
    <!-- <h1>vueApp</h1> -->
    <Empty text="aaa"/>
  </div>
</template>

<script>
import Empty from './';
export default {
  components:{
    Empty,
  },
}
</script>

<style scoped>
  /* .empty-container{
    width: 200px;
  } */
  .text-container{
    position: relative;
    width: 400px;
    height: 400px;
    background: chartreuse;
  }
</style>