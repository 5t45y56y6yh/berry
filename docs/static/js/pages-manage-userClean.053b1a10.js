(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-userClean"],{"5d59":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"user",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("用户数据清理")])],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-form",[n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("用户UID")]),n("v-uni-input",{attrs:{placeholder:"请输入用户UID",name:"input",type:"number"},model:{value:t.uid,callback:function(i){t.uid=i},expression:"uid"}}),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toUser.apply(void 0,arguments)}}},[t._v("选择用户")])],1)],1),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("清除该用户所有文章")]),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cu-btn bg-red radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.userClean(1)}}},[t._v("确认清理")])],1)],1),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("清除该用户所有评论")]),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cu-btn bg-red  radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.userClean(2)}}},[t._v("确认清理")])],1)],1),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("清除该用户所有动态")]),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cu-btn bg-red  radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.userClean(3)}}},[t._v("确认清理")])],1)],1),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("清除该用户所有商品")]),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cu-btn bg-red  radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.userClean(4)}}},[t._v("确认清理")])],1)],1),n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("清除该用户所有签到记录")]),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cu-btn bg-red  radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.userClean(5)}}},[t._v("确认清理")])],1)],1)],1)],1)},a=[]},b8e2:function(t,i,n){"use strict";n.r(i);var e=n("5d59"),a=n("e5e8");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(s);var u=n("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"375dc3e8",null,!1,e["a"],void 0);i["default"]=c.exports},c58c:function(t,i,n){"use strict";(function(t){n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("cfbc"),a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,uid:""}},onPullDownRefresh:function(){},onShow:function(){e.localStorage.getItem("getuid")&&(this.uid=e.localStorage.getItem("getuid"),e.localStorage.removeItem("getuid"))},onLoad:function(t){},methods:{back:function(){uni.navigateBack({delta:1})},userClean:function(i){var n=this,a="";if(""==n.uid)return uni.showToast({title:"请输入用户uid",icon:"none"}),!1;if(e.localStorage.getItem("userinfo")){var s=JSON.parse(e.localStorage.getItem("userinfo"));a=s.token}var u={uid:n.uid,clean:i,token:a};uni.showModal({title:"确定要删除该类数据吗？",success:function(i){i.confirm?(uni.showLoading({title:"加载中"}),n.$Net.request({url:n.$API.userClean(),data:u,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"})},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):i.cancel&&t.log("用户点击取消")}})},toUser:function(){uni.navigateTo({url:"/pages/manage/users?type=get"})}}};i.default=a}).call(this,n("5a52")["default"])},e5e8:function(t,i,n){"use strict";n.r(i);var e=n("c58c"),a=n.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a}}]);