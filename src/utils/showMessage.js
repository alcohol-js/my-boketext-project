import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 *
 * @param {String} content 弹出框显示的内容
 * @param {String} type  （info,error,success,warn）弹出框的类型，用于区别弹出框的图标及背景颜色，默认info
 * @param {Number} duration 弹出框多久后消失，默认2s
 * @param {htmlElement} container 父容器
 * @param {function} callback 回调函数
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;

  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  console.log(styles["message-${type}"]);
  div.className = `${styles.message} ${styles["message-" + type]}`;
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);

  //浏览器强行渲染
  div.clientHeight;

  //回归正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  //延时消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
