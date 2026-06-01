# Docs-as-Code

## 是什么

Docs-as-Code = 用写代码的方式写文档。

| 传统写文档 | Docs-as-Code |
|-----------|-------------|
| 用 Word / Confluence | 用 Markdown 写，存 Git 仓库 |
| 手动排版 | 自动生成网站 |
| 靠发Email确认| Git PR 审核 |
| "最新版在哪？" | `git pull` 永远最新 |
| 改错字要等别人发新版 | `git commit` + `push` 即时更新 |

## 核心流程

1. 用 Markdown 写作
2. Git 版本控制（add / commit / push / PR 审核）
3. 静态站点生成器（Docusaurus / Hugo / MkDocs）自动构建网站
4. CI/CD 自动发布：代码一推，文档站自动更新