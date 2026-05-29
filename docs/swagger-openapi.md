# Swagger / OpenAPI

## 是什么

OpenAPI = 一种描述 API 的标准格式（就像 Markdown 是写文档的标准格式）。
Swagger = 一套实现了 OpenAPI 的工具（编辑器、文档生成器、UI 展示）。

两者的关系：OpenAPI 是规范，Swagger 是工具。

## 为什么需要它

着手写 API 文档时，手工去写"URL 是什么、参数是什么、返回值是什么"。
OpenAPI 把这件事标准化：一个 `swagger.yaml` 文件 = 一份机器可读的 API 说明书。 

写完这个文件后，Swagger 工具自动生成：
- 漂亮的 API 文档网页
- 可直接在浏览器里调接口的交互式文档（像 Postman 但嵌在网页里）

## 一个最小的 `swagger.yaml` 长这样

```yaml
openapi: 3.0.0
info:
  title: 用户信息 API
  version: 1.0.0
paths:
  /user:
    get:
      summary: 获取当前用户信息
      responses:
        '200':
          description: 成功返回用户数据
```

### 参考字段

| 字段 | 含义 |
|------|------|
| `openapi: 3.0.0` | 用的 OpenAPI 版本 |
| `info.title` | 这个 API 叫什么名字 |
| `paths` | 有哪些接口地址 |
| `/user` | 接口的路径 |
| `get` | 这个接口用 GET 方法 |
| `summary` | 接口的一句话描述 |
| `responses` | 返回什么 |
| `'200'` | 状态码 200（成功） |