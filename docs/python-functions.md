# Python 函数深入

## 1. 复习：函数是什么

函数 = 有名字的代码块，给它输入，它给你输出。

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("sonim"))   # Hello, sonim!
```

| 部分 | 含义 |
|------|------|
| `def` | 定义函数的关键字 |
| `greet` | 函数名，自己取 |
| `name` | 参数，调用时传进去的值 |
| `return` | 函数返回的值 |
| `greet("sonim")` | 调用函数，"sonim" 传给 name |

## 2. 参数 vs 返回值

参数：喂给函数的东西（可以有多个，也可以没有）
返回值：函数还给你的东西（return 后面跟什么，调用处就拿到什么）

```python
# 无参数，无返回值
def say_hello():
    print("Hello!")

# 有参数，无返回值
def greet(name):
    print(f"Hello, {name}!")

# 有参数，有返回值
def add(a, b):
    return a + b
```

## 3. 返回值的用途

return 做的事：把结果交出去，你可以把它存进变量继续用。

```python
def get_full_name(first, last):
    return f"{last}, {first}"

full = get_full_name("sonim", "Wang")
print(full)                    # Wang, sonim
print(full.upper())            # WANG, sonim
```

如果函数没有 return，它默认返回 None。
