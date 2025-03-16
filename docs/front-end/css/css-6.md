# CSS 字体

## 字体属性总览
| 属性                  | 说明                          | 默认值          |
|-----------------------|-------------------------------|-----------------|
| `font-family`         | 字体族                        | 系统默认字体     |
| `font-size`           | 字号大小                      | `medium`        |
| `font-weight`         | 字重粗细                      | `normal`        |
| `font-style`          | 字体样式                      | `normal`        |
| `font-variant`        | 字体变体                      | `normal`        |
| `font-stretch`        | 字体拉伸                      | `normal`        |
| `line-height`         | 行高                          | `normal`        |
| `font`                | 简写属性                      | 各属性默认值     |
| `@font-face`          | 自定义字体定义规则            | -               |

---

## 核心属性详解

### 1. 字体族 (font-family)
```css
body {
  /* 优先使用系统字体，最后指定通用族 */
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  
  /* 包含特殊字符的字体名需引号包裹 */
  font-family: "Microsoft YaHei", "苹方-简", sans-serif;
}
```
**通用字体族**：
- `serif`（衬线体）  
- `sans-serif`（无衬线体）  
- `monospace`（等宽字体）  
- `cursive`（手写体）  
- `fantasy`（装饰体）

### 2. 字号控制 (font-size)
```css
h1 {
  font-size: 2rem;         /* 相对根元素 */
  font-size: 1.5em;        /* 相对父元素 */
  font-size: 24px;         /* 固定像素 */
  font-size: 150%;         /* 百分比 */
  font-size: clamp(1rem, 2.5vw, 2rem); /* 响应式范围 */
}
```

### 3. 字重与样式 (font-weight/font-style)
```css
.title {
  font-weight: 700;        /* 400=normal, 700=bold */
  font-style: italic;      /* normal | italic | oblique */
}
```

### 4. 高级字体特性 (font-variant)
```css
.special {
  font-variant: small-caps;       /* 小型大写字母 */
  font-variant-numeric: ordinal;  /* 序数字符 */
  font-feature-settings: "liga";  /* 启用连字 */
}
```

---

## 自定义字体技术

### 1. @font-face 规则
```css
@font-face {
  font-family: "CustomFont";
  src: 
    url("fonts/custom.woff2") format("woff2"),
    url("fonts/custom.woff") format("woff");
  font-weight: 100 900;           /* 可变字体范围 */
  font-style: normal;
  font-display: swap;             /* 避免布局偏移 */
}
```

### 2. 可变字体 (Variable Fonts)
```css
:root {
  font-family: "InterVariable", sans-serif;
  font-optical-sizing: auto;
}

h1 {
  font-variation-settings: 
    "wght" 850,
    "slnt" -10;
}
```

---

## 实用案例集合

### 案例1：响应式字号系统
```css
:root {
  font-size: calc(14px + 0.3vw); /* 基础字号随视口变化 */
}

h1 {
  font-size: 2.5rem; /* 相对根元素动态调整 */
}
```

### 案例2：字体图标实现
```css
.icon::before {
  font-family: "IconFont";
  content: "\e001"; /* Unicode 码点 */
  speak: never;      /* 辅助功能优化 */
}

/* 通过 @font-face 加载图标字体 */
@font-face {
  font-family: "IconFont";
  src: url("icons.woff2") format("woff2");
}
```

### 案例3：多语言字体适配
```css
:lang(zh-CN) {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

:lang(ja) {
  font-family: "Hiragino Sans", "Yu Gothic", sans-serif;
}
```

---

## 性能优化策略

### 1. 字体加载优化
```html
<!-- 预加载关键字体 -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- 异步加载非关键字体 -->
<link rel="stylesheet" href="font.css" media="print" onload="this.media='all'">
```

### 2. 字体文件精简
- 使用 [FontTools](https://github.com/fonttools/fonttools) 子集化字体  
- 优先使用 WOFF2 格式（比 WOFF 小 30%）

### 3. 系统字体栈方案
```css
.system-font {
  font-family: 
    system-ui,               /* 系统默认 UI 字体 */
    -apple-system,           /* Safari/iOS */
    "Segoe UI",              /* Windows */
    Roboto,                  /* Android/Chrome OS */
    "Helvetica Neue", Arial, /* 备用 */
    sans-serif;
}
```

---

## 浏览器兼容方案

### 1. 渐进增强写法
```css
.variable-font {
  font-family: "StaticFont";
  font-weight: 700;
  
  @supports (font-variation-settings: "wght" 700) {
    font-family: "VariableFont";
    font-variation-settings: "wght" 700;
    font-weight: unset;
  }
}
```

### 2. 旧版浏览器回退
```css
@font-face {
  font-family: "ModernFont";
  src: url("modern.woff2") format("woff2");
  src: url("legacy.ttf") format("truetype"); /* IE9+ */
}
```

---

## 常见错误排查

### 错误1：字体文件路径错误
```css
/* 错误：相对路径不正确 */
@font-face {
  src: url("/wrong-path/font.woff2"); /* 实际路径为 "fonts/font.woff2" */
}
```

### 错误2：未定义字体粗细
```css
/* 错误：@font-face 未定义 700 字重 */
@font-face {
  font-family: "CustomFont";
  src: url("font.woff2");
  font-weight: 400; /* 缺少 700 定义 */
}
.bold-text {
  font-family: "CustomFont";
  font-weight: 700; /* 实际回退到浏览器默认 */
}
```

### 错误3：FOUT/FOIT 问题
**现象**：字体加载时的闪烁  
**解决方案**：
```css
@font-face {
  font-display: swap; /* 显示回退字体直至加载完成 */
}
```

---

## 字体设计最佳实践
1. **行高准则**：正文行高建议 1.5-1.6 倍字号
2. **对比度标准**：文本与背景对比度至少 4.5:1（WCAG AA）
3. **移动端优化**：最小字号不小于 16px 防止自动缩放
4. **禁用伪粗体**：确保所有字重都有对应的字体文件
5. **版权合规**：商业项目使用需确认字体授权