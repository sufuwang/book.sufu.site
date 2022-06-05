import type { UserConfig } from 'vitepress'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '年度计划',
      link: '/plan/index.html',
      children: [
        { text: '2022', link: '/plan/2022' },
      ]
    },
    {
      text: '文章',
      link: '/article/index.html',
      // children: [
      //   { text: '2022', link: '/article/2022' },
      // ]
    },
  ]
}

// https://github.com/vuejs/vitepress/blob/main/src/node/config.ts#L15
const config: UserConfig = {
  themeConfig: {
    sidebar,
  },
}

export default config
