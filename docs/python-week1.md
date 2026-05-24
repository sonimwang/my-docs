---
sidebar_position: 2
---

# Python 第一周学习笔记
## 第一天：变量与数据类型
变量即贴了标签的盒子。‘=’是赋值，等于为‘==’
| 类型 | 写法 | 说明 |
|******|******|******|
| str | `"hello"` | 字符串 |
| int | `42` | 整数 |
| float | `3.14` | 小数 |
| bool | `True` / `False` | 真假 |
```python
name="Lydia"
print(type(name))  # `class 'str'`

```
## 第二天：条件判断
比较运算符：`==`(等于)、`!=`(不等于)、`>`、`<`、`>=`、`<=`
score =85
if score >=90：
  print('优秀')
  elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
    语法要点：条件后必须有 :，缩进（4空格）表示"属于这个条件"。


# 逻辑运算符：and（且）、or（或）、not（取反）
age = 20
has_ticket = True

if age >= 18 and has_ticket:
    print("可以入场")

# 闰年判断
year = 2024
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 是闰年")
else:
    print(f"{year} 不是闰年")
## 第三天：列表list
列表 = 有序的一组数据，用 [] 表示。索引从 0 开始。


fruits = ["apple", "banana", "orange"]

print(fruits[0])      # apple（第1个）
print(fruits[-1])     # orange（倒数第1个）
# 常用操作
fruits.append("grape")     # 末尾添加
fruits.remove("banana")    # 删除指定值
print(len(fruits))         # 长度 → 3
print("apple" in fruits)   # 是否包含 → True
# 切片：取出一段（左闭右开）
nums = [10, 20, 30, 40, 50]
print(nums[0:3])    # [10, 20, 30]
print(nums[2:])     # [30, 40, 50]

# for 循环遍历
for fruit in fruits:
    print(f"I like {fruit}")
## 第四天：字典dict
字典 = 键值对的集合，用 `{ }` 表示。通过 key 找 value。

```python
person = {"name": "Alice", "age": 25, "city": "Hangzhou"}
print(person["name"])              # Alice
print(person.get("name"))          # Alice（推荐，key 不存在不报错）
print(person.get("job", "未知"))    # key 不存在返回默认值
# 修改与增删
person["age"] = 26          # 修改
person["job"] = "writer"    # 新增
del person["city"]          # 删除

# 遍历 key 和 value
for key, value in person.items():
    print(f"{key}: {value}")
```

JSON 与字典的关系：
JSON	Python
| `{"name": "Alice"}` | dict 字典 |
["a", "b", "c"]	list 列表
"hello"	str
123	int / float
true / false	True / False
null	None
## 第五天：函数
函数 = 有名字的、可重复使用的代码块。输入参数 → 输出返回值。

```python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)    # Hello, Alice!
```

四个部分：`def` + 函数名 + 参数（括号里）+ `return`（输出）

```python
def add(a, b):
    return a + b

print(add(3, 5))    # 8
```

函数的意义：逻辑写一次，调用多次，避免重复。
## 第六天：import模块
模块 = 别人写好的代码，`import` 拿过来直接用。

```python
import math

print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.141592653589793
```

JSON 模块：

```python
import json
# JSON 字符串 → Python 字典（读 API 返回时用）
json_str = '{"name": "Alice", "age": 25}'
data = json.loads(json_str)
print(data["name"])     # Alice
# Python 字典 → JSON 字符串（发请求时用）
person = {"name": "Bob", "age": 30}
json_output = json.dumps(person)
print(json_output)      # {"name": "Bob", "age": 30}
```

记忆口诀：`loads` = Load String（加载）、`dumps` = Dump String（输出）
## 第七天：文件读写+常见报错
```python
# 读文件
with open("test.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 逐行读
with open("test.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())

# 写文件（w 覆盖 / a 追加）
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello World\n")
```

常见报错速查表：

| 报错 | 原因 | 解决 |
| ***| *** | *** |
|      |      |      |
FileNotFoundError	文件路径不对	检查文件名
IndentationError	缩进不对	统一用4空格
TypeError	类型混用	别把字符串和整数直接加
KeyError	字典里没这个 key	用 .get() 代替 []
NameError	变量名没定义	检查拼写
SyntaxError	语法写错	检查冒号、括号
