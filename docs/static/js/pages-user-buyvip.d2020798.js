(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-buyvip"],{"003d":function(t,i,e){t.exports=e.p+"static/img/loading.edead6c4.gif"},"0c95":function(t,i,e){var a=e("223f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("133d79d6",a,!0,{sourceMap:!1,shadowMode:!1})},"223f":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".waves[data-v-235bc8a0]{position:relative;overflow:hidden}.waves .waves-ripple[data-v-235bc8a0]{position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1}.waves .active[data-v-235bc8a0]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s ease-out,-webkit-transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out,-webkit-transform .3s ease-out}",""]),t.exports=i},"376f":function(t,i,e){"use strict";e.r(i);var a=e("e505"),n=e("469f");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);var o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"46198d08",null,!1,a["a"],void 0);i["default"]=c.exports},"469f":function(t,i,e){"use strict";e.r(i);var a=e("a429"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"5f6e":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d3b7"),e("ac1f");var a=0,n={props:{wavesColor:{type:String,default:"rgba(0, 0, 0, .15)"},itemClass:{type:String,default:""}},data:function(){return a++,{rippleTop:0,rippleLeft:0,field:{},active:Boolean,wavesId:"waves_"+a}},methods:{onTap:function(t){this.$emit("onTap")},onTouchstart:function(t){var i=this;this.active=!1,this.$nextTick((function(){i.activeWaves(t)}))},activeWaves:function(t){var i=this;this.getClientRect().then((function(e){var a,n;e.height&&(e.finalWidth=e.height>e.width?e.height:e.width,e.finalWidth&&(i.field=e,a=t.touches[0].clientX,n=t.touches[0].clientY,i.rippleTop=n-e.top-e.finalWidth/2,i.rippleLeft=a-e.left-e.finalWidth/2,i.$nextTick((function(){i.active=!0}))))}))},getClientRect:function(){var t=this;return new Promise((function(i){var e=uni.createSelectorQuery().in(t),a="#"+t.wavesId;e.select(a).boundingClientRect((function(t){i(t)})).exec()}))}}};i.default=n},"6b46":function(t,i,e){"use strict";e.r(i);var a=e("5f6e"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},8839:function(t,i,e){"use strict";var a=e("0c95"),n=e.n(a);n.a},a429:function(t,i,e){"use strict";(function(t){e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3"),e("d401"),e("d3b7"),e("25f0"),e("ac1f"),e("5319");a(e("c3fc"));var n=e("0af4"),s={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,isLoading:0,vipDiscount:0,vipPrice:0,scale:0}},onShow:function(){this.getVipInfo()},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},getVipInfo:function(){var t=this;t.$Net.request({url:t.$API.getVipInfo(),header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){1==i.data.code&&(t.vipDiscount=i.data.data.vipDiscount,t.vipPrice=i.data.data.vipPrice,t.scale=i.data.data.scale);setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(i){setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})},toBuyVip:function(i){var e=this,a="";if(n.localStorage.getItem("userinfo")){var s=JSON.parse(n.localStorage.getItem("userinfo"));a=s.token}else uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"});var o={day:i,token:a};uni.showModal({title:"确定要购买"+i+"天VIP吗",success:function(i){i.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.buyVIP(),data:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code)setTimeout((function(){e.back(),clearTimeout("timer")}),1e3)},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):i.cancel&&t.log("用户点击取消")}})},tovipDiscount:function(t){return Number(t)<=0?0:(t=t.toString(),t=t.replace("0.",""),t)}}};i.default=s}).call(this,e("5a52")["default"])},c3fc:function(t,i,e){"use strict";e.r(i);var a=e("f686"),n=e("6b46");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("8839");var o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"235bc8a0",null,!1,a["a"],void 0);i["default"]=c.exports},e505:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"user",class:t.AppStyle},[a("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("开通或续期VIP")]),a("v-uni-view",{staticClass:"action"})],1)],1),a("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),a("v-uni-view",{staticClass:"data-box"},[a("v-uni-view",{staticClass:"vip-box"},[a("v-uni-view",{staticClass:"vip-maim"},[a("v-uni-view",{staticClass:"bg-gradual-blue text-center shadow-blur"},[a("v-uni-view",{staticClass:"text-lg text-bold"},[t._v("月付VIP"),a("v-uni-text",{staticClass:"text-red margin-left"},[t._v(t._s(30*t.vipPrice)+"积分")])],1),a("v-uni-view",{staticClass:"margin-top-sm text-Abc"},[t._v("为您的账号获得30天VIP期限")]),a("v-uni-view",{staticClass:"cu-btn radius margin-top bg-black  shadow-blur",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBuyVip(30)}}},[t._v("立即购买")])],1)],1)],1),a("v-uni-view",{staticClass:"vip-box"},[a("v-uni-view",{staticClass:"vip-maim"},[a("v-uni-view",{staticClass:"bg-gradual-blue text-center shadow-blur"},[a("v-uni-view",{staticClass:"text-lg text-bold"},[t._v("季付VIP"),a("v-uni-text",{staticClass:"text-red margin-left"},[t._v(t._s(90*t.vipPrice)+"积分")])],1),a("v-uni-view",{staticClass:"margin-top-sm text-Abc"},[t._v("获得90天VIP期限")]),a("v-uni-view",{staticClass:"cu-btn radius margin-top bg-black  shadow-blur",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBuyVip(90)}}},[t._v("立即购买")])],1)],1)],1),a("v-uni-view",{staticClass:"vip-box"},[a("v-uni-view",{staticClass:"vip-maim"},[a("v-uni-view",{staticClass:"bg-gradual-blue text-center shadow-blur"},[a("v-uni-view",{staticClass:"text-lg text-bold"},[t._v("年付VIP"),a("v-uni-text",{staticClass:"text-red margin-left"},[t._v(t._s(365*t.vipPrice)+"积分")])],1),a("v-uni-view",{staticClass:"margin-top-sm text-Abc"},[t._v("获得365天VIP期限")]),a("v-uni-view",{staticClass:"cu-btn radius margin-top bg-black  shadow-blur",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBuyVip(365)}}},[t._v("立即购买")])],1)],1)],1),a("v-uni-view",{staticClass:"vip-box"},[a("v-uni-view",{staticClass:"vip-maim"},[a("v-uni-view",{staticClass:"bg-gradual-orange padding radius text-center shadow-blur"},[a("v-uni-view",{staticClass:"text-lg text-bold"},[t._v("永久VIP"),a("v-uni-text",{staticClass:"text-black margin-left"},[t._v(t._s(500*t.vipPrice)+"积分")])],1),a("v-uni-view",{staticClass:"margin-top-sm text-Abc"},[t._v("享受永久VIP特权，并获取高亮VIP头衔")]),a("v-uni-view",{staticClass:"cu-btn radius margin-top bg-black  shadow-blur",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBuyVip(500)}}},[t._v("立即购买")])],1)],1)],1)],1),0==t.isLoading?a("v-uni-view",{staticClass:"loading"},[a("v-uni-view",{staticClass:"loading-main"},[a("v-uni-image",{attrs:{src:e("003d")}})],1)],1):t._e()],1)},n=[]},f686:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"waves",class:t.itemClass,attrs:{id:t.wavesId},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.onTouchstart(i)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}},[t._t("default"),e("v-uni-view",{staticClass:"waves-ripple",class:{active:t.active},style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.field.finalWidth+"px",height:t.field.finalWidth+"px","background-color":t.wavesColor}})],2)},n=[]}}]);