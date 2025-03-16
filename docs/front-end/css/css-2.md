# CSS 选择器

## 选择器类型大全

### 一、基础选择器
| 选择器类型      | 示例               | 说明                          | 权重值 |
|-----------------|--------------------|-------------------------------|--------|
| **元素选择器**  | `p`                | 选择所有 `<p>` 元素           | 0-0-1  |
| **类选择器**    | `.btn`             | 选择 `class="btn"` 的元素     | 0-1-0  |
| **ID 选择器**   | `#header`          | 选择 `id="header"` 的元素     | 1-0-0  |
| **通配选择器**  | `*`                | 选择所有元素                  | 0-0-0  |

### 二、属性选择器
```css
/* 存在属性 */
[disabled] { opacity: 0.5; }

/* 精确匹配 */
[type="password"] { font-family: monospace; }

/* 包含子字符串 */
[class*="col-"] { float: left; }

/* 开头匹配 */
[href^="https"]::before { content: "🔒"; }

/* 结尾匹配 */
a[href$=".pdf"]::after { content: "📄"; }

/* 空格分隔列表匹配 */
[lang~="en-us"] { quotes: '"' '"'; }

/* 连字符前缀匹配 */
[lang|="zh"] { font-family: "PingFang SC"; }
```

### 三、组合选择器
| 组合方式          | 示例           | 说明                          |
|-------------------|----------------|-------------------------------|
| 后代选择器        | `div p`        | 所有嵌套层级的 `<p>`          |
| 直接子代选择器    | `ul > li`      | 仅直接子元素                  |
| 相邻兄弟选择器    | `h2 + p`       | 紧接在 h2 后的第一个 p        |
| 通用兄弟选择器    | `h2 ~ p`       | h2 之后的所有同级 p           |
| 多元素选择器      | `h1, h2, .title` | 同时选择多个元素             |

### 四、伪类选择器
#### 状态伪类
```css
/* 链接状态 */
a:link { color: blue; }    /* 未访问 */
a:visited { color: purple; } /* 已访问 */
a:hover { text-decoration: underline; }
a:active { color: red; }    /* 激活时 */

/* 表单状态 */
input:focus { border-color: #4d90fe; }
input:disabled { background: #eee; }
input:checked + label { font-weight: bold; }
```

#### 结构伪类
```css
/* 子元素选择 */
li:first-child { color: green; }
li:last-child { border-bottom: none; }
li:nth-child(2n) { background: #f5f5f5; }  /* 偶数行 */
tr:nth-of-type(3) { font-weight: bold; }   /* 第三个 tr */

/* 特殊位置 */
p:only-child { margin: 0 auto; }          /* 唯一子元素 */
td:empty { background: #ffd8d8; }          /* 空单元格 */
```

#### 逻辑伪类
```css
/* 否定选择器 */
:not(.hidden) { display: block; }

/* 匹配任意选择器 */
:is(header, footer, aside) a { color: #333; }

/* 上下文匹配 */
.card:has(img) { border: 1px solid #ccc; } /* 包含图片的卡片 */
```

### 五、伪元素选择器
```css
/* 首行首字母 */
p::first-line { font-weight: bold; }
h2::first-letter { font-size: 2em; }

/* 内容前后插入 */
.tooltip::before {
  content: "⚠️";
  margin-right: 5px;
}

/* 选中文本样式 */
::selection {
  background: #b3d4fc;
  color: #000;
}

/* 输入框占位符 */
input::placeholder {
  color: #999;
  font-style: italic;
}
```

### 六、优先级计算规则
#### 权重等级
| 选择器类型                | 示例            | 权重值   |
|---------------------------|-----------------|----------|
| 内联样式                  | `style="..."`   | 1-0-0-0  |
| ID 选择器                 | `#main`         | 0-1-0-0  |
| 类/属性/伪类              | `.active`       | 0-0-1-0  |
| 元素/伪元素               | `div::after`    | 0-0-0-1  |

#### 计算示例
```css
/* 权重：0-1-1-1 */
#nav ul li.active { ... }  

/* 权重：0-0-3-0 */
.btn.primary.large { ... } 

/* 权重：0-0-0-2 */
body div { ... }
```

#### 重要规则
```css
/* 覆盖所有规则（慎用） */
.error { color: red !important; }
```

### 七、现代选择器（CSS3+）
```css
/* 范围选择器 */
input[type="number"]:in-range { border-color: green; }
input[type="number"]:out-of-range { border-color: red; }

/* 聚焦可见 */
:focus-visible { outline: 2px solid blue; }

/* 空值状态 */
input:placeholder-shown { border-color: #ccc; }

/* 方向伪类 */
:dir(rtl) { text-align: right; }
```

### 八、最佳实践
1. **避免过度使用 ID**：不利于复用和维护
2. **优先使用类选择器**：提高代码复用性
3. **控制选择器深度**：推荐不超过 3 级（如 `.nav > .list > .item`）
4. **利用浏览器检查器**：通过 DevTools 测试选择器匹配
5. **关注性能**：避免 `*` 和复杂属性选择器
6. **使用命名约定**：推荐 BEM 等规范
7. **渐进增强**：现代选择器需考虑兼容性

### 九、浏览器支持速查
| 选择器            | Chrome | Firefox | Safari | Edge  |
|--------------------|--------|---------|--------|-------|
| `:has()`          | 105+   | 121+    | 15.4+  | 105+  |
| `:focus-visible`  | 86+     | 85+     | 15.4+  | 86+   |
| `:is()`           | 88+     | 78+     | 14+    | 88+   |
| `:where()`        | 88+     | 78+     | 14+    | 88+   |

> 推荐使用 [Autoprefixer](https://autoprefixer.github.io/) 处理兼容性问题