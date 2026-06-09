# Python 模块

## 什么是模块

模块 = 别人写好的 `.py` 文件，你 `import` 进来直接用。
Python 自带了很多模块，不用下载。

## 三个最常用的内置模块

### 1. math — 数学运算

```python
import math

print(math.sqrt(25))       # 5.0（平方根）
print(math.ceil(3.1))      # 4（向上取整）
print(math.floor(3.9))     # 3（向下取整）
print(math.pi)             # 3.141592653589793
```

### 2. random — 随机数

```python
import random

print(random.randint(1, 10))    # 1到10之间随机整数
print(random.choice(["apple", "banana", "orange"]))  # 随机选一个
print(random.random())          # 0到1之间随机小数
```

### 3. datetime — 日期时间

```python
from datetime import datetime

now = datetime.now()
print(now)                          # 2026-05-26 10:30:00
print(now.strftime("%Y-%m-%d"))     # 2026-05-26
print(now.strftime("%A"))           # Tuesday
```

## import 的两种写法

```python
import math              # 全导入，用的时候写 math.sqrt()
from math import sqrt    # 只导入一个，用的时候直接写 sqrt()
```

区别：`from ... import ...` 更简洁，但名字可能冲突。
