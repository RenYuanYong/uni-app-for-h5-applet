(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/open-location/open-location"],{"1ad2":function(t,i,a){"use strict";a("0055");var e=l(a("b0ce")),s=l(a("6862"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))},6862:function(t,i,a){"use strict";a.r(i);var e=a("bcd4"),s=a("ba7a");for(var l in s)"default"!==l&&function(t){a.d(i,t,function(){return s[t]})}(l);a("fa7a");var n=a("2877"),u=Object(n["a"])(s["default"],e["a"],e["b"],!1,null,null,null);i["default"]=u.exports},9449:function(t,i,a){},ba7a:function(t,i,a){"use strict";a.r(i);var e=a("ed55"),s=a.n(e);for(var l in e)"default"!==l&&function(t){a.d(i,t,function(){return e[t]})}(l);i["default"]=s.a},bcd4:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"5fa4d773-0"}}),a("view",{staticClass:"uni-common-mt"},[a("form",{attrs:{eventid:"5fa4d773-0"},on:{submit:t.openLocation}},[a("view",{staticClass:"uni-list"},[a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[a("view",{staticClass:"uni-label"},[t._v("经度")])]),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"116.39747",name:"longitude"}})])]),a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[a("view",{staticClass:"uni-label"},[t._v("纬度")])]),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"39.9085",name:"latitude"}})])]),a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[a("view",{staticClass:"uni-label"},[t._v("位置名称")])]),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"天安门",name:"name"}})])]),a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[a("view",{staticClass:"uni-label"},[t._v("详细位置")])]),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"}})])])]),a("view",{staticClass:"uni-padding-wrap"},[a("view",{staticClass:"uni-btn-v uni-common-mt"},[a("button",{attrs:{type:"primary",formType:"submit"}},[t._v("查看位置")])],1)])])],1)],1)},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},ed55:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{title:"openLocation"}},methods:{openLocation:function(i){console.log(i);var a=i.target.value;t.openLocation({longitude:Number(a.longitude),latitude:Number(a.latitude),name:a.name,address:a.address})}}};i.default=a}).call(this,a("543d")["default"])},fa7a:function(t,i,a){"use strict";var e=a("9449"),s=a.n(e);s.a}},[["1ad2","common/runtime","common/vendor"]]]);