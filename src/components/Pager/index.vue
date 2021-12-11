<template>
  <div class="pager-container" v-if="pageNumber > 1">
      <a @click="handleClick(1)"  :class="{disabled:current === 1}">|&lt;&lt;</a>
      <a @click="handleClick(current-1)"  :class="{disabled:current === 1}">&lt;&lt;</a>
      <a @click="handleClick(n)"  v-for="(n,i) in visibleShowPages" :class="{active:n === current}" :key="i">{{n}}</a>
      <a @click="handleClick(current + 1)"  :class="{disabled:current === pageNumber}">&gt;&gt;</a>
      <a @click="handleClick(pageNumber)"  :class="{disabled:current === pageNumber}">&gt;&gt;|</a>
  </div>
</template>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin: 0 7px;
        cursor: pointer;
        &.disabled{
            color: @gray;
            cursor: not-allowed;
        }
        &.active{
            color: @words;
            cursor: default;
            font-weight: bold;
        }
    }
}
</style>

<script>
export default {
props:{
    current:{//当前页码
        type:Number,
        default:1,
    },
    total:{//总数据量
        type:Number,
        default:0,
    },
    limit:{//页容量
        type:Number,
        default:10,
    },
    visibleNumber:{//可见页码数
        type:Number,
        default:10,
    },
},
computed:{
    pageNumber(){//总页数
        return Math.ceil(this.total / this.limit);
    },
    visibleMin(){//最小显示页码
        let min = this.current - Math.floor(this.visibleNumber / 2);
        if(min < 1){
            min = 1;
        }
        return min;
    },
    visibleMax(){//最大显示页码
        let max = this.visibleMin + this.visibleNumber - 1;
        if(max > this.pageNumber){
            max = this.pageNumber;
        }
        return max;
    },
    visibleShowPages(){//显示的所有页码
        let pages = [];
        for(let i = this.visibleMin;i <= this.visibleMax;i++){
            pages.push(i);
        }
        return pages;
    }
},
methods:{
    handleClick(newPage){
        if(newPage < 1){
            newPage = 1;
        }
        if(newPage > this.pageNumber){
            newPage  = this.pageNumber;
        }
        //抛出一个事件
        this.$emit("pageChange",newPage);
    }
}
}
</script>

