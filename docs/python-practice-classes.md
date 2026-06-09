---
sidebar_position: 8
---

# Python 类练习

定义一个 `Book` 类，包含书名和作者属性，以及打印信息的方法。

```python
class Book:
    def __init__(self,title,author):
        self.title=title
        self.author=author
        
    def info(self):
        print(f'{self.title}作者是{self.author}')
        
book1=Book("红楼梦","曹雪芹")
book2=Book("水浒传","施耐庵")
book1.info()
book2.info()

books=[book1,book2]
for book in books:
    book.info()
```
