# CSS 背景

## 背景属性总览
| 属性                  | 说明                          | 默认值          |
|-----------------------|-------------------------------|-----------------|
| `background-color`    | 背景颜色                      | `transparent`  |
| `background-image`    | 背景图像                      | `none`         |
| `background-repeat`   | 背景重复方式                  | `repeat`       |
| `background-position` | 背景定位                      | `0% 0%`        |
| `background-size`     | 背景尺寸                      | `auto`         |
| `background-attachment` | 背景附着方式              | `scroll`       |
| `background-origin`   | 背景定位区域                  | `padding-box`  |
| `background-clip`     | 背景绘制区域                  | `border-box`   |
| `background-blend-mode` | 背景混合模式                | `normal`       |

---

## 核心属性详解

### 1. 背景颜色 (background-color)
```css
.box {
  background-color: #ff0000;       /* 十六进制 */
  background-color: rgb(255,0,0);  /* RGB */
  background-color: hsl(0,100%,50%);/* HSL */
  background-color: rgba(0,0,0,0.5); /* 半透明 */
}
```

### 2. 背景图片 (background-image)
```css
.banner {
  background-image: url("bg.jpg");              /* 单张图片 */
  background-image: linear-gradient(to right, red, blue); /* 渐变 */
  background-image: url("pattern.png"),        /* 多重背景 */
                    linear-gradient(45deg, #eee 25%, transparent 25%);
}
```

### 3. 背景重复 (background-repeat)
```css
.container {
  background-repeat: repeat;     /* 默认，平铺填充 */
  background-repeat: no-repeat;  /* 不重复 */
  background-repeat: repeat-x;   /* 水平重复 */
  background-repeat: repeat-y;   /* 垂直重复 */
  background-repeat: space;      /* 等间距排列 */
  background-repeat: round;      /* 自适应缩放排列 */
}
```

### 4. 背景定位 (background-position)
```css
.card {
  /* 关键词定位 */
  background-position: center top;
  
  /* 百分比定位 */
  background-position: 20% 80%;
  
  /* 像素定位 */
  background-position: 100px 50px;
  
  /* 组合定位 */
  background-position: right 10px bottom 20px;
}
```

### 5. 背景尺寸 (background-size)
```css
.hero {
  background-size: cover;     /* 覆盖整个容器 */
  background-size: contain;   /* 完整显示图片 */
  background-size: 200px 150px; /* 固定尺寸 */
  background-size: 50% auto;  /* 按比例缩放 */
}
```

### 6. 背景附着 (background-attachment)
```css
.parallax {
  background-attachment: fixed;  /* 固定背景 */
  background-attachment: local;  /* 随元素内容滚动 */
  background-attachment: scroll; /* 随元素滚动（默认） */
}
```

---

## 高级背景技巧

### 1. 多重背景层叠
```css
.multi-bg {
  background: 
    url("stars.png") top left / 100px repeat-x,
    linear-gradient(to bottom, rgba(0,0,0,0.5), transparent),
    #1a237e;
}
```
**层叠顺序**：先定义的背景在上层

### 2. 背景裁剪 (background-clip)
```css
/* 文字填充背景 */
h1 {
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, red, blue);
}
```

### 3. 背景混合模式 (background-blend-mode)
```css
.blend {
  background-image: url("texture.jpg"), linear-gradient(red, blue);
  background-blend-mode: multiply; /* 正片叠底 */
}
```
可用模式：`screen`, `overlay`, `darken`, `lighten` 等

---

## 实用案例集合

### 案例1：全屏背景
```css
body {
  background: url("bg.jpg") center/cover fixed;
  min-height: 100vh;
}
```

### 案例2：条纹背景
```css
.stripes {
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
}
```

### 案例3：动态渐变背景
```css
.animated-bg {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 性能优化建议
1. **图片压缩**：使用 WebP 格式，压缩工具推荐 Squoosh
2. **雪碧图技术**：合并小图标减少 HTTP 请求
   ```css
   .icon-home {
     background: url("sprite.png") -20px -40px no-repeat;
     width: 16px;
     height: 16px;
   }
   ```
3. **CSS 渐变替代图片**：简单图形用代码实现
4. **懒加载背景**：使用 Intersection Observer API
   ```javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.style.backgroundImage = "url('lazy-bg.jpg')";
         observer.unobserve(entry.target);
       }
     });
   });
   observer.observe(document.querySelector('.lazy-bg'));
   ```

---

## 浏览器兼容方案

### 1. 渐进增强写法
```css
.box {
  background-color: #1a237e; /* 回退色 */
  background-image: url("bg.png");
  background-image: url("bg.webp"); /* WebP优先 */
  @supports (background-blend-mode: overlay) {
    background-image: linear-gradient(rgba(0,0,0,0.5)), url("bg.webp");
    background-blend-mode: overlay;
  }
}
```

### 2. 前缀处理
```css
.gradient {
  background: -webkit-linear-gradient(red, blue); /* 旧版 WebKit */
  background: linear-gradient(red, blue);
}
```

---

## 常见错误排查
### 错误1：背景图片不显示
```css
/* 错误：路径不正确 */
.broken-bg {
  background-image: url("images/bg.jpg"); /* 实际路径为 "../images/bg.jpg" */
}
```

### 错误2：尺寸计算问题
```css
/* 错误：缺少定位 */
.misaligned {
  background-size: contain;
  /* 需要添加 background-position: center */
}
```

### 错误3：性能问题
```css
/* 错误：大图重复平铺 */
.heavy-bg {
  background: url("large-image.jpg") repeat; /* 应使用纹理小图 */
}
```