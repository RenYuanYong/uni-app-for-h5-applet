(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/make-phone-call/make-phone-call"],{"21e7":function(t,e,n){},"486e":function(t,e,n){"use strict";n("0055");var a=i(n("b0ce")),u=i(n("7a3e"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(u.default))},"57c7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(t){this.inputValue=t.target.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){t.makePhoneCall({phoneNumber:this.inputValue,success:function(){console.log("成功拨打电话")}})}}};e.default=n}).call(this,n("543d")["default"])},"7a3e":function(t,e,n){"use strict";n.r(e);var a=n("9acf"),u=n("c269");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("fc82");var l=n("2877"),c=Object(l["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"9acf":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("page-head",{attrs:{title:t.title,mpcomid:"7485a9bb-0"}}),n("view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("view",{staticClass:"uni-hello-text uni-center"},[t._v("请在下方输入电话号码")]),n("input",{staticClass:"input uni-common-mt",attrs:{type:"number",name:"input",eventid:"7485a9bb-0"},on:{input:t.bindInput}}),n("view",{staticClass:"uni-btn-v uni-common-mt"},[n("button",{attrs:{type:"primary",disabled:t.disabled,eventid:"7485a9bb-1"},on:{tap:t.makePhoneCall}},[t._v("拨打")])],1)])],1)},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},c269:function(t,e,n){"use strict";n.r(e);var a=n("57c7"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},fc82:function(t,e,n){"use strict";var a=n("21e7"),u=n.n(a);u.a}},[["486e","common/runtime","common/vendor"]]]);