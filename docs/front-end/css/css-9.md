# CSS 表格样式

## 核心属性总览
| 属性                  | 作用                          | 可选值示例                |
|-----------------------|-------------------------------|--------------------------|
| `border-collapse`     | 控制表格边框合并              | `collapse`, `separate`  |
| `border-spacing`      | 单元格间距（需separate模式）  | `5px 10px`              |
| `caption-side`        | 表格标题位置                  | `top`, `bottom`         |
| `empty-cells`         | 空单元格显示方式              | `show`, `hide`          |
| `table-layout`        | 表格宽度计算方式              | `auto`, `fixed`         |

---

## 基础样式控制

### 1. 表格重置与基础美化
```css
table {
  width: 100%;
  border-collapse: collapse;  /* 合并边框 */
  margin: 1em 0;
  font-family: system-ui;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-weight: 600;
}

caption {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 1em;
  caption-side: bottom;
}
```

### 2. 斑马纹表格
```css
tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}
```

### 3. 表格边框样式
```css
table.bordered {
  border: 1px solid #dee2e6;
}

.bordered th, 
.bordered td {
  border: 1px solid #dee2e6;
}
```

---

## 高级样式技巧

### 1. 固定表头与滚动区域
```css
.scroll-table {
  max-height: 400px;
  overflow: auto;
  display: block;
}

.scroll-table thead {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 2px -1px rgba(0,0,0,0.1);
}
```

### 2. 响应式表格
```css
@media (max-width: 768px) {
  .responsive-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

/* 或使用行折叠方案 */
@media (max-width: 480px) {
  .collapse-table td {
    display: block;
    text-align: right;
  }
  .collapse-table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }
}
```

### 3. 单元格状态指示
```css
td.status-positive {
  background: #e6f4ea;
  color: #137333;
  position: relative;
}

td.status-positive::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #34a853;
}
```

---

## 布局与交互

### 1. 复合表头（跨列/行）
```html
<table>
  <thead>
    <tr>
      <th colspan="2">个人信息</th>
      <th rowspan="2">成绩</th>
    </tr>
    <tr>
      <th>姓名</th>
      <th>学号</th>
    </tr>
  </thead>
</table>
```

### 2. 可排序表格
```css
.sortable th {
  cursor: pointer;
  position: relative;
}

.sortable th:hover {
  background: #f1f3f4;
}

.sortable th::after {
  content: "↕";
  margin-left: 8px;
  opacity: 0.3;
}

.sortable th[aria-sort="ascending"]::after {
  content: "↑";
  opacity: 1;
}

.sortable th[aria-sort="descending"]::after {
  content: "↓";
  opacity: 1;
}
```

### 3. 表格行动画
```css
tr {
  transition: background-color 0.3s ease;
}

tr:hover {
  background-color: #f8f9fa;
}

@keyframes highlight {
  from { background: #fff3cd; }
  to { background: transparent; }
}

tr.highlight {
  animation: highlight 1.5s;
}
```

---

## 实用案例集合

### 案例1：商品对比表
```css
.compare-table {
  table-layout: fixed;
}

.compare-table td {
  vertical-align: top;
}

.compare-table .feature {
  width: 200px;
  font-weight: bold;
  background: #f8f9fa;
}

.compare-table .rating {
  color: #ffb400;
  font-size: 1.2em;
}
```

### 案例2：时间表排班
```css
.timetable td {
  width: 14.28%; /* 7列等宽 */
  height: 60px;
  position: relative;
}

.timetable .booked {
  background: #f8d7da;
  border: 2px solid #dc3545;
}

.timetable .current-time {
  position: absolute;
  height: 2px;
  background: #dc3545;
  width: 100%;
  z-index: 2;
}
```

### 案例3：数据可视化表格
```css
.bar-cell {
  position: relative;
}

.bar-cell::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
  background: #4dabf7;
  width: var(--progress); /* 通过JS设置 */
  z-index: 1;
}

.bar-cell span {
  position: relative;
  z-index: 2;
}
```

---

## 最佳实践与注意事项

### 可访问性优化
```html
<table aria-describedby="table-desc">
  <caption id="table-desc">2023年销售数据</caption>
  <!-- 使用 scope 属性 -->
  <thead>
    <tr>
      <th scope="col">月份</th>
      <th scope="col">销售额</th>
    </tr>
  </thead>
</table>
```

### 性能优化
- 使用 `table-layout: fixed` 提升渲染性能
- 避免嵌套表格
- 虚拟滚动处理大数据表格

### 浏览器兼容性
| 特性                | Chrome | Firefox | Safari | Edge  |
|---------------------|--------|---------|--------|-------|
| 粘性表头            | 56+     | 59+     | 13.1+  | 16+   |
| CSS Grid 表格布局   | 57+     | 52+     | 10.1+  | 16+   |
| `backdrop-filter`   | 76+     | 103+    | 14+    | 17+   |

---

## 常见问题排查

### 问题1：边框显示不完整
**解决方案**：
```css
table {
  border-collapse: collapse; /* 必须设置 */
}
td {
  border: 1px solid #ddd; /* 所有边都需要定义 */
}
```

### 问题2：文本溢出处理
```css
td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px; /* 需要配合table-layout: fixed */
}
```

### 问题3：跨浏览器对齐差异
```css
th, td {
  vertical-align: middle; /* 统一垂直对齐方式 */
  padding: 12px 15px;      /* 使用具体像素值 */
}
```

---

## 现代 CSS 技术应用

### 1. CSS Grid 表格布局
```css
.grid-table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #ddd;
}

.grid-table > div {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.grid-table > div:nth-child(4n+1) {
  font-weight: bold;
  background: #f8f9fa;
}
```

### 2. 暗黑模式适配
```css
@media (prefers-color-scheme: dark) {
  table {
    border-color: #444;
  }
  th, td {
    border-color: #444;
    background: #222;
    color: #fff;
  }
}
```

### 3. 视差滚动效果
```css
.parallax-table tbody {
  transform: translateZ(0);
}
```