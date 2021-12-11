<template>
  <div class="text-condainer">
      <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" />
  </div>
</template>

<script>
import ImageLoader from "./"
export default {
components:{
    ImageLoader,
}
}
</script>

<style scoped lang="less">
.text-condainer{
    width: 800px;
    height: 600px;
    border: 1px solid;
    margin: 0 auto;
}
</style>