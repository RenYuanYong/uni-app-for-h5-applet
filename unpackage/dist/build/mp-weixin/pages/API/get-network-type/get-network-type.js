(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-network-type/get-network-type"],{"15a2":function(t,e,n){"use strict";n.r(e);var o=n("8128"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"2c8c":function(t,e,n){"use strict";n("0055");var o=a(n("b0ce")),i=a(n("b30b"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},"7f22":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("page-head",{attrs:{title:t.title,mpcomid:"7933e77e-0"}}),n("view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[n("view",{staticClass:"uni-hello-text uni-center"},[t._v("网络状态")]),!1===t.hasNetworkType?n("block",[n("view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")]),n("view",{staticClass:"uni-hello-text uni-center uni-common-mt"},[t._v("请点击下面按钮获取网络状态")])]):t._e(),!0===t.hasNetworkType?n("block",[n("view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v(t._s(t.networkType))])]):t._e()],1),n("view",{staticClass:"uni-btn-v uni-common-mt"},[n("button",{attrs:{type:"primary",eventid:"7933e77e-0"},on:{tap:t.getNetworkType}},[t._v("获取手机网络状态")]),n("button",{attrs:{eventid:"7933e77e-1"},on:{tap:t.clear}},[t._v("清空")])],1)])],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},8128:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var e=this;t.getNetworkType({success:function(t){console.log(t),e.hasNetworkType=!0,e.networkType=t.subtype||t.networkType},fail:function(){t.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType=""}}};e.default=n}).call(this,n("543d")["default"])},b30b:function(t,e,n){"use strict";n.r(e);var o=n("7f22"),i=n("15a2");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var r=n("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports}},[["2c8c","common/runtime","common/vendor"]]]);