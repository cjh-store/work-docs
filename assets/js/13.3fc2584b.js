(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{905:function(e,t,r){"use strict";r.r(t);var v=r(10),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("这个主题的初衷是打造一个好用的、面向程序员的"),r("code",[e._v("知识管理工具")]),e._v("。")]),e._v(" "),r("p",[e._v("对于程序员来说，繁杂的知识体系难免会有遗忘的地方。如果有一个方便好用的知识管理工具，可以帮助我们很好的管理知识，并能够快速地把遗忘的知识点找回来。")]),e._v(" "),r("h2",{attrs:{id:"markdown"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#markdown"}},[e._v("#")]),e._v(" Markdown")]),e._v(" "),r("p",[e._v("最初接触"),r("a",{attrs:{href:"https://xugaoyi.com/pages/ad247c4332211551/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown"),r("OutboundLink")],1),e._v("的时候，我就被它简洁的语法干净的文本结构吸引住，它的代码块和兼容"),r("code",[e._v("html")]),e._v("标签的能力更是让我爱上它，很高兴找到了一个高效记录学习笔记的工具。")]),e._v(" "),r("h2",{attrs:{id:"知识管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#知识管理"}},[e._v("#")]),e._v(" 知识管理")]),e._v(" "),r("p",[e._v("在一段学习的日子里，我尝试过用"),r("code",[e._v("txt")]),e._v("记录笔记、云笔记、"),r("code",[e._v("Markdown")]),e._v("笔记，并把"),r("code",[e._v("Markdown")]),e._v("文件上传到"),r("code",[e._v("github")]),e._v("进行管理，但总感觉还是不够方便...直到我发现了"),r("code",[e._v("VuePress")]),e._v("，它似乎可以管理我的学习笔记，并且把站点部署到"),r("code",[e._v("github pages")]),e._v("不就是一个在线的云笔记网站了吗")]),e._v(" "),r("h2",{attrs:{id:"vuepress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[e._v("#")]),e._v(" VuePress")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v("是一个 Vue 驱动的静态网站生成器，正是以"),r("code",[e._v("Markdown")]),e._v("为中心的项目结构，它简洁至上的理念正合我心。对于我这个对Vue还算有一些了解的前端，迫不及待的想去使用它来搭建一个我的云笔记网站。")]),e._v(" "),r("h2",{attrs:{id:"知识管理-博客主题-vdoing的诞生"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#知识管理-博客主题-vdoing的诞生"}},[e._v("#")]),e._v(" 知识管理&博客主题-Vdoing的诞生")]),e._v(" "),r("p",[e._v("我以前的一个领导和我们说过一个好的知识管理可以帮助我们提高开发质量和开发效率，下面这张图就是他想传达的，我表示赞同：\n"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200318125116.jpg",alt:"知识库"}})]),e._v(" "),r("p",[e._v("什么是一个好用的知识管理工具呢？其实我也在不断的寻找和思考中。不过我觉得它至少要结构清晰、管理方便，在查找知识点的过程中可以快速的找到，正像上图所说的要在15秒内找到一个知识点，在添加内容的时候可以很方便的添加，并且保证结构清晰。")]),e._v(" "),r("p",[e._v("VuePress的官方默认主题是专门为写文档而生的，和我心目中的知识库有一些差距，比如在满足结构清晰这点上，每添加一个内容就得手动的添加侧边栏数据，还有在满足15秒内找到一个知识点上还是不够好，因此我觉得需要做一些改造。")]),e._v(" "),r("p",[e._v("在知识管理方面，有三种典型的知识形态：")]),e._v(" "),r("blockquote",[r("ul",[r("li",[e._v("结构化：看重知识的条理性和实用性，有一定专业背景才能看懂")]),e._v(" "),r("li",[e._v("碎片化：描述具体的知识点，通俗易懂")]),e._v(" "),r("li",[e._v("体系化：对某一领域的完整解读，通常是某类知识的专业之作")])])]),e._v(" "),r("p",[e._v("从这三种知识形态出发，我给主题添加了自动生成结构化侧边栏、目录页、面包屑等等。在满足了结构化之后，写博客应该算得上是一种碎片化的形态，我就给主题添加了分类、标签、归档等等。在满足更方便添加内容上，有了自动生成front matter、批量操作front matter等，更多关于主题的知识从开始使用它去探索吧~~")]),e._v(" "),r("h3",{attrs:{id:"主题名称"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主题名称"}},[e._v("#")]),e._v(" 主题名称")]),e._v(" "),r("p",[e._v("Vdoing，中文大概是维度的意思。起这个名的原因，首先是我看过一个视频《尤雨溪创立vue的心路历程》"),r("a",{attrs:{href:"https://b23.tv/xI9ONW",target:"_blank",rel:"noopener noreferrer"}},[e._v("B站传送"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=OrxmtDw4pVI",target:"_blank",rel:"noopener noreferrer"}},[e._v("youtube传送"),r("OutboundLink")],1),e._v("，里面有讲到vue起名的故事，一开始想起的名其实是Seed.js，但是在npm上被占用了，然后发现vue是一个挺酷的一个词，才决定用vue。发现大佬起名可以这么酷。再者，这个主题我想它可以多维度的快速寻找一个知识点，要么就叫维度吧，那英文名就用Vdoing好了...")])])}),[],!1,null,null,null);t.default=a.exports}}]);