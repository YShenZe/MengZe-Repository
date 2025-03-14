import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MengZe-Repository",
  description: "A Specialized Full Stack Repository",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/quick-start' }
    ],

    sidebar: [
      {
        text: '本站信息',
        items: [
          { text: '关于本站', link: '/about' },
          { text: '维护团队', link: '/team' },
          { text: '搭建初衷', link: '/why-build' }
        ]
      },
      {
        text: '快速开始',
        items: [
        { text: '什么是文件', link: '/what-is-file' },
        { text: '什么是编程', link: '/what-is-it' },
        { text: '什么是全栈', link: '/what-is-full-stack' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YShenZe/MengZe-Repository' }
    ],
    
    footer: { message: 'Released under the MIT License.', copyright: 'Copyright © 2024-present MengZe' }
  }
})
