(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-swiper-vertical-swiper-vertical"],{"0016":function(e,t,i){"use strict";i.r(t);var n=i("611f"),a=i("13fa");for(var d in a)"default"!==d&&function(e){i.d(t,e,(function(){return a[e]}))}(d);i("4aa2");var s,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"52e2341a",null,!1,n["a"],s);t["default"]=r.exports},"13fa":function(e,t,i){"use strict";i.r(t);var n=i("1581"),a=i.n(n);for(var d in n)"default"!==d&&function(e){i.d(t,e,(function(){return n[e]}))}(d);t["default"]=a.a},1581:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"}],a={data:function(){return{circular:!0,videoList:[{id:"video0",src:"",img:""},{id:"video1",src:"",img:""},{id:"video2",src:"",img:""}],videoDataList:[]}},onLoad:function(e){},onReady:function(){this.init(),this.getData()},methods:{init:function(){this._videoIndex=0,this._videoContextList=[];for(var e=0;e<this.videoList.length;e++)this._videoContextList.push(uni.createVideoContext("video"+e,this));this._videoDataIndex=0},getData:function(e){var t=this;this.videoDataList=n,setTimeout((function(){t.updateVideo(!0)}),200)},onSwiperChange:function(e){var t=this,i=e.detail.current;if(i!==this._videoIndex){var n=!1;0===i&&this._videoIndex===this.videoList.length-1?n=!0:i===this.videoList.length-1&&0===this._videoIndex?n=!1:i>this._videoIndex&&(n=!0),n?this._videoDataIndex++:this._videoDataIndex--,this._videoDataIndex<0?this._videoDataIndex=this.videoDataList.length-1:this._videoDataIndex>=this.videoDataList.length&&(this._videoDataIndex=0),this.circular=0!=this._videoDataIndex,this._videoIndex>=0&&(this._videoContextList[this._videoIndex].pause(),this._videoContextList[this._videoIndex].seek(0)),this._videoIndex=i,setTimeout((function(){t.updateVideo(n)}),200)}},getNextIndex:function(e){var t=this._videoIndex+(e?1:-1);return t<0?this.videoList.length-1:t>=this.videoList.length?0:t},getNextDataIndex:function(e){var t=this._videoDataIndex+(e?1:-1);return t<0?this.videoDataList.length-1:t>=this.videoDataList.length?0:t},updateVideo:function(e){var t=this;this.$set(this.videoList[this._videoIndex],"src",this.videoDataList[this._videoDataIndex].src),this.$set(this.videoList[this.getNextIndex(e)],"src",this.videoDataList[this.getNextDataIndex(e)].src),setTimeout((function(){t._videoContextList[t._videoIndex].play()}),200),console.log("v:"+this._videoIndex+" d:"+this._videoDataIndex+"; next v:"+this.getNextIndex(e)+" next d:"+this.getNextDataIndex(e))}}};t.default=a},"4aa2":function(e,t,i){"use strict";var n=i("5104"),a=i.n(n);a.a},5104:function(e,t,i){var n=i("80d2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3b3e149c",n,!0,{sourceMap:!1,shadowMode:!1})},"611f":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{circular:e.circular,vertical:!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onSwiperChange.apply(void 0,arguments)}}},e._l(e.videoList,(function(e){return i("v-uni-swiper-item",{key:e.id},[i("v-uni-video",{ref:e.id,refInFor:!0,staticClass:"video",attrs:{id:e.id,src:e.src,controls:!1,loop:!0,"show-center-play-btn":!1}})],1)})),1)],1)},d=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return d})),i.d(t,"a",(function(){return n}))},"80d2":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"\nuni-page-body[data-v-52e2341a]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.page[data-v-52e2341a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%}.swiper[data-v-52e2341a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#007aff}.swiper-item[data-v-52e2341a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.video[data-v-52e2341a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\nwidth:100%\n}",""]),e.exports=t}}]);