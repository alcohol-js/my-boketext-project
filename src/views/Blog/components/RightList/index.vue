<template>
  <div class="rightlist-container">
      <ul>
          <li v-for="(item,i) in list" :key="i" >
              <span @click="handleClick(item)" :class="{active:item.isSelect}">{{item.name}}</span>
              <span v-if="item.aside" class="aside" :class="{active:item.isSelect}">{{item.aside}}</span>
              <rightList :list="item.children" @select="handleClick"/>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
name:"rightList",
props:{
    //[{name:"xxx",isSelect:true,children:[{name:"xxx"}]}]
    list:{
        type:Array,
        default:() => [],
    }
},
methods:{
    handleClick(item){
        // console.log(item.isSelect);
        if(!item.isSelect){
            this.$emit("select",item);
            // console.log("11111");
        }
    }
}
}
</script>

<style lang="less" scoped>
@import "~@/style/global.less";
@import "~@/style/var.less";
.rightlist-container{
    .rightlist-container{
        margin-left: 1em;
    }
    li{
        min-height: 40px;
        line-height: 40px;
        cursor: pointer;
        .aside{
            font-size: 12px;
            margin-left: 1em;
            color: gray;
        }
        .active{
            color: @warn;
            font-weight: bold;
        }
        
    }
}
</style>