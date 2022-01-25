import "./style/global.less";
import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import store from "./store";
import "@/mock";
import showMessage from "@/utils/showMessage.js";
import "./eventBus";

store.dispatch("settings/fetchSetting");

Vue.config.productionTip = false;
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//博客测试
import * as blogApi from "@/api/blog.js";
// blogApi.getBlogTypes().then((r) => {
//   console.log("获取成功", r);
// });
// blogApi.getBlogs().then((r) => {
//   console.log(r, "博客列表数据");
// });
// blogApi.getBlog("asdf").then((r) => console.log("博客文章", r));
// blogApi
//   .postComment({
//     nickname: "nichen",
//     content: "neirong",
//     blogId: "djla",
//   })
//   .then((r) => console.log("评论成功", r));
// blogApi.getComment("adf", 4, 10).then((r) => console.log("得到评论", r));
