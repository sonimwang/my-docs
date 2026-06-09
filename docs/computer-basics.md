# 计算机基础概念

## 前端 vs 后端

| | 前端 | 后端 |
|------|------|-----|
| 是什么 | 用户能看到、能点的地方 | 用户看不见的幕后 |
| 类比 | 餐厅的桌面、菜单、服务员 | 厨房、厨师、冰箱 |
| 技术 | HTML / CSS / JavaScript | Python / Java / 数据库 |
| 调 API 时 | Postman 界面的输入框和按钮 | Gitee 服务器返回 JSON 的那台电脑 |

## 客户端 vs 服务端

- **客户端**：发请求的一方。你的 Postman、你的 Python 代码、你的浏览器。
- **服务端**：收请求、处理、返回数据的一方。Gitee 的服务器、GitHub 的服务器。

例：调取 `api.github.com/users/sonimwang`，此电脑是客户端，GitHub 的电脑是服务端。

## API

> API类似一个传话的人，当客户端需要数据，通过API转达服务器，服务器再把数据结果转交API传至客户端

## 数据库是什么

数据库 = 有组织地存放数据的地方。类比Excel 表格，但比 Excel 强大得多。

比如 Gitee 返回用户信息——`login`、`email`、`public_repos`——这些数据存在 Gitee 的数据库里，调 API 时它从数据库取出来给你。

## 核心概念

| 概念 | 类比 | 说明 |
|------|------|------|
| 表（table） | Excel 一个 sheet | 存同一类数据，比如 `users` 表 |
| 字段（column） | Excel 的列 | 比如 `username` 列、`email` 列 |
| 行（row） | Excel 的一行 | 一条记录，比如"sonimwang 这个用户" |
| SQL | 跟数据库对话的语言 | `SELECT * FROM users WHERE name = 'sonimwang'` |

## SQL 长什么样

```sql
-- 查数据
SELECT username, email FROM users;

-- 加数据
INSERT INTO users (username, email) VALUES ('sonimwang', 'xxx@email.com');

-- 改数据
UPDATE users SET email = 'new@email.com' WHERE username = 'sonimwang';

-- 删数据
DELETE FROM users WHERE username = 'sonimwang';
```

四句话对应你每天都在做的事：查、增、改、删（CRUD）。

## 部署是什么

部署 = 把你的网站/文档站放到一台公开的服务器上，让别人通过网址访问。

你现在的 Docusaurus 在 localhost:3000——只有你自己的电脑能看。
部署之后，你会有一个类似 https://sonimwang.github.io/my-docs 的公开地址，任何人打开都能看。

## 三个关键词

| 概念 | 说明 |
|-----|-----|
| 服务器 | 一台永远不关机的电脑，你的文件放在上面 |
| 域名 | gitee.com、github.com——比 IP 地址好记 |
| HTTPS | 网址前面的小锁，加密传输，别人看不到你的数据 |
