(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/set-navigation-bar-title/set-navigation-bar-title"],{"338a":function(t,e,i){"use strict";i.r(e);var a=i("91b1"),n=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,function(){return a[t]})}(l);e["default"]=n.a},"788e":function(t,e,i){"use strict";i.r(e);var a=i("b215"),n=i("338a");for(var l in n)"default"!==l&&function(t){i.d(e,t,function(){return n[t]})}(l);var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"91b1":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"setNaivgationBarTitle"}},methods:{setNaivgationBarTitle:function(e){var i=e.detail.value.title;t.setNavigationBarTitle({title:i,success:function(){console.log("setNavigationBarTitle success")},fail:function(t){console.log("setNavigationBarTitle fail, err is",t)}})}}};e.default=i}).call(this,i("543d")["default"])},b215:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"6afaed41-0"}}),i("view",[i("form",{attrs:{eventid:"6afaed41-0"},on:{submit:t.setNaivgationBarTitle}},[i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("页面标题")]),i("view",{staticClass:"uni-list-cell-db"},[i("input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入页面标题并点击设置即可",name:"title"}})])])]),i("view",{staticClass:"uni-padding-wrap"},[i("view",{staticClass:"uni-btn-v"},[i("button",{attrs:{type:"primary",formType:"submit"}},[t._v("设置")])],1)])])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},dc98:function(t,e,i){"use strict";i("0055");var a=l(i("b0ce")),n=l(i("788e"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))}},[["dc98","common/runtime","common/vendor"]]]);