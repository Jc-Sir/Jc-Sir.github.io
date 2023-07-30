(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{548:function(s,t,a){s.exports=a.p+"assets/img/opensource.c019692d.png"},675:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"npm简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm简介"}},[s._v("#")]),s._v(" Npm简介")]),s._v(" "),e("p",[s._v("Node Package Manager")]),s._v(" "),e("h2",{attrs:{id:"官网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[s._v("#")]),s._v(" 官网")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("简介")]),s._v(" "),e("p",[s._v("node包【模块】管理器，类似App Store")])]),s._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[s._v("DANGER")]),s._v(" "),e("p",[s._v("This is probably not a problem with npm. There is likely additional logging output above.")]),s._v(" "),e("p",[e("strong",[s._v("解决步骤")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、rmdir ./node_modules/ 【删除node_modules】")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、删除 package-lock.json 文件")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、npm cache clean --force")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4、npm install")]),s._v("\n")])])])]),s._v(" "),e("h2",{attrs:{id:"初始化包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化包"}},[s._v("#")]),s._v(" 初始化包")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认直接生成")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# package.json")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# {")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "name": "test",')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "version": "1.0.0",')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "description": "",')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "main": "index.js",')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "scripts": {')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#     "test": "echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   },")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "keywords": [],')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "author": "",')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   "license": "ISC"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# }")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装包"}},[s._v("#")]),s._v(" 安装包")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("此命令会从服务器上下载此模块到当前目录下的 "),e("code",[s._v("node_modules")]),s._v("目录下，如果"),e("code",[s._v("node_modules")]),s._v("目录不存在则会创建一个")])]),s._v(" "),e("ul",[e("li",[s._v("1、 全局安装 在任意命令行使用")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" http-server -g\n")])])]),e("ul",[e("li",[s._v("2、本地安装\n会多一个"),e("code",[s._v("package-lock.json")]),s._v(" 版本锁文件。 和 "),e("code",[s._v("node_modules")]),s._v("依赖文件夹。")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lodash --save  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装lodash包")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --save 简写 -S [大写]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认不给--save 表示安装到当前的 dependencies 表示上下和开发都需要")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack --save-dev \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --save-dev 简写 -D [大写]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# devDependencies 开发依赖，上线时不需要 例如上面的webpack")]),s._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --production  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只安装 dependencies 里的依赖")]),s._v("\n")])])]),e("h3",{attrs:{id:"安装指定版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装指定版本"}},[s._v("#")]),s._v(" 安装指定版本")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version spec"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i jquery@2.1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还可以使用一个版本号范围来替换点位符")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i jquery@2.x\n")])])]),e("h3",{attrs:{id:"更新包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新包"}},[s._v("#")]),s._v(" 更新包")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("package name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i jquery\n")])])]),e("h3",{attrs:{id:"常见依赖项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见依赖项"}},[s._v("#")]),s._v(" 常见依赖项")]),s._v(" "),e("ul",[e("li",[s._v("1、dependencies")]),s._v(" "),e("li",[s._v("2、devDependencies")]),s._v(" "),e("li",[s._v("3、peerDependencies 会提示安装缺少的模块 默认带版本")]),s._v(" "),e("li",[s._v("4、bundleDependencies  命令 npm pack")])]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bundleDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),e("ul",[e("li",[s._v("5、optionalDependencies  如果找不到 不会影响npm下载")])]),s._v(" "),e("h2",{attrs:{id:"版本问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本问题"}},[s._v("#")]),s._v(" 版本问题")]),s._v(" "),e("p",[s._v("npm 使用了 "),e("code",[s._v("1.0.0")])]),s._v(" "),e("ul",[e("li",[s._v("1、第一位如果变了 表示不兼容老代码 大规模的更新。")]),s._v(" "),e("li",[s._v("2、第二位表示增加了一些功能")]),s._v(" "),e("li",[s._v("3、第三位表示小的补丁 【修改了一些问题】")])]),s._v(" "),e("blockquote",[e("p",[s._v("npm + git\nnpm version major minor patch 更改版本 并且可以同步git tag")])]),s._v(" "),e("div",{staticClass:"language-tip extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("^2.0.0 只要不到3都可以 不能小于  eg: 2.0.1和2.2.2 都可以 \n~2.1.0 不超过1 就满足 eg:2.1.2  2.2.1就不满足了。\n>= 2.1.0\n<= 2.0.0\n")])])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/waynelu92/article/details/73604172",target:"_blank",rel:"noopener noreferrer"}},[s._v("软件版本 —— Alpha、Beta、RC版本的区别"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"协议问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协议问题"}},[s._v("#")]),s._v(" 协议问题")]),s._v(" "),e("p",[e("img",{attrs:{src:a(548),alt:"开源协议"}})]),s._v(" "),e("h2",{attrs:{id:"scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[s._v("#")]),s._v(" scripts")]),s._v(" "),e("p",[s._v("scripts 配置执行的脚本")]),s._v(" "),e("ul",[e("li",[e("ol",[e("li",[s._v("执行命令 echo xxx")])])]),s._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[s._v("执行 node_modules/.bin下的文件。")])])])]),s._v(" "),e("p",[s._v("当执行 npm run 命令的时候 他会把当前目录下的 "),e("code",[s._v("node_modules/.bin")]),s._v(" 也拷贝到当前的系统的path中 【执行完毕后即删除】")]),s._v(" "),e("h2",{attrs:{id:"npx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[s._v("#")]),s._v(" npx")]),s._v(" "),e("p",[s._v("可以直接执行node_modules/.bin 文件 不需要再配置。\n如果模块不存在可以安装，安装完用后还会自己销毁。避免安装全局模块。")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("npx cerate-react-app react-app "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每次都能用最新的安装")]),s._v("\n")])])]),e("h2",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")])])}),[],!1,null,null,null);t.default=n.exports}}]);