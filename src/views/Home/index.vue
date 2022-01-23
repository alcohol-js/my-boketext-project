<template>
  <div class="home-container" ref="container" @wheel = "handleWheel">
    <!-- 轮播图列表 -->
    <ul class="carousel-container" :style="{
      marginTop,
    }" @transitionend = "handleTransitionend">
      <li v-for="item in data" :key="item.id">
        <carrouselitem :carousel="item"/>
      </li>
    </ul>
    <!-- 上下按钮 -->
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp"/>
    </div>
    <div v-show="index < data.length - 1" class="icon icon-down"  @click="switchTo(index + 1)">
      <Icon type="arrowDown"/>
    </div>
    <!-- 圆点按钮 -->
    <ul class="btns">
      <li :class="{
        active : i === index
      }" v-for="(item,i) in data" :key="item.id"  @click="switchTo(i)"></li>
    </ul>
    <Loading v-if="isLoading"/>
  </div>
</template>

<script>
import {getBanners} from "@/api/getBanners";
import Carrouselitem from "./Carouselitem.vue"
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import fetchData from "@/mixins/fetchData.js"
export default {
  mixins:[fetchData([])],
  components:{
    Carrouselitem,
    Icon,
    Loading,
  },
  data(){
    return {
      index:0,
      containerHeight:0,
      switching:false,//是否在滚动中
    }
  },
  mounted(){
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize",this.handleResize);
  },
  destroyed(){
    window.removeEventListener("resize",this.handleResize);
  },
  computed:{
    marginTop(){
      return -this.index * this.containerHeight + "px";
    }
  },
  methods:{
    switchTo(i){
      if(this.switching){
        return;
      }
      this.switching = true;
      this.index = i;
    },
    handleWheel(e){
      if(this.switching){
        return;
      }
      if(e.deltaY <= -5 && this.index > 0){
        this.switching = true;
        this.index--;
      }else if(e.deltaY >= 5 && this.index < this.data.length - 1){
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionend(){
      this.switching = false;
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData(){
      return await getBanners();
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
@gap:25px;
.home-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  //测试
    // width: 50%;
    // height: 40%;
    // overflow: visible;
    // border: 2px solid black;
    // margin: 100px auto;
  .carousel-container{
    width: 100%;
    height: 100%;
    transition: 500ms;

    
    li{
      width: 100%;
      height: 100%;
    }
  }
  .icon{
    color: @gray;
    cursor: pointer;
    .self-center();
    z-index: 999999999;
    transform: translateX(-50%);
    &.icon-up{
      top:@gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down{
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump:5px;
    @keyframes jump-up {
      0%{
        transform: translate(-50%,@jump);
      }
      50%{
        transform: translate(-50%,-@jump);
      }
      100%{
        transform: translate(-50%,@jump);
      }
    }
    @keyframes jump-down {
      0%{
        transform: translate(-50%,-@jump);
      }
      50%{
        transform: translate(-50%,@jump);
      }
      100%{
        transform: translate(-50%,-@jump);
      }
    }
  }
  .btns{
    // z-index: -999;
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 25px;
    li{
      // list-style:circle;
      width: 7px;
      height: 7px;
      background: @words;
      border-radius: 50%;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      transition: .5s;
      &.active{
        background: #fff;
      }
    }
  }
}
.icon-container{
  font-size: 30px;
}
</style>