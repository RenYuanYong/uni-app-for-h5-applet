(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/API/video/video"],{"034f":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{attrs:{_hid:0}},[s("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),s("view",{staticClass:"uni-common-mt",attrs:{_hid:1003}},[s("view",{staticClass:"uni-list",attrs:{_hid:1004}},[s("view",{staticClass:"uni-list-cell",attrs:{_hid:1005}},[t._m(0),s("view",{staticClass:"uni-list-cell-right",attrs:{_hid:1009}},[s("picker",{attrs:{range:t.sourceType,value:t.sourceTypeIndex,_hid:1010,_batrs:"range,value"},on:{change:t.sourceTypeChange}},[s("view",{staticClass:"uni-input",attrs:{_hid:1011}},[t._v(t._s(t.sourceType[t.sourceTypeIndex]),1012)])])],1)])])]),t._ri(!t.src,1013)?[s("view",{staticClass:"uni-hello-addfile",attrs:{_hid:1014},on:{tap:t.chooseVideo}},[])]:[s("video",{staticClass:"video",attrs:{src:t.src,_hid:1017,_batrs:"src"}})]],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"uni-list-cell-left",attrs:{_hid:1006}},[s("view",{staticClass:"uni-label",attrs:{_hid:1007}},[])])}];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},"0bc3":function(t,e,s){"use strict";s("0055");var i=n(s("aef9")),a=n(s("3a53"));function n(t){return t&&t.__esModule?t:{default:t}}i.default.mpType="page";var r=new a.default(i.default);r.$mount()},"183c":function(t,e,s){"use strict";var i=s("b6a7"),a=s.n(i);a.a},"56f9":function(t,e,s){"use strict";s.r(e);var i=s("84fa"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},"84fa":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=[["camera"],["album"],["camera","album"]],i={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:""}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{sourceTypeChange:function(t){this.sourceTypeIndex=t.target.value},chooseVideo:function(){var e=this;t.chooseVideo({sourceType:s[this.sourceTypeIndex],success:function(t){e.src=t.tempFilePath}})}}};e.default=i}).call(this,s("c11b")["default"])},aef9:function(t,e,s){"use strict";s.r(e);var i=s("034f"),a=s("56f9");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("183c");var r=s("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},b6a7:function(t,e,s){}},[["0bc3","common/runtime","common/vendor"]]]);