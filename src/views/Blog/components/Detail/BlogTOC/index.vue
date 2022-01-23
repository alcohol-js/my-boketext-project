<template>
  <div class="blogtoc-container">
      <h2>目录</h2>
      <RightList :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import debounce from "@/utils/debounce.js";
export default {
components:{
    RightList,
},
props:{
    toc:{
        type:Array,
        require:true,
    }
},
data(){
    return {
        //存放窗口区域显示的文章部分的描点
       activeAnchor:"", 
    }
},
computed:{
    tocWithSelect(){
        //根据toc数据生成带有select的toc数据
        //是否带有isSelect取决于data中的activeAnchor数据
        const getTOC = (toc = [])=>{
            return toc.map((t)=>({
                ...t,
                isSelect: t.anchor === this.activeAnchor,
                children: getTOC(t.children),
            }))
        }
        return getTOC(this.toc);
    },
    doms(){
        //根据toc得到对应的dom元素
        let doms = [];
        const addToDoms = (toc)=>{
            for (const i of toc) {
                doms.push(document.getElementById(i.anchor));
                if(i.children && i.children.length){
                    addToDoms(i.children);
                }
            }
        }
        addToDoms(this.toc);
        return doms;
    }
},
created(){
    this.setSelectDebounce = debounce(this.setSelect,50);
    this.$bus.$on("mainScroll",this.setSelectDebounce);
},
destroyed(){
    this.$bus.$off("mainScroll",this.setSelectDebounce);
},
methods:{
    handleSelect(item){
        // console.log(item.anchor);
        location.hash = item.anchor;
    },
    setSelect() {
        const range = 100;

        //清空Anchor
        this.activeAnchor = "";
        //设置正确的activeAnchor
        for (const dom of this.doms) {
            if(!dom){
                continue;
            }
            //得到dom元素据窗口顶部的距离
            const top = dom.getBoundingClientRect().top;
            if(top > 0 && top <= range){
                this.activeAnchor = dom.id;
                return;
            }else if(top > range){
                return;
            }else{
                this.activeAnchor = dom.id;
            }
        }
    },
},
}
</script>

<style lang="less" scoped>
.blogtoc-container{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    h2{
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1.2em;
        margin: 5px 0;
    }
}
</style>