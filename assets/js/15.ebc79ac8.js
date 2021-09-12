(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{575:function(v,s,_){"use strict";_.r(s);var t=_(7),a=Object(t.a)({},(function(){var v=this,s=v.$createElement,_=v._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("本主题遵循“"),_("strong",[v._v("约定优于配置")]),v._v("”原则，如果你想构建一个结构化的站点，需要遵循下面这些约定，约定可以为你省去很多配置，轻松拥有一个结构清晰的站点。")]),v._v(" "),_("p",[v._v("你需要在"),_("code",[v._v("config.js")]),v._v("中有如下配置：")]),v._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// config.js")]),v._v("\nmodule"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("exports "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  themeConfig"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n     sidebar"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'structuring'")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("//  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义")]),v._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])])]),_("p",[v._v("在运行开发服务"),_("code",[v._v("npm run dev")]),v._v("或打包"),_("code",[v._v("npm run build")]),v._v("时主题内部将会按照目录约定自动生成一个结构化的"),_("strong",[v._v("侧边栏、目录页、面包屑等")]),v._v("数据。")]),v._v(" "),_("p",[v._v("在源目录（一般是"),_("code",[v._v("docs")]),v._v("）文件夹中，除了"),_("code",[v._v(".vuepress")]),v._v("、"),_("code",[v._v("@pages")]),v._v("、"),_("code",[v._v("_posts")]),v._v("、"),_("code",[v._v("index.md 或 README.md")]),v._v("之外的"),_("strong",[v._v("文件夹")]),v._v("将会为其生成对应的侧边栏。生成的顺序取自序号，标题取自文件（夹）名称。")]),v._v(" "),_("h3",{attrs:{id:"命名约定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命名约定"}},[v._v("#")]),v._v(" 命名约定")]),v._v(" "),_("ul",[_("li",[v._v("无论是"),_("strong",[v._v("文件")]),v._v("还是"),_("strong",[v._v("文件夹")]),v._v("，请为其名称添加上正确的"),_("strong",[v._v("正整数序号")]),v._v("和"),_("code",[v._v(".")]),v._v("，从"),_("code",[v._v("00")]),v._v("或"),_("code",[v._v("01")]),v._v("开始累计，如"),_("code",[v._v("01.文件夹")]),v._v("、"),_("code",[v._v("02.文件.md")]),v._v("，我们将会按照序号的顺序来决定其在侧边栏当中的顺序。")]),v._v(" "),_("li",[v._v("同一级别目录别内即使只有一个文件或文件夹也要为其加上序号。")]),v._v(" "),_("li",[v._v("文件或文件夹名称中间不能出现多余的点"),_("code",[v._v(".")]),v._v("，如"),_("code",[v._v("01.我是.名称.md")]),v._v("中间出现"),_("code",[v._v(".")]),v._v("将会导致解析错误。")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),_("p",[v._v("序号只是用于决定先后顺序，并不一定需要连着，如"),_("code",[v._v("01、02、03...")]),v._v("，实际工作中可能会在两个文章中间插入一篇新的文章，因此为了方便可以采用间隔序号"),_("code",[v._v("10、20、30...")]),v._v("，后面如果需要在"),_("code",[v._v("10")]),v._v("和"),_("code",[v._v("20")]),v._v("中间插入一篇新文章，可以给定序号"),_("code",[v._v("15")]),v._v("。")])]),v._v(" "),_("h3",{attrs:{id:"级别说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#级别说明"}},[v._v("#")]),v._v(" 级别说明")]),v._v(" "),_("p",[v._v("源目录（一般是"),_("code",[v._v("docs")]),v._v("）底下的级别现在我们称之为"),_("code",[v._v("一级目录")]),v._v("，"),_("code",[v._v("一级目录")]),v._v("的下一级为"),_("code",[v._v("二级目录")]),v._v("，以此类推，最多到"),_("code",[v._v("四级目录")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("一级目录")]),v._v(" "),_("ol",[_("li",[_("code",[v._v(".vuepress")]),v._v("、"),_("code",[v._v("@pages")]),v._v("、"),_("code",[v._v("_posts")]),v._v("、"),_("code",[v._v("index.md 或 README.md")]),v._v(" 这些文件(文件夹)不参与数据生成。")]),v._v(" "),_("li",[v._v("序号非必须。（如一些专栏，可以不用序号)")])])]),v._v(" "),_("li",[_("strong",[v._v("二级目录")]),v._v(" "),_("ol",[_("li",[v._v("该级别下可以同时放文件夹和"),_("code",[v._v(".md")]),v._v("文件，但是两者序号要连贯（参考下面的例子中的"),_("code",[v._v("其他")]),v._v("）。")]),v._v(" "),_("li",[v._v("必须有序号")])])]),v._v(" "),_("li",[_("strong",[v._v("三级目录")]),v._v(" "),_("ul",[_("li",[v._v("(同上)")])])]),v._v(" "),_("li",[_("strong",[v._v("四级目录")]),v._v(" "),_("Badge",{attrs:{text:"v1.6.0 +"}}),v._v(" "),_("ol",[_("li",[v._v("该级别下"),_("strong",[v._v("只能")]),v._v("放"),_("code",[v._v(".md")]),v._v("文件。")]),v._v(" "),_("li",[v._v("必须有序号")])])],1)]),v._v(" "),_("p",[v._v("所有级别内至少有一个文件或文件夹。")]),v._v(" "),_("h3",{attrs:{id:"目录结构例子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录结构例子"}},[v._v("#")]),v._v(" 目录结构例子")]),v._v(" "),_("div",{staticClass:"language-html extra-class"},[_("pre",{pre:!0,attrs:{class:"language-html"}},[_("code",[v._v(".\n├── docs\n│   │  (不参与数据生成)\n│   ├── .vuepress\n│   ├── @pages\n│   ├── _posts\n│   ├── index.md\n│   │\n│   │ (以下部分参与数据生成)\n│   ├── 《JavaScript教程》专栏 (一级目录)\n│   │   ├── 01.章节1 (二级目录)\n│   │   |   ├── 01.js1.md (三级目录-文件)\n│   │   |   ├── 02.js2.md\n│   │   |   └── 03.js3.md\n│   │   └── 02.章节2 (二级目录)\n│   │   |   ├── 01.jsa.md\n│   │   |   ├── 02.小节 (三级目录)\n│   │   |   |   └── 01.jsxx.md (四级目录-文件)\n│   ├── 01.前端\n│   │   ├── 01.JavaScript\n│   │   |   ├── 01.js1.md\n│   │   |   ├── 02.js2.md\n│   │   |   └── 03.js3.md\n│   │   └── 02.vue\n│   │   |   ├── 01.vue1.md\n│   │   |   └── 02.vue2.md\n│   ├── 02.其他\n│   │   ├── 01.学习\n│   │   |   ├── 01.xxa.md\n│   │   |   └── 02.xxb.md\n│   │   ├── 02.学习笔记\n│   │   |   ├── 01.xxa.md\n│   │   |   └── 02.xxb.md\n│   │   ├── 03.文件x.md\n│   │   └── 04.文件xx.md\n│   └── 03.关于我\n│   │   └── 01.关于我.md\n.   .\n")])])]),_("h3",{attrs:{id:"如何知道侧边栏数据有没有正确生成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何知道侧边栏数据有没有正确生成"}},[v._v("#")]),v._v(" 如何知道侧边栏数据有没有正确生成？")]),v._v(" "),_("p",[v._v("在运行开发服务时("),_("code",[v._v("npm run dev")]),v._v(")，在命令行查看打印记录，如果正确生成会有这样的"),_("code",[v._v("绿色")]),v._v("提示记录：")]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("tip: "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("add")]),v._v(" sidebar data. 侧边栏数据添加成功。\n")])])]),_("p",[v._v("如果有未按约定的文件，会有"),_("code",[v._v("黄色")]),v._v("警告记录，如：")]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("warning:  该文件"),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'xxx'")]),v._v("序号出错，请填写正确的序号。\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);