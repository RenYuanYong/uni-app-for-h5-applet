(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/template/template"],{6864:function(e,a,t){},"6e11":function(e,a,t){"use strict";var n=t("6864"),i=t.n(n);i.a},7673:function(e,a,t){"use strict";t.r(a);var n=t("a221"),i=t("8d53");for(var l in i)"default"!==l&&function(e){t.d(a,e,function(){return i[e]})}(l);t("6e11");var r=t("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},"8d53":function(e,a,t){"use strict";t.r(a);var n=t("d52d"),i=t.n(n);for(var l in n)"default"!==l&&function(e){t.d(a,e,function(){return n[e]})}(l);a["default"]=i.a},a221:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"uni-padding-wrap uni-common-pb"},[e._m(0),t("view",{staticClass:"uni-hello-text uni-common-pb"},[e._v("以下是部分模板示例，更多模板见插件市场：https://ext.dcloud.net.cn。")]),e._l(e.lists,function(a,n){return t("view",{key:n,staticClass:"uni-card"},[t("view",{staticClass:"uni-list"},[t("view",{staticClass:"uni-list-cell uni-collapse"},[t("view",{staticClass:"uni-list-cell-navigate",class:[a.open?"uni-active":"",a.pages?"uni-navigate-bottom":"uni-navigate-right"],attrs:{"hover-class":"uni-list-cell-hover",eventid:"24284ed2-0-"+n},on:{click:function(a){e.triggerCollapse(n)}}},[e._v(e._s(a.name))]),a.pages?t("view",{staticClass:"uni-list uni-collapse",class:a.open?"uni-active":""},e._l(a.pages,function(a,i){return t("view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"24284ed2-1-"+n+"-"+i},on:{click:function(t){e.goDetailPage(a)}}},[t("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e._v(e._s(a.name?a.name:a))])])})):e._e()])])])}),e._m(1)],2)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"uni-header-logo"},[t("image",{attrs:{src:"../../../static/templateIndex.png"}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("view",{staticClass:"uni-divider"},[t("view",{staticClass:"uni-divider__content"},[e._v("更多模板见插件市场：https://ext.dcloud.net.cn")]),t("view",{staticClass:"uni-divider__line"})])}];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return i})},c780:function(e,a,t){"use strict";t("0055");var n=l(t("b0ce")),i=l(t("7673"));function l(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(i.default))},d52d:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{lists:[{name:"数字角标 badge",url:"badge"},{name:"数字选择框 number-box",url:"number-box"},{name:"弹出层 popup",url:"popup"},{name:"多列选择 picker",url:"mpvue-picker"},{id:"navbar",name:"顶部导航标题栏",open:!1,pages:[{name:"默认样式",url:"nav-default"},{name:"自定义导航栏组件(非原生)",url:"nav-bar"}]},{id:"tabbar",name:"顶部选项卡",url:"tabbar"},{name:"顶部分段器 segment",url:"segmented-control"},{name:"抽屉侧滑菜单 drawer",url:"drawer"},{name:"折叠面板",url:"accordion"},{id:"grid",name:"九宫格",open:!1,pages:[{name:"默认样式",url:"grid"},{name:"可左右滑动的九宫导航",url:"grid-pagination"}]},{name:"卡片视图",url:"cardview"},{id:"lists",name:"列表",open:!1,pages:[{name:"右侧带角标",url:"list-with-badges"},{name:"二级列表",url:"list-with-collapses"},{name:"三行列表",url:"list-triplex-row"}]},{name:"右侧索引列表 indexList",url:"index-list"},{name:"图文列表",url:"media-list"},{name:"商品列表",url:"product-list"},{name:"加载更多 load-more",url:"load-more"},{name:"懒加载 lazy-load",open:!1,pages:[{name:"默认",url:"lazy-load"},{name:"自定义",url:"lazy-load-custom"}]},{name:"时间轴 timeline",url:"timeline"},{name:"标签 tag",url:"tag"},{name:"ECharts 图表",url:"echarts"},{name:"手势图案锁屏",url:"gesture-lock"},{name:"列表到详情示例",url:"list2detail-list"},{name:"二维码生成",url:"qrcode"},{name:"图片裁剪",url:"crop"},{id:"uparse",name:"富文本渲染",open:!1,pages:[{name:"uParse 富文本渲染示例 - markdown",url:"uparse-md"},{name:"uParse 富文本渲染示例 - html",url:"uparse-html"}]},{name:"markdown 富文本编辑器",url:"md-editor"},{name:"侧边分类导航",url:"left-category"},{name:"步骤提示",url:"steps"},{name:"评论列表",url:"comments"},{name:"滚动公告",url:"scrollmsg"},{name:"表单验证",url:"datachecker"},{name:"插屏弹窗",url:"sbanner"},{name:"倒计时",url:"countdown"}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(a){e.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(e){if(this.lists[e].pages)for(var a=0;a<this.lists.length;++a)this.lists[a].open=e===a&&!this.lists[e].open;else this.goDetailPage(this.lists[e].url)},goDetailPage:function(a){var t=a.url?a.url:a,n=~t.indexOf("platform")?t:"/pages/template/"+t+"/"+t;return e.navigateTo({url:n}),!1}}};a.default=t}).call(this,t("543d")["default"])}},[["c780","common/runtime","common/vendor"]]]);