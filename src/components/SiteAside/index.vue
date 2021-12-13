<template>
  <div class="site-aside-container">
      <div class="avatar">
          <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExcsx9k3x3_MbeiOZ__VkpPEeaaZQIgFGbmB1fAAfKxiQwdxeuYpKhFFFUF8T8MzGk04&usqp=CAU" />
      </div>
      <h1>海上月林间叶</h1>
      <Menu />
      <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
components:{
    Avatar,
    Menu,
    Contact,
}
}
</script>

<style scopde lang="less">
@import "~@/style/var.less";
.site-aside-container{
    width: 100%;
    height: 100%;
    background: @dark;
    .avatar{
        padding: 20px 0;
        box-sizing: border-box;
        text-align: center;
    }
    h1{
        text-align: center;
        font-size: 25px;
        margin: 12px 0;
        color: @lightWords;
    }
}
// .avatar-container{
//     margin: 0 auto;
// }
</style>