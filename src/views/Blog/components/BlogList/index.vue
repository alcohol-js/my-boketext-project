<template>
  <div class="bloglist-container" ref="container">
        <ul>
            <li v-for="item in data.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <router-link :to="{name:'BlogDetail',params:{
                        id:item.id,
                    }}">
                        <img
                        :src="item.thumb"
                        :alt="item.title"
                        :title="item.title"
                        />
                    </router-link>
                </div>
                <div class="main">
                    <router-link :to="{name:'BlogDetail',params:{
                        id:item.id,
                    }}">
                        <h2>{{item.title}}</h2>
                    </router-link>
                    <div class="aside">
                        <span>日期：{{formatDate(item.createDate)}}</span>
                        <span>浏览：{{item.scanNumber}}</span>
                        <span>评论: {{item.commentNumber}}</span>
                        <router-link :to="{
                            name:'CategoryBlog',
                            params:{
                                categoryId:item.category.id,
                            }
                        }">{{item.category.name}}</router-link>
                    </div>
                    <div class="desc">
                        {{item.description}}
                    </div>
                </div>
            </li>
        </ul>
        <Loading v-if="isLoading"/>
        <Pager v-if="data.total" :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" :visibleNumber="10" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import Loading from "@/components/Loading";
import fetchData from "@/mixins/fetchData";
import {getBlogs} from "@/api/blog.js";
import formatDate from "@/utils/formatDate.js";
export default {
mixins:[fetchData({})],
components:{
    Pager,
    Loading,
},

computed:{
    /**
     * 获取路由信息
     * categoryId： 获取所属分类
     * page：获取页码
     * limit：获取页容量
     */
    routeInfo(){
        const categoryId = +this.$route.params.categoryId || -1;
        const page = +this.$route.query.page || 1;
        const limit = +this.$route.query.limit || 10;
        return {
            categoryId,
            page,
            limit,
        }
    },
},
methods:{
    formatDate,
    async fetchData(){
        return await getBlogs(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId);
    },
    handlePageChange(newpage){
        const query = {
            page:newpage,
            limit:this.routeInfo.limit,
        };
        if(this.routeInfo.categoryId === -1){
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
                    categoryId:this.routeInfo.categoryId,
                }
            })
        }
    }
},
watch:{
    async $route(){
        this.isLoading = true;
        this.$refs.container.scrollTop = 0;
        this.data = await this.fetchData();
        this.isLoading = false;
    }
}
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.bloglist-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>