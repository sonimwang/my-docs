# MDX 入门

## 什么是 MDX

MDX可实现在Markdown里直接写 JSX（React 组件）。
Docusaurus 原生支持，`.md` 和 `.mdx` 后缀都行。

## 例子

```mdx
# 标题

这是一段文字。

export const Highlight = ({children}) => (
  <span style={{backgroundColor: 'yellow'}}>{children}</span>
);

<Highlight>这行文字会有黄色高亮背景</Highlight>

回到普通 Markdown。
```

## 实际用途

- 文档里嵌入可交互的 demo
- 自定义提示框（警告、注意、技巧）
- 写漂亮的 API 文档示例
