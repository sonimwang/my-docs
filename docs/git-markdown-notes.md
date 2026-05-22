---
sidebar_position: 3
---

# Git & Markdown 学习笔记

## Git 核心命令

| 命令 | 作用 |
|------|------|
| `git init` | 把文件夹变成 Git 仓库 |
| `git status` | 查看改了什么 |
| `git add .` | 暂存所有修改 |
| `git commit -m '消息'` | 拍照存档 |
| `git push origin main` | 推到远程仓库 |
| `git remote add` | 关联远程仓库 |

**工作流：** 改文件 → `git add .` → `git commit -m 'xxx'` → `git push`

## Markdown 常用语法

| 效果 | 写法 |
|------|------|
| 标题 | `#` `##` `###` |
| **粗体** | `**文字**` |
| `行内代码` | `` `代码` `` |
| 列表 | `- 项目` |
| 代码块 | ` ```语言 ` 包裹 |
| 链接 | `[文字](网址)` |

## 踩过的坑

- Git Bash 里引号必须用英文引号，中文引号会报错
- `git commit` 后如果出现 `>`，说明引号没闭合
- 按 `Ctrl + C` 可以取消当前命令
- `ls` 是小写字母 l 不是数字 1
