(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/tabbar/tabbar"],{"06eb":function(t,e,i){},"07ad":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-tab-bar"},[i("scroll-view",{staticClass:"uni-swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,a){return i("view",{key:e.id,class:["swiper-tab-list",t.tabIndex==a?"active":""],attrs:{id:e.id,"data-current":a,eventid:"0ec82653-0-"+a},on:{click:function(e){t.tapTab(a)}}},[t._v(t._s(e.name))])})),i("swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,duration:"300",eventid:"0ec82653-3"},on:{change:t.changeTab}},t._l(t.newsitems,function(e,a){return i("swiper-item",{key:a,attrs:{mpcomid:"0ec82653-2-"+a}},[i("scroll-view",{staticClass:"list",attrs:{"scroll-y":"",eventid:"0ec82653-2-"+a},on:{scrolltolower:function(e){t.loadMore(a)}}},[t._l(e.data,function(e,n){return i("block",{key:n},[i("media-list",{attrs:{data:e,eventid:"0ec82653-1-"+a+"-"+n,mpcomid:"0ec82653-0-"+a+"-"+n},on:{close:function(e){t.close(a,n)},click:function(i){t.goDetail(e)}}})],1)}),i("view",{staticClass:"uni-tab-bar-loading"},[i("uni-load-more",{attrs:{loadingType:e.loadingType,contentText:t.loadingText,mpcomid:"0ec82653-1-"+a}})],1)],2)],1)}))],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"2d3d":function(t,e,i){"use strict";var a=i("dbfc"),n=i.n(a);n.a},"383e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{data:{type:Object,default:function(t){return{}}}},computed:{isImgRight:function(){return 2===this.data.article_type},isImgLeft:function(){return 1===this.data.article_type},showImg:function(){return this.data.image_list||this.data.image_url}},methods:{close:function(t){this.$emit("close")},bindClick:function(){this.$emit("click")}}};e.default=a},"457c":function(t,e,i){"use strict";i.r(e);var a=i("07ad"),n=i("df69");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("ad5a");var c=i("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"771a":function(t,e,i){"use strict";i.r(e);var a=i("7c37"),n=i("e5c9");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("2d3d");var c=i("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"7c37":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"de198e24-1"},on:{click:t.bindClick}},[t.data.title?i("view",{staticClass:"media-list"},[i("view",{class:[t.isImgRight?"media-image-right":"",t.isImgLeft?"media-image-left":""]},[i("text",{class:["media-title",t.isImgRight||t.isImgLeft?"media-title2":""]},[t._v(t._s(t.data.title))]),t.showImg?i("view",{class:["image-section",t.isImgRight?"image-section-right":"",t.isImgLeft?"image-section-left":""]},[t.data.image_url?i("image",{class:["image-list1",t.isImgRight||t.isImgLeft?"image-list2":""],attrs:{src:t.data.image_url}}):t._e(),t._l(t.data.image_list,function(e,a){return t.data.image_list?i("image",{key:a,staticClass:"image-list3",attrs:{src:e.url}}):t._e()})],2):t._e()]),i("view",{staticClass:"media-foot"},[i("view",{staticClass:"media-info"},[i("text",{staticClass:"info-text"},[t._v(t._s(t.data.source))]),i("text",{staticClass:"info-text"},[t._v(t._s(t.data.comment_count)+"条评论")]),i("text",{staticClass:"info-text"},[t._v(t._s(t.data.datetime))])]),i("view",{staticClass:"max-close-view",attrs:{eventid:"de198e24-0"},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._m(0)])])]):t._e()])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"close-view"},[i("text",{staticClass:"close"},[t._v("×")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},a1bd:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(i("a34a")),n=c(i("771a")),s=c(i("bec7"));function c(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,a,n,s,c){try{var r=t[s](c),u=r.value}catch(o){return void i(o)}r.done?e(u):Promise.resolve(u).then(a,n)}function u(t){return function(){var e=this,i=arguments;return new Promise(function(a,n){var s=t.apply(e,i);function c(t){r(s,a,n,c,u,"next",t)}function u(t){r(s,a,n,c,u,"throw",t)}c(void 0)})}}var o={components:{mediaList:n.default,uniLoadMore:s.default},data:function(){return{loadingText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[],data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}]}},onLoad:function(){this.newsitems=this.randomfn()},methods:{goDetail:function(e){t.navigateTo({url:"/pages/template/tabbar/detail/detail?data="+e.title})},close:function(e,i){var a=this;t.showModal({content:"是否删除本条信息？",success:function(t){t.confirm&&a.newsitems[e].data.splice(i,1)}})},loadMore:function(t){var e=this;this.newsitems[t].loadingType=1,setTimeout(function(){e.addData(t)},1200)},addData:function(t){if(this.newsitems[t].data.length>30)this.newsitems[t].loadingType=2;else{for(var e=1;e<=10;e++)this.newsitems[t].data.push(this["data"+Math.floor(5*Math.random())]);this.newsitems[t].loadingType=1}},changeTab:function(){var e=u(a.default.mark(function e(i){var n,s,c,r,u,o,l,d,f;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=i.detail.current,!this.isClickChange){e.next=5;break}return this.tabIndex=n,this.isClickChange=!1,e.abrupt("return");case 5:return e.next=7,this.getElSize("tab-bar");case 7:s=e.sent,c=s.scrollLeft,r=0,u=0;case 11:if(!(u<n)){e.next=19;break}return e.next=14,this.getElSize(this.tabBars[u].id);case 14:o=e.sent,r+=o.width;case 16:u++,e.next=11;break;case 19:return l=t.getSystemInfoSync().windowWidth,e.next=22,this.getElSize(this.tabBars[n].id);case 22:d=e.sent,f=d.width,r+f-c>l&&(this.scrollLeft=r+f-l),r<c&&(this.scrollLeft=r),this.isClickChange=!1,this.tabIndex=n;case 28:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),getElSize:function(e){return new Promise(function(i,a){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){i(t)}).exec()})},tapTab:function(){var t=u(a.default.mark(function t(e){var i,n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.tabIndex!==e){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getElSize("tab-bar");case 6:i=t.sent,n=i.scrollLeft,this.scrollLeft=n,this.isClickChange=!0,this.tabIndex=e;case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),randomfn:function(){for(var t=[],e=0,i=this.tabBars.length;e<i;e++){for(var a={loadingType:0,data:[]},n=1;n<=10;n++)a.data.push(this["data"+Math.floor(5*Math.random())]);t.push(a)}return t}}};e.default=o}).call(this,i("543d")["default"])},ad5a:function(t,e,i){"use strict";var a=i("06eb"),n=i.n(a);n.a},dbfc:function(t,e,i){},df69:function(t,e,i){"use strict";i.r(e);var a=i("a1bd"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},e5c9:function(t,e,i){"use strict";i.r(e);var a=i("383e"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},fdfb:function(t,e,i){"use strict";i("0055");var a=s(i("b0ce")),n=s(i("457c"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))}},[["fdfb","common/runtime","common/vendor"]]]);