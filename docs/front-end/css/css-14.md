# CSS 分组与嵌套

## 一、选择器分组

### 1. 基础分组语法
```css
/* 共享相同样式的不同元素 */
h1, h2, .title, #main-heading {
  color: #2c3e50;
  font-family: 'Arial', sans-serif;
  margin-bottom: 1em;
}
```

### 2. 分组规则
- **相同优先级**：分组中的选择器各自保持原有优先级
- **可组合性**：支持任意类型选择器混合分组
- **维护性优化**：推荐每组不超过5个选择器

### 3. 实战案例：表单元素统一重置
```css
input, 
textarea, 
select, 
button {
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
}
```

---

## 二、CSS 原生嵌套（CSS Nesting）

### 1. 基础嵌套语法
```css
.card {
  padding: 20px;
  
  /* 嵌套子元素 */
  .title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  /* 嵌套伪类 */
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  /* 嵌套媒体查询 */
  @media (min-width: 768px) {
    padding: 30px;
  }
}
```

### 2. 嵌套规则
| 符号       | 作用                        | 示例                      |
|------------|----------------------------|---------------------------|
| `&`        | 父选择器引用                | `&.active` → `.card.active`|
| `>`        | 直接子元素                  | `> .icon`                 |
| `+`        | 相邻兄弟元素                | `+ .tooltip`              |
| `:`        | 伪类/伪元素                 | `&:first-child`           |
| `[]`       | 属性选择器                  | `[data-state="open"]`     |

### 3. 复杂嵌套示例
```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
      
      a {
        color: #333;
        text-decoration: none;

        &:hover {
          color: #09c;
          text-decoration: underline;
        }
      }

      &.current > a {
        font-weight: bold;
      }
    }
  }
}
```

---

## 三、嵌套与预处理器对比

### 1. Sass/Less 嵌套差异
| 特性              | 原生CSS嵌套             | Sass嵌套               |
|--------------------|------------------------|------------------------|
| 父选择器必需性     | 必须使用 `&`           | 自动推断               |
| 媒体查询嵌套       | 支持                   | 支持                   |
| 属性嵌套           | 不支持                 | 支持（如 `font: { size: 16px }`）|
| 兼容性             | 需现代浏览器           | 编译后全兼容           |

### 2. 编译前后对比
**原生嵌套：**
```css
/* 输入 */
.parent {
  .child { color: red; }
}

/* 输出 */
.parent .child { color: red; }
```

**Sass嵌套：**
```scss
/* 输入 */
.parent {
  &-modifier { color: blue; }
}

/* 输出 */
.parent-modifier { color: blue; }
```

---

## 四、分组嵌套实战案例

### 案例1：BEM 模式优化
```css
.menu {
  &__item {
    padding: 10px;

    &--active {
      background: #f0f8ff;
    }
  }

  &__link {
    color: #333;

    &:hover {
      color: #09c;
    }
  }
}
```

### 案例2：暗黑模式适配
```css
.card {
  background: white;
  color: #333;

  @media (prefers-color-scheme: dark) {
    & {
      background: #222;
      color: #fff;
    }

    .title {
      color: #4a90e2;
    }
  }
}
```

### 案例3：表单验证状态
```css
.input-group {
  input {
    border: 1px solid #ddd;

    &:invalid {
      border-color: #ff4757;
      
      + .error-message {
        display: block;
      }
    }
  }

  .error-message {
    display: none;
    color: #ff4757;
  }
}
```

---

## 五、最佳实践与规范

### 1. 嵌套深度控制
```css
/* 不推荐 - 超过3层嵌套 */
.nav {
  .list {
    .item {
      .link {
        /* ... */
      }
    }
  }
}

/* 推荐 - 保持最大3层 */
.nav-item {
  .link {
    /* ... */
    
    &:hover {
      /* ... */
    }
  }
}
```

### 2. 性能优化策略
- **避免过度限定选择器**：`.nav ul li a` → `.nav-link`
- **谨慎使用通配符**：`*` 会增加匹配开销
- **利用继承属性**：合理使用 `inherit` 值

### 3. 代码组织规范
```css
/* 结构顺序建议 */
.component {
  /* 1. 布局属性 */
  display: flex;
  position: relative;

  /* 2. 盒模型属性 */
  padding: 20px;
  margin: 10px;

  /* 3. 视觉属性 */
  background: #fff;
  border-radius: 8px;

  /* 4. 嵌套元素 */
  .child { /* ... */ }

  /* 5. 媒体查询 */
  @media (min-width: 768px) { /* ... */ }
}
```

---

## 六、浏览器兼容方案

### 1. 渐进增强策略
```css
/* 现代浏览器：使用嵌套 */
.card {
  padding: 1rem;

  .title {
    font-size: 1.2em;
  }
}

/* 旧版浏览器：传统写法 */
.card { padding: 1rem; }
.card .title { font-size: 1.2em; }
```

### 2. 使用 PostCSS 插件
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-nesting') // 将嵌套语法转换为传统CSS
  ]
}
```

### 3. 兼容性速查表
| 浏览器           | 原生嵌套支持版本 |
|------------------|-----------------|
| Chrome           | 120+            |
| Firefox          | 117+            |
| Safari           | 17.2+           |
| Edge             | 120+            |

---

## 七、常见错误排查

### 错误1：缺失父选择器引用
```css
/* 错误 */
.parent {
  .child & { /* 错误顺序 */ }
}

/* 正确 */
.parent {
  & .child { /* ... */ }
}
```

### 错误2：嵌套媒体查询失效
```css
/* 错误：缺少 & */
@media (min-width: 768px) {
  padding: 2rem;
}

/* 正确 */
@media (min-width: 768px) {
  & { padding: 2rem; }
}
```

### 错误3：特异性冲突
```css
/* 不推荐：过度提升优先级 */
#header .nav li a { /* ... */ }

/* 推荐：保持低特异性 */
.nav-link { /* ... */ }
```

---

## 八、现代 CSS 新特性

### 1. 嵌套作用域
```css
@scope (.card) {
  :scope { /* 指向.card自身 */ }
  .title { /* 仅影响.card内的.title */ }
}
```

### 2. 层叠层控制
```css
@layer components {
  .button {
    /* 组件层样式 */
  }
}
```

### 3. 容器查询嵌套
```css
.component {
  @container (width > 400px) {
    & {
      padding: 2rem;
    }
  }
}
```