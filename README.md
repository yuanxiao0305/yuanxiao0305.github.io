# 元宵的 GitHub Pages 主页

这是一个零构建步骤的静态站点，直接为 `yuanxiao0305.github.io` 准备。

## 文件说明

- `index.html`：主页结构
- `styles.css`：视觉样式
- `script.js`：到家天数、滚动显现等轻量交互
- `assets/`：头像和 favicon
- `.nojekyll`：避免 GitHub Pages 按 Jekyll 规则处理文件

## 部署方式

1. 用账号 `yuanxiao0305` 新建一个公开仓库，仓库名必须是 `yuanxiao0305.github.io`。
2. 把这个目录下的全部文件上传到仓库根目录。
3. 如果 GitHub Pages 没有自动生效，到仓库 `Settings` -> `Pages` 里确认：
   `Source` 选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/ (root)`。
4. 等待 1 到 3 分钟后，访问 `https://yuanxiao0305.github.io/`。

## 如果你想用 Git 推送

```bash
git init
git branch -M main
git add .
git commit -m "Initial site for Yuanxiao"
git remote add origin git@github.com:yuanxiao0305/yuanxiao0305.github.io.git
git push -u origin main
```

如果你想继续扩展，这个站点最容易新增的是：

- 更多照片
- 一个“成长记录”区块
- 一页单独的相册或 blog
