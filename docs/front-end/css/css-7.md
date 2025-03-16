# CSS 链接样式

## 链接状态与伪类
| 伪类          | 触发条件                 | 典型应用场景            |
|---------------|--------------------------|-------------------------|
| `:link`       | 未访问的链接             | 基础样式定义            |
| `:visited`    | 已访问的链接             | 历史记录可视化          |
| `:hover`      | 鼠标悬停                 | 交互反馈                |
| `:active`     | 点击瞬间（激活状态）      | 操作确认反馈            |
| `:focus`      | 键盘聚焦                 | 无障碍访问优化          |

---

## 基础样式控制

### 1. 重置默认样式
```css
a {
  text-decoration: none;  /* 去除下划线 */
  color: inherit;         /* 继承父级颜色 */
  cursor: pointer;        /* 确保手型光标 */
}
```

### 2. 多状态样式定义
```css
/* 默认状态 */
a:link {
  color: #007bff;
  border-bottom: 1px solid transparent;
}

/* 访问过的链接 */
a:visited {
  color: #6610f2;  /* 建议与未访问色保持相似 */
}

/* 悬停效果 */
a:hover {
  color: #0056b3;
  border-bottom-color: currentColor;
}

/* 激活状态 */
a:active {
  transform: translateY(1px);
}

/* 键盘聚焦 */
a:focus {
  outline: 2px solid #ffd700;
  outline-offset: 2px;
}
```

---

## 高级样式技巧

### 1. 下划线动画
```css
.animated-link {
  position: relative;
  padding-bottom: 2px;
}

.animated-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.animated-link:hover::after {
  width: 100%;
}
```

### 2. 图标集成
```css
.external-link::after {
  content: url('external.svg');
  margin-left: 0.5em;
  vertical-align: middle;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.external-link:hover::after {
  opacity: 1;
}
```

### 3. 按钮式链接
```css
.btn-link {
  display: inline-block;
  padding: 0.8em 1.5em;
  border-radius: 4px;
  background: linear-gradient(135deg, #6c5ce7, #a66efa);
  color: white !important; /* 强制覆盖其他状态颜色 */
  transition: filter 0.2s;
}

.btn-link:hover {
  filter: brightness(1.1);
}

.btn-link:active {
  filter: brightness(0.9);
}
```

---

## 特殊链接类型处理

### 1. 锚点链接
```css
/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 目标高亮 */
:target {
  animation: highlight 1.5s ease;
}

@keyframes highlight {
  from { background: #fffa90; }
  to { background: transparent; }
}
```

### 2. 电话/邮件链接
```css
a[href^="tel:"],
a[href^="mailto:"] {
  font-family: monospace;
  word-break: break-all;
}
```

### 3. 外部链接自动识别
```css
a[href^="http"]:not([href*="yourdomain.com"])::after {
  content: "↗";
  margin-left: 0.3em;
  font-size: 0.8em;
}
```

---

## 可访问性最佳实践

### 1. 焦点状态优化
```css
a:focus:not(:focus-visible) {
  outline: none; /* 隐藏鼠标点击产生的焦点环 */
}

a:focus-visible {
  outline: 2px dashed #4a90e2;
}
```

### 2. 增强对比度
```css
a {
  color: #0056b3; /* 与背景对比度至少 4.5:1 */
}

a:visited {
  color: #4b2e83; /* 保持可识别性 */
}
```

### 3. ARIA 属性支持
```html
<a href="#main-content" aria-label="跳过导航">跳过导航</a>
```

---

## 性能优化方案

### 1. 预加载关键链接资源
```html
<link rel="preload" href="critical.css" as="style">
<link rel="prefetch" href="next-page.html" as="document">
```

### 2. 延迟加载非关键图标
```css
.external-icon {
  background: url('external.svg') no-repeat right center;
  background-size: 12px 12px;
  padding-right: 18px;
}

@media (hover: hover) {
  .external-icon {
    background-image: none;
  }
  .external-icon:hover {
    background-image: url('external.svg');
  }
}
```

---

## 常见问题排查

### 问题1：已访问状态不生效
**原因**：浏览器隐私限制（同源策略）  
**解决方案**：保持`:visited`样式简单，避免获取隐私信息

### 问题2：点击时闪动
**原因**：缺少`:active`状态样式  
**修复方案**：
```css
a:active {
  transform: scale(0.98);
  opacity: 0.8;
}
```

### 问题3：移动端悬停残留
**原因**：触摸设备触发`:hover`状态后不会自动取消  
**解决方案**：
```css
@media (hover: none) {
  a:hover {
    border-bottom-color: transparent;
  }
}
```

---

## 现代 CSS 特性应用

### 1. 使用 CSS 变量
```css
:root {
  --link-color: #2563eb;
  --link-hover: #1d4ed8;
}

a {
  color: var(--link-color);
  transition: color 0.2s;
}

a:hover {
  color: var(--link-hover);
}
```

### 2. 响应式链接系统
```css
/* 移动端：增大点击区域 */
@media (max-width: 768px) {
  a {
    padding: 0.5em;
    margin: -0.5em;
  }
}
```

### 3. 暗黑模式适配
```css
@media (prefers-color-scheme: dark) {
  a:link {
    color: #7dd3fc;
  }
  a:visited {
    color: #c084fc;
  }
}
```