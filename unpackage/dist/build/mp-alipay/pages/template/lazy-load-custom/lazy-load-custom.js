(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/template/lazy-load-custom/lazy-load-custom"],{1846:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{attrs:{_hid:0}},[t._m(0),a("view",{staticClass:"uni-list",attrs:{_hid:10}},t._l(t.list,function(i,e,s){var n=void 0!==s?s:e;return a("view",{key:e,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",_hid:11,_fid:n,_fk:"index"}},[a("view",{staticClass:"uni-media-list",attrs:{_hid:12,_fid:n}},[a("view",{staticClass:"uni-media-list-logo",attrs:{_hid:13,_fid:n}},[a("image",{staticClass:"image",class:{lazy:!i.show},attrs:{"data-index":e,src:i.show?i.src:"",_hid:14,_fid:n,_batrs:"data-index,src"},on:{load:t.onLoad}}),a("image",{staticClass:"image placeholder",class:{loaded:i.loaded},attrs:{src:t.placeholderSrc,_hid:15,_fid:n,_batrs:"src"}})]),t._m(1,!0)])])},11,t._self))])},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"uni-padding-wrap",attrs:{_hid:1}},[a("view",{staticClass:"uni-helllo-text",staticStyle:{padding:"30rpx 0"},attrs:{_hid:2}},[a("text",{attrs:{_hid:4}},[]),a("text",{attrs:{_hid:6}},[]),a("text",{attrs:{_hid:8}},[])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"uni-media-list-body",attrs:{_hid:16,_fid:t._fid}},[a("view",{staticClass:"uni-media-list-text-top",attrs:{_hid:17,_fid:t._fid}},[]),a("view",{staticClass:"uni-media-list-text-bottom uni-ellipsis",attrs:{_hid:19,_fid:t._fid}},[])])}];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},"407c":function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){for(var t=["shuijiao","muwu","cbd"],i=[],a=0;a<20;a++)i.push({src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/".concat(t[a%3],".jpg"),show:!1,loaded:!1});return{windowHeight:0,placeholderSrc:"../../../static/60x60.png",list:i,show:!1}},methods:{load:function(){var i=this;t.createSelectorQuery().selectAll(".lazy").boundingClientRect(function(t){t.forEach(function(t,a){t.top<=i.windowHeight&&(i.list[t.dataset.index].show=!0)})}).exec()},onLoad:function(t){this.list[t.target.dataset.index].loaded=!0}},onLoad:function(){this.windowHeight=t.getSystemInfoSync().windowHeight},onShow:function(){var t=this;this.show||(this.show=!0,setTimeout(function(){t.load()},100))},onPageScroll:function(){this.load()}};i.default=a}).call(this,a("c11b")["default"])},"89f3":function(t,i,a){"use strict";a("0055");var e=n(a("cb3d")),s=n(a("3a53"));function n(t){return t&&t.__esModule?t:{default:t}}e.default.mpType="page";var d=new s.default(e.default);d.$mount()},a377:function(t,i,a){},cb3d:function(t,i,a){"use strict";a.r(i);var e=a("1846"),s=a("faa1");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("d6e6");var d=a("2877"),o=Object(d["a"])(s["default"],e["a"],e["b"],!1,null,null,null);i["default"]=o.exports},d6e6:function(t,i,a){"use strict";var e=a("a377"),s=a.n(e);s.a},faa1:function(t,i,a){"use strict";a.r(i);var e=a("407c"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a}},[["89f3","common/runtime","common/vendor"]]]);