# Python requests 模块

## 什么是 requests

`requests` 是 Python 最常用的 HTTP 库。用它发请求 = 用代码替代 Postman。

## 安装

```bash
pip install requests
发送 GET 请求

import requests

response = requests.get("https://api.github.com/users/sonimwang")
print(response.status_code)    # 200 表示成功
print(response.json())         # 返回的 JSON，转成了 Python 字典

对比  Postman 里的操作：
| Postman | Python |
|---------|--------|
| 选 GET，填 URL | `requests.get(url)` |
| 点 Send | 运行这行代码 |
| Params 里填 access_token | `requests.get(url, params={"access_token": "xxx"})` |
| 看底部 JSON 面板 | `response.json()` |
| 看状态码标签 | `response.status_code` |

带参数的请求

import requests

url = "https://gitee.com/api/v5/user"
params = {"access_token": "换成你的token"}

response = requests.get(url, params=params)
data = response.json()

print(f"用户名: {data['login']}")
print(f"仓库数: {data['public_repos']}")