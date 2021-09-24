(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{954:function(t,e,s){"use strict";s.r(e);var n=s(7),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v(" ")]),t._v(" "),s("p",[t._v("仓库地址: "),s("a",{attrs:{href:"https://e.gitee.com/tianli-web-developer/projects/276016/repos/tianli-web-developer/uni-app-template/sources",target:"_blank",rel:"noopener noreferrer"}},[t._v("uni-template"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\n仓库邀请: "),s("a",{attrs:{href:"https://gitee.com/tianli-web-developer?invite=14d472c2f28406a467eb3bdf91735936ee0905ccb66407c18e7cde0b62298f89d243c2e46f3678cd47952deb5166e5df31a153d918ea49b0",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),s("OutboundLink")],1),s("br"),t._v(" "),s("br"),t._v(" "),s("mark",[t._v("新项目应始终使用最新脚手架进行开发")]),t._v(" "),s("Badge",{attrs:{text:"重要",type:"tip",vertical:"top"}}),s("br"),t._v("\n如需要对框架进行更改,将仓库fork后修改完毕,提交pull request进行合并")],1)]),t._v(" "),s("h2",{attrs:{id:"功能介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍 "),s("Badge",{attrs:{text:"必读",type:"error",vertical:"top"}})],1),t._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- 使用脚手架方式创建项目，方便vscode开发\n- 启动项目通过 `yarn cli`方式启动 当匹配wx命令时 vscode自动启动微信开发者工具(摆脱HBuilder)\n- 脚手架兼容小程序和H5 支持H5开发环境跨域\n- 默认包含 自定义tab/默认tab 选择需要的使用\n- 默认开启分包\n- 优化主包体积\n- 小程序升级\n- 小程序增加wx-mini模式 开发环境(压缩代码),方便包过大的时候手机预览\n- 小程序修改build模式 支持即时修改预览\n\n- 验证\n  - eslint验证/自动修复\n  - stylelint验证/自动修复\n  - commitlin验证 通过`yarn git:push`进行代码提交\n\n- 集成\n  - uview组件库\n  - uni-simple-router 路由增强\n  - vuex-persistedstate 状态持久化\n  - vuex-pathify vuex增强，支持v-model双向绑定... 简化vuex写法\n  - flyio 请求库进行了二次封装\n  - dayjs 日期处理\n  - lodash 函数工具库(小程序默认不引入,防止打包体积过大)\n  - cc-cli-run 统一管理npm scripts命令，匹配wx命令时,支持自动启动微信开发者工具\n  - cc-git-tag 用于H5发布正式版本打tag工具\n\n- 基础组件\n  - g-icon 全局图标 支持iconfont\n\n- 工具样式 (仿照tailwindcss)\n  - flex类\n  - 内外边距\n  - 字体类\n\n- config配置\n  - net.config.js 网络配置\n")])])]),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构 "),s("Badge",{attrs:{text:"必读",type:"error",vertical:"top"}})],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("├─.vscode                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作区vscode配置")]),t._v("\n├─dist                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包文件")]),t._v("\n│  ├─build\n│  └─dev\n├─patches                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 依赖补丁")]),t._v("\n├─public\n└─src\n    ├─api                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接口文件夹 下面文件按模块划分")]),t._v("\n    │  └─user.js                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户模块接口")]),t._v("\n    ├─components                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 组件 分为 基础组件和业务组件(至少被2个页面用到的组件,大驼峰)")]),t._v("\n    │  ├─base                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基础组件(自动注册为全局组件) 统一 `g-` 开头")]),t._v("\n    │  │   └─g-icon              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局图标组件")]),t._v("\n    │  └─UserCard                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户卡片业务组件")]),t._v("\n    │  │   └─index.vue\n    │  └─"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n    ├─config                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置")]),t._v("\n    ├─pages                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面  每一个页面都应该是一个文件夹(命名方式中划线)")]),t._v("\n    │  ├─module-a                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模块1(分包)")]),t._v("\n    │  │  └─a-page               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模块1下 a页面")]),t._v("\n    │  │   └─components          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面文件夹内 components文件夹 存放页面组件")]),t._v("\n    │  │   │   └─AddItem.vue     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面组件 应该为一个单文件 大驼峰命名")]),t._v("\n    │  │   └─index.vue\n    │  ├─module-b\n    │  │  └─b-page\n    │  └─tab                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tab页面")]),t._v("\n    │      ├─demo\n    │      ├─home\n    │      └─mine\n    ├─plugins                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件 封装Class类也可存放 类文件大写开头")]),t._v("\n    ├─router                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由管理")]),t._v("\n    ├─static\n    │  └─tab\n    ├─store                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 状态机 按模块管理")]),t._v("\n    │  └─modules\n    ├─styles                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 样式")]),t._v("\n    │  └─icon\n    ├─utils                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工具方法")]),t._v("\n    ├─uview-ui\n    └─wxcomponents               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 原生微信组件")]),t._v("\n")])])]),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项 "),s("Badge",{attrs:{text:"必读",type:"error",vertical:"top"}})],1),t._v(" "),s("p",[t._v("在对uview组件有破坏性改动的时候，不建议直接在原组件上进行修改，而应另外创建一个文件夹\n"),s("img",{attrs:{src:"https://gitee.com/cjh-1996/typora-image/raw/master/img/image-20210910093945041.png",alt:"image-20210910093945041"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);