# Python 类与对象

## 为什么需要类

字典只能存数据，不能存"行为"。

```python
# 用字典存一只狗
dog = {"name": "旺财", "age": 3}

# 但是狗会叫，字典做不到
# dog.bark()  ← 不存在
类把 数据 + 行为 捆在一起。

定义一个类

class Dog:
    def __init__(self, name, age):
        self.name = name    # 属性：狗的名字
        self.age = age      # 属性：狗的年龄

    def bark(self):
        print(f"{self.name} 在叫：汪汪！")

    def birthday(self):
        self.age = self.age + 1
        print(f"{self.name} 长大了一岁，现在 {self.age} 岁")
部分	含义
class Dog:	定义一个叫 Dog 的类
__init__	构造函数——造对象时自动调用
self	指代"当前这个对象本身"，每个方法都要写
self.name	把传进来的 name 存到对象上
bark(self)	自定义的方法——狗能叫
用类造对象

my_dog = Dog("旺财", 3)    # 造一个 Dog 对象
print(my_dog.name)          # 旺财
print(my_dog.age)           # 3
my_dog.bark()               # 旺财 在叫：汪汪！
my_dog.birthday()           # 旺财 长大了一岁，现在 4 岁