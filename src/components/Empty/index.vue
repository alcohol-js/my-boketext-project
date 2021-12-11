<template>
  <div class="empty-container">
      <Icon type="empty" />
      <div>{{text}}</div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    props:{
        text:{
            type:String,
            default:"无数据",
        }
    },
    components:{
        Icon,
    }
}
</script>

<style lang="less">
@import "~@/style/var.less";
@import "~@/style/mixin.less";
    .Icon-container{
        font-size: 100px;
    }

    .empty-container{
        display: inline-block;
        color: @lightWords;
        text-align: center;
        .self-center();
    }
</style>