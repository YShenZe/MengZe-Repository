# CSS 列表样式

## 核心属性总览
| 属性                  | 作用                          | 可选值示例                |
|-----------------------|-------------------------------|--------------------------|
| `list-style-type`     | 定义列表项标记类型            | `disc`, `decimal`, `none`|
| `list-style-image`    | 使用图像作为列表标记          | `url('icon.png')`        |
| `list-style-position` | 控制标记位置                  | `inside`, `outside`      |
| `list-style`          | 简写属性（类型/图片/位置）    | `square inside`          |
| `counter-reset`       | 重置计数器                    | `section 0`              |
| `counter-increment`   | 递增计数器                    | `section`                |
| `@counter-style`      | 自定义计数器样式（CSS3）      | `symbols: '*'`           |

---

## 基础样式控制

### 1. 基础列表重置
```css
/* 移除默认样式 */
ul, ol {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

/* 自定义标记位置 */
li {
  padding-left: 1.5em;
  position: relative;
}
```

### 2. 列表标记类型
```css
/* 无序列表 */
ul.square { list-style-type: square; }
ul.custom { list-style-type: "▶ "; }

/* 有序列表 */
ol.roman { list-style-type: upper-roman; }
ol.alpha { list-style-type: lower-alpha; }

/* 定义列表 */
dt { font-weight: bold; }
dd { margin-left: 2em; }
```

### 3. 图像标记
```css
ul.icons {
  list-style-image: url('bullet.png');
  /* 备用方案 */
  list-style-type: square;
}
```

---

## 进阶样式技巧

### 1. 伪元素自定义标记
```css
ul.custom-markers li::before {
  content: "•";
  color: #4CAF50;
  position: absolute;
  left: 0;
  width: 1em;
  text-align: center;
}
```

### 2. CSS 计数器系统
```css
/* 多级嵌套列表计数 */
ol {
  counter-reset: section;
}

li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
}
```

### 3. 自定义计数器样式
```css
@counter-style stars {
  system: cyclic;
  symbols: "★";
  suffix: " ";
}

ul.star-list {
  list-style: stars;
}
```

---

## 布局与响应式

### 1. 水平导航菜单
```css
.nav-list {
  display: flex;
  gap: 2rem;
}

.nav-list li {
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  border-radius: 4px;
}
```

### 2. 响应式列表布局
```css
/* 移动端：垂直堆叠 */
@media (max-width: 768px) {
  .card-list {
    grid-template-columns: 1fr;
  }
}

/* 桌面端：网格布局 */
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

### 3. 分栏显示
```css
.multi-column {
  column-count: 3;
  column-gap: 2em;
  column-rule: 1px solid #ddd;
}
```

---

## 交互与动画

### 1. 悬停展开效果
```css
.accordion li {
  max-height: 40px;
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.accordion li:hover {
  max-height: 200px;
}
```

### 2. 加载动画列表
```css
.loading li {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 400%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 3. 拖拽排序反馈
```css
li.dragging {
  opacity: 0.5;
  transform: scale(0.98);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

---

## 实用案例集合

### 案例1：时间线布局
```css
.timeline {
  position: relative;
}

.timeline li {
  padding-left: 30px;
  margin-bottom: 2em;
}

.timeline li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border: 3px solid #2196F3;
  border-radius: 50%;
  background: white;
}

.timeline::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ddd;
  z-index: -1;
}
```

### 案例2：自定义复选框
```css
.checklist {
  list-style: none;
}

.checklist li {
  position: relative;
  padding-left: 2em;
}

.checklist input {
  position: absolute;
  opacity: 0;
}

.checklist label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.2em;
  width: 1em;
  height: 1em;
  border: 2px solid #666;
  border-radius: 3px;
}

.checklist input:checked + label::after {
  content: "✓";
  position: absolute;
  left: 0.15em;
  top: 0;
  color: #4CAF50;
}
```

### 案例3：步骤指示器
```css
.steps {
  display: flex;
  counter-reset: step;
}

.steps li {
  flex: 1;
  text-align: center;
  position: relative;
}

.steps li::before {
  counter-increment: step;
  content: counter(step);
  display: block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  margin: 0 auto 1em;
  border-radius: 50%;
  background: #ddd;
  color: white;
}

.steps li.active::before {
  background: #2196F3;
}
```

---

## 最佳实践与注意事项

### 可访问性优化
```html
<!-- 定义列表语义化标记 -->
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
</dl>

<!-- ARIA 角色增强 -->
<ul role="list">
  <li role="listitem">项目1</li>
</ul>
```

### 性能优化
- 使用 `will-change` 属性优化动画列表
- 避免在长列表中使用复杂选择器
- 虚拟滚动技术处理超长列表

### 浏览器兼容性
| 特性              | Chrome | Firefox | Safari | Edge  |
|-------------------|--------|---------|--------|-------|
| `@counter-style`  | 91+     | 70+     | 17+    | 91+   |
| CSS Grid 列表布局 | 57+     | 52+     | 10.1+  | 16+   |
| 多列布局          | 50+     | 52+     | 9+      | 12+   |

---

## 常见问题排查

### 问题1：自定义标记对齐偏移
**解决方案**：
```css
li::before {
  position: absolute;
  left: -1.5em;
  width: 1.5em;
  text-align: center;
}
```

### 问题2：列表间距不一致
**原因**：默认 `margin/padding` 差异  
**修复方案**：
```css
ul, ol {
  margin: 1em 0;
  padding-left: 2.5em;
}
```

### 问题3：计数器重置异常
**正确用法**：
```css
ol {
  counter-reset: section;
  /* 每个 ol 独立计数器 */
}
```