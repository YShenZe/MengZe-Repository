# CSS 文本样式全解

## 文本属性总览
| 属性                  | 说明                          | 默认值          |
|-----------------------|-------------------------------|-----------------|
| `color`               | 文字颜色                      | 取决于浏览器    |
| `font-family`         | 字体族                        | 浏览器默认字体  |
| `font-size`           | 字号                          | `medium`        |
| `font-weight`         | 字重                          | `normal`        |
| `font-style`          | 字体样式                      | `normal`        |
| `text-align`          | 水平对齐                      | `start`         |
| `line-height`         | 行高                          | `normal`        |
| `letter-spacing`      | 字符间距                      | `normal`        |
| `word-spacing`        | 单词间距                      | `normal`        |
| `text-decoration`     | 文本装饰线                    | `none`          |
| `text-transform`      | 文本大小写转换                | `none`          |
| `text-indent`         | 首行缩进                      | `0`             |
| `text-shadow`         | 文字阴影                      | `none`          |
| `white-space`         | 空白处理方式                  | `normal`        |
| `overflow-wrap`       | 长单词换行处理                | `normal`        |
| `writing-mode`        | 文字书写方向                  | `horizontal-tb` |

---

## 核心属性详解

### 1. 字体控制
```css
p {
  font-family: "Helvetica Neue", Arial, sans-serif; /* 字体回退机制 */
  font-size: 1.2rem;    /* 响应式单位 */
  font-weight: 600;     /* 数值范围 100-900 */
  font-style: italic;   /* normal | italic | oblique */
}
```

### 2. 文字颜色与透明度
```css
.title {
  color: #333;                    /* 十六进制 */
  color: rgba(255, 0, 0, 0.8);    /* 带透明度的红色 */
  color: hsl(210, 100%, 50%);     /* 色相-饱和度-亮度 */
}
```

### 3. 文本对齐与方向
```css
/* 水平对齐 */
.text-center { text-align: center; }  /* left | right | justify */

/* 垂直对齐（需配合行高） */
.vertical-center {
  height: 100px;
  line-height: 100px;
}

/* 多语言支持 */
.arabic-text {
  direction: rtl;         /* 从右向左排版 */
  unicode-bidi: bidi-override;
}
```

### 4. 行高与间距
```css
.article {
  line-height: 1.6;       /* 无单位值：相对于当前字体尺寸 */
  letter-spacing: 0.1em;  /* 字符间距 */
  word-spacing: 0.2em;    /* 单词间距 */
}
```

### 5. 文本装饰与转换
```css
.link {
  text-decoration: underline wavy #f00; /* 波浪下划线 */
}

.uppercase {
  text-transform: uppercase; /* lowercase | capitalize */
}

.custom-underline {
  text-decoration-line: underline;
  text-decoration-color: #09c;
  text-decoration-thickness: 2px;       /* 下划线粗细 */
  text-underline-offset: 0.2em;         /* 下划线偏移 */
}
```

---

## 高级文本技巧

### 1. 文字阴影与特效
```css
.neon-text {
  text-shadow: 
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 30px #0ff;
}

.letterpress {
  color: #666;
  text-shadow: 
    1px 1px 1px #fff, 
    -1px -1px 1px #000;
}
```

### 2. 空白与换行处理
```css
pre {
  white-space: pre-wrap;   /* 保留空格换行，允许自动换行 */
}

.long-word {
  overflow-wrap: break-word;  /* 允许在单词内换行 */
  hyphens: auto;              /* 自动添加连字符（需lang属性） */
}
```

### 3. 垂直排版（中文场景）
```css
.vertical-text {
  writing-mode: vertical-rl;  /* 从右到左垂直排版 */
  text-orientation: upright;  /* 保持字符直立 */
}
```

---

## 实用案例集合

### 案例1：首字下沉
```css
.drop-cap::first-letter {
  float: left;
  font-size: 3em;
  line-height: 0.8;
  margin-right: 0.1em;
}
```

### 案例2：自定义列表符号
```css
ul.custom-markers {
  list-style: none;
  padding-left: 1.5em;
}

ul.custom-markers li::before {
  content: "◆";
  color: #09c;
  margin-right: 0.5em;
}
```

### 案例3：文字渐变色
```css
.gradient-text {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

---

## 性能优化建议
1. **字体优化**：
   - 使用 `font-display: swap` 避免布局偏移
   - 通过 `@font-face` 的 `unicode-range` 拆分字体文件
   ```css
   @font-face {
     font-family: 'CustomFont';
     src: url('font.woff2') format('woff2');
     font-display: swap;
     unicode-range: U+000-5FF; /* 仅加载拉丁字符 */
   }
   ```

2. **系统字体栈**：
   ```css
   body {
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
   }
   ```

3. **避免过多文字阴影**：复杂阴影影响渲染性能

---

## 浏览器兼容方案

### 1. 渐进增强写法
```css
.text-stroke {
  color: #000; /* 回退色 */
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
}
```

### 2. 特性检测
```css
@supports (text-decoration-thickness: 2px) {
  .modern-underline {
    text-decoration-thickness: 2px;
  }
}
```

---

## 常见错误排查
### 错误1：字体回退失效
```css
/* 错误：未用引号包裹带空格的字体名 */
.wrong-font {
  font-family: Times New Roman; /* 应改为 "Times New Roman" */
}
```

### 错误2：行高计算问题
```css
/* 错误：带单位的行高导致意外结果 */
.parent {
  font-size: 20px;
  line-height: 20px; /* 应使用无单位值 line-height: 1.5 */
}
```

### 错误3：文本溢出处理缺失
```css
/* 未处理长文本溢出 */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 必须三件套 */
}
```