(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userwithdraw"],{"2af6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user",class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("快捷提现")]),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.userwithdraw.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"cu-btn round bg-gradual-blue"},[t._v("提交")])],1)],1)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"all-btn margin-top"},[i("v-uni-view",{staticClass:"user-btn flex flex-direction",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.userwithdrawlist.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg"},[t._v("提现记录")])],1)],1),i("v-uni-view",{staticClass:"cur-assets"},[t._v("当前积分："),i("v-uni-text",{staticClass:"text-red"},[t._v(t._s(t.assets))])],1),i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[t._v("积分")]),i("v-uni-input",{attrs:{placeholder:"请输入提现积分",name:"input",type:"number"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1)],1),i("v-uni-view",{staticClass:"userrecharge-intro userwithdraw-box"},[i("v-uni-view",{staticClass:"userrecharge-intro-title"},[t._v("提现注意：")]),i("v-uni-view",{staticClass:"userrecharge-intro-text"},[t._v("1.提现申请发起后，将会在"),i("v-uni-text",{staticClass:"text-red text-bold"},[t._v("24小时")]),t._v("内审核并打款到您设置的账户，所以在提现前，请"),i("v-uni-text",{staticClass:"text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.topay.apply(void 0,arguments)}}},[t._v("设置")]),t._v("自己的收款信息。")],1),i("v-uni-view",{staticClass:"userrecharge-intro-text"},[t._v("2.提现金额与网站积分的比例为"),i("v-uni-text",{staticClass:"text-red text-bold"},[t._v("1:"+t._s(t.scale))]),t._v("，最低提现"),i("v-uni-text",{staticClass:"text-red text-bold"},[t._v("5000")]),t._v("积分，网站将收取"),i("v-uni-text",{staticClass:"text-red text-bold"},[t._v("5%")]),t._v("手续费。")],1),i("v-uni-view",{staticClass:"userrecharge-intro-text"},[t._v("3.如果未收到提现款，请先查看提现记录中的数据，并立即反馈。")]),i("v-uni-view",{staticClass:"userrecharge-intro-text"},[t._v("4.在提现处于审核状态时，不会扣除用户积分。")])],1)],1)},a=[]},"63bc":function(t,e,i){"use strict";i.r(e);var n=i("b2ff"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},b2ff:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("0af4"),a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,num:"",modalName:null,token:"",assets:"",scale:0}},onPullDownRefresh:function(){},onShow:function(){this.userStatus(),this.getVipInfo()},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},userwithdrawlist:function(){uni.navigateTo({url:"/pages/user/userwithdrawlist"})},userStatus:function(){var t=this,e="";if(n.localStorage.getItem("userinfo")){var i=JSON.parse(n.localStorage.getItem("userinfo"));e=i.token}t.$Net.request({url:t.$API.userStatus(),data:{token:e},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.assets=e.data.data.assets)},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},userwithdraw:function(){var t=this;if(""==t.num)return uni.showToast({title:"请完成表单输入",icon:"none",duration:1e3,position:"bottom"}),!1;if(t.num<5e3)return uni.showToast({title:"最低提现5000积分",icon:"none",duration:1e3,position:"bottom"}),!1;var e="";if(n.localStorage.getItem("userinfo")){var i=JSON.parse(n.localStorage.getItem("userinfo"));e=i.token}var a={num:t.num,token:e};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.userWithdraw(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code)setTimeout((function(){t.back()}),1e3)},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},topay:function(){uni.navigateTo({url:"/pages/user/pay"})},getVipInfo:function(){var t=this;t.$Net.request({url:t.$API.getVipInfo(),header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.scale=e.data.data.scale);setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(e){setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})}}};e.default=a},c9ec:function(t,e,i){"use strict";i.r(e);var n=i("2af6"),a=i("63bc");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var u=i("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"525c4b3d",null,!1,n["a"],void 0);e["default"]=o.exports}}]);