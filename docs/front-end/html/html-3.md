# HTML 标签全解

::: danger
内容暂不完全，持续更新中...
:::

## 一、文档结构标签
### 1. 基础结构
```html
<!DOCTYPE html> <!-- 声明为 HTML5 文档 -->
<html>         <!-- 根容器 -->
<head>         <!-- 元数据容器 -->
  <title>页面标题</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <style> /* 内联 CSS */ </style>
</head>
<body> <!-- 内容容器 --> </body>
</html>
```

### 2. 区块标签
| 标签        | 说明                  | HTML5 新增 |
|-------------|-----------------------|------------|
| `<div>`     | 通用区块容器          | ❌         |
| `<header>`  | 页眉/章节头           | ✅         |
| `<footer>`  | 页脚/章节尾           | ✅         |
| `<section>` | 文档独立章节          | ✅         |
| `<article>` | 独立内容块（如博客）  | ✅         |

---

## 二、内容标签
### 1. 标题与段落
```html
<h1>主标题</h1>  <!-- 仅使用一次 -->
<h2>二级标题</h2>
<p>这是一个段落，包含<br>换行符。</p>
<hr> <!-- 水平分隔线 -->
```

### 2. 文本格式化
```html
<strong>加粗文本</strong>
<em>强调文本</em>
<u>下划线</u>
<s>删除线</s>
<code>console.log();</code>
```

### 3. 列表
```html
<!-- 无序列表 -->
<ul>
  <li>苹果</li>
  <li>香蕉</li>
</ul>

<!-- 有序列表 -->
<ol start="5">
  <li>第五项</li>
  <li>第六项</li>
</ol>

<!-- 定义列表 -->
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
</dl>
```

---

## 三、媒体标签
### 1. 图像
```html
<img src="cat.jpg" alt="猫咪图片" width="400" loading="lazy">
```

### 2. 音视频（HTML5）
```html
<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
  您的浏览器不支持视频
</video>

<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
</audio>
```

---

## 四、表格标签
```html
<table border="1">
  <caption>学生名单</caption>
  <thead>
    <tr>
      <th>姓名</th>
      <th colspan="2">成绩</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>90</td>
      <td rowspan="2">优秀</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>88</td>
    </tr>
  </tbody>
</table>
```

---

## 五、表单标签
### 1. 基础表单
```html
<form action="/submit" method="POST">
  <label for="name">姓名：</label>
  <input type="text" id="name" name="username" required>

  <label>性别：
    <input type="radio" name="gender" value="male"> 男
    <input type="radio" name="gender" value="female"> 女
  </label>

  <select name="city">
    <option value="bj">北京</option>
    <option value="sh">上海</option>
  </select>

  <textarea name="desc" rows="4"></textarea>
  
  <button type="submit">提交</button>
</form>
```

### 2. HTML5 新增输入类型
```html
<input type="email" placeholder="邮箱">
<input type="date" min="2020-01-01">
<input type="color" value="#ff0000">
<input type="range" min="0" max="100">
```

---

## 六、链接与框架
### 1. 超链接
```html
<a href="https://example.com" target="_blank" rel="noopener">外部链接</a>
<a href="#section2">页面锚点</a>
```

### 2. 框架
```html
<!-- 内联框架 -->
<iframe src="demo.html" width="800" height="600"></iframe>

<!-- 旧式框架集（已废弃） -->
<frameset cols="25%,75%">
  <frame src="menu.html">
  <frame src="content.html">
</frameset>
```

---

## 七、颜色表示
### 1. 颜色名
```html
<p style="color: red;">红色文本</p>
<p style="background: aqua;">背景色</p>
```

### 2. 颜色值
| 格式          | 示例               |
|---------------|--------------------|
| 十六进制       | `#ff0000`          |
| RGB           | `rgb(255, 0, 0)`   |
| RGBA          | `rgba(255,0,0,0.5)`|
| HSL           | `hsl(0, 100%, 50%)`|

---

## 八、布局标签
### 1. 传统布局
```html
<div class="container">
  <div class="header"></div>
  <div class="sidebar"></div>
  <div class="main-content"></div>
</div>
```

### 2. HTML5 语义化布局
```html
<header>
  <nav>导航栏</nav>
</header>
<main>
  <aside>侧边栏</aside>
  <article>主要内容</article>
</main>
<footer>页脚信息</footer>
```