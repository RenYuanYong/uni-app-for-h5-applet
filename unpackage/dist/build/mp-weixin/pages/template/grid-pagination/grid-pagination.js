(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/grid-pagination/grid-pagination"],{"2d09":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"232e4517-0"}}),a("view",{staticClass:"uni-list",staticStyle:{"margin-top":"30px"}},[a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",{staticClass:"uni-list-cell-db"},[t._v("循环")]),a("switch",{attrs:{eventid:"232e4517-0"},on:{change:t.switchChange}})])]),a("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,circular:t.isCircular}},[a("swiper-item",{attrs:{mpcomid:"232e4517-1"}},[a("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,s){return a("view",{key:s,staticClass:"uni-grid-9-item",class:s%3===2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[a("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),a("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))]),a("swiper-item",{attrs:{mpcomid:"232e4517-2"}},[a("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,s){return a("view",{key:s,staticClass:"uni-grid-9-item",class:s%3===2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[a("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),a("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))]),a("swiper-item",{attrs:{mpcomid:"232e4517-3"}},[a("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,s){return a("view",{key:s,staticClass:"uni-grid-9-item",class:s%3===2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[a("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),a("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))])],1)],1)},e=[];a.d(i,"a",function(){return s}),a.d(i,"b",function(){return e})},"2df5":function(t,i,a){"use strict";var s=a("a57b"),e=a.n(s);e.a},"5c9a":function(t,i,a){"use strict";a.r(i);var s=a("ef80"),e=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(i,t,function(){return s[t]})}(r);i["default"]=e.a},"6ca6":function(t,i,a){"use strict";a.r(i);var s=a("2d09"),e=a("5c9a");for(var r in e)"default"!==r&&function(t){a.d(i,t,function(){return e[t]})}(r);a("2df5");var n=a("2877"),c=Object(n["a"])(e["default"],s["a"],s["b"],!1,null,null,null);i["default"]=c.exports},a57b:function(t,i,a){},a785:function(t,i,a){"use strict";a("0055");var s=r(a("b0ce")),e=r(a("6ca6"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},ef80:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{title:"grid",grids:["../../../static/c1.png","../../../static/c2.png","../../../static/c3.png","../../../static/c4.png","../../../static/c5.png","../../../static/c6.png","../../../static/c7.png","../../../static/c8.png","../../../static/c9.png"],isCircular:!1}},methods:{switchChange:function(t){this.isCircular=t.detail.value}}};i.default=s}},[["a785","common/runtime","common/vendor"]]]);