<template>
  <div class="image-loader-container">
      <img v-if="!allFinished" :src="placeholder" class="placeholder">
      <img :style="{opacity:isLoaded,transition:`${duration}ms`}" @load="imageLoad" :src="src" class="origin">
  </div>
</template>

<script>
export default {
props:{
    src:{
        type:String,
        required:true,
    },
    placeholder:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        default:500,
    }
},
data(){
    return {
        Loaded:false,
        allFinished:false,
    }
},
computed:{
    isLoaded(){
        return this.Loaded?1:0;
    },
},
methods:{
    imageLoad(){
        this.Loaded = true;
        setTimeout(() => {
            this.allFinished = true;
            this.$emit("load");
        }, this.duration);
        // console.log('111');
    },
}
}
</script>

<style lang="less" scoped>
.image-loader-container{
    width: 100%;
    height: 100%;
    position: relative;
    img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
}

</style>