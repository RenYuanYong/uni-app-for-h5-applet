(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-system-info/get-system-info"],{"0b45":function(t,e,s){"use strict";s.r(e);var i=s("4c51"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},"49d9":function(t,e,s){"use strict";s.r(e);var i=s("5db2"),a=s("0b45");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("4f9b");var l=s("2877"),u=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"4c51":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{title:"getSystemInfo",systemInfo:{}}},onUnload:function(){this.systemInfo={}},methods:{getSystemInfo:function(){var e=this;t.getSystemInfo({success:function(t){e.systemInfo=t}})}}};e.default=s}).call(this,s("543d")["default"])},"4f9b":function(t,e,s){"use strict";var i=s("5e35"),a=s.n(i);a.a},"5db2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("page-head",{attrs:{title:t.title,mpcomid:"2b638ca6-0"}}),s("view",{staticClass:"uni-common-mt"},[s("view",{staticClass:"uni-list"},[s("view",{staticClass:"uni-list-cell"},[t._m(0),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.model}})])]),s("view",{staticClass:"uni-list-cell"},[t._m(1),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.language}})])]),s("view",{staticClass:"uni-list-cell"},[t._m(2),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.version}})])]),s("view",{staticClass:"uni-list-cell"},[t._m(3),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.windowWidth}})])]),s("view",{staticClass:"uni-list-cell"},[t._m(4),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.windowHeight}})])]),s("view",{staticClass:"uni-list-cell"},[t._m(5),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.pixelRatio}})])])]),s("view",{staticClass:"uni-padding-wrap"},[s("view",{staticClass:"uni-btn-v"},[s("button",{attrs:{type:"primary",eventid:"2b638ca6-0"},on:{tap:t.getSystemInfo}},[t._v("获取手机系统信息")])],1)])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-pd"},[s("view",{staticClass:"uni-label"},[t._v("手机型号")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-pd"},[s("view",{staticClass:"uni-label"},[t._v("语言")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-pd"},[s("view",{staticClass:"uni-label"},[t._v("版本")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-pd"},[s("view",{staticClass:"uni-label"},[t._v("屏幕宽度")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-pd"},[s("view",{staticClass:"uni-label"},[t._v("屏幕高度")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-pd"},[s("view",{staticClass:"uni-label"},[t._v("DPI")])])}];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},"5e35":function(t,e,s){},b3f0:function(t,e,s){"use strict";s("0055");var i=n(s("b0ce")),a=n(s("49d9"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))}},[["b3f0","common/runtime","common/vendor"]]]);