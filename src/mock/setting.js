import Mock from "mockjs";
import weixin from "@/assets/weixin.png";
import qq from "@/assets/qq.png";
import avatar from "@/assets/avatar.jpg";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: avatar,
    siteTitle: "我的个人空间",
    github: "https://github.com/alcohol-js",
    qq: "3213202391",
    qqQrCode: qq,
    weixin: "yh777bao",
    weixinQrCode: weixin,
    mail: "mailto:duyi@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "DuYi-Edu",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
