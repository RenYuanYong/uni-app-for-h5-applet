(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/API/modal/modal"],{"864f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"modal",modalHidden:!0,modalHidden2:!0}},methods:{modalTap:function(n){t.showModal({title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,confirmText:"确定"})},noTitlemodalTap:function(n){t.showModal({content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",confirmText:"确定",cancelText:"取消"})}}};n.default=e}).call(this,e("c11b")["default"])},"884f":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{attrs:{_hid:0}},[e("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),e("view",{staticClass:"uni-padding-wrap uni-common-mt",attrs:{_hid:1003}},[e("view",{staticClass:"uni-btn-v",attrs:{_hid:1004}},[e("button",{attrs:{type:"default",_hid:1005},on:{tap:t.modalTap}},[]),e("button",{attrs:{type:"default",_hid:1007},on:{tap:t.noTitlemodalTap}},[])],1)])],1)},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},9237:function(t,n,e){"use strict";e.r(n);var a=e("864f"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a},c797:function(t,n,e){"use strict";e("0055");var a=u(e("d2d8")),o=u(e("3a53"));function u(t){return t&&t.__esModule?t:{default:t}}a.default.mpType="page";var i=new o.default(a.default);i.$mount()},d2d8:function(t,n,e){"use strict";e.r(n);var a=e("884f"),o=e("9237");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);var i=e("2877"),d=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=d.exports}},[["c797","common/runtime","common/vendor"]]]);