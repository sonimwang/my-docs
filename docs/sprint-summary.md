---
sidebar_position: 0
---

# 冲刺总结（5.28 — 6.9）

## 目标回顾

从零开始，用两周时间积累技术文档工程师所需的项目经验和作品产出。

## 完成清单

### 开源贡献

| 项目 | 内容 | 状态 |
|------|------|------|
| LMCache PR #3592 | 7 个 `.po` 文件人工校对，修正 19 处错误 | 已合并 |
| MemOS PR #1893 | 5 个英文模块文档中译 | 审核中 |

### 文档产出

| 产出 | 说明 |
|------|------|
| Gitee API 中英文指南 | 独立编写，覆盖 GET 请求、JSON 解析、状态码 |
| 个人技术文档站 | Docusaurus + Markdown，GitHub Pages 部署 |
| 技术笔记 15+ 篇 | Python、Git、API 文档、信息架构等 |

### 工具链掌握

- **Sphinx / .po**：翻译文件格式、`msgid`/`msgstr` 结构
- **Docusaurus**：搭建、配置、构建、部署全流程
- **GitHub Pages**：orphan 分支部署、baseUrl 配置
- **Git 协作**：DCO 签名、CI 检查、rebase、冲突解决
- **python-docx**：用脚本生成格式化 Word 文档

### 求职准备

- 简历 v7（单页、中文、定向杭州技术文档工程师）
- 作品集（在线版 + Word 版）
- 岗位调研（BOSS 直聘、杭州地区）

## 踩过的坑

1. **Gitee Pages 已下线**（2024.5）—— 迁移到 GitHub Pages
2. **Docusaurus baseUrl** —— GitHub Pages 项目站点需要 `/repo-name/` 前缀
3. **代码块未闭合** —— markdown 里 ` ``` ` 忘关会导致后面所有内容不渲染
4. **`&&` vs `;` 的坑** —— shell 里用错分号导致错误命令在错误分支上执行
5. **Python 路径** —— Windows App Store 的 python 重定向器会失效

## 待继续

- MemOS PR 跟进（等 reviewer 反馈）
- 投递简历、准备面试
- Python 薄弱点持续练习
- Docusaurus 站点内容持续更新

## 数据

- 冲刺天数：13
- 开源 PR：2
- 技术笔记：15+
- 双语文档：2
- 校对修正：19 处
- 踩坑数：**数不清**
