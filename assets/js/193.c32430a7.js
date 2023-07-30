(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{759:function(t,s,e){"use strict";e.r(s);var n=e(25),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"view视图详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view视图详解"}},[t._v("#")]),t._v(" View视图详解")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[t._v("View 对象表示地图的简单 2D 视图。")]),t._v(" "),e("li",[t._v("主要是控制地图与人的交互，如进行缩放，调节分辨率、地图的旋转等控制。")]),t._v(" "),e("li",[t._v("也就是说每个 map对象包含一个 view对象部分，用于控制与用户的交互。")])])]),t._v(" "),e("h2",{attrs:{id:"view-视图属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-视图属性"}},[t._v("#")]),t._v(" View 视图属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("属性值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("center")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://openlayers.org/en/latest/apidoc/module-ol_coordinate.html#~Coordinate",target:"_blank",rel:"noopener noreferrer"}},[t._v("💛ol / coordinate〜Coordinate🖐️"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("视图的初始中心 如果未设置用户投影，则使用projection选项指定中心的坐标系。如果未设置，则不会获取图层源，但是稍后可以使用设置中心#setCenter。")])]),t._v(" "),e("tr",[e("td",[t._v("constrainRotation")]),t._v(" "),e("td",[t._v("布尔/数字 (默认为true)")]),t._v(" "),e("td",[t._v("旋转约束。 false表示没有约束。true表示没有约束，但会在接近零的位置捕捉​​到零。数字将旋转限制为该数量的值。例如，4将旋转限制为0、90、180和270度。")])]),t._v(" "),e("tr",[e("td",[t._v("enableRotation")]),t._v(" "),e("td",[t._v("布尔值 (默认为true)")]),t._v(" "),e("td",[t._v("启用旋转。如果为false，则使用始终将旋转设置为零的旋转约束。constrainRotation如果enableRotation为false，则该选项无效。")])]),t._v(" "),e("tr",[e("td",[t._v("extent")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://openlayers.org/en/latest/apidoc/module-ol_extent.html#~Extent",target:"_blank",rel:"noopener noreferrer"}},[t._v("💛module:ol/extent~Extent🖐️"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("限制视图的范围，换句话说，超出此范围的任何内容都无法在地图上看到。")])]),t._v(" "),e("tr",[e("td",[t._v("constrainOnlyCenter")]),t._v(" "),e("td",[t._v("布尔值 (默认为false)")]),t._v(" "),e("td",[t._v("如果为true，则范围约束将仅适用于视图中心，而不适用于整个范围。")])]),t._v(" "),e("tr",[e("td",[t._v("smoothExtentConstraint")]),t._v(" "),e("td",[t._v("布尔值 (默认为true)")]),t._v(" "),e("td",[t._v("如果为true，则范围约束将被平滑应用，即允许视图稍微超出给定范围extent。")])]),t._v(" "),e("tr",[e("td",[t._v("maxResolution")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("用于确定分辨率约束的最大分辨率。它与minResolution(或 maxZoom)和一起使用zoomFactor。如果未指定，则以投影的有效范围适合256x256 px瓦片的方式进行计算。如果投影是“球形墨卡托”(默认)，则maxResolution默认为40075016.68557849 / 256 = 156543.03392804097。")])]),t._v(" "),e("tr",[e("td",[t._v("minResolution")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("用于确定分辨率约束的最小分辨率。它与maxResolution(或 minZoom)和一起使用zoomFactor。如果未指定，则假定使用29个缩放级别(系数为2)进行计算。如果投影是“球形墨卡托”(默认)，则minResolution默认为 40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253。")])]),t._v(" "),e("tr",[e("td",[t._v("maxZoom")]),t._v(" "),e("td",[t._v("number (默认为28)")]),t._v(" "),e("td",[t._v("用于确定分辨率约束的最大缩放级别。它与minZoom(或 maxResolution)和一起使用zoomFactor。请注意，如果minResolution还提供，则优先于maxZoom。")])]),t._v(" "),e("tr",[e("td",[t._v("minZoom")]),t._v(" "),e("td",[t._v("number (默认为0)")]),t._v(" "),e("td",[t._v("用于确定分辨率约束的最小缩放级别。它与maxZoom(或 minResolution)和一起使用zoomFactor。请注意，如果maxResolution还提供，则优先于minZoom。")])]),t._v(" "),e("tr",[e("td",[t._v("multiWorld")]),t._v(" "),e("td",[t._v("布尔值 (默认为false)")]),t._v(" "),e("td",[t._v("如果false视图受到限制，则只能看到一个世界，并且无法平移边缘。如果true地图可能在低缩放级别显示多个世界。仅在projection全局时使用。请注意，如果extent还提供，则它具有优先权。")])]),t._v(" "),e("tr",[e("td",[t._v("constrainResolution")]),t._v(" "),e("td",[t._v("布尔值 (默认为false)")]),t._v(" "),e("td",[t._v("如果为true，则在交互后，视图将始终设置为最接近的缩放级别。false表示允许中间缩放级别。")])]),t._v(" "),e("tr",[e("td",[t._v("smoothResolutionConstraint")]),t._v(" "),e("td",[t._v("布尔值 (默认为true)")]),t._v(" "),e("td",[t._v("如果为true，则分辨率最小值/最大值将被平滑应用，即允许视图稍微超过给定的分辨率或缩放范围。")])]),t._v(" "),e("tr",[e("td",[t._v("showFullExtent")]),t._v(" "),e("td",[t._v("布尔值 (默认为false)")]),t._v(" "),e("td",[t._v("允许缩小视图以显示完整的配置范围。默认情况下，在为视图配置了范围时，用户将无法缩小，因此视口在任一维度上都超出了范围。这意味着如果视口比配置范围的纵横比高或宽，则整个范围可能不可见。如果showFullExtent为true，则用户将能够进行缩小，以使视口超过配置的范围的高度或宽度，但不能同时超过两者，从而可以显示整个范围。")])]),t._v(" "),e("tr",[e("td",[t._v("projection")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike",target:"_blank",rel:"noopener noreferrer"}},[t._v("💛ol / proj〜ProjectionLike (默认为'EPSG：3857')🖐️"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("投影。默认值为球形墨卡托")])]),t._v(" "),e("tr",[e("td",[t._v("resolution")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("视图的初始分辨率。单位是projection每像素的单位(例如米/像素)。设置此方法的替代方法是set zoom。如果既未zoom定义也未定义图层源，则可以稍后使用#setZoom或进行设置#setResolution。")])]),t._v(" "),e("tr",[e("td",[t._v("resolutions")]),t._v(" "),e("td",[t._v("array/number")]),t._v(" "),e("td",[t._v("确定分辨率约束的分辨率。如果设置了maxResolution，minResolution， minZoom，maxZoom，和zoomFactor选项都将被忽略。")])]),t._v(" "),e("tr",[e("td",[t._v("rotation")]),t._v(" "),e("td",[t._v("number (默认为0)")]),t._v(" "),e("td",[t._v("视图的初始旋转(弧度)(顺时针正旋转，0表示北)")])]),t._v(" "),e("tr",[e("td",[t._v("zoom")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("仅在resolution未定义的情况下使用。缩放级别，用于计算视图的初始分辨率。")])]),t._v(" "),e("tr",[e("td",[t._v("zoomFactor")]),t._v(" "),e("td",[t._v("number (默认为2)")]),t._v(" "),e("td",[t._v("缩放系数，用于计算相应的分辨率。")])])])]),t._v(" "),e("h2",{attrs:{id:"view-常见的几个属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-常见的几个属性"}},[t._v("#")]),t._v(" view 常见的几个属性")]),t._v(" "),e("ul",[e("li",[t._v("center 是一个坐标[x， y]，表示地图视图的中心位置；")]),t._v(" "),e("li",[t._v("projection 是地图的投影坐标系统，默认为'EPSG：3857'；")]),t._v(" "),e("li",[t._v("zoom 表示地图初始的缩放级别；")])]),t._v(" "),e("h2",{attrs:{id:"view-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-方法"}},[t._v("#")]),t._v(" view 方法")]),t._v(" "),e("h3",{attrs:{id:"简单代码示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单代码示例"}},[t._v("#")]),t._v(" 简单代码示例")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于vue3")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" view "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前视图")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" zoom "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getZoom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前缩放级别")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放大1级")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("zoomIn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setZoom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoom "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置缩放级别")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩小1级")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("zoomOut")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setZoom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoom "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置缩放级别")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩小指定级别且设置地图中心")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("zoomTo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setZoom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("103.931")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.7616")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置地图中心")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"get类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get类"}},[t._v("#")]),t._v(" get类")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("红色标记为常用")])]),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"red"}},[t._v("getCenter")]),t._v(" 获取视图中心，返回一个地图中心的坐标。")],1),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("getZoom")]),t._v(" 获取当前的缩放级别。如果视图不限制分辨率，或者正在进行交互或动画，则此方法可能返回非整数缩放级别。")],1),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("getMaxZoom")]),t._v("  获取视图的最大缩放级别。")],1),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("getMinZoom")]),t._v("  获取视图的最小缩放级别。")],1),t._v(" "),e("li",[t._v("getAnimating 确定视图是否处于动画状态。")]),t._v(" "),e("li",[t._v("getInteracting 确定用户是否正在与视图进行交互，例如平移或缩放。")]),t._v(" "),e("li",[t._v("getKeys 获取对象属性名称的列表。")]),t._v(" "),e("li",[t._v("getMaxResolution 获取视图的最大分辨率。")]),t._v(" "),e("li",[t._v("getMinResolution 获取视图的最低分辨率")]),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("getProjection")]),t._v(" 获取地图使用的”投影坐标系统”，如EPSG:4326；")],1),t._v(" "),e("li",[t._v("getProperties 获取具有所有属性名称和值的对象")]),t._v(" "),e("li",[t._v("getResolution 获取视图分辨率。")]),t._v(" "),e("li",[t._v("getResolutionForExtent 获取提供的范围（以地图单位为单位）和大小（以像素为单位）的分辨率。")]),t._v(" "),e("li",[t._v("getResolutionForZoom 获取缩放级别的分辨率。")]),t._v(" "),e("li",[t._v("getResolutions 获取视图的分辨率。这将返回传递给View的构造函数的分辨率数组，如果未给出则未定义。")]),t._v(" "),e("li",[t._v("getRevision 获取此对象的版本号。每次修改对象时，其版本号都会增加。")]),t._v(" "),e("li",[t._v("getRotation 获取视图旋转。")]),t._v(" "),e("li",[t._v("getZoomForResolution 获取分辨率的缩放级别。")])]),t._v(" "),e("h3",{attrs:{id:"set类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set类"}},[t._v("#")]),t._v(" set类")]),t._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"red"}},[t._v("setCenter")]),t._v(" 设置当前视图的中心。任何范围限制都将适用。")],1),t._v(" "),e("li",[t._v("setConstrainResolution 设置视图是否应允许中间缩放级别。")]),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("setZoom")]),t._v(" 缩放到特定的缩放级别。任何分辨率限制都将适用。")],1),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("setMaxZoom")]),t._v(" 为视图设置新的最大缩放级别。")],1),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("setMinZoom")]),t._v(" 为视图设置新的最小缩放级别。")],1),t._v(" "),e("li",[t._v("setProperties 设置键值对的集合。请注意，这会更改所有现有属性并添加新属性（不会删除任何现有属性）。")]),t._v(" "),e("li",[t._v("setResolution 设置此视图的分辨率。任何分辨率约束都将适用。")]),t._v(" "),e("li",[t._v("setRotation 设置该视图的旋转角度。任何旋转约束都将适用。")])]),t._v(" "),e("h3",{attrs:{id:"其它类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它类"}},[t._v("#")]),t._v(" 其它类")]),t._v(" "),e("ul",[e("li",[t._v("rotate 接受两个参数，旋转角度数（rotation）和旋转中心（opt_anchor，可选），将地图围绕 opt_anchor 旋转 rotation 角度；")]),t._v(" "),e("li",[t._v("ifDef 检查地图的中心和分辨率是否已经设置，都设置返回 true，否则返回 false；")]),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("fitExtent")]),t._v("(extent, size)，接受两个参数：extent 和 size，extent 类型是 ol.Extent – [left, bottom, right, top]，size由map.getSize()获取；该功能类似于 ArcGIS 的缩放到图层功能，将地图的view 缩放到 extent 区域可见的合适尺度；")],1),t._v(" "),e("li",[e("font",{attrs:{color:"red"}},[t._v("fitGeometry")]),t._v("(geometry, size, opt_options)，参数是地理要素，地图尺寸和可选参数；根据给定的地理要素，将 view 缩放到适合地理要素显示的尺寸；")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);