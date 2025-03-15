import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MengZe-Repository",
  lang: "zh-Hans",
  description: "A Specialized Full Stack Repository",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/quick-start' },
      { text: '关于本站', link: '/about' },
      {
        text: '小白扫盲课',
        items: [
          { text: '什么是文件', link: '/what-is-file' },
          { text: '什么是编程', link: '/what-is-it' }
        ]
      },
      {
        text: '快速入门教程',
        items: [
          { text: 'HTML', link: '/front-end/html/' },
          { text: 'CSS', link: '/front-end/css/' },
          { text: 'JavaScript', link: '/front-end/javascript/' }
        ]
      }
    ],

    // 配置侧边栏为一个对象，每个键对应一个目录路径
    sidebar: {
      // 根目录的侧边栏
      '/': [
        {
          text: '本站信息',
          items: [
            { text: '关于本站', link: '/about' },
            { text: '维护团队', link: '/team' }
          ]
        },
        {
          text: '小白扫盲课',
          items: [
            { text: '什么是文件', link: '/what-is-file' },
            { text: '什么是编程', link: '/what-is-it' }
          ]
        },
        {
        text: '快速入门教程',
        items: [
          { text: 'HTML', link: '/front-end/html/' },
          { text: 'CSS', link: '/front-end/css/' },
          { text: 'JavaScript', link: '/front-end/javascript/' }
        ]
        },
      ],

      // '/front-end/html/' 目录的侧边栏
      '/front-end/html/': [
        {
          text: '本站信息',
          items: [
            { text: '关于本站', link: '/about' },
            { text: '维护团队', link: '/team' }
          ]
        },
        {
          text: '小白扫盲课',
          items: [
            { text: '什么是文件', link: '/what-is-file' },
            { text: '什么是编程', link: '/what-is-it' }
          ]
        },
        {
          text: 'HTML教程',
          items: [
            { text: 'HTML 简介', link: '/front-end/html/' },
            { text: 'HTML 基础', link: '/front-end/html/html-1' },
            { text: 'HTML 元素', link: '/front-end/html/html-2' },
            { text: 'HTML 标签', link: '/front-end/html/html-3' },
            { text: 'HTML5 新特性', link: '/front-end/html/html-4' },
            { text: 'HTML 进阶扩展', link: '/front-end/html/html-5' },
            { text: 'HTML 参考手册', link: '/front-end/html/html-6' },
            { text: 'HTML DOM教程', link: '/front-end/html/html-7' },
          ]
        }
      ],

      // 可以为其他目录添加类似的侧边栏配置
      '/front-end/css/': [
        {
          text: 'CSS教程',
          items: [
            { text: 'CSS 简介', link: '/front-end/css/' },
            { text: 'CSS 基础', link: '/front-end/css/css-1' },
            { text: 'CSS 选择器', link: '/front-end/css/css-2' },
            { text: 'CSS 样式', link: '/front-end/css/css-3' },
          ]
        }
      ],

      '/front-end/javascript/': [
        {
          text: 'JavaScript教程',
          items: [
            { text: 'JavaScript 简介', link: '/front-end/javascript/' },
            { text: 'JavaScript 基础', link: '/front-end/javascript/js-1' },
            { text: 'JavaScript 变量', link: '/front-end/javascript/js-2' },
            { text: 'JavaScript 函数', link: '/front-end/javascript/js-3' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YShenZe/MengZe-Repository' }
    ],
    
    footer: { message: 'Released under the MIT License.', copyright: 'Copyright © 2024-present MengZe' }
  }
})
