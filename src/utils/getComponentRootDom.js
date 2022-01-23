import Vue from "vue";

/**
 * 将组件放到vue实例上挂载，得到真实的dom
 * @param {Component} comp 组件名
 * @param {object} props  组件的属性值
 * @returns 真实的dom对象
 */
export default function (comp, props) {
  //   console.log(props);
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });
  vm.$mount();
  //   console.log(vm);
  return vm.$el;
}
