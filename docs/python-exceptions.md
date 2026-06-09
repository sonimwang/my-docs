# Python 异常处理

## 什么是异常

异常 = 程序运行时发生的错误。比如：
- 文件不存在就去读
- 把字符串当数字除
- 字典里查不存在的 key

正常情况程序直接崩，`try/except` 可以拦下来温柔处理。

## 基本语法

```python
try:
    # 可能会出错的代码
    num = int(input("输入一个数字: "))
    print(10 / num)
except ValueError:
    # 如果输入的不是数字
    print("请输入数字！")
except ZeroDivisionError:
    # 如果输入了 0
    print("不能除以 0！")
```

## 常见异常类型

| 异常类型 | 触发条件 |
|---------|---------|
| `ValueError` | 类型转换失败（比如 `int("hello")`） |
| `ZeroDivisionError` | 除以 0 |
| `FileNotFoundError` | 文件不存在 |
| `KeyError` | 字典里没有那个 key |
| `TypeError` | 类型用错了（比如字符串 + 整数） |
