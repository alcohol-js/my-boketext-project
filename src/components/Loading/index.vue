<template>
  <img class="loading-container" :src="Loading" >
</template>

<script>
import Loading from "@/assets/loading.svg";
export default {
data(){
    return{
        Loading,
    }
}
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.loading-container{
    .self-center();
}
</style>