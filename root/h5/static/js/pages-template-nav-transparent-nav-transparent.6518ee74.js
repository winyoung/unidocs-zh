(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-transparent-nav-transparent"],{"39ee":function(e,i,t){"use strict";var n,a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"page"},[e.showSwiper?e._e():t("v-uni-view",{staticClass:"img-view"},[t("v-uni-image",{attrs:{src:e.imgUrls[0]}})],1),e.showSwiper?t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},e._l(e.imgUrls,(function(e,i){return t("v-uni-swiper-item",{key:i},[t("v-uni-image",{attrs:{src:e}})],1)})),1):e._e(),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[e._v("在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。")]),t("v-uni-view",[e._v("在微信小程序端，导航栏始终为不透明样式。")])],1),t("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("图片类型")])],1),t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.radioChange.apply(void 0,arguments)}}},e._l(e.items,(function(i,n){return t("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[t("v-uni-view",[e._v(e._s(i.name))]),t("v-uni-view",[t("v-uni-radio",{attrs:{value:i.value,checked:i.checked}})],1)],1)})),1)],1),t("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},u=[];t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return u})),t.d(i,"a",(function(){return n}))},"45e4":function(e,i,t){"use strict";var n=t("b1ce"),a=t.n(n);a.a},"4e6d":function(e,i,t){"use strict";t.r(i);var n=t("c53c"),a=t.n(n);for(var u in n)"default"!==u&&function(e){t.d(i,e,(function(){return n[e]}))}(u);i["default"]=a.a},5672:function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,"uni-image[data-v-30eeab9e],\nuni-swiper[data-v-30eeab9e],\n.img-view[data-v-30eeab9e]{width:%?750?%;height:%?500?%}.page-section-title[data-v-30eeab9e]{margin-top:%?50?%}",""]),e.exports=i},b1ce:function(e,i,t){var n=t("5672");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("ba43b630",n,!0,{sourceMap:!1,shadowMode:!1})},c53c:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{showSwiper:!1,imgUrls:["../../../static/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"],items:[{value:"img",name:"静态图",checked:!0},{value:"swiper",name:"轮播图",checked:!1}]}},methods:{radioChange:function(e){this.showSwiper="swiper"===e.detail.value}}};i.default=n},dfd5:function(e,i,t){"use strict";t.r(i);var n=t("39ee"),a=t("4e6d");for(var u in a)"default"!==u&&function(e){t.d(i,e,(function(){return a[e]}))}(u);t("45e4");var s,r=t("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"30eeab9e",null,!1,n["a"],s);i["default"]=c.exports}}]);