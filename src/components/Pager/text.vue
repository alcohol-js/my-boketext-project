<template>
  <div>
    <Pager :current="current" :total="200" :limit="10" :visibleNumber="10" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from './';
export default {
  components:{
    Pager,
  },
  data(){
    return {
      current:1,
    }
  },
  methods:{
    handlePageChange(e){
      this.current = e;
      console.log(this.current);
    }
  }
}
</script>

<style scoped>
</style>