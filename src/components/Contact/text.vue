<template>
  <div class="text-container">
      <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/style/global.less";
export default {
components:{
    Contact,
}
}
</script>

<style scoped lang="less">
.text-container{
    width: 200px;
    height: 600px;
    padding: 200px 0;
    background: black;
    position: absolute;
    left: 50%;
    top: 50%;
}
</style>