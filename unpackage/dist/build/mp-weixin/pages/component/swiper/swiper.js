(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/swiper/swiper"],{"05c2":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"swiper",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};i.default=e},"1df5":function(t,i,a){"use strict";var e=a("63d5"),n=a.n(e);n.a},3966:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"5dbcb384-0"}}),a("view",{staticClass:"uni-padding-wrap"},[a("view",{staticClass:"page-section swiper"},[a("view",{staticClass:"page-section-spacing"},[a("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[a("swiper-item",{attrs:{mpcomid:"5dbcb384-1"}},[a("view",{staticClass:"swiper-item uni-bg-red"},[t._v("A")])]),a("swiper-item",{attrs:{mpcomid:"5dbcb384-2"}},[a("view",{staticClass:"swiper-item uni-bg-green"},[t._v("B")])]),a("swiper-item",{attrs:{mpcomid:"5dbcb384-3"}},[a("view",{staticClass:"swiper-item uni-bg-blue"},[t._v("C")])])],1)],1)])]),a("view",{staticClass:"swiper-list"},[a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",{staticClass:"uni-list-cell-db"},[t._v("指示点")]),a("switch",{attrs:{checked:t.indicatorDots,eventid:"5dbcb384-0"},on:{change:t.changeIndicatorDots}})]),a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",{staticClass:"uni-list-cell-db"},[t._v("自动播放")]),a("switch",{attrs:{checked:t.autoplay,eventid:"5dbcb384-1"},on:{change:t.changeAutoplay}})])]),a("view",{staticClass:"uni-padding-wrap"},[a("view",{staticClass:"uni-common-mt"},[a("text",[t._v("幻灯片切换时长(ms)")]),a("text",{staticClass:"info"},[t._v(t._s(t.duration))])]),a("slider",{attrs:{value:t.duration,min:"500",max:"2000",eventid:"5dbcb384-2"},on:{change:t.durationChange}}),a("view",{staticClass:"uni-common-mt"},[a("text",[t._v("自动播放间隔时长(ms)")]),a("text",{staticClass:"info"},[t._v(t._s(t.interval))])]),a("slider",{attrs:{value:t.interval,min:"2000",max:"10000",eventid:"5dbcb384-3"},on:{change:t.intervalChange}})])],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"63d5":function(t,i,a){},"9eda":function(t,i,a){"use strict";a.r(i);var e=a("3966"),n=a("c231");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("1df5");var c=a("2877"),r=Object(c["a"])(n["default"],e["a"],e["b"],!1,null,null,null);i["default"]=r.exports},c231:function(t,i,a){"use strict";a.r(i);var e=a("05c2"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},d98b:function(t,i,a){"use strict";a("0055");var e=s(a("b0ce")),n=s(a("9eda"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(n.default))}},[["d98b","common/runtime","common/vendor"]]]);