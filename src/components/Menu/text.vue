<template>
  <div class="text-container">
      <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/style/global.less"
export default {
components:{
    Menu,
}
}
</script>

<style scoped lang="less">
.text-container{
    width: 400px;
    height: 600px;
    border: 1px solid red;
    background:#000;
    margin: 0 auto;
}
</style>