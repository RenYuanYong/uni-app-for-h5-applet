(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/canvas/canvas"],{"098a":function(t,e,n){"use strict";n.r(e);var o=n("8f96"),a=n("82d7");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("5f28");var r=n("2877"),l=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=l.exports},"0caf":function(t,e,n){},"5f28":function(t,e,n){"use strict";var o=n("0caf"),a=n.n(o);a.a},"82d7":function(t,e,n){"use strict";n.r(e);var o=n("92d8"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},"8f96":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("page-head",{attrs:{title:t.title,mpcomid:"7ec28301-0"}}),n("view",{staticClass:"uni-common-mt"},[n("canvas",{staticClass:"canvas-element",attrs:{"canvas-id":"canvas",id:"canvas"}}),n("scroll-view",{staticClass:"canvas-buttons",attrs:{"scroll-y":"true"}},[t._l(t.names,function(e,o){return n("block",{key:o},[n("button",{staticClass:"canvas-button",attrs:{eventid:"7ec28301-0-"+o},on:{click:function(n){t.handleCanvasButton(e)}}},[t._v(t._s(e))])],1)}),n("button",{staticClass:"canvas-button",attrs:{type:"primary",eventid:"7ec28301-1"},on:{click:t.toTempFilePath}},[t._v("toTempFilePath")])],2)],1)],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"92d8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=null,o={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){n=t.createCanvasContext("canvas")},methods:{toTempFilePath:function(){t.canvasToTempFilePath({canvasId:"canvas",success:function(t){console.log(t.tempFilePath)},fail:function(t){console.error(JSON.stringify(t))}})},handleCanvasButton:function(t){this[t]&&this[t]()},rotate:function(){n.beginPath(),n.rotate(10*Math.PI/180),n.rect(225,75,20,10),n.fill(),n.draw()},scale:function(){n.beginPath(),n.rect(25,25,50,50),n.stroke(),n.scale(2,2),n.beginPath(),n.rect(25,25,50,50),n.stroke(),n.draw()},reset:function(){n.beginPath(),n.setFillStyle("#000000"),n.setStrokeStyle("#000000"),n.setFontSize(10),n.setGlobalAlpha(1),n.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),n.setLineCap("butt"),n.setLineJoin("miter"),n.setLineWidth(1),n.setMiterLimit(10),n.draw()},translate:function(){n.beginPath(),n.rect(10,10,100,50),n.fill(),n.translate(70,70),n.beginPath(),n.fill(),n.draw()},save:function(){n.beginPath(),n.setStrokeStyle("#00ff00"),n.save(),n.scale(2,2),n.setStrokeStyle("#ff0000"),n.rect(0,0,100,100),n.stroke(),n.restore(),n.rect(0,0,50,50),n.stroke(),n.draw()},restore:function(){[3,2,1].forEach(function(t){n.beginPath(),n.save(),n.scale(t,t),n.rect(10,10,100,100),n.stroke(),n.restore()}),n.draw()},drawImage:function(){n.drawImage("../../../static/uni.png",0,0),n.draw()},fillText:function(){n.setStrokeStyle("#ff0000"),n.beginPath(),n.moveTo(0,10),n.lineTo(300,10),n.stroke(),n.setFontSize(10),n.fillText("Hello World",0,30),n.setFontSize(20),n.fillText("Hello World",100,30),n.beginPath(),n.moveTo(0,30),n.lineTo(300,30),n.stroke(),n.draw()},fill:function(){n.beginPath(),n.rect(20,20,150,100),n.setStrokeStyle("#00ff00"),n.fill(),n.draw()},stroke:function(){n.beginPath(),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.setStrokeStyle("#00ff00"),n.stroke(),n.draw()},clearRect:function(){n.setFillStyle("#ff0000"),n.beginPath(),n.rect(0,0,300,150),n.fill(),n.clearRect(20,20,100,50),n.draw()},beginPath:function(){n.beginPath(),n.setLineWidth(5),n.setStrokeStyle("#ff0000"),n.moveTo(0,75),n.lineTo(250,75),n.stroke(),n.beginPath(),n.setStrokeStyle("#0000ff"),n.moveTo(50,0),n.lineTo(150,130),n.stroke(),n.draw()},closePath:function(){n.beginPath(),n.setLineWidth(1),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.closePath(),n.stroke(),n.draw()},moveTo:function(){n.beginPath(),n.moveTo(0,0),n.lineTo(300,150),n.stroke(),n.draw()},lineTo:function(){n.beginPath(),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.stroke(),n.draw()},rect:function(){n.beginPath(),n.rect(20,20,150,100),n.stroke(),n.draw()},arc:function(){n.beginPath(),n.setLineWidth(2),n.arc(75,75,50,0,2*Math.PI,!0),n.moveTo(110,75),n.arc(75,75,35,0,Math.PI,!1),n.moveTo(65,65),n.arc(60,65,5,0,2*Math.PI,!0),n.moveTo(95,65),n.arc(90,65,5,0,2*Math.PI,!0),n.stroke(),n.draw()},quadraticCurveTo:function(){n.beginPath(),n.moveTo(20,20),n.quadraticCurveTo(20,100,200,20),n.stroke(),n.draw()},bezierCurveTo:function(){n.beginPath(),n.moveTo(20,20),n.bezierCurveTo(20,100,200,100,200,20),n.stroke(),n.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(t,e){n.setFillStyle(t),n.beginPath(),n.rect(0+75*e,0,50,50),n.fill()}),n.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(t,e){n.setStrokeStyle(t),n.beginPath(),n.rect(0+75*e,0,50,50),n.stroke()}),n.draw()},setGlobalAlpha:function(){n.setFillStyle("#000000"),[1,.5,.1].forEach(function(t,e){n.setGlobalAlpha(t),n.beginPath(),n.rect(0+75*e,0,50,50),n.fill()}),n.draw(),n.setGlobalAlpha(1)},setShadow:function(){n.beginPath(),n.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),n.rect(10,10,100,100),n.fill(),n.draw()},setFontSize:function(){[10,20,30,40].forEach(function(t,e){n.setFontSize(t),n.fillText("Hello, world",20,20+40*e)}),n.draw()},setLineCap:function(){n.setLineWidth(10),["butt","round","square"].forEach(function(t,e){n.beginPath(),n.setLineCap(t),n.moveTo(20,20+20*e),n.lineTo(100,20+20*e),n.stroke()}),n.draw()},setLineJoin:function(){n.setLineWidth(10),["bevel","round","miter"].forEach(function(t,e){n.beginPath(),n.setLineJoin(t),n.moveTo(20+80*e,20),n.lineTo(100+80*e,50),n.lineTo(20+80*e,100),n.stroke()}),n.draw()},setLineWidth:function(){[2,4,6,8,10].forEach(function(t,e){n.beginPath(),n.setLineWidth(t),n.moveTo(20,20+20*e),n.lineTo(100,20+20*e),n.stroke()}),n.draw()},setMiterLimit:function(){n.setLineWidth(4),[2,4,6,8,10].forEach(function(t,e){n.beginPath(),n.setMiterLimit(t),n.moveTo(20+80*e,20),n.lineTo(100+80*e,50),n.lineTo(20+80*e,100),n.stroke()}),n.draw()}}};e.default=o}).call(this,n("543d")["default"])},b08af:function(t,e,n){"use strict";n("0055");var o=i(n("b0ce")),a=i(n("098a"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))}},[["b08af","common/runtime","common/vendor"]]]);