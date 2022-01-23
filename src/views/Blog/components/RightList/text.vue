<template>
  <div class="text-container">
      <rightList :list="list" @select="handleSelect"/>
  </div>
</template >

<script>
import rightList from "@/views/Blog/components/rightList";
export default {
components:{
    rightList,
},
data(){
    return {
        list:[
            {name:"a", isSelect:false},
            {name:"b", isSelect:true, children:[
                {name:"b-1", isSelect:false}
            ]},
            {name:"c", isSelect:false},
        ],
    }
},
methods:{
    handleSelect(e){
        console.log(e);
    }
}
}
</script>

<style lang="less" scoped>

</style>