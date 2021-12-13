<template>
  <div class="menu-container ">
      <RouterLink :exact="item.exact" v-for="item in items" :key="item.link" :to="item.name" >
          <div class="icon">
              <Icon :type="item.icon"/>
          </div>
          <span>{{item.title}}</span>
      </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
components:{
    Icon,
},
data(){
    return {
        items:[
            {
                name:"Home",
                title:"首页",
                icon:"home",
                exact:true,
            },
            {
                name:"Blog",
                title:"文章",
                icon:"blog",
                exact:false,
            },
            {
                name:"About",
                title:"关于我",
                icon:"about",
                exact:true,
            },
            {
                name:"Project",
                title:"项目&效果",
                icon:"code",
                exact:true,
            },
            {
                name:"Message",
                title:"留言板",
                icon:"chat",
                exact:true,
            }
        ],
    };
},
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.menu-container{
    color: @gray;
    margin: 24px 0;
    a{
        
        padding: 0 50px;
        height: 45px;
        display: flex;
        align-items:center;
        .icon{
        width: 24px;
        }
        &:hover{
            color: #fff;
        }
        &.router-link-active{
            background: #2d2d2d;
        }
    }
    
}

</style>