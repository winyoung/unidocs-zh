(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"14dd":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"reciver"},[t._v(t._s(""===t.msg?"等待发送":"收到消息：")+t._s(t.msg))])],1)},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},"1db5":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".sender-container[data-v-8a1ffc22]{padding:20px}",""]),t.exports=e},"304c":function(t,e,n){var a=n("8793");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("7cd67a88",a,!0,{sourceMap:!1,shadowMode:!1})},"56c5":function(t,e,n){"use strict";var a=n("ee27");n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("c51b")),u={methods:{send:function(){var t=parseInt(1e4*Math.random());r.default.$emit("cc",{msg:"From event bus -> "+t})}}};e.default=u},"6a54":function(t,e,n){"use strict";n.r(e);var a=n("9b79"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},"6e9a":function(t,e,n){"use strict";n.r(e);var a=n("7e25"),r=n("ea75");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("d63a");var c,i=n("f0c5"),f=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"7f0ffd52",null,!1,a["a"],c);e["default"]=f.exports},"71a5":function(t,e,n){"use strict";n.r(e);var a=n("f2ce"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},"76a3":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".reciver[data-v-5ba2edae]{padding:40px 0;text-align:center;line-height:40px}",""]),t.exports=e},"7d27":function(t,e,n){"use strict";var a=n("81bd"),r=n.n(a);r.a},"7e25":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("自定义EventBus")])],1)},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},"7ff5":function(t,e,n){"use strict";var a=n("94a1"),r=n.n(a);r.a},"81bd":function(t,e,n){var a=n("1db5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("15674992",a,!0,{sourceMap:!1,shadowMode:!1})},"868c":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("c51b")),u={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive),r.default.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive),r.default.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};e.default=u},8793:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".sender-container[data-v-7f0ffd52]{padding:20px}",""]),t.exports=e},9168:function(t,e,n){"use strict";n.r(e);var a=n("a633"),r=n("6a54");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var c,i=n("f0c5"),f=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"7c80fd46",null,!1,a["a"],c);e["default"]=f.exports},"94a1":function(t,e,n){var a=n("76a3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("23bbe45a",a,!0,{sourceMap:!1,shadowMode:!1})},"9b79":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("f39d")),u=a(n("d7bb")),c=a(n("6e9a")),i={components:{reciver:r.default,sender:u.default,senderBus:c.default},data:function(){return{}},methods:{}};e.default=i},a633:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:"组件通讯示例"}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("reciver"),n("sender"),n("sender-bus")],1)],1)],1)},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},ac05:function(t,e,n){"use strict";n.r(e);var a=n("868c"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},c51b:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("e143")),u=new r.default;e.default=u},d63a:function(t,e,n){"use strict";var a=n("304c"),r=n.n(a);r.a},d7bb:function(t,e,n){"use strict";n.r(e);var a=n("fcac"),r=n("71a5");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("7d27");var c,i=n("f0c5"),f=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"8a1ffc22",null,!1,a["a"],c);e["default"]=f.exports},ea75:function(t,e,n){"use strict";n.r(e);var a=n("56c5"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},f2ce:function(t,e,n){"use strict";n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{send:function(){var t=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+t})}}};e.default=a},f39d:function(t,e,n){"use strict";n.r(e);var a=n("14dd"),r=n("ac05");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("7ff5");var c,i=n("f0c5"),f=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"5ba2edae",null,!1,a["a"],c);e["default"]=f.exports},fcac:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v("点击发送消息")])],1)},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))}}]);