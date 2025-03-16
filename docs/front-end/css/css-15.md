# CSS 尺寸控制

## 核心属性总览
| 属性                  | 作用                          | 默认值          |
|-----------------------|-------------------------------|-----------------|
| `width`               | 元素内容宽度                  | `auto`          |
| `height`              | 元素内容高度                  | `auto`          |
| `min-width`           | 最小内容宽度                  | `0`             |
| `max-width`           | 最大内容宽度                  | `none`          |
| `min-height`          | 最小内容高度                  | `0`             |
| `max-height`          | 最大内容高度                  | `none`          |
| `aspect-ratio`        | 宽高比（CSS3）               | `auto`          |
| `box-sizing`          | 尺寸计算模式                  | `content-box`   |

---

## 基础尺寸控制

### 1. 显式尺寸设置
```css
.box {
  width: 300px;       /* 固定像素 */
  height: 50vh;       /* 视口高度百分比 */
  min-width: 200px;   /* 最小宽度约束 */
  max-height: 400px;  /* 最大高度限制 */
}
```

### 2. 盒模型影响
```css
/* content-box（默认） */
.content-box {
  width: 300px;
  padding: 20px;    /* 总宽度：300 + 40 = 340px */
}

/* border-box */
.border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;    /* 内容宽度：300 - 40 = 260px */
}
```

### 3. 特殊值应用
```css
.auto-size {
  width: auto;      /* 浏览器自动计算 */
}

.full-width {
  width: 100vw;     /* 完整视口宽度 */
}

.intrinsic-size {
  width: fit-content; /* 根据内容自适应 */
}
```

---

## 单位系统详解

### 1. 绝对单位
| 单位   | 描述                  | 示例         |
|--------|-----------------------|--------------|
| `px`   | 物理像素              | `16px`       |
| `cm`   | 厘米                  | `2cm`        |
| `mm`   | 毫米                  | `10mm`       |
| `in`   | 英寸 (1in = 96px)     | `0.5in`      |

### 2. 相对单位
| 单位    | 基准对象               | 示例           |
|---------|------------------------|----------------|
| `%`     | 父元素对应维度         | `50%`          |
| `em`    | 当前元素字体大小       | `1.2em`        |
| `rem`   | 根元素字体大小         | `1.6rem`       |
| `vw`    | 视口宽度的1%           | `100vw`        |
| `vh`    | 视口高度的1%           | `50vh`         |
| `ch`    | "0"字符的宽度          | `20ch`         |
| `lvh`   | 动态视口高度（移动端） | `100lvh`       |

### 3. 现代计算函数
```css
.responsive-box {
  width: clamp(300px, 50%, 800px); /* 最小值 | 理想值 | 最大值 */
  height: min(50vh, 400px);       /* 取较小值 */
  padding: max(2rem, 10px);       /* 取较大值 */
}
```

---

## 高级尺寸控制技术

### 1. 宽高比控制
```css
.video-wrapper {
  aspect-ratio: 16/9;      /* 宽高比锁定 */
  background: #000;
}

/* 后备方案 */
.aspect-fallback {
  position: relative;
  padding-top: 56.25%;     /* 16:9 = 9/16 = 0.5625 */
}

.aspect-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### 2. 逻辑尺寸属性
```css
.rtl-box {
  inline-size: 300px;   /* 书写方向的宽度 */
  block-size: 200px;    /* 书写方向的高度 */
}

.vertical-text {
  writing-mode: vertical-rl;
  inline-size: 5em;     /* 垂直方向宽度 */
}
```

### 3. 容器查询适配
```css
@container (width > 600px) {
  .card {
    inline-size: 50%;
  }
}
```

---

## 响应式策略

### 1. 移动优先媒体查询
```css
.component {
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
  
  @media (min-width: 1200px) {
    width: 33.33%;
  }
}
```

### 2. 视口单位适配
```css
.fullscreen-section {
  height: 100dvh; /* 动态视口高度 */
  width: min(100%, 1400px);
}
```

### 3. 网格系统集成
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

---

## 实战应用案例

### 案例1：响应式图片容器
```css
.image-container {
  position: relative;
  aspect-ratio: 3/2;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 案例2：等高卡片布局
```css
.card-group {
  display: flex;
}

.card {
  width: 300px;
  min-height: 100%; /* 基于父级高度 */
}
```

### 案例3：全屏模态框
```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
}
```

---

## 最佳实践与规范

### 1. 全局盒模型设置
```css
*, *::before, *::after {
  box-sizing: border-box; /* 统一尺寸计算方式 */
}
```

### 2. 安全尺寸限制
```css
.text-column {
  max-width: 65ch;    /* 最佳可读性宽度 */
  min-height: 100vh;
}
```

### 3. 性能优化建议
- 避免频繁修改尺寸属性（使用 `transform` 替代动画）
- 优先使用 `will-change` 提示浏览器优化
- 对动态内容使用 `content-visibility: auto`

---

## 浏览器兼容性

| 特性              | Chrome | Firefox | Safari | Edge  |
|-------------------|--------|---------|--------|-------|
| `aspect-ratio`    | 88+     | 89+     | 15.4+  | 88+   |
| `clamp()`         | 79+     | 75+     | 13.1+  | 79+   |
| 容器查询          | 105+    | 110+    | 16.0+  | 105+  |
| 逻辑属性          | 87+     | 66+     | 14.1+  | 87+   |

---

## 常见问题解决方案

### 问题1：高度塌陷
```css
.parent {
  display: flow-root; /* 创建BFC */
}

/* 或使用伪元素清除浮动 */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

### 问题2：移动端视口跳动
```css
/* 使用动态视口单位 */
.header {
  height: 100dvh;
}
```

### 问题3：图片尺寸失真
```css
.responsive-img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
```

---

## 现代CSS新特性

### 1. 容器尺寸查询
```css
@container (inline-size > 600px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}
```

### 2. 动态视口单位
| 单位   | 描述                          |
|--------|-------------------------------|
| `dvh`  | 动态视口高度（考虑浏览器UI）  |
| `svh`  | 小视口高度（移动端折叠状态）  |
| `lvh`  | 大视口高度（桌面模式）        |

### 3. 尺寸范围限制
```css
.fluid-text {
  font-size: clamp(1rem, 2vw + 1rem, 1.5rem);
}
```