(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/scroll-view/scroll-view"],{"10fa":function(t,e,l){},"1abd":function(t,e,l){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l={data:function(){return{title:"scroll-view",scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(t){console.log(t)},lower:function(t){console.log(t)},scroll:function(t){console.log(t),this.old.scrollTop=t.detail.scrollTop},goTop:function(e){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),t.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};e.default=l}).call(this,l("543d")["default"])},3694:function(t,e,l){"use strict";var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("view",[l("page-head",{attrs:{title:t.title,mpcomid:"808a08e0-0"}}),l("view",{staticClass:"uni-padding-wrap uni-common-mt"},[t._m(0),l("view",[l("scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true",eventid:"808a08e0-0"},on:{scrolltoupper:t.upper,scrolltolower:t.lower,scroll:t.scroll}},[l("view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),l("view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),l("view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])])],1),l("view",{staticClass:"uni-link uni-center uni-common-mt",attrs:{eventid:"808a08e0-1"},on:{tap:t.goTop}},[t._v("点击这里返回顶部")]),t._m(1),l("view",[l("scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120",eventid:"808a08e0-2"},on:{scroll:t.scroll}},[l("view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),l("view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),l("view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])])],1)])],1)},i=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),l("text",[t._v("\\n纵向滚动")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),l("text",[t._v("\\n横向滚动")])])}];l.d(e,"a",function(){return o}),l.d(e,"b",function(){return i})},"56fa":function(t,e,l){"use strict";l.r(e);var o=l("1abd"),i=l.n(o);for(var n in o)"default"!==n&&function(t){l.d(e,t,function(){return o[t]})}(n);e["default"]=i.a},"70a9":function(t,e,l){"use strict";var o=l("10fa"),i=l.n(o);i.a},b228:function(t,e,l){"use strict";l("0055");var o=n(l("b0ce")),i=n(l("c54c"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},c54c:function(t,e,l){"use strict";l.r(e);var o=l("3694"),i=l("56fa");for(var n in i)"default"!==n&&function(t){l.d(e,t,function(){return i[t]})}(n);l("70a9");var s=l("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports}},[["b228","common/runtime","common/vendor"]]]);