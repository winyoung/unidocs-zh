(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-pull-down-refresh-pull-down-refresh"],{"01b3":function(t,a,n){var o=n("24fb");a=o(!1),a.push([t.i,".text[data-v-6485c3b7]{margin:%?16?% 0;width:100%;background-color:#fff;height:%?120?%;line-height:%?120?%;text-align:center;color:#555;border-radius:%?8?%}",""]),t.exports=a},"0323":function(t,a,n){"use strict";var o,e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t._l(t.data,(function(a,o){return n("v-uni-view",{key:o,staticClass:"text"},[t._v("list - "+t._s(a))])})),t.showLoadMore?n("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],2)],1)},i=[];n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return o}))},"10e1":function(t,a,n){"use strict";var o=n("2613"),e=n.n(o);e.a},2613:function(t,a,n){var o=n("01b3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=n("4f06").default;e("8112dff4",o,!0,{sourceMap:!1,shadowMode:!1})},"2d19":function(t,a,n){"use strict";n.r(a);var o=n("5dcc"),e=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(a,t,(function(){return o[t]}))}(i);a["default"]=e.a},"5dcc":function(t,a,n){"use strict";n("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout((function(){t.setListData()}),300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"),this.initData()},methods:{initData:function(){var t=this;setTimeout((function(){t.max=0,t.data=[];var a=[];t.max+=10;for(var n=t.max-9;n<t.max+1;n++)a.push(n);t.data=t.data.concat(a),uni.stopPullDownRefresh()}),300)},setListData:function(){var t=[];this.max+=10;for(var a=this.max-9;a<this.max+1;a++)t.push(a);this.data=this.data.concat(t)}}};a.default=o},cdee:function(t,a,n){"use strict";n.r(a);var o=n("0323"),e=n("2d19");for(var i in e)"default"!==i&&function(t){n.d(a,t,(function(){return e[t]}))}(i);n("10e1");var r,s=n("f0c5"),u=Object(s["a"])(e["default"],o["b"],o["c"],!1,null,"6485c3b7",null,!1,o["a"],r);a["default"]=u.exports}}]);