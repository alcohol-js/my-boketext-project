<template>
  <div class="contact-container">
      <div>
          <a :href="data.github">
              <Icon type="github"/>
              <span>alcohol_js</span>
          </a>
      </div>
      <div>
          <a :href="data.mail">
              <Icon type="mail"/>
              <span>alcohol_js@163.com</span>
          </a>
      </div>
      <div>
          <a >
              <Icon type="weixin" class="weixin"/>
              <span>{{data.weixin}}</span>
          </a>
          <div class="pop">
              <img :src="data.weixinQrCode">
          </div>
      </div>
      <div>
          <a>
              <Icon type="qq"/>
              <span>{{data.qq}}</span>
          </a>
          <div class="pop">
              <img :src="data.qqQrCode">
          </div>
      </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
import weixin from "@/assets/weixin.png";
import {mapState} from "vuex";
export default {
components:{
    Icon,
},
data(){
    return{
        weixin,
    }
},
computed:mapState("settings",["data"]),
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.contact-container{
    color: @lightWords;
    width: 100%;
    @itemHeight:40px;
    padding: 0 10px;
    box-sizing: border-box;
    > div{
        position: relative;
        margin: 5px 7px;
        height: @itemHeight;
        display: flex;
        align-items: center;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
        a{
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 14px;
        }
        .pop{
            position: absolute;
            left: 0;
            bottom: @itemHeight;
            padding: 10px 15px;
            background: #fff;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: .3s;
            border-radius: 5%;
            img{
                width: 150px;
                height: 150px;
            }
            &::after{
                content: "";
                width: 8px;
                height: 8px;
                background: #fff;
                position: absolute;
                left: 50%;
                bottom: -4px;
                transform: translateX(-50%) rotate(45deg);
            }
        }
        
    }
}
.icon-container{
    font-size: 25px;
    display: inline-block;
    width: 30px;
}
.weixin{
    font-size: 31px;
    text-indent: -3px;
}
</style>