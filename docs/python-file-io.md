# Python 文件读写

## 打开文件的模式

| 模式 | 含义 | 文件不存在时 |
|------|------|-------------|
| `"r"` | 读（read） | 报错 |
| `"w"` | 写（write），覆盖原内容 | 自动创建 |
| `"a"` | 追加（append），加在末尾 | 自动创建 |

## 读文件

```python
# 一次性读全部
with open("test.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 逐行读
with open("test.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())     # strip() 去掉行尾换行符
写文件

# w 模式：覆盖写入
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("第一行\n")
    f.write("第二行\n")
# 文件现在内容就是：第一行、第二行

# a 模式：追加写入
with open("output.txt", "a", encoding="utf-8") as f:
    f.write("第三行\n")
# 文件现在内容：第一行、第二行、第三行
with 是什么
with open(...) as f: 的作用：

自动打开文件，用完自动关闭
不需要手动 f.close()
 