# HTML 简介

::: danger
内容暂不完全，持续更新中...
:::

## 什么是 HTML？
**HTML**（HyperText Markup Language，超文本标记语言）是用于创建网页和网页应用的标准标记语言。它通过一系列 **标签（Tags）** 定义网页的结构和内容，如文本、图像、链接等。

## HTML 的作用
- **描述网页结构**：定义标题、段落、列表等内容的层级关系。
- **嵌入多媒体**：插入图片、音频、视频等资源。
- **超链接**：实现网页之间的跳转或页面内导航。
- **与 CSS/JavaScript 协作**：结合 CSS 美化页面，通过 JavaScript 实现交互功能。

---

## HTML 基本结构
一个典型的 HTML 文档包含以下核心标签：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>页面标题</title>
  </head>
  <body>
    <h1>这是一个标题</h1>
    <p>这是一个段落。</p>
  </body>
</html>
```

### 代码解析
1. `<!DOCTYPE html>`：声明文档类型为 HTML5。
2. `<html>`：根元素，包裹所有 HTML 内容。
3. `<head>`：包含元数据（如标题、字符集、CSS/JS 链接）。
4. `<title>`：定义浏览器标签页显示的标题。
5. `<body>`：网页可见内容的容器（如文本、图片）。

---

## HTML 的特点
- **标签嵌套**：标签可以包含其他标签（如 `<div><p>文本</p></div>`）。
- **平台无关性**：所有现代浏览器（Chrome、Firefox 等）均支持。
- **静态语言**：自身不提供动态功能，需结合 JavaScript。
- **版本演进**：从 HTML 4.01 到 **HTML5**（支持多媒体、语义化标签等）。

---

## HTML 与 HTML5
HTML5 是当前最新版本，新增了：
- 语义化标签（如 `<header>`, `<article>`）。
- 原生多媒体支持（`<video>`, `<audio>`）。
- 图形绘制（`<canvas>`）。
- 本地存储（LocalStorage、IndexedDB）。

---

## 第一个 HTML 页面
1. 用文本编辑器（如 VS Code）新建 `index.html` 文件。
2. 输入以下代码并保存：
```html
<!DOCTYPE html>
<html>
  <head>
    <title>我的第一个网页</title>
  </head>
  <body>
    <h1>欢迎学习 HTML！</h1>
    <p>这是用 HTML 创建的段落。</p>
  </body>
</html>
```
3. 用浏览器打开文件，即可看到渲染后的页面。