<template>
  <div class="text-container">
    <Layout>
        <template #left>
            <div  class="left">
                左边栏区域，宽度适应内容，溢出隐藏
            </div>
        </template>
            <div class="main">
                30
            </div>
        <template #right>
            <div class="right">
                右边栏区域，宽度适应内容，溢出隐藏
            </div>
        </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
components:{
    Layout,
}
}
</script>

<style scoped lang="less">
.text-container{
    width: 80%;
    height: 600px;
    border: 2px solid red;
    margin: 0 auto;
}
.left{
    width: 200px;
    height: 100%;
    background: blue;
}
.main{
    width: 100%;
    height: 100%;
    background: blueviolet;
}
.right{
    width: 150px;
    height: 100%;
    background: brown;
}
</style>