(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/popup/popup"],{"10a7":function(t,o,e){"use strict";e.r(o);var p=e("83fe"),i=e("3dea");for(var n in i)"default"!==n&&function(t){e.d(o,t,function(){return i[t]})}(n);var u=e("2877"),s=Object(u["a"])(i["default"],p["a"],p["b"],!1,null,null,null);o["default"]=s.exports},"3dea":function(t,o,e){"use strict";e.r(o);var p=e("83d0"),i=e.n(p);for(var n in p)"default"!==n&&function(t){e.d(o,t,function(){return p[t]})}(n);o["default"]=i.a},"4de9":function(t,o,e){"use strict";e.r(o);var p=e("844d"),i=e("f180");for(var n in i)"default"!==n&&function(t){e.d(o,t,function(){return i[t]})}(n);e("b6ba");var u=e("2877"),s=Object(u["a"])(i["default"],p["a"],p["b"],!1,null,null,null);o["default"]=s.exports},"83d0":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var p=i(e("4de9"));function i(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{popType:"middle",title:"popup",showPopupMiddle:!1,showPopupTop:!1,showPopupBottom:!1,msg:""}},methods:{hidePopup:function(){this.showPopupMiddle=!1,this.showPopupTop=!1,this.showPopupBottom=!1},showMiddlePopup:function(){this.hidePopup(),this.popType="middle",this.showPopupMiddle=!0},showTopPopup:function(){this.hidePopup(),this.popType="top",this.msg="顶部 popup 信息内容",this.showPopupTop=!0},showBottomPopup:function(){this.hidePopup(),this.popType="bottom",this.msg="底部 popup 信息内容",this.showPopupBottom=!0}},components:{uniPopup:p.default}};o.default=n},"83fe":function(t,o,e){"use strict";var p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("view",{staticClass:"page"},[e("page-head",{attrs:{title:t.title,mpcomid:"1d8cb9ad-0"}}),e("view",{staticClass:"uni-padding-wrap"},[e("view",{staticClass:"uni-helllo-text uni-common-mt uni-center"},[t._v("请点击下面的按钮进行体验")]),e("uni-popup",{attrs:{show:t.showPopupMiddle,type:t.popType,eventid:"1d8cb9ad-0",mpcomid:"1d8cb9ad-1"},on:{hidePopup:t.hidePopup}},[e("view",{staticClass:"uni-center",staticStyle:{"font-size":"0"}},[e("image",{staticClass:"image",staticStyle:{width:"150rpx",height:"150rpx"},attrs:{mode:"widthFix",src:"../../../static/uni.png"}})]),e("view",{staticClass:"uni-common-mt uni-helllo-text uni-center"},[t._v("消息内容使用 slot 形式定义")])]),e("uni-popup",{attrs:{show:t.showPopupTop,type:t.popType,msg:t.msg,eventid:"1d8cb9ad-1",mpcomid:"1d8cb9ad-2"},on:{hidePopup:t.hidePopup}}),e("uni-popup",{attrs:{show:t.showPopupBottom,type:t.popType,msg:t.msg,eventid:"1d8cb9ad-2",mpcomid:"1d8cb9ad-3"},on:{hidePopup:t.hidePopup}}),e("view",{staticClass:"uni-btn-v uni-common-mt"},[e("button",{attrs:{type:"button",eventid:"1d8cb9ad-3"},on:{click:t.showMiddlePopup}},[t._v("居中弹出 popup")]),e("button",{attrs:{type:"button","data-position":"top",eventid:"1d8cb9ad-4"},on:{click:t.showTopPopup}},[t._v("顶部弹出 popup")]),e("button",{attrs:{type:"button","data-position":"bottom",eventid:"1d8cb9ad-5"},on:{click:t.showBottomPopup}},[t._v("底部弹出 popup")])],1)],1)],1)},i=[];e.d(o,"a",function(){return p}),e.d(o,"b",function(){return i})},"844d":function(t,o,e){"use strict";var p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("view",[e("view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},attrs:{eventid:"284d8924-0"},on:{click:t.hide}}),e("view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["uni-popup","uni-popup-"+t.type]},[t._v(t._s(t.msg)),t._t("default",null,{mpcomid:"284d8924-0"})],2)])},i=[];e.d(o,"a",function(){return p}),e.d(o,"b",function(){return i})},91555:function(t,o,e){"use strict";e("0055");var p=n(e("b0ce")),i=n(e("10a7"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,p.default)(i.default))},b6ba:function(t,o,e){"use strict";var p=e("b8d2"),i=e.n(p);i.a},b8d2:function(t,o,e){},f180:function(t,o,e){"use strict";e.r(o);var p=e("fc95"),i=e.n(p);for(var n in p)"default"!==n&&function(t){e.d(o,t,function(){return p[t]})}(n);o["default"]=i.a},fc95:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var p={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var t=0;return{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};o.default=p}},[["91555","common/runtime","common/vendor"]]]);