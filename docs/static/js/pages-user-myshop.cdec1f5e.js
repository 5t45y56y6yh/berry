(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myshop"],{"003d":function(t,e,i){t.exports=i.p+"static/img/loading.edead6c4.gif"},"0c95":function(t,e,i){var n=i("223f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("133d79d6",n,!0,{sourceMap:!1,shadowMode:!1})},"223f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".waves[data-v-235bc8a0]{position:relative;overflow:hidden}.waves .waves-ripple[data-v-235bc8a0]{position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1}.waves .active[data-v-235bc8a0]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s ease-out,-webkit-transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out,-webkit-transform .3s ease-out}",""]),t.exports=e},"2f93":function(t,e,i){"use strict";i.r(e);var n=i("92e7"),a=i("eb72");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"07601d3a",null,!1,n["a"],void 0);e["default"]=u.exports},"5f6e":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("ac1f");var n=0,a={props:{wavesColor:{type:String,default:"rgba(0, 0, 0, .15)"},itemClass:{type:String,default:""}},data:function(){return n++,{rippleTop:0,rippleLeft:0,field:{},active:Boolean,wavesId:"waves_"+n}},methods:{onTap:function(t){this.$emit("onTap")},onTouchstart:function(t){var e=this;this.active=!1,this.$nextTick((function(){e.activeWaves(t)}))},activeWaves:function(t){var e=this;this.getClientRect().then((function(i){var n,a;i.height&&(i.finalWidth=i.height>i.width?i.height:i.width,i.finalWidth&&(e.field=i,n=t.touches[0].clientX,a=t.touches[0].clientY,e.rippleTop=a-i.top-i.finalWidth/2,e.rippleLeft=n-i.left-i.finalWidth/2,e.$nextTick((function(){e.active=!0}))))}))},getClientRect:function(){var t=this;return new Promise((function(e){var i=uni.createSelectorQuery().in(t),n="#"+t.wavesId;i.select(n).boundingClientRect((function(t){e(t)})).exec()}))}}};e.default=a},"6b46":function(t,e,i){"use strict";i.r(e);var n=i("5f6e"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},8839:function(t,e,i){"use strict";var n=i("0c95"),a=i.n(n);a.a},"92e7":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("我的商品")]),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toShop.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-add"})],1)],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"data-box"},[n("v-uni-view",{staticClass:"all-btn"},[n("v-uni-view",{staticClass:"user-btn flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-yellow margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sellOrder.apply(void 0,arguments)}}},[t._v("已售出订单")])],1)],1),0==t.shopList.length?n("v-uni-view",{staticClass:"no-data"},[n("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),n("v-uni-view",{staticClass:"shop-list grid col-2"},t._l(t.shopList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"shop-box"},[n("v-uni-view",{staticClass:"shop-main"},[0==e.status?n("v-uni-text",{staticClass:"bg-orange shop-status"},[t._v("待审核")]):t._e(),1==e.status?n("v-uni-text",{staticClass:"bg-green shop-status"},[t._v("已上架")]):t._e(),2==e.status?n("v-uni-text",{staticClass:"bg-red shop-status"},[t._v("已禁用")]):t._e(),n("v-uni-view",{staticClass:"shop-img"},[n("v-uni-image",{attrs:{src:e.imgurl}})],1),n("v-uni-view",{staticClass:"shop-title"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"shop-info text-center"},[n("v-uni-text",{staticClass:"shop-btn text-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editShop(e.id)}}},[t._v("编辑")]),n("v-uni-text",{staticClass:"shop-btn text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteShop(e.id)}}},[t._v("删除")])],1)],1)],1)})),1)],1),t.shopList.length>0?n("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e(),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:i("003d")}})],1)],1):t._e()],1)},a=[]},c3fc:function(t,e,i){"use strict";i.r(e);var n=i("f686"),a=i("6b46");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("8839");var o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"235bc8a0",null,!1,n["a"],void 0);e["default"]=u.exports},d7b2:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("99af");var a=n(i("c3fc")),s=i("0af4"),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,userInfo:null,uid:0,token:"",shopList:[],isLoad:0,page:1,moreText:"加载更多",type:1,isLoading:0}},onPullDownRefresh:function(){this.page=1,this.getShopList();setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){s.localStorage.getItem("userinfo")&&(this.userInfo=JSON.parse(s.localStorage.getItem("userinfo")),this.uid=this.userInfo.uid),s.localStorage.getItem("token")&&(this.token=s.localStorage.getItem("token")),this.isLoad=0,this.page=1,this.getShopList()},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getShopList(!0)},getShopList:function(t){var e=this,i=0;if(!s.localStorage.getItem("userinfo")){uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"});setTimeout((function(){uni.navigateTo({url:"/pages/user/login"}),clearTimeout("timer")}),1e3);return!1}var n=JSON.parse(s.localStorage.getItem("userinfo"));i=n.uid;var a={uid:i},o=e.page;t&&o++,e.$Net.request({url:e.$API.shopList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey(a)),limit:6,page:o},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300);if(e.isLoad=0,e.moreText="加载更多",1==i.data.code){var n=i.data.data;0==n.length&&(e.moreText="没有更多数据了"),t?n.length>0&&(e.page++,e.shopList=e.shopList.concat(n)):e.shopList=n}},fail:function(t){e.moreText="加载更多",e.isLoad=0,uni.showToast({title:"网络开小差了哦",icon:"none"});setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},deleteShop:function(t){var e=this,i="";if(!s.localStorage.getItem("userinfo")){uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"});setTimeout((function(){uni.navigateTo({url:"/pages/user/login"}),clearTimeout("timer")}),1e3);return!1}var n=JSON.parse(s.localStorage.getItem("userinfo"));i=n.token;var a={key:t,token:i};uni.showModal({title:"确定要删除此商品吗?",content:" ",success:function(t){t.confirm&&(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.deleteShop(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.getShopList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}}))}})},toShop:function(t){uni.navigateTo({url:"/pages/user/addshop"})},sellOrder:function(){uni.navigateTo({url:"/pages/user/sellorder"})},editShop:function(t){uni.navigateTo({url:"/pages/user/addshop?type=edit&sid="+t})}},components:{waves:a.default}};e.default=o},eb72:function(t,e,i){"use strict";i.r(e);var n=i("d7b2"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},f686:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"waves",class:t.itemClass,attrs:{id:t.wavesId},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchstart(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[t._t("default"),i("v-uni-view",{staticClass:"waves-ripple",class:{active:t.active},style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.field.finalWidth+"px",height:t.field.finalWidth+"px","background-color":t.wavesColor}})],2)},a=[]}}]);