练习 1 写一个函数 double(n)，接收一个数字，返回它的两倍。

def double(n):
    return n * 2
print(double(5)) 

练习 2 写一个函数 is_adult(age)，接收年龄，>= 18 返回 True，否则返回 False。

def is_adult(age):
    if age>=18:
       return True
    else:
        return False
print(is_adult(25))


练习 3 写一个函数 describe_pet(name, animal)，接收宠物名字和动物类型，

def describe_pet(name, animal):
    return f'{name} is a {animal}'
print(describe_pet("jerry", "mouse"))

练习 4 生成3个1到100的随机数，打印结果

import random
for i in range(3):
    print(random.randint(1, 100))

练习 5  打印今天的日期和星期几


from datetime import datetime

now = datetime.now()
print(now.strftime("%Y-%m-%d"))
print(now.strftime("%A"))   
