(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/template/countdown/countdown"],{"13d6":function(t,e,r){"use strict";var n=r("537d"),o=r.n(n);o.a},"22e4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:"uni-countdown",attrs:{_hid:0}},[r("view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor},attrs:{_hid:1}},[t._v(t._s(t.h),2)]),r("view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor},attrs:{_hid:3}},[]),r("view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor},attrs:{_hid:5}},[t._v(t._s(t.i),6)]),r("view",{staticClass:"uni-countdown-splitor",style:{color:t.splitorColor},attrs:{_hid:7}},[]),r("view",{staticClass:"uni-countdown-numbers",style:{borderColor:t.borderColor,color:t.fontColor,background:t.bgrColor},attrs:{_hid:9}},[t._v(t._s(t.s),10)])])},o=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o})},5106:function(t,e,r){"use strict";r.r(e);var n=r("bdb1"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},"537d":function(t,e,r){},"5bfe":function(t,e,r){"use strict";r("0055");var n=i(r("dc1d")),o=i(r("3a53"));function i(t){return t&&t.__esModule?t:{default:t}}n.default.mpType="page";var a=new o.default(n.default);a.$mount()},81285:function(t,e,r){"use strict";r.r(e);var n=r("22e4"),o=r("5106");for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);r("94c5");var a=r("2877"),u=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"94c5":function(t,e,r){"use strict";var n=r("ea18"),o=r.n(n);o.a},bdb1:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-countdown",props:{bgrColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},fontColor:{type:String,value:"#000000"},splitorColor:{type:String,default:"#000000"},timer:{type:String,default:""}},data:function(){return{setTime:null,h:"00",i:"00",s:"00",leftTime:0}},created:function(t){var e=/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/,r=this.timer.match(e);if(null==r)return console.log("时间格式错误"),!1;var n=parseInt(r[1]);if(n<1e3)return console.log("时间格式错误"),!1;var o=parseInt(r[2]),i=parseInt(r[3]),a=parseInt(r[4]);if(a<0||a>24)return console.log("时间格式错误"),!1;var u=parseInt(r[5]);if(u<0||u>60)return console.log("时间格式错误"),!1;var s=parseInt(r[6]);if(s<0||s>60)return console.log("时间格式错误"),!1;var l=new Date(n,o-1,i,a,u,s);this.leftTime=l,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval(function(){t.countDown(t)},1e3)},countDown:function(t){var e=t.leftTime-new Date;if(e>0)var r=parseInt(e/1e3/60/60,10),n=parseInt(e/1e3/60%60,10),o=parseInt(e/1e3%60,10);else r=0,n=0,o=0;r<10&&(r="0"+r),n<10&&(n="0"+n),o<10&&(o="0"+o),t.h=r,t.i=n,t.s=o}}};e.default=n},ccd9:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{attrs:{_hid:0}},[r("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),r("view",{staticClass:"uni-text-small uni-center title",attrs:{_hid:1003}},[]),r("view",{attrs:{_hid:1005}},[r("uni-countdown",{attrs:{timer:t.timer1,_hid:1006,_batrs:"timer",_cid:1}})],1),r("view",{staticClass:"uni-text-small uni-center title",attrs:{_hid:2008}},[]),r("view",{staticStyle:{background:"#00B26A",padding:"50rpx 0"},attrs:{_hid:2010}},[r("uni-countdown",{attrs:{timer:t.timer2,borderColor:"#FFFFFF",splitorColor:"#FFF",fontColor:"#FFFFFF",bgrColor:"none",_hid:2011,_batrs:"timer",_cid:2}})],1),r("view",{staticClass:"uni-text-small uni-center title",attrs:{_hid:3013}},[]),r("view",{attrs:{_hid:3015}},[r("uni-countdown",{attrs:{fontColor:"#FFFFFF",bgrColor:"#000000",timer:t.timer3,_hid:3016,_batrs:"timer",_cid:3}})],1)],1)},o=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o})},cde1:function(t,e,r){"use strict";r.r(e);var n=r("d2a6"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},d2a6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("81285"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){var t=new Date,e=t.getTime(),r=this.formatDateTime(e+2e6),n=this.formatDateTime(e+3e6),o=this.formatDateTime(e+5e6);return{title:"倒计时",timer1:r,timer2:n,timer3:o}},components:{uniCountdown:n.default},methods:{formatDateTime:function(t){var e=new Date(t),r=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var o=e.getDate();o=o<10?"0"+o:o;var i=e.getHours();i=i<10?"0"+i:i;var a=e.getMinutes(),u=e.getSeconds();return a=a<10?"0"+a:a,u=u<10?"0"+u:u,r+"-"+n+"-"+o+" "+i+":"+a+":"+u}}};e.default=i},dc1d:function(t,e,r){"use strict";r.r(e);var n=r("ccd9"),o=r("cde1");for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);r("13d6");var a=r("2877"),u=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},ea18:function(t,e,r){}},[["5bfe","common/runtime","common/vendor"]]]);