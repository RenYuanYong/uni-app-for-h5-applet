(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/input/input"],{"06f2":function(t,e,i){"use strict";i.r(e);var n=i("86a6"),a=i("dc9a");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("5ce9");var u=i("2877"),c=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"5ce9":function(t,e,i){"use strict";var n=i("d811"),a=i.n(n);a.a},"7d51":function(t,e,i){"use strict";i("0055");var n=s(i("b0ce")),a=s(i("06f2"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},"86a6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"7ca1bfcc-0"}}),i("view",{staticClass:"uni-common-mt"},[t._m(0),t._m(1),t._m(2),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("实时获取输入值："+t._s(t.inputValue))]),i("input",{staticClass:"uni-input",attrs:{placeholder:"输入同步到view中",eventid:"7ca1bfcc-0"},on:{input:t.onKeyInput}})]),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("控制输入的input")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.changeValue,expression:"changeValue"}],staticClass:"uni-input",attrs:{placeholder:"连续的两个1会变成2",eventid:"7ca1bfcc-1"},domProps:{value:t.changeValue},on:{input:[function(e){e.target.composing||(t.changeValue=e.target.value)},t.replaceInput]}})]),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("控制键盘的input")]),i("input",{ref:"input1",staticClass:"uni-input",attrs:{placeholder:"输入123自动收起键盘",eventid:"7ca1bfcc-2"},on:{input:t.hideKeyboard}})]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("带清除按钮的输入框")]),i("view",{staticClass:"with-fun"},[i("input",{staticClass:"uni-input",attrs:{placeholder:"带清除按钮的输入框",value:t.inputClearValue,eventid:"7ca1bfcc-3"},on:{input:t.clearInput}}),t.showClearIcon?i("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"7ca1bfcc-4"},on:{click:t.clearIcon}}):t._e()])]),i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("可查看密码的输入框")]),i("view",{staticClass:"with-fun"},[i("input",{staticClass:"uni-input",attrs:{placeholder:"请输入密码",password:t.showPassword}}),i("view",{staticClass:"uni-icon uni-icon-eye",class:[t.showPassword?"":"uni-active"],attrs:{eventid:"7ca1bfcc-5"},on:{click:t.changePassword}})])])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("可自动聚焦的input")]),i("input",{staticClass:"uni-input",attrs:{focus:"",placeholder:"自动获得焦点"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("键盘右下角按钮显示为搜索")]),i("input",{staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"键盘右下角按钮显示为搜索"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("控制最大输入长度的input")]),i("input",{staticClass:"uni-input",attrs:{maxlength:"10",placeholder:"最大输入长度为10"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("数字输入的input")]),i("input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"这是一个数字输入框"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("密码输入的input")]),i("input",{staticClass:"uni-input",attrs:{password:"",type:"text",placeholder:"这是一个密码输入框"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("带小数点的input")]),i("input",{staticClass:"uni-input",attrs:{type:"digit",placeholder:"带小数点的数字键盘"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("身份证输入的input")]),i("input",{staticClass:"uni-input",attrs:{type:"idcard",placeholder:"身份证输入键盘"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-form-item uni-column"},[i("view",{staticClass:"title"},[t._v("控制占位符颜色的input")]),i("input",{staticClass:"uni-input",attrs:{"placeholder-style":"color:#F76260",placeholder:"占位符字体是红色的"}})])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},d396:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"input",focus:!1,inputValue:"",showClearIcon:!1,inputClearValue:"",changeValue:"",showPassword:!0,src:"../../../static/eye-1.png"}},methods:{onKeyInput:function(t){this.inputValue=t.target.value},replaceInput:function(t){var e=t.target.value;"11"===e&&(this.changeValue="2")},hideKeyboard:function(e){"123"===e.target.value&&t.hideKeyboard()},clearInput:function(t){this.inputClearValue=t.target.value,t.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},changePassword:function(){this.showPassword=!this.showPassword}}};e.default=i}).call(this,i("543d")["default"])},d811:function(t,e,i){},dc9a:function(t,e,i){"use strict";i.r(e);var n=i("d396"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a}},[["7d51","common/runtime","common/vendor"]]]);