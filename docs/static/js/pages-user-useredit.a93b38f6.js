(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-useredit"],{"24d7":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"user",class:e.AppStyle},[a("v-uni-view",{staticClass:"header",style:[{height:e.CustomBar+"px"}]},[a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:e.CustomBar+"px","padding-top":e.StatusBar+"px"}},[a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-view",{staticClass:"content text-bold",style:[{top:e.StatusBar+"px"}]},[e._v("个人设置")]),a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.userEdit.apply(void 0,arguments)}}},[a("v-uni-button",{staticClass:"cu-btn round bg-blue"},[e._v("保存")])],1)],1)],1),a("v-uni-view",{style:[{padding:e.NavBar+"px 10px 0px 10px"}]}),a("v-uni-form",[a("v-uni-view",{staticClass:"user-edit-header margin-top"},[a("v-uni-image",{attrs:{src:e.avatar}}),a("v-uni-text",{staticClass:"cu-btn bg-gradual-blue radius",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAvatar.apply(void 0,arguments)}}},[e._v("设置头像")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("用户名")]),a("v-uni-input",{attrs:{name:"input",disabled:"disabled",value:e.name}})],1),a("v-uni-view",{staticClass:"cu-form-group margin-top"},[a("v-uni-view",{staticClass:"title"},[e._v("昵称")]),a("v-uni-input",{attrs:{placeholder:"请输入昵称",name:"input"},model:{value:e.screenName,callback:function(t){e.screenName=t},expression:"screenName"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("邮箱")]),a("v-uni-input",{attrs:{placeholder:"未设置",disabled:"disabled",name:"input",value:e.mail}}),a("v-uni-view",{staticClass:"text-blue",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toEmail.apply(void 0,arguments)}}},[e._v("修改")])],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("网址")]),a("v-uni-input",{attrs:{placeholder:"请输入网址",name:"input"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),a("v-uni-view",{staticClass:"cu-form-group align-start"},[a("v-uni-view",{staticClass:"title"},[e._v("个人简介")]),a("v-uni-textarea",{attrs:{placeholder:"输入个人简介"},model:{value:e.introduce,callback:function(t){e.introduce=t},expression:"introduce"}})],1),a("v-uni-view",{staticClass:"cu-form-group margin-top"},[a("v-uni-view",{staticClass:"title"},[e._v("密码")]),a("v-uni-input",{attrs:{placeholder:"请输入密码,不填则不修改",name:"input"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[e._v("确认密码")]),a("v-uni-input",{attrs:{placeholder:"请再次输入密码",name:"input"},model:{value:e.repassword,callback:function(t){e.repassword=t},expression:"repassword"}})],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"DialogModal1"==e.modalName?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[e._v("设置头像")]),a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticClass:"padding-xl text-left"},[a("v-uni-view",[e._v("Gravatar是全球最大的头像库，属于Wordpress旗下。它广泛应用于国内外各类网站和程序，包括知名的Github。在Gravatar通过您的邮箱注册用户，并设置头像后，您在所有支持Gravatar的网站使用邮箱，都会显示您的头像。")]),a("v-uni-view",[e._v("或者，您可以将将邮箱设置成QQ邮箱，将自动获取您的QQ头像。")])],1),a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toGravatar.apply(void 0,arguments)}}},[e._v("前往Gravatar")])],1)],1)],1)],1)],1)},i=[]},4120:function(e,t,a){"use strict";a.r(t);var n=a("7688"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},7688:function(e,t,a){"use strict";(function(e){a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("e9c4");var n=a("0af4"),i=a("ff84"),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,uid:0,name:"",screenName:"",password:"",repassword:"",mail:"",url:"",avatar:"",avatarNew:"",introduce:"",modalName:null,token:""}},onPullDownRefresh:function(){},onShow:function(){if(this.getCacheInfo(),n.localStorage.getItem("toAvatar")){var t=JSON.parse(n.localStorage.getItem("toAvatar"));this.avatarUpload(t.dataUrl)}else e.log("没有头像缓存")},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},getCacheInfo:function(){if(n.localStorage.getItem("userinfo")){var e=JSON.parse(n.localStorage.getItem("userinfo"));this.uid=e.uid,this.screenName=e.screenName,this.name=e.name,this.mail=e.mail,this.url=e.url,this.token=e.token,this.avatar=e.avatar,this.introduce=e.introduce}},userEdit:function(){var e=this;if(""!=e.password&&e.password!=e.repassword)return uni.showToast({title:"两次密码不一致",icon:"none",duration:1e3,position:"bottom"}),!1;var t={uid:e.uid,name:e.name,screenName:e.screenName,password:e.password,introduce:e.introduce,url:e.url};""!=e.avatarNew&&(t.avatar=e.avatarNew),uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.userEdit(),data:{params:JSON.stringify(e.$API.removeObjectEmptyKey(t)),token:e.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code)if(""!=e.password){n.localStorage.removeItem("userinfo"),n.localStorage.removeItem("token");setTimeout((function(){uni.reLaunch({url:"/pages/home/home"}),clearTimeout("timer")}),1e3)}else{var a=JSON.parse(n.localStorage.getItem("userinfo"));a.screenName=e.screenName,a.url=e.url,a.introduce=e.introduce,""!=e.avatarNew&&(a.avatar=e.avatarNew),e.avatarNew="",n.localStorage.setItem("userinfo",JSON.stringify(a)),e.getCacheInfo()}},fail:function(e){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},toEmail:function(){uni.navigateTo({url:"/pages/user/mailedit"})},toAddress:function(){uni.navigateTo({url:"/pages/user/address"})},toPay:function(){uni.navigateTo({url:"/pages/user/pay"})},toBind:function(){uni.navigateTo({url:"/pages/user/userbind"})},toGravatar:function(){this.hideModal();window.open("https://cn.gravatar.com/")},toAvatar:function(){uni.navigateTo({url:"../../uni_modules/buuug7-img-cropper/pages/cropper",events:{imgCropped:function(t){e.log(t)}}})},avatarUpload:function(t){var a=this;(0,i.base64ToPath)(t).then((function(e){var t=e;uni.uploadFile({url:a.$API.upload(),filePath:t,name:"file",formData:{token:a.token},success:function(e){setTimeout((function(){uni.hideLoading()}),1e3);var t=JSON.parse(e.data);1==t.code?(a.avatar=t.data.url,a.avatarNew=t.data.url,n.localStorage.removeItem("toAvatar"),a.userEdit()):uni.showToast({title:"头像上传失败，请检查接口",icon:"none"})},fail:function(){setTimeout((function(){uni.hideLoading()}),1e3)}})})).catch((function(t){e.error("失败"+t)}))}}};t.default=o}).call(this,a("5a52")["default"])},e526:function(e,t,a){"use strict";a.r(t);var n=a("24d7"),i=a("4120");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"351faeac",null,!1,n["a"],void 0);t["default"]=s.exports},ff84:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.base64ToPath=function(e){return new Promise((function(t,a){if("object"===("undefined"===typeof window?"undefined":(0,i.default)(window))&&"document"in window){e=e.split(",");var n=e[0].match(/:(.*?);/)[1],s=atob(e[1]),u=s.length,c=new Uint8Array(u);while(u--)c[u]=s.charCodeAt(u);return t((window.URL||window.webkitURL).createObjectURL(new Blob([c],{type:n})))}var l=e.split(",")[0].match(/data\:\S+\/(\S+);/);l?l=l[1]:a(new Error("base64 error"));var d=function(){return Date.now()+String(r++)}()+"."+l;if("object"!==("undefined"===typeof plus?"undefined":(0,i.default)(plus)))if("object"===("undefined"===typeof wx?"undefined":(0,i.default)(wx))&&wx.canIUse("getFileSystemManager")){v=wx.env.USER_DATA_PATH+"/"+d;wx.getFileSystemManager().writeFile({filePath:v,data:o(e),encoding:"base64",success:function(){t(v)},fail:function(e){a(e)}})}else a(new Error("not support"));else{var v="_doc/uniapp_temp/"+d;if(!function(e,t){for(var a=e.split("."),n=t.split("."),i=!1,o=0;o<n.length;o++){var r=a[o]-n[o];if(0!==r){i=r>0;break}}return i}("Android"===plus.os.name?"1.9.9.80627":"1.9.9.80472",plus.runtime.innerVersion))return void plus.io.resolveLocalFileSystemURL("_doc",(function(n){n.getDirectory("uniapp_temp",{create:!0,exclusive:!1},(function(n){n.getFile(d,{create:!0,exclusive:!1},(function(n){n.createWriter((function(n){n.onwrite=function(){t(v)},n.onerror=a,n.seek(0),n.writeAsBinary(o(e))}),a)}),a)}),a)}),a);var f=new plus.nativeObj.Bitmap(d);f.loadBase64Data(e,(function(){f.save(v,{},(function(){f.clear(),t(v)}),(function(e){f.clear(),a(e)}))}),(function(e){f.clear(),a(e)}))}}))},t.pathToBase64=function(e){return new Promise((function(t,a){if("object"===("undefined"===typeof window?"undefined":(0,i.default)(window))&&"document"in window){if("function"===typeof FileReader){var n=new XMLHttpRequest;return n.open("GET",e,!0),n.responseType="blob",n.onload=function(){if(200===this.status){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=a,e.readAsDataURL(this.response)}},n.onerror=a,void n.send()}var o=document.createElement("canvas"),r=o.getContext("2d"),s=new Image;return s.onload=function(){o.width=s.width,o.height=s.height,r.drawImage(s,0,0),t(o.toDataURL()),o.height=o.width=0},s.onerror=a,void(s.src=e)}"object"!==("undefined"===typeof plus?"undefined":(0,i.default)(plus))?"object"===("undefined"===typeof wx?"undefined":(0,i.default)(wx))&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:e,encoding:"base64",success:function(e){t("data:image/png;base64,"+e.data)},fail:function(e){a(e)}}):a(new Error("not support")):plus.io.resolveLocalFileSystemURL(function(e){if(0===e.indexOf("_www")||0===e.indexOf("_doc")||0===e.indexOf("_documents")||0===e.indexOf("_downloads"))return e;if(0===e.indexOf("file://"))return e;if(0===e.indexOf("/storage/emulated/0/"))return e;if(0===e.indexOf("/")){var t=plus.io.convertAbsoluteFileSystem(e);if(t!==e)return t;e=e.substr(1)}return"_www/"+e}(e),(function(e){e.file((function(e){var n=new plus.io.FileReader;n.onload=function(e){t(e.target.result)},n.onerror=function(e){a(e)},n.readAsDataURL(e)}),(function(e){a(e)}))}),(function(e){a(e)}))}))};var i=n(a("53ca"));function o(e){var t=e.split(",");return t[t.length-1]}a("c975"),a("d3b7"),a("d9e2"),a("d401"),a("ac1f"),a("466d"),a("81b2"),a("0eb6"),a("b7ef"),a("8bd4"),a("ace4"),a("5cc6"),a("907a"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("986a"),a("1d02"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("b39a"),a("72f7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861");var r=0}}]);