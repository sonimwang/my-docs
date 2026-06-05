---
sidebar_position: 12
---

# Git Fork workflow

## 完整流程

### 准备阶段

1. **Fork**：在 GitHub 目标仓库页面点 Fork，fork 到自己账号
2. **Clone**：`git clone https://github.com/你的用户名/仓库名.git`
3. **建分支**：`cd 仓库名` → `git switch -c 分支名`

### 修改阶段

4. **改文件**：在 VS Code 中编辑
5. **暂存**：`git add 文件名`
6. **提交**：`git commit -m "做了什么"`
7. **推送**：`git push origin 分支名`

### 提交阶段

8. **创建 PR**：打开 GitHub 仓库页 → New pull request → 填标题和描述 → Create pull request

### 合并后收尾

9. **切回主分支**：`git switch main`
10. **拉取最新**：`git pull origin main`
11. **删本地分支**：`git branch -d 分支名`

---

## 常用命令速查

| 命令 | 作用 |
|------|-----|
| `git status` | 查看当前状态（改了哪些文件、在哪个分支） |
| `git log --oneline -3` | 查看最近 3 条 commit |
| `git diff` | 查看还没 `git add` 的改动 |
| `git diff --staged` | 查看已 `git add` 但还没 commit 的改动 |
| `git stash` | 暂存当前改动，恢复到干净状态 |
| `git stash list` | 查看暂存列表 |
| `git stash pop` | 恢复最近一次暂存的改动 |

---

## 注意事项

- `git push origin` 后面跟**分支名**，不是文件名
- clone 下来后默认在 `main` 分支，需要手动建分支
- push前切记打开Watt Toolkit访问
- 提 PR 前确保 commit 已 push---
sidebar_position: 12
---

# Git Fork 工作流

## 完整流程（11 步）

### 准备阶段

1. **Fork**：在 GitHub 目标仓库页面点 Fork，fork 到自己账号
2. **Clone**：`git clone https://github.com/你的用户名/仓库名.git`
3. **建分支**：`cd 仓库名` → `git switch -c 分支名`

### 修改阶段

4. **改文件**：在 VS Code 中编辑
5. **暂存**：`git add 文件名`
6. **提交**：`git commit -m "做了什么"`
7. **推送**：`git push origin 分支名`

### 提交阶段

8. **创建 PR**：打开 GitHub 仓库页 → New pull request → 填标题和描述 → Create pull request

### 合并后收尾

9. **切回主分支**：`git switch main`
10. **拉取最新**：`git pull origin main`
11. **删本地分支**：`git branch -d 分支名`

---

## 常用命令速查

| 命令 | 作用 |
|------|------|
| `git status` | 查看当前状态（改了哪些文件、在哪个分支） |
| `git log --oneline -3` | 查看最近 3 条 commit |
| `git diff` | 查看还没 `git add` 的改动 |
| `git diff --staged` | 查看已 `git add` 但还没 commit 的改动 |
| `git stash` | 暂存当前改动，恢复到干净状态 |
| `git stash list` | 查看暂存列表 |
| `git stash pop` | 恢复最近一次暂存的改动 |

---

## 注意事项

- `git push origin` 后面跟**分支名**，不是文件名
- clone 下来后默认在 `main` 分支，需要手动建分支
- GitHub 网页需要 Watt Toolkit 才能访问
- 提 PR 前确保 commit 已 push