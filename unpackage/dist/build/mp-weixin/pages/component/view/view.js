(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/view/view"],{"176e":function(t,e,i){"use strict";var s=i("3707"),a=i.n(s);a.a},2162:function(t,e,i){"use strict";i.r(e);var s=i("d5d8"),a=i("3a4e");for(var l in a)"default"!==l&&function(t){i.d(e,t,function(){return a[t]})}(l);i("176e");var n=i("2877"),c=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},3707:function(t,e,i){},"3a4e":function(t,e,i){"use strict";i.r(e);var s=i("4235"),a=i.n(s);for(var l in s)"default"!==l&&function(t){i.d(e,t,function(){return s[t]})}(l);e["default"]=a.a},4235:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{title:"view"}}};e.default=s},"8e67":function(t,e,i){"use strict";i("0055");var s=l(i("b0ce")),a=l(i("2162"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},d5d8:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"39980be4-0"}}),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("view",{staticClass:"uni-hello-text"},[t._v("Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。当设置display: flex后，继续给view等容器组件设置flex-direction: row或column，就可以在该容器内按行或列排布子组件。uni-app默认全局使用flex布局(在App.vue里预设了)。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。")]),i("view",{staticClass:"uni-title uni-common-mt"},[t._v("flex-direction: row"),i("text",[t._v("\\n横向布局")])]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"flex-item uni-bg-red"},[t._v("A")]),i("view",{staticClass:"flex-item uni-bg-green"},[t._v("B")]),i("view",{staticClass:"flex-item uni-bg-blue"},[t._v("C")])]),i("view",{staticClass:"uni-title uni-common-mt"},[t._v("flex-direction: column"),i("text",[t._v("\\n纵向布局")])]),i("view",{staticClass:"uni-flex uni-column"},[i("view",{staticClass:"flex-item flex-item-V uni-bg-red"},[t._v("A")]),i("view",{staticClass:"flex-item flex-item-V uni-bg-green"},[t._v("B")]),i("view",{staticClass:"flex-item flex-item-V uni-bg-blue"},[t._v("C")])]),i("view",{staticClass:"uni-title uni-common-mt"},[t._v("更多布局示例"),i("text",[t._v("\\nflex布局演示")])]),i("view",[i("view",{staticClass:"text"},[t._v("纵向布局-自动宽度")]),i("view",{staticClass:"text",staticStyle:{width:"300rpx"}},[t._v("纵向布局-固定宽度")]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"text"},[t._v("横向布局-自动宽度")]),i("view",{staticClass:"text"},[t._v("横向布局-自动宽度")])]),i("view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"center"}},[i("view",{staticClass:"text"},[t._v("横向布局-居中")]),i("view",{staticClass:"text"},[t._v("横向布局-居中")])]),i("view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"flex-end"}},[i("view",{staticClass:"text"},[t._v("横向布局-居右")]),i("view",{staticClass:"text"},[t._v("横向布局-居右")])]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"text",staticStyle:{flex:"1"}},[t._v("横向布局-平均分布")]),i("view",{staticClass:"text",staticStyle:{flex:"1"}},[t._v("横向布局-平均分布")])]),i("view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"space-between"}},[i("view",{staticClass:"text"},[t._v("横向布局-两端对齐")]),i("view",{staticClass:"text"},[t._v("横向布局-两端对齐")])]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"text",staticStyle:{width:"200rpx"}},[t._v("固定宽度")]),i("view",{staticClass:"text",staticStyle:{flex:"1"}},[t._v("自动占满余量")])]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"text",staticStyle:{width:"200rpx"}},[t._v("固定宽度")]),i("view",{staticClass:"text",staticStyle:{flex:"1"}},[t._v("自动占满")]),i("view",{staticClass:"text",staticStyle:{width:"200rpx"}},[t._v("固定宽度")])]),i("view",{staticClass:"uni-flex uni-row",staticStyle:{"flex-wrap":"wrap"}},[i("view",{staticClass:"text",staticStyle:{width:"280rpx"}},[t._v("一行显示不全,wrap折行")]),i("view",{staticClass:"text",staticStyle:{width:"280rpx"}},[t._v("一行显示不全,wrap折行")]),i("view",{staticClass:"text",staticStyle:{width:"280rpx"}},[t._v("一行显示不全,wrap折行")])]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"text",staticStyle:{flex:"1",height:"200rpx",display:"flex","justify-content":"center","align-items":"flex-start"}},[i("text",[t._v("垂直居顶")])]),i("view",{staticClass:"text",staticStyle:{flex:"1",height:"200rpx",display:"flex","justify-content":"center","align-items":"center"}},[i("text",[t._v("垂直居中")])]),i("view",{staticClass:"text",staticStyle:{flex:"1",height:"200rpx",display:"flex","justify-content":"center","align-items":"flex-end"}},[i("text",[t._v("垂直居底")])])])]),i("view",{staticClass:"uni-title uni-common-mt"},[t._v("组合示例"),i("text",[t._v("\\nflex布局演示")])]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"text",staticStyle:{width:"200rpx",height:"220rpx",display:"flex","justify-content":"center","align-items":"center"}},[i("image",{staticStyle:{width:"150rpx",height:"150rpx"},attrs:{src:"../../../static/plus.png"}})]),i("view",{staticClass:"uni-flex uni-column",staticStyle:{flex:"1","justify-content":"space-between"}},[i("view",{staticClass:"text",staticStyle:{height:"120rpx","text-align":"left","padding-left":"20rpx","padding-top":"10rpx"}},[t._v("文字居左，留出左间距")]),i("view",{staticClass:"uni-flex uni-row"},[i("view",{staticClass:"text",staticStyle:{flex:"1"}},[t._v("剩余数量")]),i("view",{staticClass:"text",staticStyle:{flex:"1"}},[t._v("立即购买")])])])])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})}},[["8e67","common/runtime","common/vendor"]]]);