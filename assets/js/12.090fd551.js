(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{956:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"git使用ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git使用ssh"}},[t._v("#")]),t._v(" Git使用ssh")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查目录列表以查看是否已经有 SSH 公钥。 默认情况下，公钥的文件名是 id_rsa.pub")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al ~/.ssh  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成新的SSH 密钥  一路回车")]),t._v("\nssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_email@example.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入ssh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/.ssh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印ssh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" id_rsa.pub\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将秘钥配置到码云中或github")]),t._v("\n")])])]),a("h2",{attrs:{id:"本地文件关联远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地文件关联远程仓库"}},[t._v("#")]),t._v(" 本地文件关联远程仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入当前操作者（这个只是给git一个操作者信息，建议中文，不需要与github账号同名）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name xxx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入操作者邮箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email xxx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前项目目录中生成本地git管理,并建立一个隐藏.git目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加当前目录中的所有文件到索引")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到本地源码库，并附加提交注释")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init:初始化仓库"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加到远程项目，别名为origin 建议使用ssh地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin 粘贴复制的地址\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把本地源码库push到github 别名为origin的远程项目中，确认提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master \n")])])]),a("h2",{attrs:{id:"创建分支并推送到远程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建分支并推送到远程"}},[t._v("#")]),t._v(" 创建分支并推送到远程")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b develop  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从已有的分支创建分支develop")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin develop:develop  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送develop到远程   ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -vv "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程分支和本地分支关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/develop develop "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将本地分支关联远程分支")]),t._v("\n")])])]),a("h2",{attrs:{id:"创建全新空白分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建全新空白分支"}},[t._v("#")]),t._v(" 创建全新空白分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch develop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout develop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached -r "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clean -f -d\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --allow-empty -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[empty] initial commit"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin develop\n")])])]),a("h2",{attrs:{id:"git-分支重命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-分支重命名"}},[t._v("#")]),t._v(" Git 分支重命名")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设分支名称为oldName")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 想要修改为 newName")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地分支重命名(还没有推送到远程)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m oldName newName   \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把修改后的本地分支与远程分支关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to origin/newName\n")])])]),a("h2",{attrs:{id:"清空分支所有commit记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清空分支所有commit记录"}},[t._v("#")]),t._v(" 清空分支所有commit记录")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.使用 git checkout --orphan new_branch ,基于当前分支创建一个独立的分支new_branch；")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan  new_branch\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.添加所有文件变化至暂存空间")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3.提交并添加提交记录")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit message"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.删除当前分支")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5.重新命名当前独立分支为 master")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6.强制推送到远端分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin master\n")])])]),a("h2",{attrs:{id:"删除本地分支和远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支和远程分支"}},[t._v("#")]),t._v(" 删除本地分支和远程分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D develop //删除本地dev分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r //查看远程分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete develop //删除远程分支\n")])])]),a("h2",{attrs:{id:"git删除tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git删除tag"}},[t._v("#")]),t._v(" git删除tag")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除单个分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v0.0.1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/v0.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程所有标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --delete origin\n删除本地所有tag\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d\n")])])]),a("h2",{attrs:{id:"git忽略已被版本控制的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git忽略已被版本控制的文件"}},[t._v("#")]),t._v(" Git忽略已被版本控制的文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r  --cached filename\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后将该文件写入.gitignore中即可。")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);