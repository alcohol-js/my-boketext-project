<template>
  <div class="blogcategory-container">
      <h2>文章分类</h2>
      <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import fetchData from "@/mixins/fetchData";
import {getBlogTypes} from "@/api/blog.js";
export default {
mixins:[fetchData([])],
components:{
    RightList,
},
computed:{
    categoryId(){
        return +this.$route.params.categoryId || -1;
    },
    limit(){
        return +this.$route.query.limit || 10;
    },
    list(){
        // console.log(this.data);
        const totalArticleCount = this.data.reduce((a,b)=>a + b.articleCount,0);
        // console.log(totalArticleCount);
        const result = [{name:"全部",id:-1,articleCount:totalArticleCount},...this.data];
        return result.map((it) => ({
            ...it,
            isSelect: this.categoryId === it.id,
            aside: `${it.articleCount}篇`,
        }));
    }
},
methods:{
    async fetchData(){
        // console.log("被创建");
        return await getBlogTypes();
    },
    handleSelect(item){
        // console.log(item.id);
        const query = {
            page:1,
            limit:this.limit,
        };
        if(item.id === -1){
            //没有分页
            //  /blog?page=${this.routeInfo.page}&limit=${this.routeInfo.limit}
            this.$router.push({
                name:"Blog",
                query,
            })
        }else{
            //  /blog/cate/${this.routeInfo.categoryId}?page=${this.routeInfo.page}&limit=${this.routeInfo.limit}
            this.$router.push({
                name:"CategoryBlog",
                query,
                params:{
                    categoryId:item.id,
                }
            })
        }
    }
}
}
</script>

<style lang="less" scoped>
.blogcategory-container{
    width: 300px;
    box-sizing: border-box;
    padding: 20px;
    h2{
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1.2em;
        margin: 5px 0;
    }
}
</style>