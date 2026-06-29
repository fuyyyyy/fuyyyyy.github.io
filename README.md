# Fang Yiyang Homepage

一个可以直接部署到 GitHub Pages 的静态个人主页。

## 本地预览

直接用浏览器打开 `index.html` 即可。

## 自动部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `homepage`。
2. 把本项目推送到仓库的 `main` 分支。
3. 进入仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `GitHub Actions`。
5. 推送后等待 `.github/workflows/pages.yml` 自动发布。

## 可替换内容

- `index.html` 中的姓名、简介、项目和邮箱。
- `assets/profile-photo.jpg` 中的头像。
- `assets/papers/` 中的论文缩略图。
- `styles.css` 中的颜色与布局细节。
