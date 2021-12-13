<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import "@/style/global.less";
import Layout from '@/components/Layout';
import SiteAside from "@/components/SiteAside";
export default {
  components:{
    Layout,
    SiteAside,
  },
}
</script>

<style scoped>
.app-container{
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.aside{
  width: 250px;
  height: 100%;
}
</style>