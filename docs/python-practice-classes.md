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
