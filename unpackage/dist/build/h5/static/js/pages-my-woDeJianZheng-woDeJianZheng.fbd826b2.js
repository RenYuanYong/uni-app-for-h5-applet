(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-woDeJianZheng-woDeJianZheng"],{2802:function(e,t,i){"use strict";i.r(t);var a=i("af64"),n=i("a47e");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("5b85");var s=i("2877"),b=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"b930bfb8",null);t["default"]=b.exports},"327d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{tabIndex:0,page:1,themeColor:"#5788ff",backImage:"linear-gradient(120deg, #bd7eff 0%, #6247f2 100%)",themeTitle:"见证"}},onLoad:function(e){this.page=e.page,1==this.page?(this.themeColor="#19c7ad",this.themeTitle="见证",this.backImage="linear-gradient(450deg, #37dfc8 0%, #01b49a 100%)"):2==this.page?(this.themeColor="#5788ff",this.themeTitle="探访",this.backImage="linear-gradient(120deg, #06c8d9 0%, #5d51ff 100%)"):3==this.page?(this.themeColor="#f12154",this.themeTitle="感恩",this.backImage="linear-gradient(120deg, #e79c25 0%, #f12054 100%)"):4==this.page&&(this.themeColor="#7f59f6",this.themeTitle="引荐",this.backImage="linear-gradient(120deg, #bd7eff 0%, #6247f2 100%)");var t=this;uni.setNavigationBarTitle({title:t.themeTitle||""}),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:t.themeColor||""})},methods:{topTab:function(e){this.tabIndex=e},goPage:function(e){var t=e.currentTarget.dataset.path;uni.navigateTo({url:t+"?page="+this.page})}}};t.default=a},"58fe":function(e,t,i){var a=i("c8be");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("51621b96",a,!0,{sourceMap:!1,shadowMode:!1})},"5b85":function(e,t,i){"use strict";var a=i("58fe"),n=i.n(a);n.a},a47e:function(e,t,i){"use strict";i.r(t);var a=i("327d"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},af64:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"wodeset-top flex-cent-cent",style:{backgroundColor:e.themeColor}},[i("v-uni-view",{staticClass:"wodeset-top-sel flex-cent"},[i("v-uni-view",{staticClass:"flex-cent-cent actset",style:{color:e.themeColor}},[e._v("我发布的"+e._s(e.themeTitle))]),i("v-uni-view",{staticClass:"flex-cent-cent",style:{backgroundColor:e.themeColor}},[e._v("我参与的"+e._s(e.themeTitle))])],1)],1),i("v-uni-view",{staticClass:"card-item"},[i("v-uni-view",{staticClass:"card-toux"},[i("v-uni-image",{attrs:{src:"../../../static/shuijiao.jpg",mode:""}}),i("v-uni-view",{},[i("v-uni-text",{style:{color:e.themeColor}},[e._v("李如伟")]),e._v("对"),i("v-uni-text",{style:{color:e.themeColor}},[e._v("胡仙溪")]),e._v("进行了"),i("v-uni-text",{staticClass:"col-ff9600"},[e._v(e._s(e.themeTitle))]),e._v("！")],1)],1),i("v-uni-view",{staticClass:"onecard"},[i("v-uni-view",{staticClass:"selc-item flex-cent-bet"},[i("v-uni-view",{staticClass:"selc-item-left flex-cent"},[i("v-uni-view",{staticClass:"selc-item-img"},[i("v-uni-image",{attrs:{src:"../../../static/shuijiao.jpg",mode:""}})],1),i("v-uni-view",{staticClass:"selc-item-txt flex-cent"},[i("v-uni-view",{staticClass:"selc-item-name"},[e._v("胡仙溪")]),i("v-uni-view",{staticClass:"selc-item-job flex-cent"},[i("v-uni-view",{},[e._v("互联网公司 HR")])],1)],1)],1),i("v-uni-view",{staticClass:"selc-item-type"},[i("v-uni-button",{staticClass:"conf-btn rads",style:{backgroundImage:e.backImage},attrs:{"data-path":"/pages/association/jianZhengDetail/jianZhengDetail",type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.goPage(t)}}},[e._v("查看详情")])],1)],1),i("v-uni-view",{staticClass:"onecard-txt"},[e._v("这里显示见证的内容，北虏防御得那末周密,他们的军士们是那末守口如瓶。天祥们决无探访一切的可能。——郑振铎《桂公塘》")])],1),i("v-uni-view",{staticClass:"like-count"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"iconfont icon-xihuan col-ff665b "}),i("v-uni-view",{staticClass:"like-num"},[e._v("2000")])],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"iconfont icon-liuyan"}),i("v-uni-view",{staticClass:"like-num"},[e._v("20")])],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"iconfont icon-fenxiang"}),i("v-uni-view",{staticClass:"like-num"},[e._v("分享")])],1)],1),i("v-uni-view",{staticClass:"card-comment"},[i("v-uni-view",{staticClass:"comment-item"},[i("v-uni-view",{style:{color:e.themeColor}},[e._v("陈伟荣：")]),i("v-uni-view",{},[e._v("世界是你们，也是我们的")])],1)],1)],1),i("v-uni-view",{staticClass:"heng"}),i("v-uni-view",{staticClass:"card-item"},[i("v-uni-view",{staticClass:"card-toux"},[i("v-uni-image",{attrs:{src:"../../../static/shuijiao.jpg",mode:""}}),i("v-uni-view",{},[i("v-uni-text",{style:{color:e.themeColor}},[e._v("李如伟")]),e._v("对"),i("v-uni-text",{style:{color:e.themeColor}},[e._v("胡仙溪")]),e._v("进行了"),i("v-uni-text",{staticClass:"col-ff9600"},[e._v(e._s(e.themeTitle))]),e._v("！")],1)],1),i("v-uni-view",{staticClass:"onecard"},[i("v-uni-view",{staticClass:"selc-item flex-cent-bet"},[i("v-uni-view",{staticClass:"selc-item-left flex-cent"},[i("v-uni-view",{staticClass:"selc-item-img"},[i("v-uni-image",{attrs:{src:"../../../static/shuijiao.jpg",mode:""}})],1),i("v-uni-view",{staticClass:"selc-item-txt flex-cent"},[i("v-uni-view",{staticClass:"selc-item-name"},[e._v("胡仙溪")]),i("v-uni-view",{staticClass:"selc-item-job flex-cent"},[i("v-uni-view",{},[e._v("互联网公司 HR")])],1)],1)],1),i("v-uni-view",{staticClass:"selc-item-type"},[i("v-uni-button",{staticClass:"conf-btn rads",style:{backgroundImage:e.backImage},attrs:{"data-path":"/pages/association/jianZhengDetail/jianZhengDetail",type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.goPage(t)}}},[e._v("查看详情")])],1)],1),i("v-uni-view",{staticClass:"onecard-txt"},[e._v("这里显示见证的内容，北虏防御得那末周密,他们的军士们是那末守口如瓶。天祥们决无探访一切的可能。——郑振铎《桂公塘》")])],1),i("v-uni-view",{staticClass:"like-count"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"iconfont icon-xihuan col-ff665b "}),i("v-uni-view",{staticClass:"like-num"},[e._v("2000")])],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"iconfont icon-liuyan"}),i("v-uni-view",{staticClass:"like-num"},[e._v("20")])],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"iconfont icon-fenxiang"}),i("v-uni-view",{staticClass:"like-num"},[e._v("分享")])],1)],1),i("v-uni-view",{staticClass:"card-comment"},[i("v-uni-view",{staticClass:"comment-item"},[i("v-uni-view",{style:{color:e.themeColor}},[e._v("陈伟荣：")]),i("v-uni-view",{},[e._v("世界是你们，也是我们的")])],1)],1)],1)],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},c8be:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n.cont[data-v-b930bfb8]{margin-bottom:%?100?%}\n.conf-btn[data-v-b930bfb8]{background-image:-o-linear-gradient(330deg,#39abf8 0,#7184fe 100%);background-image:linear-gradient(120deg,#39abf8,#7184fe);-webkit-box-shadow:0 %?3?% %?3?% 0 rgba(109,135,254,.5);box-shadow:0 %?3?% %?3?% 0 rgba(109,135,254,.5);border-radius:%?8?%;height:%?56?%;line-height:%?56?%;font-size:%?24?%;margin:0 %?20?%;padding:0 %?20?%!important}.rads[data-v-b930bfb8]{height:%?46?%;line-height:%?46?%;border-radius:%?23?%;margin:0}.tjyd-btn[data-v-b930bfb8]{height:%?46?%;line-height:%?46?%;padding:0 %?20?%;font-size:%?24?%;background-color:#fff!important;border-radius:%?23?%;border:solid %?1?% #5788ff;color:#5788ff!important}.see-all-mask[data-v-b930bfb8]{width:100%;height:%?140?%;opacity:.99;margin-top:%?-120?%;background:-o-linear-gradient(top,hsla(0,0%,100%,0),#fff 50px);background:linear-gradient(180deg,hsla(0,0%,100%,0),#fff 50px)}.see-all-btn[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?28?%;color:#5788ff;margin-bottom:%?40?%}.see-all-btn .iconfont[data-v-b930bfb8]{margin:0 %?10?%}.fuwenb[data-v-b930bfb8]{padding:%?20?% %?30?%;overflow:hidden}.fuwenb-height[data-v-b930bfb8]{height:800px}.head-city[data-v-b930bfb8]{width:100%;height:%?52?%;color:#fff;padding:0 %?30?%;background-color:#5788ff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.head-city .icon-dingwei[data-v-b930bfb8]{margin-right:%?6?%}.faqiren[data-v-b930bfb8]{margin:%?30?% 0;text-align:center}.faqiren .faqiren-txt[data-v-b930bfb8]{font-size:%?24?%;color:#555;line-height:%?48?%}.faqiren .faqiren-act[data-v-b930bfb8]{font-size:%?24?%;color:#969aa6;line-height:%?48?%}.faqiren .conf-btn[data-v-b930bfb8]{height:%?52?%;line-height:%?52?%;border-radius:%?25?%;font-size:%?24?%;display:inline-block;margin:%?20?% auto 0}.no-data-show[data-v-b930bfb8]{margin:%?30?% 0;text-align:center}.no-data-show .iconfont[data-v-b930bfb8]{font-size:%?100?%;color:#bbb;display:inline-block;margin-bottom:%?-50?%;margin-top:%?-20?%}.no-data-show .nodata-txt[data-v-b930bfb8]{font-size:%?28?%;line-height:%?48?%;color:#969aa6}.asso-item[data-v-b930bfb8]{background-color:#fff;margin-bottom:%?20?%}.asso-item .iconfont[data-v-b930bfb8]{color:#b6b7b7}.asso-item .asso-info[data-v-b930bfb8]{padding:%?30?%}.asso-item .asso-info .yijairu[data-v-b930bfb8]{width:%?30?%;height:%?100?%;background-image:-o-linear-gradient(330deg,#39abf8 0,#7184fe 100%);background-image:linear-gradient(120deg,#39abf8,#7184fe);font-size:%?20?%;text-align:center;color:#fff}.asso-item .asso-info uni-image[data-v-b930bfb8]{width:%?100?%;height:%?100?%;background-color:#b6b7b7}.asso-item .asso-info .asso-txt[data-v-b930bfb8]{margin-left:%?28?%}.asso-item .asso-info .asso-txt>uni-view[data-v-b930bfb8]:first-child{font-size:%?34?%;line-height:%?52?%;font-weight:700}.asso-item .asso-info .asso-txt>uni-view[data-v-b930bfb8]:nth-child(2){font-size:%?24?%;line-height:%?52?%;color:#969aa6}.asso-item .asso-info .asso-txt>uni-view:nth-child(2) uni-text[data-v-b930bfb8]{margin-right:%?18?%}.asso-item .asso-line[data-v-b930bfb8]{width:100%;height:%?1?%;background-color:#e5e7eb}.asso-item .asso-jiaru[data-v-b930bfb8]{padding:%?20?% 0;margin:0 %?30?%;font-size:%?24?%}.asso-item .asso-jiaru>uni-view[data-v-b930bfb8]{margin-right:%?10?%}.asso-item .asso-jiaru uni-image[data-v-b930bfb8]{width:%?40?%;height:%?40?%;border-radius:%?40?%;background-color:#b6b7b7;margin-left:%?12?%}.more-asso .more-asso-txt[data-v-b930bfb8]{font-size:%?24?%;margin:0 %?40?%}.more-asso .more-asso-img[data-v-b930bfb8]{padding:%?20?% %?40?%}.more-asso .more-asso-img uni-image[data-v-b930bfb8]{width:%?670?%;height:%?220?%;background-color:#000;-webkit-box-shadow:0 8px 12px 0 rgba(165,168,183,.5);box-shadow:0 8px 12px 0 rgba(165,168,183,.5);border-radius:15px}.bottext-set[data-v-b930bfb8]{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:calc(100vh - %?60?%)}.bot-help[data-v-b930bfb8]{height:%?60?%;line-height:%?60?%;font-size:%?20?%;color:#969aa6;text-align:center}.bot-help>uni-text[data-v-b930bfb8]{margin-left:%?12?%}.join-btn[data-v-b930bfb8]{position:fixed;bottom:0;left:0;width:100%;z-index:10}.join-btn .conf-btn[data-v-b930bfb8]{height:%?98?%;line-height:%?98?%;background-image:-o-linear-gradient(330deg,#39abf8 0,#7184fe 100%);background-image:linear-gradient(120deg,#39abf8,#7184fe);margin:0;border-radius:0;font-size:%?36?%}.join-btn-two[data-v-b930bfb8]{position:fixed;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.join-btn-two .join-btn-left[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;height:%?98?%;border-radius:0;background-image:-o-linear-gradient(330deg,#39abf8 0,#7184fe 100%);background-image:linear-gradient(120deg,#39abf8,#7184fe)}.join-btn-two .join-btn-right[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;height:%?98?%;border-radius:0;background-image:-o-linear-gradient(330deg,#f54500 0,#d70606 100%);background-image:linear-gradient(120deg,#f54500,#d70606)}.join-btn-two .btn-two-set[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.join-btn-two .btn-two-set>uni-view[data-v-b930bfb8]:first-child{font-size:%?34?%;line-height:%?30?%}.join-btn-two .btn-two-set>uni-view[data-v-b930bfb8]:last-child{font-size:%?24?%}.pingd-txt[data-v-b930bfb8]{height:%?74?%;background-color:#f1f3f7;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 %?30?%;font-size:%?24?%;color:#969aa6}.pingd-txt uni-view[data-v-b930bfb8]{font-size:%?24?%}.pingd-txt .iconfont[data-v-b930bfb8]{margin:0 %?8?%}.setup-item[data-v-b930bfb8]{background-color:#fff;height:%?110?%;padding:0 %?30?%;border-bottom:#e5e7eb solid %?1?%}.setup-item .setup-item-left[data-v-b930bfb8]{font-size:%?30?%}.setup-item .setup-item-left .iconfont[data-v-b930bfb8]{font-size:%?34?%;margin-right:%?10?%}.setup-item .setup-item-right uni-text[data-v-b930bfb8]{font-size:%?30?%;color:#bbb}.setup-item .setup-item-right uni-input[data-v-b930bfb8]{text-align:right}.setup-item .setup-item-right .icon-youjiantou[data-v-b930bfb8]{font-size:%?34?%;color:#b6b7b7;margin-left:%?20?%}.set-area[data-v-b930bfb8]{background-color:#fff;padding:%?30?%}.set-area uni-textarea[data-v-b930bfb8]{margin:%?20?% auto 0;height:%?200?%}.set-area .countnum[data-v-b930bfb8]{text-align:right}.comm-tips[data-v-b930bfb8]{padding:%?20?% %?30?%}.comm-tips .iconfont[data-v-b930bfb8]{font-size:%?36?%;color:#5788ff;margin-right:%?10?%}.comm-tips uni-text[data-v-b930bfb8]{font-size:%?24?%;color:#969aa6}.wodeset-top[data-v-b930bfb8]{width:100%;height:%?100?%;background-color:#5a71fa}.wodeset-top .wodeset-top-sel[data-v-b930bfb8]{width:%?460?%;height:%?66?%;background-color:#5a71fa;border-radius:%?33?%;border:solid %?1?% #fff;overflow:hidden}.wodeset-top .wodeset-top-sel>uni-view[data-v-b930bfb8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:#fff;height:100%}.wodeset-top .wodeset-top-sel .actset[data-v-b930bfb8]{background-color:#fff;color:#5a71fa}.onecard[data-v-b930bfb8]{background-color:#f3f5f9;border-radius:%?15?%;padding:%?30?%}.onecard .onecard-txt[data-v-b930bfb8]{font-size:%?28?%;line-height:%?52?%;color:#353535;margin-top:%?20?%}.onecard .selc-item[data-v-b930bfb8]{padding-bottom:%?20?%;border-bottom:#e5e7eb solid %?1?%}.onecard .selc-item .selc-item-left .selc-item-img[data-v-b930bfb8]{width:%?100?%;height:%?100?%;margin-right:%?20?%}.onecard .selc-item .selc-item-left .selc-item-img uni-image[data-v-b930bfb8]{width:%?100?%;height:%?100?%;border-radius:%?100?%;background-color:#a1a5af}.onecard .selc-item .selc-item-left .selc-item-txt[data-v-b930bfb8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.onecard .selc-item .selc-item-left .selc-item-name[data-v-b930bfb8]{font-size:%?34?%;font-weight:700}.onecard .selc-item .selc-item-left .selc-item-job[data-v-b930bfb8]{font-size:%?24?%;color:#969aa6}.onecard .selc-item .selc-item-left .selc-item-job uni-view[data-v-b930bfb8]{font-size:%?24?%}.onecard .selc-item .selc-item-left .selc-item-job .iconfont[data-v-b930bfb8]{font-size:%?26?%;margin-right:%?10?%}.onecard .selc-item .selc-item-left .selc-item-job .icon-jiaruqunzu[data-v-b930bfb8]{margin-left:%?20?%}.onecard .selc-item .selc-item-type[data-v-b930bfb8]{padding:0 %?20?%;border-radius:%?30?%;font-size:%?20?%;color:#fff}.onecard .selc-item .selc-item-type .conf-btn[data-v-b930bfb8]{background-image:-webkit-gradient(linear,left top,right top,from(#37dfc8),to(#01b49a));background-image:-o-linear-gradient(left,#37dfc8 0,#01b49a 100%);background-image:linear-gradient(450deg,#37dfc8,#01b49a);-webkit-box-shadow:0 %?3?% %?3?% 0 rgba(0,159,136,.5);box-shadow:0 %?3?% %?3?% 0 rgba(0,159,136,.5)}.card-item[data-v-b930bfb8]{padding:%?30?%}.card-tip[data-v-b930bfb8]{font-size:%?24?%;color:#969aa6}.fenhui[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#f1f3f7}.fenhui .fenhui-tit[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?34?%;font-weight:700}.fenhui .fenhui-tit uni-image[data-v-b930bfb8]{width:%?130?%;height:%?130?%;background-color:#d9d7e0;margin-right:%?20?%}.card-comment[data-v-b930bfb8]{font-size:%?24?%;border-top:#efeef3 solid %?1?%;padding:%?20?% 0 0 0}.card-comment .comment-item[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.card-comment .comment-item uni-view[data-v-b930bfb8]:first-child{color:#5788ff}.card-comment .comment-item uni-view[data-v-b930bfb8]:nth-child(2){color:#353535}.like-count[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:%?20?%}.like-count>uni-view[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#969aa6;font-size:%?24?%}.like-count>uni-view .iconfont[data-v-b930bfb8]{font-size:%?28?%;color:#dddfe3;margin-right:%?6?%}.fenhui-oneimg[data-v-b930bfb8]{text-align:center}.fenhui-oneimg uni-image[data-v-b930bfb8]{width:%?670?%;height:%?200?%;background-color:#241817;border-radius:%?15?%}.card-toux[data-v-b930bfb8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:%?20?%}.card-toux uni-image[data-v-b930bfb8]{width:%?60?%;height:%?60?%;border-radius:50%;background-color:#f1f3f7;display:block;margin-right:%?8?%}.card-toux .card-name[data-v-b930bfb8]{font-size:%?34?%;font-weight:700;color:#353535;margin-right:%?8?%}.card-toux .card-hangye[data-v-b930bfb8]{color:#969aa6}.card-toux .card-adtxt[data-v-b930bfb8]{padding:0 %?10?%;background-color:#f1f3f7;border-radius:%?15?%;color:#969aa6;font-size:%?24?%}.jianz-top[data-v-b930bfb8]{width:100%;height:%?62?%;background-color:#19c7ad;color:#fff;font-size:%?24?%;padding:0 %?30?%}',""])}}]);