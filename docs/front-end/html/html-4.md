# HTML5 新特性全解

::: danger
内容暂不完全，持续更新中...
:::

## 一、图形与多媒体
### 1. Canvas 绘图
```html
<canvas id="myCanvas" width="400" height="200"></canvas>
<script>
  const ctx = document.getElementById('myCanvas').getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 100, 50); // 绘制红色矩形
</script>
```
- 动态生成位图图形
- 适用于游戏、数据可视化

### 2. SVG 矢量图
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```
- 基于 XML 的矢量图形
- 支持动画和事件

### 3. MathML 数学公式
```html
<math>
  <mrow>
    <msup><mi>a</mi><mn>2</mn></msup>
    <mo>+</mo>
    <msup><mi>b</mi><mn>2</mn></msup>
  </mrow>
</math>
```
- 原生支持数学公式渲染

### 4. 音视频支持
```html
<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
  您的浏览器不支持视频
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```

---

## 二、增强表单功能
### 1. 新 Input 类型
```html
<input type="email" placeholder="请输入邮箱">
<input type="date" min="2020-01-01">
<input type="color" value="#ff0000">
<input type="range" min="0" max="100">
```

### 2. 表单元素增强
```html
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
<input list="browsers">

<progress value="70" max="100"></progress>
```

### 3. 表单属性扩展
```html
<input type="text" required autofocus pattern="\d+">
<input type="file" multiple accept="image/*">
```

---

## 三、数据存储
### 1. Web Storage
```javascript
// 本地存储
localStorage.setItem('username', 'John');
// 会话存储
sessionStorage.setItem('token', 'abc123');
```

### 2. IndexedDB
```javascript
const request = indexedDB.open('myDB', 1);
request.onsuccess = (e) => {
  const db = e.target.result;
  // 数据库操作...
};
```

### 3. Web SQL（已废弃）
```javascript
const db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction((tx) => {
  tx.executeSql('CREATE TABLE IF NOT EXISTS logs (id unique, log)');
});
```

---

## 四、通信与多线程
### 1. WebSocket
```javascript
const socket = new WebSocket('ws://example.com/chat');
socket.onmessage = (event) => {
  console.log('收到消息:', event.data);
};
```

### 2. Server-Sent Events (SSE)
```javascript
const source = new EventSource('/updates');
source.onmessage = (e) => {
  document.getElementById('result').innerHTML += e.data + '<br>';
};
```

### 3. Web Workers
```javascript
// main.js
const worker = new Worker('worker.js');
worker.postMessage('开始计算');

// worker.js
onmessage = (e) => {
  const result = heavyCalculation();
  postMessage(result);
};
```

---

## 五、其他核心特性
### 1. 语义元素
```html
<header>网站页眉</header>
<nav>导航栏</nav>
<article>独立内容</article>
<section>文档章节</section>
<aside>侧边内容</aside>
<footer>页脚信息</footer>
```

### 2. 地理定位
```javascript
navigator.geolocation.getCurrentPosition((position) => {
  console.log('纬度:', position.coords.latitude);
  console.log('经度:', position.coords.longitude);
});
```

### 3. 拖放 API
```html
<div draggable="true" ondragstart="drag(event)">可拖拽元素</div>
<div ondrop="drop(event)" ondragover="allowDrop(event)">放置区域</div>
<script>
function allowDrop(e) { e.preventDefault(); }
function drag(e) { e.dataTransfer.setData('text', e.target.id); }
function drop(e) { /* 处理放置逻辑 */ }
</script>
```

### 4. 应用程序缓存（已过时）
```html
<!-- manifest 文件需配置 -->
<html manifest="example.appcache">
```

---

## 六、代码规范
### HTML5 文档基础
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
</html>
```

### 最佳实践
1. **语义化优先**：使用 `<article>` 替代无意义的 `<div>`
2. **渐进增强**：确保基础功能在不支持 JS/CSS 时可用
3. **可访问性**：为多媒体添加文字替代内容
4. **性能优化**：使用 `async/defer` 加载脚本

---

## 七、兼容性检查
使用 Modernizr 检测特性支持：
```javascript
if (Modernizr.geolocation) {
  // 支持地理定位
} else {
  alert('请升级浏览器！');
}
```