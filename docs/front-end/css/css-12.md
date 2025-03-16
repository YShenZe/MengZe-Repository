# CSS outline 属性

## 核心属性总览
| 属性                  | 作用                          | 默认值          |
|-----------------------|-------------------------------|-----------------|
| `outline-style`       | 轮廓线样式                    | `none`         |
| `outline-width`       | 轮廓线宽度                    | `medium`       |
| `outline-color`       | 轮廓线颜色                    | `invert`       |
| `outline-offset`      | 轮廓与边框的间距              | `0`            |
| `outline`             | 简写属性（style/width/color）| 各属性默认值    |

---

## 基础特性解析

### 1. 与 border 的差异
| 特性                | outline                     | border                      |
|---------------------|-----------------------------|-----------------------------|
| **布局影响**        | 不占空间，不影响盒模型       | 影响盒模型尺寸               |
| **绘制位置**        | 绘制在 border 外侧           | 在 padding 与 margin 之间    |
| **圆角支持**        | 不支持 border-radius         | 支持                        |
| **多边控制**        | 只能统一设置                 | 可单独设置各边               |
| **默认显示**        | 浏览器焦点状态默认显示        | 需要显式设置                |

### 2. 基本语法
```css
/* 完整写法 */
.element {
  outline-style: dashed;
  outline-width: 2px;
  outline-color: #f00;
  outline-offset: 4px;
}

/* 简写形式（不包含offset） */
.element {
  outline: dashed 2px #f00;
}

/* 单独设置offset */
.element {
  outline-offset: -3px; /* 允许负值 */
}
```

---

## 样式类型与效果

### 1. 样式类型演示
```css
.solid { outline-style: solid; }     /* 实线 */
.dotted { outline-style: dotted; }   /* 点线 */
.dashed { outline-style: dashed; }   /* 虚线 */
.double { outline-style: double; }   /* 双线（需足够宽度） */
.groove { outline-style: groove; }   /* 3D凹槽 */
.ridge { outline-style: ridge; }     /* 3D凸起 */
.inset { outline-style: inset; }     /* 内嵌效果 */
.outset { outline-style: outset; }   /* 外凸效果 */
```

### 2. 特殊颜色值
```css
.invert-outline {
  outline-color: invert; /* 颜色反转（兼容性有限） */
}

.dark-mode-outline {
  outline-color: CanvasText; /* 使用系统文本颜色 */
}
```

---

## 核心应用场景

### 1. 焦点状态指示
```css
/* 基础焦点样式 */
a:focus, 
button:focus, 
input:focus {
  outline: 2px solid #09c;
  outline-offset: 3px;
}

/* 现代焦点可见策略 */
:focus:not(:focus-visible) {
  outline: none; /* 隐藏鼠标点击的焦点环 */
}

:focus-visible {
  outline: 2px dashed #4a90e2;
}
```

### 2. 调试布局
```css
/* 快速可视化元素边界 */
.debug * {
  outline: 1px solid rgba(255,0,0,0.2);
}
```

### 3. 自定义选择框
```css
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  outline: 2px solid #666;
}

input[type="checkbox"]:checked {
  outline-color: #09c;
}
```

---

## 高级技巧与效果

### 1. 双层边框效果
```css
.double-border {
  border: 2px solid #09c;
  outline: 4px solid rgba(9, 102, 204, 0.2);
  outline-offset: -6px;
}
```

### 2. 图像轮廓
```css
.image-outline {
  outline: 20px solid transparent;
  outline-offset: -20px;
  background: 
    linear-gradient(white, white) padding-box,
    url('border.png') border-box;
}
```

### 3. 动态轮廓动画
```css
.animated-outline {
  transition: outline-color 0.3s, outline-offset 0.3s;
}

.animated-outline:hover {
  outline-color: #ff4757;
  outline-offset: 2px;
}
```

---

## 可访问性最佳实践

### 1. 保留焦点可见性
```css
/* 错误做法：完全移除焦点轮廓 */
button:focus { outline: none; } 

/* 正确做法：提供替代视觉反馈 */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(9, 102, 204, 0.5);
}
```

### 2. 高对比度模式
```css
@media (forced-colors: active) {
  :focus {
    outline-color: Highlight;
  }
}
```

### 3. 增强键盘导航
```css
[tabindex]:focus {
  outline: 3px solid #ffd700;
}
```

---

## 常见问题解决方案

### 问题1：轮廓与布局冲突
```css
/* 使用 offset 避免覆盖内容 */
.input-field:focus {
  outline: 2px solid #09c;
  outline-offset: 4px;
}
```

### 问题2：圆角元素轮廓直角
```css
/* 使用伪元素模拟圆角轮廓 */
.rounded-outline {
  position: relative;
  border-radius: 10px;
}

.rounded-outline:focus::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid #09c;
  border-radius: 14px;
}
```

### 问题3：轮廓闪烁问题
```css
/* 禁用过渡初始状态 */
button {
  outline: 2px solid transparent;
  transition: outline-color 0.3s;
}

button:focus {
  outline-color: #09c;
}
```

---

## 性能优化建议

### 1. 避免复杂轮廓动画
```css
/* 不推荐：全属性动画 */
.outline-animation {
  transition: outline 0.3s; /* 影响性能 */
}

/* 推荐：指定动画属性 */
.outline-animation {
  transition: outline-color 0.3s, outline-offset 0.3s;
}
```

### 2. 硬件加速优化
```css
.gpu-outline {
  transform: translateZ(0); /* 启用GPU加速 */
}
```

### 3. 替代渲染方案
```css
/* 使用 box-shadow 替代复杂轮廓 */
.shadow-outline {
  box-shadow: 0 0 0 3px #09c;
}
```

---

## 现代 CSS 新特性

### 1. 逻辑属性支持
```css
.rtl-outline {
  outline-inline-start: 2px solid red; /* 适配书写方向 */
}
```

### 2. 轮廓裁剪
```css
.clipped-outline {
  outline: 3px solid #09c;
  clip-path: inset(0 round 10px); /* 裁剪圆角 */
}
```

### 3. 动态主题色
```css
:root {
  --focus-color: #09c;
}

:focus {
  outline: 2px solid var(--focus-color);
}
```

---

## 浏览器兼容性方案

### 1. 前缀处理
```css
.outline-fallback {
  -webkit-outline: 2px solid #09c; /* 旧版WebKit */
  outline: 2px solid #09c;
}
```

### 2. 特性检测
```css
@supports not (outline-offset: 2px) {
  .fallback-box {
    margin: 2px; /* 旧浏览器替代方案 */
  }
}
```

---

## 最佳实践总结

1. **始终为焦点状态提供可见反馈**  
2. **优先使用 outline 而非 border 进行焦点指示**  
3. **结合 outline-offset 提升视觉层次**  
4. **在暗黑模式中测试轮廓可见性**  
5. **避免完全移除 outline 破坏可访问性**  
6. **使用现代选择器 :focus-visible 优化交互**  