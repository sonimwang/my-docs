# 第2周小结

## 学习内容
Docusaurus 搭文档站、Postman 调 API、读 JSON

![文档站首页](/img/docs-site-homepage.png)

## 最大困难
 Docusaurus 格式复杂，修报错修了很久

## 下周一计划

**上午：写英文版 API 文档**

- 主题：Gitee API 快速调用指南
- Introduction（这个指南教什么）
- Prerequisites（需要 Gitee 账号 + Postman）
- Step 1: 获取 Access Token（Gitee 设置页面 → 私人令牌）
- Step 2: 发送第一个 GET 请求（调用户信息接口）
- Step 3: 理解返回的 JSON（逐字段解释是什么意思）
- Common Status Codes（200 / 401 / 404）

**下午：中文版翻译 + 放进 Docusaurus**

- 翻译成中文版
- 两个文件放进 docs/api/ 文件夹
- 更新 sidebars.js 加上这两篇
- npm start 确认侧边栏能看到
- git push 到 Gitee
