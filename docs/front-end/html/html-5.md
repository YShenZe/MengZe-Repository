# HTML 进阶扩展

::: danger
内容暂不完全，持续更新中...
:::

## 一、HTML 媒体核心

### 1. 媒体基础概念
- **媒体类型**：音频、视频、字幕、字幕轨道
- **容器格式**：MP4、WebM、OGG、MP3、WAV
- **编解码器**：H.264、VP9、Opus、AAC

### 2. 媒体通用属性
| 属性          | 说明                  | 示例                      |
|---------------|-----------------------|---------------------------|
| `controls`    | 显示控制条            | `<video controls>`        |
| `autoplay`    | 自动播放（有限制）    | `<audio autoplay>`        |
| `loop`        | 循环播放              | `<video loop>`           |
| `muted`       | 静音                  | `<video muted>`          |
| `preload`     | 预加载策略            | `preload="metadata"`     |

---

## 二、音频处理
### 1. `<audio>` 标签
```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  您的浏览器不支持音频播放
</audio>
```

### 2. 高级音频控制（JavaScript API）
```javascript
const audio = document.getElementById('myAudio');
audio.play();  // 播放
audio.pause(); // 暂停
audio.volume = 0.5; // 音量设置（0-1）
```

---

## 三、视频处理
### 1. `<video>` 标签
```html
<video width="640" controls poster="preview.jpg">
  <source src="movie.mp4" type="video/mp4">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  您的浏览器不支持视频播放
</video>
```

### 2. 视频扩展功能
- **画中画模式**：
  ```javascript
  videoElement.requestPictureInPicture();
  ```
- **全屏控制**：
  ```javascript
  videoElement.requestFullscreen();
  ```
- **分辨率切换**：
  ```html
  <source src="hd.mp4" media="(min-width: 800px)">
  <source src="sd.mp4">
  ```

---

## 四、插件与扩展
### 1. 传统插件（逐渐淘汰）
```html
<!-- Flash 插件示例 -->
<object data="game.swf" type="application/x-shockwave-flash">
  <param name="quality" value="high">
</object>

<!-- PDF 嵌入 -->
<embed src="doc.pdf" type="application/pdf" width="600" height="400">
```

### 2. 现代替代方案
- **PDF 显示**：
  ```html
  <iframe src="doc.pdf#view=fitH"></iframe>
  ```
- **3D 内容**：使用 WebGL 或 `<canvas>`
- **地图嵌入**：直接使用 iframe 嵌入 Google Maps

---

## 五、媒体开发实践
### 1. 自定义播放器
```html
<div class="custom-player">
  <video id="myVideo" src="video.mp4"></video>
  <div class="controls">
    <button onclick="togglePlay()">▶️</button>
    <input type="range" id="volume" min="0" max="1" step="0.1">
  </div>
</div>
<script>
function togglePlay() {
  const video = document.getElementById('myVideo');
  video.paused ? video.play() : video.pause();
}
</script>
```

### 2. 响应式媒体
```css
/* 保持视频比例 */
.video-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 比例 */
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

## 六、综合实例
### 1. 多媒体画廊
```html
<div class="gallery">
  <video controls><source src="demo.mp4"></video>
  <audio controls><source src="bgm.mp3"></audio>
  <iframe src="https://www.youtube.com/embed/abc123"></iframe>
</div>
```

### 2. 实时直播方案
```html
<video id="liveStream" controls>
  <source src="rtmp://live.example.com/stream" type="rtmp/mp4">
  <!-- 备用 HLS 源 -->
  <source src="http://live.example.com/stream.m3u8" type="application/vnd.apple.mpegurl">
</video>
```

---

## 七、最佳实践
1. **格式兼容**：至少提供 MP4 和 WebM 双格式
2. **字幕支持**：为视频添加 WebVTT 字幕文件
3. **懒加载**：使用 `loading="lazy"` 延迟加载
4. **性能优化**：
   ```html
   <video preload="none" poster="loading.jpg">
   ```
5. **可访问性**：为控件添加 ARIA 标签
6. **错误处理**：监听媒体错误事件
   ```javascript
   videoElement.addEventListener('error', (e) => {
     console.error('媒体错误:', e.target.error);
   });
   ```

---

## 八、现代替代方案
| 需求          | 推荐方案                      |
|---------------|-------------------------------|
| 复杂播放器    | Video.js / Plyr.js            |
| 音频可视化    | Web Audio API + Canvas        |
| 直播流        | HLS (HTTP Live Streaming)     |
| DRM 加密      | Encrypted Media Extensions    |