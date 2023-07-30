(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{554:function(t,e,v){t.exports=v.p+"assets/img/vue3_life_circle.b149efa0.png"},713:function(t,e,v){"use strict";v.r(e);var _=v(25),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"vue3生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue3生命周期"}},[t._v("#")]),t._v(" vue3生命周期")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("ul",[_("li",[t._v("Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：\n"),_("ul",[_("li",[t._v("beforeDestroy 改名为 beforeUnmount")]),t._v(" "),_("li",[t._v("destroyed 改名为 unmounted")]),t._v(" "),_("li",[t._v("也就是说在vue3中使用选项式API上面两个需要改名才能使用")])])])])]),t._v(" "),_("h2",{attrs:{id:"注意点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),_("ul",[_("li",[t._v("beforeCreate和setup如果同为配置项，setup先于beforeCreate执行。")]),t._v(" "),_("li",[t._v("组合式api,你需要先通过引入，然后在setup中使用。都是一个个的函数。")]),t._v(" "),_("li",[t._v("如果同一个生命周期钩子，在setup里面配置，同时也做了配置项，那么会发现在setup中执行的早于做配置项的")])]),t._v(" "),_("p",[t._v("Composition API 形式的生命周期钩子")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("v3选项式API")]),t._v(" "),_("th",[t._v("Hooks inside setup")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("beforeCreate")]),t._v(" "),_("td",[t._v("不需要")])]),t._v(" "),_("tr",[_("td",[t._v("created")]),t._v(" "),_("td",[t._v("不需要")])]),t._v(" "),_("tr",[_("td",[t._v("beforeMount")]),t._v(" "),_("td",[t._v("onBeforeMount")])]),t._v(" "),_("tr",[_("td",[t._v("mounted")]),t._v(" "),_("td",[t._v("onMounted")])]),t._v(" "),_("tr",[_("td",[t._v("beforeUpdate")]),t._v(" "),_("td",[t._v("onBeforeUpdate")])]),t._v(" "),_("tr",[_("td",[t._v("updated")]),t._v(" "),_("td",[t._v("onUpdated")])]),t._v(" "),_("tr",[_("td",[t._v("beforeUnmount")]),t._v(" "),_("td",[t._v("onBeforeUnmount")])]),t._v(" "),_("tr",[_("td",[t._v("unmounted(全小写)")]),t._v(" "),_("td",[t._v("onUnmounted")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:v(554),alt:"生命周期示意图"}})])])}),[],!1,null,null,null);e.default=o.exports}}]);