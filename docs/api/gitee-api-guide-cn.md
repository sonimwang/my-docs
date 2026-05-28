# Gitee API 快速调用指南

## 介绍

本指南教学如何调用你的第一个API，以 Gitee 为例。
读完你将掌握：发送 GET 请求、读懂 JSON 返回值。

## 准备工作

- 一个 Gitee 账号（若无请去 gitee.com 注册）
- 电脑上已安装 Postman

## 第一步：获取 Access Token

1. 登录 gitee.com
2. 点击右上角头像 → 设置 → 私人令牌
3. 点击"生成新令牌"
4. 勾选 `user_info` 权限
5. 点击"提交"，复制生成的令牌字符串
6. 保存好——第二步要用

## 第二步：发送第一个 GET 请求

GET 请求的意思是"把数据给我"。你发送请求，服务器返回 JSON。

1. 打开 Postman
2. 点击 `+` 号新建一个请求
3. 方法选择 `GET`（URL 栏左边的下拉菜单）
4. 在 URL 栏粘贴以下地址：

https://gitee.com/api/v5/user



5. 点击 URL 栏下方的 `Params` 按钮
6. 在键值表里输入：

| Key | Value |
|-----|-------|
| access_token | （粘贴第一步拿到的令牌） |

7. 点击蓝色 `Send` 按钮
8. 看底部面板——这就是**返回值**

![Postman 返回值](/img/postman-api-call.png)

如果出现一大段文字，里面有你的用户名、头像链接等信息，说明成功。
如果出现 `{"message": "401 Unauthorized"}`，说明令牌填错了或没填。

## 第三步：读懂 JSON 返回值

返回的内容叫 JSON——一种数据格式，结构跟 Python 字典一样。

以下是真实的返回值示例（已精简）：

```json
{
"id": 12345678,
"login": "你的用户名",
"name": "你的名字",
"avatar_url": "https://...",
"email": "你的邮箱@example.com",
"public_repos": 3,
"followers": 5,
"following": 10,
"created_at": "2026-05-12T10:00:00+08:00"
}
每个字段的含义：

|字段	|类型  |含义|
|------|------|------|
id	整数	你在 Gitee 的唯一用户 ID
login	字符串	你的 Gitee 用户名
name	字符串	你的显示名称
avatar_url	字符串	头像图片链接
email	字符串	注册邮箱
public_repos	整数	你公开仓库的数量
followers	整数	关注你的人数
following	整数	你关注的人数
created_at	字符串	注册时间（ISO 8601 格式）
注意观察：

整个内容用 { } 包裹——这是 JSON 对象，等同于 Python 的 dict
每一行都是 "键": 值——字段名和它对应的数据
字符串用双引号 "..."，数字不用引号
字段之间用逗号分隔
第四步：常见状态码
每个 API 返回值都附带一个状态码——3 位数字，告诉你请求的结果。

状态码	含义	怎么办
200	成功	请求正常，看返回数据即可
201	已创建	你的 POST 请求成功创建了新内容
401	未授权	令牌缺失或错误，回到第一步检查
404	未找到	URL 写错了，检查拼写
500	服务器错误	不是你的问题，等会儿再试
在 Postman 里怎样看状态码：

看返回值面板的右上角，有一个带颜色的标签——比如 200 OK（绿色）或 401 Unauthorized（红色）。

下一步
现在你已经会调用一个 API 并读懂返回值了，试试这个：

把 URL 改成 https://gitee.com/api/v5/users/sonimwang/repos
点 Send
看返回值——这次返回的是你的仓库列表
所有 API 文档都遵循同样的模式：

读文档找到 URL
发请求（GET 是读取，POST 是创建）
读懂 JSON 返回值
这三步你已全部掌握。