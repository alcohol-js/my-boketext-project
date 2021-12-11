<template>
  <div class="contact-container">
      <div>
          <Icon type="github" />
          <a href="">alcohol_js</a>
      </div>
      <div>
          <Icon type="mail" />
          <a href="">alcohol_js</a>
      </div>
      <div>
          <Icon type="qq" />
          <a href="">alcohol_js</a>
      </div>
      <div>
          <Icon type="chat" />
          <a href="">alcohol_js</a>
      </div>
  </div>
</template>

<script>
import Icon from "../Icon"
export default {
components:{
    Icon,
}
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.contact-container{
    color: @lightWords;
}
</style>>

</style>