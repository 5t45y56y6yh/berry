(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-foget"],{"9ac1":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4");n("cfbc");var i={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,times:60,show:!0,name:"",code:"",password:"",repassword:""}},onPullDownRefresh:function(){},onShow:function(){},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},PickerChange:function(t){this.index=t.detail.value},userFoget:function(){var t=this;if(""==t.name||""==t.code||""==t.password||""==t.repassword)return uni.showToast({title:"请输入正确的参数",icon:"none",duration:1e3,position:"bottom"}),!1;if(t.password!=t.repassword)return uni.showToast({title:"两次密码不一致",icon:"none",duration:1e3,position:"bottom"}),!1;var e={name:t.name,code:t.code,password:t.password};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.userFoget(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(e))},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code&&t.back()},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},SendCode:function(){var t=this;if(""==t.name)return uni.showToast({title:"请输入用户名",icon:"none",duration:1e3,position:"bottom"}),!1;var e={name:t.name};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.SendCode(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(e))},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code&&t.getCode()},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},getCode:function(){var t=this;this.show=!1,this.timer=setInterval((function(){t.times--,0===t.times&&(t.show=!0,clearInterval(t.timer),t.times=60)}),1e3)}}};e.default=i},"9c2f":function(t,e,n){"use strict";n.r(e);var i=n("9ac1"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a227:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("找回密码")]),n("v-uni-view",{staticClass:"action"})],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"user-form"},[n("v-uni-form",[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-input",{attrs:{name:"input",placeholder:"请输入用户名(必填)"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-input",{attrs:{name:"input",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t.show?n("v-uni-view",{staticClass:"sendcode text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.SendCode.apply(void 0,arguments)}}},[t._v("发送")]):t._e(),t.show?t._e():n("v-uni-view",{staticClass:"sendcode text-gray"},[t._v(t._s(t.times)+"s")])],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-input",{attrs:{name:"input",type:"password",placeholder:"输入新密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-input",{attrs:{name:"input",type:"password",placeholder:"再次输入密码"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1),n("v-uni-view",{staticClass:"user-btn flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.userFoget.apply(void 0,arguments)}}},[t._v("确认修改")])],1)],1)],1)],1)},a=[]},d354:function(t,e,n){"use strict";n.r(e);var i=n("a227"),a=n("9c2f");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"02f5dc34",null,!1,i["a"],void 0);e["default"]=u.exports}}]);