<template>
  <div class="detail-container">
    <Layout>
      <div class="main-container" ref="maincontainer">
        <BlogDetail :blog="data" v-if="data"/>
        <BlogComment v-if="!isLoading" />
        <Loading  v-if="isLoading"/>
      </div>
      <template #right>
        <div class="right-container">
          <BlogTOC :toc="data.toc" v-if="data"/>
          <Loading  v-if="isLoading"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./BlogDetail";
import BlogTOC from "./BlogTOC";
import BlogComment from "./BlogComment";
import Loading from "@/components/Loading";
export default {
mixins:[fetchData(null)],
components:{
  Layout,
  BlogDetail,
  BlogTOC,
  BlogComment,
  Loading,
},
mounted(){
  this.$refs.maincontainer.addEventListener("scroll",this.handleScroll);
},
updated(){
  const hash = location.hash;
  location.hash = "";
  setTimeout(() => {
    location.hash = hash;
  }, 50);
},
destroyed(){
  // console.log(this.$refs.maincontainer);
  this.$refs.maincontainer.removeEventListener("scroll",this.handleScroll);
},
methods:{
  async fetchData(){
    return await getBlog(this.$route.params.id);
  },
  handleScroll(){
    this.$bus.$emit("mainScroll",this.$refs.maincontainer);
  }
}
}
</script>

<style lang="less" scoped>
.detail-container{
    width: 100%;
    height: 100%;
    .main-container{
      overflow-y: scroll;
      scroll-behavior:smooth;
      height: 100%;
      box-sizing: border-box;
      padding: 20px;
      position: relative;
    }
}
.right-container{
  position: relative;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>