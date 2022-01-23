<template>
  <form id="blog-form-container" @submit.prevent="handleSubmit" class="dataform-container" ref="form">
      <div class="form-item">
        <div class="input-erea">
          <input type="text" placeholder="用户昵称" v-model="formData.nickName" maxlength="10">
          <span class="tip">{{formData.nickName.length}}/10</span>
        </div>
        <div class="error">{{error.nickName}}</div>
      </div>
      <div class="form-item">
        <div class="text-erea">
          <textarea placeholder="输入内容" v-model="formData.content" maxlength="300"></textarea>
          <span class="tip">{{formData.content.length}}/300</span>
        </div>
        <div class="error">{{error.content}}</div>
      </div>
      <div class="form-item">
        <div class="input-erea">
          <button :disabled="isSubmiting">{{isSubmiting ? "提交中..." : "提交"}}</button>
        </div>
      </div>
  </form>
</template>

<script>
export default {
data(){
  return {
    formData:{
      nickName:"",
      content:"",
    },
    error:{
      nickName:"",
      content:"",
    },
    isSubmiting:false,
  }
},
methods:{
  handleSubmit(){
    this.error.nickName = this.formData.nickName ? "" : "请输入昵称";
    this.error.content = this.formData.content ? "" : "请输入内容";
    if(this.error.nickName || this.error.content){
      return;
    }
    this.isSubmiting = true;
    console.log("1");
    this.$emit("submit",this.formData, (successMsg)=>{
        this.$showMessage({
          content:successMsg,
          type: "success",
          container:this.$refs.form,
          callback:()=>{
            this.isSubmiting = false;
            this.formData.nickName = "";
            this.formData.content = "";
          }
        })
      });
  },
}
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.dataform-container{
  width: 100%;
  padding: 0 20px;
  
  box-sizing: border-box;
  .form-item{
    width: 100%;
    margin-bottom: 10px;
    // height: 400px;
  }
}
.input-erea{
  width: 100%;
  height: 40px;
  position: relative;
  input{
    width: 100%;
    height: 40px;
    border: 1px dashed @gray;
    border-radius: 5px;
    &:focus{
      outline: 1px dashed @primary;
    }
    // display: inline-block;
  }
  span{
    position: absolute;
    top: 20px;
    right: 0;
    color: @gray;
    // left:100%;
    transform: translate(-5px,-50%);
  }
}

.text-erea{
  width: 100%;
  height: 150px;
  position: relative;
  textarea{
    width: 100%;
    height: 150px;
    border: 1px dashed @gray;
    border-radius: 5px;
    resize: none;
    &:focus{
      outline: 1px dashed @primary;
    }
  }
  span{
     position: absolute;
     top: 150px;
     right: 0;
     transform: translate(-5px,-100%);
     color: @gray;
  }
}

button{
  width: 100px;
  height: 30px;
  border: none;
  background-color:@primary;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  &:hover{
    background: darken(@primary,10%);
  }
  &:disabled{
    background: lighten(@primary,20%);
    cursor: not-allowed;
  }
}

.error{
  width: 100%;
  height: 50px;
  // background-color: green;
  line-height: 50px;
  color: @danger;
}
</style>