(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/component/swiper/swiper"],{"05c2":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{title:"swiper",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};i.default=s},"1df5":function(t,i,a){"use strict";var s=a("63d5"),e=a.n(s);e.a},3966:function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{attrs:{_hid:0}},[a("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),a("view",{staticClass:"uni-padding-wrap",attrs:{_hid:1003}},[a("view",{staticClass:"page-section swiper",attrs:{_hid:1004}},[a("view",{staticClass:"page-section-spacing",attrs:{_hid:1005}},[a("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,_hid:1006,_batrs:"indicator-dots,autoplay,interval,duration"}},[a("swiper-item",{attrs:{_hid:1007}},[a("view",{staticClass:"swiper-item uni-bg-red",attrs:{_hid:1008}},[])]),a("swiper-item",{attrs:{_hid:1010}},[a("view",{staticClass:"swiper-item uni-bg-green",attrs:{_hid:1011}},[])]),a("swiper-item",{attrs:{_hid:1013}},[a("view",{staticClass:"swiper-item uni-bg-blue",attrs:{_hid:1014}},[])])],1)],1)])]),a("view",{staticClass:"swiper-list",attrs:{_hid:1016}},[a("view",{staticClass:"uni-list-cell uni-list-cell-pd",attrs:{_hid:1017}},[a("view",{staticClass:"uni-list-cell-db",attrs:{_hid:1018}},[]),a("switch",{attrs:{checked:t.indicatorDots,_hid:1020,_batrs:"checked"},on:{change:t.changeIndicatorDots}})]),a("view",{staticClass:"uni-list-cell uni-list-cell-pd",attrs:{_hid:1021}},[a("view",{staticClass:"uni-list-cell-db",attrs:{_hid:1022}},[]),a("switch",{attrs:{checked:t.autoplay,_hid:1024,_batrs:"checked"},on:{change:t.changeAutoplay}})])]),a("view",{staticClass:"uni-padding-wrap",attrs:{_hid:1025}},[a("view",{staticClass:"uni-common-mt",attrs:{_hid:1026}},[a("text",{attrs:{_hid:1027}},[]),a("text",{staticClass:"info",attrs:{_hid:1029}},[t._v(t._s(t.duration),1030)])]),a("slider",{attrs:{value:t.duration,min:"500",max:"2000",_hid:1031,_batrs:"value"},on:{change:t.durationChange}}),a("view",{staticClass:"uni-common-mt",attrs:{_hid:1032}},[a("text",{attrs:{_hid:1033}},[]),a("text",{staticClass:"info",attrs:{_hid:1035}},[t._v(t._s(t.interval),1036)])]),a("slider",{attrs:{value:t.interval,min:"2000",max:"10000",_hid:1037,_batrs:"value"},on:{change:t.intervalChange}})])],1)},e=[];a.d(i,"a",function(){return s}),a.d(i,"b",function(){return e})},"63d5":function(t,i,a){},"9eda":function(t,i,a){"use strict";a.r(i);var s=a("3966"),e=a("c231");for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);a("1df5");var r=a("2877"),c=Object(r["a"])(e["default"],s["a"],s["b"],!1,null,null,null);i["default"]=c.exports},c231:function(t,i,a){"use strict";a.r(i);var s=a("05c2"),e=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);i["default"]=e.a},d98b:function(t,i,a){"use strict";a("0055");var s=n(a("9eda")),e=n(a("3a53"));function n(t){return t&&t.__esModule?t:{default:t}}s.default.mpType="page";var r=new e.default(s.default);r.$mount()}},[["d98b","common/runtime","common/vendor"]]]);