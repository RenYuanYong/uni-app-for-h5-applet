(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/API/get-network-type/get-network-type"],{"15a2":function(t,e,n){"use strict";n.r(e);var i=n("8128"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"2c8c":function(t,e,n){"use strict";n("0055");var i=r(n("b30b")),a=r(n("3a53"));function r(t){return t&&t.__esModule?t:{default:t}}i.default.mpType="page";var o=new a.default(i.default);o.$mount()},"7f22":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{attrs:{_hid:0}},[n("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),n("view",{staticClass:"uni-padding-wrap uni-common-mt",attrs:{_hid:1003}},[n("view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"},attrs:{_hid:1004}},[n("view",{staticClass:"uni-hello-text uni-center",attrs:{_hid:1005}},[]),t._ri(!(!1!==t.hasNetworkType),1007)?n("block",{attrs:{_hid:1007}},[n("view",{staticClass:"uni-h2 uni-center uni-common-mt",attrs:{_hid:1008}},[]),n("view",{staticClass:"uni-hello-text uni-center uni-common-mt",attrs:{_hid:1010}},[])]):t._e(),t._ri(!(!0!==t.hasNetworkType),1012)?n("block",{attrs:{_hid:1012}},[n("view",{staticClass:"uni-h2 uni-center uni-common-mt",attrs:{_hid:1013}},[t._v(t._s(t.networkType),1014)])]):t._e()],1),n("view",{staticClass:"uni-btn-v uni-common-mt",attrs:{_hid:1015}},[n("button",{attrs:{type:"primary",_hid:1016},on:{tap:t.getNetworkType}},[]),n("button",{attrs:{_hid:1018},on:{tap:t.clear}},[])],1)])],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},8128:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var e=this;t.getNetworkType({success:function(t){console.log(t),e.hasNetworkType=!0,e.networkType=t.subtype||t.networkType},fail:function(){t.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType=""}}};e.default=n}).call(this,n("c11b")["default"])},b30b:function(t,e,n){"use strict";n.r(e);var i=n("7f22"),a=n("15a2");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports}},[["2c8c","common/runtime","common/vendor"]]]);