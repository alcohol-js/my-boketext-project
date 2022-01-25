<template>
  <div class="site-aside-container">
      <div class="avatar">
          <Avatar :url="data.avatar" />
      </div>
      <h1>{{data.siteTitle}}</h1>
      <Menu />
      <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import {mapState} from "vuex";
export default {
components:{
    Avatar,
    Menu,
    Contact,
},
computed:mapState("settings",["data"]),
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