import request from "./request";

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/**
 * 获取博客分类
 */
export async function getBlogTypes() {
  // console.log("请求");
  return await request.get("/api/blogtype");
}

/**
 * 获取单页博客
 */

export async function getBlog(id) {
  // console.log(id);
  return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {object} commentInfo
 */
export async function postComment(commentInfo) {
  return await request.post("/api/comment", commentInfo);
}

/**
 * 获取评论
 * @param {*} blogId 博客id
 * @param {*} page 页码
 * @param {*} limit 页容量
 * @returns
 */
export async function getComment(blogId, page = 1, limit = 10) {
  const a = await request.get("/api/comment", {
    params: {
      blogId,
      page,
      limit,
    },
  });
  console.log(a);
  return a;
}
