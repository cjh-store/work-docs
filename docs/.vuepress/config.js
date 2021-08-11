module.exports = {
  theme: "vdoing", // 使用依赖包主题
  title: "VuePress-Creator",
  description: "A lightweight creator for VuePress project.",
  base: "/work-docs/",
  dest:'./dist',
  head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    // 主题配置
    nav: require("./config/nav"),
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo:
      "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200409124835.png", // 导航栏logo
    // repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: "structuring", collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: {
      // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。

    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "陈俊宏", // 必需
      href: "", // 可选的
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:894072666@qq.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/xugaoyi",
        },
        {
          iconClass: "icon-erji",
          title: "听音乐",
          link: "https://music.163.com/#/playlist?id=755597173",
        },
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2021, // 博客创建年份
      copyrightInfo: "陈俊宏 | MIT License", // 博客版权信息，支持a标签
    },
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Demo Container",
      description: "用于编写 vue 组件示例的 vuepress 插件",
    },
  },
  plugins: [
    [
      "demo-container",
      {
        component: "DemoBlock",
        locales: [
          {
            lang: "zh-CN",
            "demo-block": {
              "hide-text": "隐藏",
              "show-text": "显示",
              "copy-text": "复制",
              "copy-success": "成功",
            },
          },
        ],
      },
    ],
    [
      "thirdparty-search",
      {
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [
          // 可选，默认 []
          {
            title: "在GitHub中搜索",
            frontUrl: "https://github.com/search?q=", // 搜索链接的前面部分
            behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在npm中搜索",
            frontUrl: "https://www.npmjs.com/search?q=",
          },
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q=",
          },
        ],
      },
    ],
    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require("dayjs"); // https://day.js.org/
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
  ],
};
