(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/component/form/form"],{1031:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{attrs:{_hid:0}},[e("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),e("view",{staticClass:"uni-padding-wrap uni-common-mt",attrs:{_hid:1003}},[e("form",{attrs:{_hid:1004},on:{submit:t.formSubmit,reset:t.formReset}},[e("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1005}},[e("view",{staticClass:"title",attrs:{_hid:1006}},[]),e("view",{attrs:{_hid:1008}},[e("switch",{attrs:{name:"switch",_hid:1009}})])]),e("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1010}},[e("view",{staticClass:"title",attrs:{_hid:1011}},[]),e("radio-group",{attrs:{name:"radio",_hid:1013}},[e("label",{attrs:{_hid:1014}},[e("radio",{attrs:{value:"radio1",_hid:1015}})],1),e("label",{attrs:{_hid:1017}},[e("radio",{attrs:{value:"radio2",_hid:1018}})],1)],1)],1),e("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1020}},[e("view",{staticClass:"title",attrs:{_hid:1021}},[]),e("checkbox-group",{attrs:{name:"checkbox",_hid:1023}},[e("label",{attrs:{_hid:1024}},[e("checkbox",{attrs:{value:"checkbox1",_hid:1025}})],1),e("label",{attrs:{_hid:1027}},[e("checkbox",{attrs:{value:"checkbox2",_hid:1028}})],1)],1)],1),e("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1030}},[e("view",{staticClass:"title",attrs:{_hid:1031}},[]),e("slider",{attrs:{value:"50",name:"slider","show-value":"true",_hid:1033}})]),e("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1034}},[e("view",{staticClass:"title",attrs:{_hid:1035}},[]),e("input",{staticClass:"uni-input",attrs:{name:"input",placeholder:"这是一个输入框",_hid:1037}})]),e("view",{staticClass:"uni-btn-v",attrs:{_hid:1038}},[e("button",{attrs:{formType:"submit",_hid:1039}},[]),e("button",{attrs:{type:"default",formType:"reset",_hid:1041}},[])],1)])],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"3da9":function(t,i,e){"use strict";var a=e("c8cd"),s=e.n(a);s.a},"45f2":function(t,i,e){"use strict";e("0055");var a=r(e("9efa")),s=r(e("3a53"));function r(t){return t&&t.__esModule?t:{default:t}}a.default.mpType="page";var n=new s.default(a.default);n.$mount()},5215:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{title:"form",pickerHidden:!0,chosen:""}},methods:{pickerConfirm:function(t){this.pickerHidden=!0,this.chosen=t.target.value},pickerCancel:function(t){this.pickerHidden=!0},pickerShow:function(t){this.pickerHidden=!1},formSubmit:function(t){console.log("form发生了submit事件，携带数据为："+JSON.stringify(t.detail.value))},formReset:function(t){console.log("清空数据"),this.chosen=""}}};i.default=a},"9efa":function(t,i,e){"use strict";e.r(i);var a=e("1031"),s=e("e234");for(var r in s)"default"!==r&&function(t){e.d(i,t,function(){return s[t]})}(r);e("3da9");var n=e("2877"),u=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);i["default"]=u.exports},c8cd:function(t,i,e){},e234:function(t,i,e){"use strict";e.r(i);var a=e("5215"),s=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);i["default"]=s.a}},[["45f2","common/runtime","common/vendor"]]]);