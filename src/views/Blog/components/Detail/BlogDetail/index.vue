<template>
  <div class="blogdetail-container">
    <h1>{{blog.title}}</h1>
    <div class="aside">
      <span>日期：{{formatDate(blog.createDate)}}</span>
      <span>浏览：{{blog.scanNumber}}</span>
      <span><a href="#blog-form-container">评论：{{blog.commentNumber}}</a></span>
      <span><router-link :to="{
        name:'CategoryBlog',
        params:{
          categoryId: blog.category.id,
        }
      }">{{blog.category.name}}</router-link></span>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate.js";
import "@/style/markdown.css";
import "highlight.js/styles/github.css";
export default {
props:{
  blog:{
    type:Object,
    require:true,
  }
},
methods:{
  formatDate,
}
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.blogdetail-container{
  .aside{
    font-size: 12px;
    color: @gray;
    margin: 10px 0;
    span{
      margin-right: 15px;
    }
  }
}
.markdown-body{
  margin-top: 2em;
}
</style>