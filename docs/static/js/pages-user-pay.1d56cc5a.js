(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-pay"],{"003d":function(t,i,e){t.exports=e.p+"static/img/loading.edead6c4.gif"},1232:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"user",class:t.AppStyle},[a("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("提现账户设置")]),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.userEdit.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-upload"})],1)],1)],1),a("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),a("v-uni-form",[a("v-uni-view",{staticClass:"cu-form-group margin-top"},[a("v-uni-view",{staticClass:"title"},[t._v("账户类型")]),a("v-uni-view",{staticClass:"picker",attrs:{"data-target":"payModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[""==t.type?[t._v("选择账户类型")]:[t._v(t._s(t.type))],a("v-uni-text",{staticClass:"cuIcon-right"})],2)],1),a("v-uni-view",{staticClass:"cu-form-group margin-top"},[a("v-uni-view",{staticClass:"title"},[t._v("真实姓名")]),a("v-uni-input",{attrs:{placeholder:"请输入真实姓名",name:"input",type:"text"},model:{value:t.realname,callback:function(i){t.realname=i},expression:"realname"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("账户信息")]),a("v-uni-input",{attrs:{placeholder:"请输入账户信息",name:"input",type:"text"},model:{value:t.info,callback:function(i){t.info=i},expression:"info"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("收款二维码")]),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cu-btn bg-blue radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upload.apply(void 0,arguments)}}},[t._v("上传图片")])],1)],1),""!=t.imgurl?a("v-uni-view",{staticClass:"pay-codeImg"},[a("v-uni-image",{attrs:{src:t.imgurl}})],1):t._e()],1),a("v-uni-view",{staticClass:"cu-modal",class:"payModal"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[a("v-uni-radio-group",{staticClass:"block"},[a("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.payList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPay(i.name)}}},[a("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[a("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(i.name))]),a("v-uni-radio",{staticClass:"round"})],1)],1)})),1)],1)],1)],1),0==t.isLoading?a("v-uni-view",{staticClass:"loading"},[a("v-uni-view",{staticClass:"loading-main"},[a("v-uni-image",{attrs:{src:e("003d")}})],1)],1):t._e()],1)},n=[]},"1ed9":function(t,i,e){"use strict";e.r(i);var a=e("cd73"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"2fe9":function(t,i,e){"use strict";e.r(i);var a=e("1232"),n=e("1ed9");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);var s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"04cc8be5",null,!1,a["a"],void 0);i["default"]=u.exports},cd73:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("e9c4");var a=e("0af4"),n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,uid:0,payList:[{name:"支付宝"},{name:"微信"}],type:"",realname:"",info:"",token:"",userInfo:"",modalName:"",imgurl:"",isLoading:0}},onPullDownRefresh:function(){},onShow:function(){a.localStorage.getItem("token")&&(this.token=a.localStorage.getItem("token")),this.userStatus(),this.getCacheInfo()},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},PickerChange:function(t){this.index=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(){this.modalName=null},toPay:function(t){this.type=t,this.hideModal()},getCacheInfo:function(){if(a.localStorage.getItem("userinfo")){var t=JSON.parse(a.localStorage.getItem("userinfo"));this.uid=t.uid,this.userInfo=t}},userEdit:function(){var t=this;if(""==t.type||""==t.realname||""==t.info||""==t.imgurl)return uni.showToast({title:"请完成表单输入",icon:"none"}),!1;var i=t.type+"|"+t.realname+"|"+t.info+"|"+t.imgurl,e={uid:t.uid,name:t.userInfo.name,pay:i};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.userEdit(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(e)),token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(i){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:i.data.msg,icon:"none"}),1==i.data.code&&(uni.showToast({title:"操作成功！",icon:"none"}),setTimeout((function(){t.back()}),1e3))},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},upload:function(){var t=this;uni.chooseImage({count:1,sourceType:["album","camera"],success:function(i){uni.showLoading({title:"加载中"});var e=i.tempFilePaths,a=uni.uploadFile({url:t.$API.upload(),filePath:e[0],name:"file",formData:{token:t.token},success:function(i){setTimeout((function(){uni.hideLoading()}),1e3);var e=JSON.parse(i.data);uni.showToast({title:e.msg,icon:"none"}),1==e.code&&(t.imgurl=e.data.url)},fail:function(){setTimeout((function(){uni.hideLoading()}),1e3)}});a.onProgressUpdate((function(t){}))}})},userStatus:function(){var t=this;t.$Net.request({url:t.$API.userStatus(),data:{token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(1==i.data.code){var e=i.data.data.pay;if(e){var a=e.split("|");t.type=a[0],t.realname=a[1],t.info=a[2],t.imgurl=a[3]}}setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(i){uni.showToast({title:"网络开小差了哦",icon:"none"});setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})}}};i.default=n}}]);