(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contents-shop"],{"003d":function(t,e,i){t.exports=i.p+"static/img/loading.edead6c4.gif"},"0c95":function(t,e,i){var a=i("223f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("133d79d6",a,!0,{sourceMap:!1,shadowMode:!1})},"1d10":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("99af");var s=a(i("c3fc")),n=i("0af4"),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,userInfo:null,token:"",shopList:[],isLoad:0,page:1,moreText:"加载更多",type:0,isLoading:0,searchText:"",vipDiscount:0,vipPrice:0,scale:0,isvip:0,vip:0,currencyName:""}},onPullDownRefresh:function(){this.page=1,this.getShopList(!1);setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){this.currencyName=this.$API.getCurrencyName(),n.localStorage.getItem("userinfo")&&(this.userInfo=JSON.parse(n.localStorage.getItem("userinfo")),this.userInfo.style="background-image:url("+this.userInfo.avatar+");"),n.localStorage.getItem("token")&&(this.token=n.localStorage.getItem("token")),this.isLoad=0,this.page=1,this.allCache(),this.getVipInfo(),this.userStatus()},onLoad:function(){this.getShopList(!1)},methods:{back:function(){uni.navigateBack({delta:1})},searchShop:function(){this.page=1,this.getShopList()},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getShopList(!0)},setType:function(t){this.type=t,this.page=1,this.getShopList()},allCache:function(){n.localStorage.getItem(this.type+"_shopList")&&(this.shopList=JSON.parse(n.localStorage.getItem(this.type+"_shopList")))},getShopList:function(t){var e=this,i={type:e.type,status:"1"};0==e.type&&(i={status:"1"});var a=e.page;t&&a++,e.$Net.request({url:e.$API.shopList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey(i)),searchKey:e.searchText,limit:6,page:a},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300);if(e.isLoad=0,e.moreText="加载更多",1==i.data.code){var a=i.data.data;0==a.length&&(e.moreText="没有更多数据了"),t?a.length>0&&(e.page++,e.shopList=e.shopList.concat(a)):e.shopList=a,n.localStorage.setItem(e.type+"_shopList",JSON.stringify(e.shopList))}},fail:function(t){e.moreText="加载更多",e.isLoad=0,uni.showToast({title:"网络开小差了哦",icon:"none"});setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},shopInfo:function(t){uni.navigateTo({url:"/pages/contents/shopinfo?sid="+t})},getVipInfo:function(){var t=this;t.$Net.request({url:t.$API.getVipInfo(),header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.vipDiscount=e.data.data.vipDiscount,t.vipPrice=e.data.data.vipPrice,t.scale=e.data.data.scale);setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(e){setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})},userStatus:function(){var t=this,e="";if(n.localStorage.getItem("userinfo")){var i=JSON.parse(n.localStorage.getItem("userinfo"));e=i.token}t.$Net.request({url:t.$API.userStatus(),data:{token:e},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.vip=e.data.data.vip,t.isvip=e.data.data.isvip)},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})}},components:{waves:s.default}};e.default=o},"223f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".waves[data-v-235bc8a0]{position:relative;overflow:hidden}.waves .waves-ripple[data-v-235bc8a0]{position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1}.waves .active[data-v-235bc8a0]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s ease-out,-webkit-transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out,-webkit-transform .3s ease-out}",""]),t.exports=e},5486:function(t,e,i){"use strict";i.r(e);var a=i("1d10"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"5f6e":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("ac1f");var a=0,s={props:{wavesColor:{type:String,default:"rgba(0, 0, 0, .15)"},itemClass:{type:String,default:""}},data:function(){return a++,{rippleTop:0,rippleLeft:0,field:{},active:Boolean,wavesId:"waves_"+a}},methods:{onTap:function(t){this.$emit("onTap")},onTouchstart:function(t){var e=this;this.active=!1,this.$nextTick((function(){e.activeWaves(t)}))},activeWaves:function(t){var e=this;this.getClientRect().then((function(i){var a,s;i.height&&(i.finalWidth=i.height>i.width?i.height:i.width,i.finalWidth&&(e.field=i,a=t.touches[0].clientX,s=t.touches[0].clientY,e.rippleTop=s-i.top-i.finalWidth/2,e.rippleLeft=a-i.left-i.finalWidth/2,e.$nextTick((function(){e.active=!0}))))}))},getClientRect:function(){var t=this;return new Promise((function(e){var i=uni.createSelectorQuery().in(t),a="#"+t.wavesId;i.select(a).boundingClientRect((function(t){e(t)})).exec()}))}}};e.default=s},"6b46":function(t,e,i){"use strict";i.r(e);var a=i("5f6e"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"80f4":function(t,e,i){"use strict";i.r(e);var a=i("a592"),s=i("5486");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var o=i("f0c5"),c=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"f8ac64c4",null,!1,a["a"],void 0);e["default"]=c.exports},8839:function(t,e,i){"use strict";var a=i("0c95"),s=i.n(a);s.a},a592:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"user",class:t.AppStyle},[a("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("积分商城")]),a("v-uni-view",{staticClass:"action"})],1)],1),a("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),a("v-uni-view",{staticClass:"data-box"},[a("v-uni-view",{staticClass:"cu-bar bg-white search"},[a("v-uni-view",{staticClass:"search-form round"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-input",{attrs:{type:"text",placeholder:"搜索商品"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchShop.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1),a("v-uni-view",{staticClass:"shop-sort"},[a("v-uni-view",{staticClass:"shop-sort-box",class:"0"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(0)}}},[t._v("全部")]),a("v-uni-view",{staticClass:"shop-sort-box",class:"1"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(1)}}},[t._v("实体商品")]),a("v-uni-view",{staticClass:"shop-sort-box",class:"2"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(2)}}},[t._v("源码")]),a("v-uni-view",{staticClass:"shop-sort-box",class:"3"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(3)}}},[t._v("软件工具")]),a("v-uni-view",{staticClass:"shop-sort-box",class:"4"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(4)}}},[t._v("付费阅读")])],1)],1),a("v-uni-view",{staticClass:"data-box"},[0==t.shopList.length?a("v-uni-view",{staticClass:"no-data"},[t._v("暂时没有商品")]):t._e(),a("v-uni-view",{staticClass:"shop-list grid col-2"},t._l(t.shopList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"shop-box"},[a("v-uni-view",{staticClass:"shop-main",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopInfo(e.id)}}},[a("v-uni-view",{staticClass:"shop-img"},[a("v-uni-image",{attrs:{src:e.imgurl,mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"shop-title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"shop-info"},[1==t.isvip?[a("v-uni-text",{staticClass:"shop-price text-yellow text-bold"},[t._v(t._s(parseInt(e.price*e.vipDiscount)))]),a("v-uni-text",{staticClass:"text-sm margin-left-sm text-yellow"},[t._v(t._s(t.currencyName))])]:[a("v-uni-text",{staticClass:"shop-price text-red text-bold"},[t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"text-sm margin-left-sm text-red"},[t._v(t._s(t.currencyName))])],a("v-uni-text",{staticClass:"cuIcon-cart"})],2)],1)],1)})),1)],1),t.shopList.length>0?a("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[a("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e(),0==t.isLoading?a("v-uni-view",{staticClass:"loading"},[a("v-uni-view",{staticClass:"loading-main"},[a("v-uni-image",{attrs:{src:i("003d")}})],1)],1):t._e()],1)},s=[]},c3fc:function(t,e,i){"use strict";i.r(e);var a=i("f686"),s=i("6b46");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("8839");var o=i("f0c5"),c=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"235bc8a0",null,!1,a["a"],void 0);e["default"]=c.exports},f686:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"waves",class:t.itemClass,attrs:{id:t.wavesId},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchstart(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[t._t("default"),i("v-uni-view",{staticClass:"waves-ripple",class:{active:t.active},style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.field.finalWidth+"px",height:t.field.finalWidth+"px","background-color":t.wavesColor}})],2)},s=[]}}]);