(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-picker-picker"],{"0410":function(i,t,e){"use strict";e.r(t);var n=e("3f04"),a=e.n(n);for(var l in n)"default"!==l&&function(i){e.d(t,i,(function(){return n[i]}))}(l);t["default"]=a.a},"1ffc":function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:i.title}}),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("普通选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{value:i.index,range:i.array,"range-key":"name"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.array[i.index].name))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("多列选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"multiSelector",value:i.multiIndex,range:i.multiArray},on:{columnchange:function(t){arguments[0]=t=i.$handleEvent(t),i.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.multiArray[0][i.multiIndex[0]])+"，"+i._s(i.multiArray[1][i.multiIndex[1]])+"，"+i._s(i.multiArray[2][i.multiIndex[2]]))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("时间选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"time",value:i.time,start:"09:01",end:"21:01"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindTimeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.time))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("日期选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"date",value:i.date,start:i.startDate,end:i.endDate},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.date))])],1)],1)],1)],1)],1)},l=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return l})),e.d(t,"a",(function(){return n}))},"3f04":function(i,t,e){"use strict";function n(i){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===i?e-=60:"end"===i&&(e+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(e,"-").concat(n,"-").concat(a)}e("99af"),e("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"picker",array:[{name:"中国"},{name:"美国"},{name:"巴西"},{name:"日本"}],index:0,multiArray:[["亚洲","欧洲"],["中国","日本"],["北京","上海","广州"]],multiIndex:[0,0,0],date:n({format:!0}),startDate:n("start"),endDate:n("end"),time:"12:01"}},methods:{bindPickerChange:function(i){console.log("picker发送选择改变，携带值为："+i.detail.value),this.index=i.detail.value},bindMultiPickerColumnChange:function(i){switch(console.log("修改的列为："+i.detail.column+"，值为："+i.detail.value),this.multiIndex[i.detail.column]=i.detail.value,i.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["中国","日本"],this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[1]=["英国","法国"],this.multiArray[2]=["伦敦","曼彻斯特"];break}this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[2]=["东京","北海道"];break}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["伦敦","曼彻斯特"];break;case 1:this.multiArray[2]=["巴黎","马赛"];break}break}this.multiIndex.splice(2,1,0);break}this.$forceUpdate()},bindDateChange:function(i){this.date=i.detail.value},bindTimeChange:function(i){this.time=i.detail.value}}};t.default=a},cb57:function(i,t,e){"use strict";e.r(t);var n=e("1ffc"),a=e("0410");for(var l in a)"default"!==l&&function(i){e.d(t,i,(function(){return a[i]}))}(l);var s,u=e("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"f0e6f90a",null,!1,n["a"],s);t["default"]=c.exports}}]);