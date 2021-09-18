(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{913:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("当你想为某个文件夹下的所有"),s("code",[t._v(".md")]),t._v("文件添加、修改、删除某些front matter字段时，这个工具可以快速的为你批量操作。")]),t._v(" "),s("p",[t._v("首先，你需要在"),s("code",[t._v("package.json")]),t._v("的"),s("code",[t._v("scripts")]),t._v("中写入脚本：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editFm"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node utils/editFrontmatter.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在"),s("code",[t._v("utils/config.yml")]),t._v("配置要批量操作的文件夹和要编辑的字段，示例：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# utils/config.yml")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#批量添加和修改、删除front matter配置文件")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要批量处理的路径，docs文件夹内的文件夹 (数组。映射路径：docs/arr[1]/arr[2] ... )")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" docs "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个成员必须是docs")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 《JS教程》专辑\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 第一章节\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要删除的字段 (数组)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" article\n\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要添加、修改front matter的数据 （front matter中没有的数据则添加，已有的数据则覆盖）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 齐天大圣\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sidebar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),s("p",[t._v("比如你要操作的文件夹路径是"),s("code",[t._v("docs/《JS教程》专辑/第一章节")]),t._v("，你需要这样配置路径：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" docs "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个成员必须是docs")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 《JS教程》专辑\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 第一章节\n")])])]),s("p",[s("code",[t._v("path")]),t._v("数组的第一个成员必须是"),s("code",[t._v("docs")]),t._v("，如果你想操作"),s("code",[t._v("docs")]),t._v("底下除了首页之外所有的"),s("code",[t._v(".md")]),t._v("文件，只需保留第一个成员"),s("code",[t._v("docs")]),t._v("即可。")]),t._v(" "),s("p",[t._v("你想删除"),s("code",[t._v("article")]),t._v("字段：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" article\n")])])]),s("p",[t._v("你想为这个文件夹下的所有"),s("code",[t._v(".md")]),t._v("文件添加作者"),s("code",[t._v("author")]),t._v("和隐藏侧边栏"),s("code",[t._v("sidebar")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 齐天大圣\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sidebar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),s("p",[t._v("最后，执行"),s("code",[t._v("npm run editFm")]),t._v("命令，为了防止误操作，会有一个询问过程：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run editFm\n? 批量操作frontmatter有修改数据的风险，确定要继续吗？ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Y/n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);