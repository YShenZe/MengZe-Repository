# HTML 基础

::: danger
内容暂不完全，持续更新中...
:::

## HTML 文档结构
所有 HTML 文档必须包含以下基础结构：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>文档标题</title>
  </head>
  <body>
    <!-- 页面内容写在这里 -->
  </body>
</html>
```

---

## 核心概念
### 1. 标签（Tags）
- 由尖括号包裹的关键字，如 `<p>` 表示段落
- 通常成对出现：`<标签名>` 开头，`</标签名>` 结尾
- 示例：`<h1>标题</h1>`

### 2. 元素（Element）
- 开始标签 + 内容 + 结束标签的整体
- 示例：`<a href="https://example.com">点击这里</a>`

### 3. 属性（Attributes）
- 为标签提供额外信息，写在开始标签中
- 格式：`属性名="属性值"`
- 示例：`<img src="image.jpg" alt="描述">`

---

## 常用基础标签
### 文本类
| 标签        | 作用                  | 示例                     |
|-------------|-----------------------|--------------------------|
| `<h1>-<h6>` | 标题（1级最大，6级最小） | `<h2>二级标题</h2>`      |
| `<p>`       | 段落                  | `<p>这是一个段落</p>`    |
| `<br>`      | 换行（单标签）         | `第一行<br>第二行`       |
| `<hr>`      | 水平分隔线            | `<hr>`                   |

### 链接与图片
```html
<!-- 超链接 -->
<a href="https://www.example.com" target="_blank">访问示例网站</a>

<!-- 图片 -->
<img src="logo.png" alt="网站Logo" width="200">
```
- `href`：链接地址
- `target="_blank"`：在新标签页打开
- `alt`：图片无法显示时的替代文本

### 列表
**有序列表：**
```html
<ol>
  <li>第一项</li>
  <li>第二项</li>
</ol>
```

**无序列表：**
```html
<ul>
  <li>苹果</li>
  <li>香蕉</li>
</ul>
```

---

## HTML 注释
```html
<!-- 这是注释内容，不会在页面显示 -->
<p>可见内容</p>
```

---

## 注意事项
1. **标签闭合**：双标签必须正确闭合（如 `<p></p>`）
2. **嵌套规则**：先打开的标签后闭合  
   ✅ 正确：`<p><strong>文本</strong></p>`  
   ❌ 错误：`<p><strong>文本</p></strong>`
3. **大小写不敏感**：但建议统一使用小写（如 `<html>` 而非 `<HTML>`）
4. **特殊字符**：需使用实体编码  
   - 空格：`&nbsp;`
   - 小于号：`&lt;`
   - 大于号：`&gt;`

---

## 基础示例
```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
</head>
<body>
  <h1>欢迎光临</h1>
  <p>这是第一个段落。</p>
  <ul>
    <li>咖啡</li>
    <li>茶</li>
  </ul>
  <a href="https://www.google.com">访问谷歌</a>
</body>
</html>
```

**效果预览：**
![基础示例效果](https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/Screenshot_2025-03-15-17-41-44-84_f9a7afa717ced9e1fc9be9833291031a.jpg)