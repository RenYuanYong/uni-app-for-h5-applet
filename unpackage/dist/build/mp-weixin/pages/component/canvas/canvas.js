(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/canvas/canvas"],{"046d":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=null,i=null,s={data:function(){return{title:"canvas",screenWidth:t.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){n=t.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),i=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(i),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function a(t,a){n.beginPath(0),n.arc(t,a,5,0,2*Math.PI),n.setFillStyle("#1aad19"),n.setStrokeStyle("rgba(1,1,1,0)"),n.fill(),n.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),a(t.x,this.canvasWidth/2),a(this.canvasWidth/2,t.y),a(this.canvasWidth-t.x,this.canvasWidth/2),a(this.canvasWidth/2,this.canvasWidth-t.y),a(t.x,t.y),a(this.canvasWidth-t.x,this.canvasWidth-t.y),a(t.x,this.canvasWidth-t.y),a(this.canvasWidth-t.x,t.y),n.draw()}}};a.default=s}).call(this,n("543d")["default"])},1962:function(t,a,n){"use strict";var i=n("ebe0"),s=n.n(i);s.a},"2f86":function(t,a,n){"use strict";n.r(a);var i=n("798a"),s=n("b633");for(var e in s)"default"!==e&&function(t){n.d(a,t,function(){return s[t]})}(e);n("1962");var c=n("2877"),r=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);a["default"]=r.exports},3273:function(t,a,n){"use strict";n("0055");var i=e(n("b0ce")),s=e(n("2f86"));function e(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"798a":function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("view",[n("page-head",{attrs:{title:t.title,mpcomid:"68c67784-0"}}),t._m(0)],1)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-body-wrapper"},[n("canvas",{staticClass:"canvas",attrs:{"canvas-id":"canvas"}})])])}];n.d(a,"a",function(){return i}),n.d(a,"b",function(){return s})},b633:function(t,a,n){"use strict";n.r(a);var i=n("046d"),s=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,function(){return i[t]})}(e);a["default"]=s.a},ebe0:function(t,a,n){}},[["3273","common/runtime","common/vendor"]]]);