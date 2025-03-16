---
layout: home

hero:
  name: "MengZe-Repository"
  text: "A Specialized Full Stack Repository"
  tagline: 从代码到架构，构建完整技术体系
  actions:
    - theme: brand
      text: 快速开始
      link: /quick-start
    - theme: alt
      text: 关于本站
      link: /about

features:
  - icon: 📚
    title: 体系化知识库
    details: 覆盖前端框架、后端架构、数据库、DevOps等全栈领域，提供从基础到进阶的系统性教程，结合真实场景案例解析
  - icon: 🔍
    title: 深度原理剖析
    details: 不只是使用指南，更包含底层原理拆解、源码分析与性能优化策略，助你突破技术瓶颈
  - icon: 💡
    title: 前沿技术追踪
    details: 定期更新Web3.0、边缘计算、AI工程化等新兴领域技术动态，保持技术敏感度
---

### 🤝 战略合作伙伴
<div class="partner-grid">
  <!-- Netlify -->
  <a href="https://www.netlify.com" target="_blank" class="partner-logo">
    <img src="https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/GitHub_Logo.png" alt="Netlify" loading="lazy">
  </a>
  
  <!-- GitHub -->
  <a href="https://github.com" target="_blank" class="partner-logo">
    <img src="https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/logo-netlify-large-fullcolor-lightmode.svg" alt="GitHub" loading="lazy">
  </a>
  
  <!-- Vite -->
  <a href="https://vitejs.dev" target="_blank" class="partner-logo">
    <img src="https://vite.dev/logo.svg" alt="Vite" loading="lazy">
  </a>
  
  <!-- Vue -->
  <a href="https://vuejs.org" target="_blank" class="partner-logo">
    <img src="https://cn.vuejs.org/logo.svg" alt="Vue.js" loading="lazy">
  </a>
</div>


### 🥇 金牌赞助商
<div class="sponsor-tier gold">
  <div class="empty-sponsor"><b>当前暂无，期待您的支持</b></div></div>

### 🥈 银牌赞助商
<div class="sponsor-tier silver">
  <div class="empty-sponsor"><b>席位虚位以待</b></div></div>


::: danger
本站正处于密集更新阶段，预计2025Q4完成核心内容建设。  
已发布内容持续接受社区反馈优化，欢迎通过 Issue 提出建议！
:::

<style>
/* 赞助商展示专用样式 */
.[sponsor-container] {
  padding: 2rem 1.5rem;
  background: linear-gradient(145deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px;
  margin: 3rem 0;
}

.sponsor-tier {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
  min-height: 80px;
}

.empty-sponsor {
  color: #64748b;
  font-size: 0.95rem;
  padding: 2rem;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  padding: 1.5rem 0;
}

.partner-logo img {
  width: 120px;
  height: auto;
  transition: transform 0.25s ease;
}

.partner-logo:hover img {
  transform: scale(1.05);
  filter: grayscale(0);
  opacity: 1;
}

.sponsor-cta {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.8rem;
  background: #3b82f6;
  color: white !important;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.sponsor-cta:hover {
  background: #2563eb;
}

@media (max-width: 768px) {
  .partner-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .partner-logo img {
    width: 100px;
  }
}
</style>