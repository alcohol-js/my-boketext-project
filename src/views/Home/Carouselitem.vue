<template>
  <div class="carouselitem-container" ref="carouselitem" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="img-load" :style="imgPosition" ref="img">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" @load="loadEnd"/>
    </div>
    <div class="title" :class="{
      show:isLoad
    }">{{carousel.title}}</div>
    <div class="desc" :class="{
      show:isLoad
    }">{{carousel.description}}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components:{
    ImageLoader,
  },
  props:["carousel"],
  data(){
    return {
      isLoad:false,
      containerSize:null,
      innerSize:null,
      mouseX:0,
      mouseY:0,
    }
  },
  computed:{
    //获得图片坐标
    imgPosition(){
      if(!this.innerSize || !this.containerSize){
        return;
      };
      let extraWidth = this.innerSize.weidth - this.containerSize.weidth;
      let extraHeight = this.innerSize.height - this.containerSize.height;
      let left = -extraWidth / this.containerSize.weidth * this.mouseX;
      let top = -extraHeight / this.containerSize.height * this.mouseY;
      return{
        transform:`translate(${left}px,${top}px)`,
      }
    },
    center(){
      return{
        x:this.containerSize.weidth / 2,
        y:this.containerSize.height / 2,
      }
    }
  },
  mounted(){
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize",this.setSize);
    
  },
  methods:{
    loadEnd(){
      this.isLoad = true;
    },
    setSize(){
      this.containerSize = {
        weidth:this.$refs.carouselitem.clientWidth,
        height:this.$refs.carouselitem.clientHeight,
      };
      this.innerSize = {
        weidth:this.$refs.img.clientWidth,
        height:this.$refs.img.clientHeight,
      };
      // console.log(this.containerSize,this.innerSize);
    },
    handleMouseMove(e){
      let rect = this.$refs.carouselitem.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(rect);
    },
    handleMouseLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  },
 
  destroyed(){
    window.removeEventListener("resize",this.setSize); 
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.carouselitem-container{
  width: 100%;
  height: 100%;
  // background: @dark;
  position: relative;
  overflow: hidden;
  .img-load{
    width: 110%;
    height: 110%;
    position: absolute;
    left:0;
    top:0;
    // z-index: -1;
    transition: 0.15s;
  }
}
.title,.desc{
  position: absolute;
  left: 30px;
  letter-spacing: 5px;
  color: #fff;
  opacity: 0;
  transition: 2s;
  text-shadow: 1px 0 0 rgba(0, 0, 0, .5),0 1px 0 rgba(0, 0, 0, .5),-1px 0 0 rgba(0, 0, 0, .5),0 -1px 0 rgba(0, 0, 0, .5);
  &.show{
    opacity: 1;
  }
}
.title{
  top: calc(50% - 40px);
  font-size: 3em;
}
.desc{
  top: calc(50% + 30px);
  font-size: 1.5em;
}
</style>