(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/upload-file/upload-file"],{"3ab6":function(e,t,a){},"560f":function(e,t,a){"use strict";a.r(t);var o=a("fe22"),n=a("66fa");for(var c in n)"default"!==c&&function(e){a.d(t,e,function(){return n[e]})}(c);a("dacc");var i=a("2877"),s=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"66fa":function(e,t,a){"use strict";a.r(t);var o=a("bbb0"),n=a.n(o);for(var c in o)"default"!==c&&function(e){a.d(t,e,function(){return o[e]})}(c);t["default"]=n.a},6937:function(e,t,a){"use strict";a("0055");var o=c(a("b0ce")),n=c(a("560f"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(n.default))},bbb0:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(a){console.log("chooseImage success, temp path is",a.tempFilePaths[0]);var o=a.tempFilePaths[0];e.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:o,fileType:"image",name:"data",success:function(a){console.log("uploadImage success, res is:",a),e.showToast({title:"上传成功",icon:"success",duration:1e3}),t.imageSrc=o},fail:function(t){console.log("uploadImage fail",t),e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};t.default=a}).call(this,a("543d")["default"])},dacc:function(e,t,a){"use strict";var o=a("3ab6"),n=a.n(o);n.a},fe22:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("page-head",{attrs:{title:e.title,mpcomid:"47da5a93-0"}}),a("view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("view",{staticClass:"demo"},[e.imageSrc?a("block",[a("image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]):a("block",[a("view",{staticClass:"uni-hello-addfile",attrs:{eventid:"47da5a93-0"},on:{click:e.chooseImage}},[e._v("+ 选择图片")])])],1)])],1)},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})}},[["6937","common/runtime","common/vendor"]]]);