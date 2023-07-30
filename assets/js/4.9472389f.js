(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{514:function(t,s,a){t.exports=a.p+"assets/img/render.a1470897.png"},515:function(t,s,a){t.exports=a.p+"assets/img/parseHtml.9b132240.png"},516:function(t,s,a){t.exports=a.p+"assets/img/parsedhtml.93b1da34.png"},517:function(t,s,a){t.exports=a.p+"assets/img/parsecss.4fbd6d7c.png"},518:function(t,s,a){t.exports=a.p+"assets/img/parsewhencss.825bdf85.png"},519:function(t,s,a){t.exports=a.p+"assets/img/parsewhenjs.456cd2e4.png"},520:function(t,s,a){t.exports=a.p+"assets/img/computedstyle.927ec8da.png"},521:function(t,s,a){t.exports=a.p+"assets/img/layout.a3aca42a.png"},522:function(t,s,a){t.exports=a.p+"assets/img/layout1.675b4d7a.png"},523:function(t,s,a){t.exports=a.p+"assets/img/layout2.ccd3a64b.png"},524:function(t,s,a){t.exports=a.p+"assets/img/layout3.bb86c18b.png"},525:function(t,s,a){t.exports=a.p+"assets/img/layer.2134ffaf.png"},526:function(t,s,a){t.exports=a.p+"assets/img/paint.c35f1fd3.png"},527:function(t,s,a){t.exports=a.p+"assets/img/paint1.99491037.png"},528:function(t,s,a){t.exports=a.p+"assets/img/tilling.11e783b2.png"},529:function(t,s,a){t.exports=a.p+"assets/img/tilling1.867db657.png"},530:function(t,s,a){t.exports=a.p+"assets/img/raster.e4c30c02.png"},531:function(t,s,a){t.exports=a.p+"assets/img/raster1.5da631e1.png"},532:function(t,s,a){t.exports=a.p+"assets/img/draw.1655e738.png"},533:function(t,s,a){t.exports=a.p+"assets/img/allflow.4c29bca3.png"},660:function(t,s,a){"use strict";a.r(s);var r=a(25),_=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"浏览器渲染原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染原理"}},[t._v("#")]),t._v(" 浏览器渲染原理")]),t._v(" "),r("p",[t._v("当浏览器的网络线程收到HTML文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列，在事件循环机制的作用下，渲染主线程取出消息队列的渲染任务，开始渲染流程。")]),t._v(" "),r("p",[t._v("整个渲染流程分为多个阶段，分别是：HTML解析、样式计算、布局、分层、绘制、分块、光栅化、画。每个阶段都有明确的输入输出，上一阶段的输出会成为下一阶段的输入")]),t._v(" "),r("p",[r("strong",[t._v("渲染的第一步解析 HTML")])]),t._v(" "),r("p",[t._v("解析过程中遇到css解析css,遇到js执行js。为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载HTML中的外部 "),r("strong",[t._v("CSS文件")]),t._v(" 和外部的 "),r("strong",[t._v("JS 文件")])]),t._v(" "),r("p",[t._v("如果主线程解析到 "),r("code",[t._v("link")]),t._v(" 位置,此时外部的CSS文件还没有下载解析好，主线程不会等待，继续解析后续的HTML。这是因为下载和解析CSS的工作是在预解析线程中进行的，这就是CSS不会阻塞HTML解析的根本原因")]),t._v(" "),r("p",[t._v("如果主线程解析到"),r("code",[t._v("script")]),t._v("位置,会停止解析 HTML，转而等待JS文件下载好，并将全局代码解析执行完成后才能继续解析HTML。这是因为JS代码的执行过程可能会修改当前的DOM树，所以DOM树的生成必须\n暂停。这就是JS会阻塞HTML解析的根本原因")]),t._v(" "),r("p",[t._v("第一步完成后会得到"),r("code",[t._v("DOM树和CSSOM树")]),t._v(", 浏览器的默认样式、内部样式、行内样式均会包含在CSSOM树中。")]),t._v(" "),r("p",[r("strong",[t._v("渲染的下一步是样式计算")])]),t._v(" "),r("p",[t._v("主线程会遍历得到的"),r("code",[t._v("DOM树")]),t._v("，依次为树中的每个节点计算得出它的最终样式，称之为"),r("code",[t._v("Computed Style")]),t._v("。这一过程中，很多预设值会变成绝对值，比如red->rgb(255,0,0);相对单位会变成绝对单位 如em->px。 得到一颗带有样式的DOM树")]),t._v(" "),r("p",[r("strong",[t._v("接下来布局")])]),t._v(" "),r("p",[t._v("布局阶段会依次遍历DOM树中的每一个节点，计算每个节点的几何信息。例如宽高，相对包含块的位置。")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("大部分时候DOM树和布局树并非一一对应")]),t._v(" "),r("ul",[r("li",[t._v("比如"),r("code",[t._v("display:none")]),t._v("的节点没有几何信息，因此不会生成到布局树")]),t._v(" "),r("li",[t._v("比他使用伪元素选择器，虽然DOM树中不存在这些伪元素，但他们有集合信息，所以会生成到布局树中")]),t._v(" "),r("li",[t._v("匿名行盒、匿名块盒等都会导致DOM树和布局树无法一一对应")])])]),t._v(" "),r("p",[r("strong",[t._v("然后是分层")])]),t._v(" "),r("p",[t._v("主线程会使用一套复杂的策略对整个布局树进行分层。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("分层的好处就是，将来某一层改变后，仅会对该层进行后续处理，从而提升效率。")]),t._v(" "),r("p",[t._v("滚动条、堆叠上下文、transform、opacity等样式都会或者多少影响分层结果。也可以通过will-change属性更大程度影响分层结果")])]),t._v(" "),r("p",[r("strong",[t._v("接下来绘制")])]),t._v(" "),r("ul",[r("li",[t._v("主线程会为每个层单独产生绘制指令集，用于描述这一层的内容如何绘制。")]),t._v(" "),r("li",[t._v("完成绘制后,主线程将每个图层的绘制信息提交给合成线程、剩余工作将由合成线程完成。")]),t._v(" "),r("li",[t._v("合成线程首先对每个图层进行分块，将其分成更小区域")])]),t._v(" "),r("p",[t._v("分块完成后会进行"),r("strong",[t._v("光栅化阶段")]),t._v("。合成线程会将块信息交给 GPU进程，以极高速度完成光栅化。GPU进程会开启多个线程来完成光栅化，并且优先处理靠近视口区域的块，光栅化的结果就是一块一块的位图。")]),t._v(" "),r("p",[t._v("最后一个阶段:合成线程拿到每个层，每个块的位图后，生成一个个【指引（quad）】信息，指引会标识每个位图应该画到屏幕的哪个位置，以及会考虑到旋转缩放等变形。变形发生在合成线程，与渲染主线程无关，这就是transform效率高的原因。合成线程会把quad 提交给GPU进程，由GPU进程产生系统调用，提交给硬件，完成最终的屏幕成像。")]),t._v(" "),r("h2",{attrs:{id:"_1、解析html"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、解析html"}},[t._v("#")]),t._v(" 1、解析html")]),t._v(" "),r("p",[r("img",{attrs:{src:a(514),alt:"parse HTML"}}),t._v(" "),r("img",{attrs:{src:a(515),alt:"parse HTML"}})]),t._v(" "),r("p",[r("strong",[t._v("经过转换后")]),t._v(" "),r("img",{attrs:{src:a(516),alt:"parsed HTML"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(517),alt:"parsed css"}}),t._v(" "),r("img",{attrs:{src:a(518),alt:"parsed when js"}})]),t._v(" "),r("p",[t._v("解析遇到js")]),t._v(" "),r("p",[r("img",{attrs:{src:a(519),alt:"parsed when js"}})]),t._v(" "),r("h2",{attrs:{id:"_2、样式计算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、样式计算"}},[t._v("#")]),t._v(" 2、样式计算")]),t._v(" "),r("p",[r("img",{attrs:{src:a(520),alt:"computedstyle"}})]),t._v(" "),r("h2",{attrs:{id:"_3、布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、布局"}},[t._v("#")]),t._v(" 3、布局")]),t._v(" "),r("p",[r("img",{attrs:{src:a(521),alt:"layout"}}),t._v(" "),r("img",{attrs:{src:a(522),alt:"layout"}}),t._v(" "),r("img",{attrs:{src:a(523),alt:"layout"}}),t._v(" "),r("img",{attrs:{src:a(524),alt:"layout"}})]),t._v(" "),r("h2",{attrs:{id:"_4、分层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、分层"}},[t._v("#")]),t._v(" 4、分层")]),t._v(" "),r("p",[r("img",{attrs:{src:a(525),alt:"layer"}})]),t._v(" "),r("h2",{attrs:{id:"_5、绘制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、绘制"}},[t._v("#")]),t._v(" 5、绘制")]),t._v(" "),r("p",[r("img",{attrs:{src:a(526),alt:"paint"}}),t._v(" "),r("img",{attrs:{src:a(527),alt:"paint"}})]),t._v(" "),r("h2",{attrs:{id:"_6、分块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、分块"}},[t._v("#")]),t._v(" 6、分块")]),t._v(" "),r("p",[r("img",{attrs:{src:a(528),alt:"tilling"}}),t._v(" "),r("img",{attrs:{src:a(529),alt:"tilling"}})]),t._v(" "),r("h2",{attrs:{id:"_7、光栅化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、光栅化"}},[t._v("#")]),t._v(" 7、光栅化")]),t._v(" "),r("p",[r("img",{attrs:{src:a(530),alt:"raster"}}),t._v(" "),r("img",{attrs:{src:a(531),alt:"raster"}})]),t._v(" "),r("h2",{attrs:{id:"_8、画"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8、画"}},[t._v("#")]),t._v(" 8、画")]),t._v(" "),r("p",[r("img",{attrs:{src:a(532),alt:"draw"}})]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[r("img",{attrs:{src:a(533),alt:"allflow"}})])])}),[],!1,null,null,null);s.default=_.exports}}]);