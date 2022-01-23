import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/components/Detail";
Vue.use(VueRouter);

const router = new VueRouter({
  //配置路由信息
  routes: [
    { name: "Home", path: "/", component: Home },
    { name: "Blog", path: "/blog", component: Blog },
    { name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog },
    { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
    { name: "About", path: "/about", component: About },
    { name: "Project", path: "/project", component: Project },
    { name: "Message", path: "/message", component: Message },
  ],
  mode: "history",
});

export default router;
