<template>
  <div class="text-container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
import "@/style/global.less";
export default {
components:{
    SiteAside,
}
}
</script>

<style scoped lang="less">
.text-container{
    width: 250px;
    height: 800px;
    border: 2px solid red;
    margin: 0 auto;
}
</style>