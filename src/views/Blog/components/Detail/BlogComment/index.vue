<template>
  <div class="blogcomment-container">
      <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isloading="isLoading" @submit="handleSubmit"/>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";

import {getComment,postComment} from "@/api/blog.js";
export default {
mixins:[fetchData({total:0,rows:[]})],
components:{
    MessageArea,
},
data(){
  return {
    page:1,
    limit:10,
  }
},
computed:{
  hasMore(){
    return this.data.rows.length < this.data.total;
  }
},
created(){
  this.$bus.$on("mainScroll",this.handleScroll);
},
methods:{
  handleScroll(dom){
    if(this.isLoading){
      return;
    }
    //设置允许的误差值
    const range = 100;
    const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
    if(dec < range){
      this.fetchMore();
    }
  },
  async fetchData(){
    console.log(this.$route.params.id,this.page,this.limit)
    return await getComment(this.$route.params.id,this.page,this.limit);
  },
  async fetchMore(){
    if(!this.hasMore){
      return;
    }
    this.isLoading = true;
    this.page++;
    // console.log(this.data);
    const rsp = await this.fetchData();
    console.log(rsp);
    this.data.total = rsp.total;
    this.data.rows = this.data.rows.concat(rsp.rows);
    this.isLoading = false;
  },
  async handleSubmit(formData,callback){
    // console.log(formData);
    const resp = await postComment({
      blogId : this.$route.params.id,
      ...formData,
    })
    this.data.rows.unshift(resp);
    this.data.total++;
    callback("评论成功");
  }
}
}
</script>

<style lang="less" scoped>
.blogcomment-container{
  width: 100%;
  // height: 100%;
  margin-top: 30px;
}
</style>