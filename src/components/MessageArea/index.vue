<template>
  <div class="messagearea-container">
      <div class="dataform">
          <DataForm v-on="$listeners" />
      </div>
      <h3>
          {{title}}
          <span>{{subTitle}}</span>
      </h3>
      <div class="datalist">
          <DataList :list="list" />
          <Loading v-if="isLoading"/>
      </div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
import Loading from "@/components/Loading";
export default {
components:{
    DataForm,
    DataList,
    Loading,
},
props:{
    title:{
        type:String,
        default:"",
    },
    subTitle:{
        type:String,
        default:"",
    },
    list:{
        type:Array,
        default:()=>[],
    },
    isLoading:{
        type:Boolean,
        default:false,
    }
},

}
</script>

<style lang="less" scoped>
.messagearea-container{
    width: 100%;
}
</style>