(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-addshopinfo"],{"570d":function(t,i,e){var n=e("ccf8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("15ba7f87",n,!0,{sourceMap:!1,shadowMode:!1})},"76ab":function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("fb6a"),e("e9c4");n(e("a1ba"));var a=e("cfbc"),s={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,modalName:"",metaList:[{name:"实体商品",mid:1},{name:"源码",mid:2},{name:"软件工具",mid:3},{name:"付费阅读",mid:4}],token:"",isShow:!1,curHeight:0,jpHeight:0,screenHeight:0,postheight:0,poststyle:"",readstyle:"",isText:0,imgurl:"",value:"",price:"",num:"",vipDiscount:"1.0",DiscountList:[{name:"无折扣",value:"1.0"},{name:"九折",value:"0.9"},{name:"八折",value:"0.8"},{name:"七折",value:"0.7"},{name:"六折",value:"0.6"},{name:"五折",value:"0.5"},{name:"四折",value:"0.4"},{name:"三折",value:"0.3"},{name:"二折",value:"0.2"},{name:"一折",value:"0.1"},{name:"VIP免费",value:"0.0"}],link:{title:"",url:""},type:"add",cid:0,start:-1}},onPullDownRefresh:function(){},onShow:function(){if(a.localStorage.getItem("userinfo")){var t=JSON.parse(a.localStorage.getItem("userinfo"));this.token=t.token}if(a.localStorage.getItem("userShopinfo")){var i=JSON.parse(a.localStorage.getItem("userShopinfo"));this.imgurl=i.imgurl,this.price=i.price,this.num=i.num,this.value=i.value,this.vipDiscount=i.vipDiscount}},onLoad:function(){var t=this,i=uni.getSystemInfoSync().screenHeight;uni.getSystemInfoSync().statusBarHeight;t.screenHeight=i-t.NavBar,t.postheight=300,t.poststyle="height:300px",t.readstyle="height:330px",uni.onKeyboardHeightChange((function(i){if(0==i.height)t.focalize(i.height),t.poststyle="height:300px";else{t.curHeight=i.height;var e=300-i.height;t.focus(i.height),t.poststyle="height:"+e+"px"}}))},methods:{ToisText:function(t){var i=this;i.isText=t,0!=i.curHeight&&1==i.isText&&i.focus(i.curHeight),uni.getSelectedTextRange({success:function(t){i.start=t.start}})},insetText:function(t){var i=this.start,e=this.value;-1==i?e+=t:e=e.slice(0,i)+t+e.slice(i),this.value=e},focus:function(t){if(0==this.isText)return!1},focalize:function(t){},back:function(){uni.navigateBack({delta:1})},PickerChange:function(t){this.index=t.detail.value},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(){this.modalName=null},RadioChange:function(t){this.vipDiscount=t.detail.value,this.hideModal()},textareaAInput:function(){var t=this;uni.getSelectedTextRange({success:function(i){t.start=i.start}})},toBold:function(){this.insetText("**加粗文字**")},toItalic:function(){this.insetText("*斜体文字* ")},toTitle:function(t){for(var i="",e=0;e<t;e++)i+="#";this.value;this.insetText(i),this.hideModal()},toCode:function(){var t="";""!=this.value&&(t="\n");var i=t+"```javascript\n代码片段\n```";this.insetText(i)},tolinks:function(){var t=this.link;if(""==t.title||""==t.url)return uni.showToast({title:"请输入正确的参数",icon:"none",duration:1e3,position:"bottom"}),!1;var i="["+t.title+"]("+t.url+")";this.insetText(i),this.link={title:"",url:""},this.hideModal()},upload:function(){var t=this;uni.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(i){uni.showLoading({title:"加载中"});var e=i.tempFilePaths,n=uni.uploadFile({url:t.$API.upload(),filePath:e[0],name:"file",formData:{token:t.token},success:function(i){setTimeout((function(){uni.hideLoading()}),1e3);var e=JSON.parse(i.data);if(uni.showToast({title:e.msg,icon:"none"}),1==e.code){var n="";""!=t.value&&(n="\n");var a=n+"![图片名称]("+e.data.url+")";t.insetText(a)}},fail:function(){setTimeout((function(){uni.hideLoading()}),1e3)}});n.onProgressUpdate((function(t){}))}})},toIsShow:function(){this.isShow=!this.isShow},submit:function(){var t=this;if(""==t.imgurl||""==t.value||""==t.price||""==t.num)return uni.showToast({title:"请输入正确的参数",icon:"none",duration:1e3,position:"bottom"}),!1;if(t.price<0||t.num<0)return uni.showToast({title:"请输入正确的参数",icon:"none",duration:1e3,position:"bottom"}),!1;var i={imgurl:t.imgurl,price:t.price,num:t.num,value:t.value,vipDiscount:t.vipDiscount};a.localStorage.setItem("userShopinfo",JSON.stringify(i)),uni.showToast({title:"设置完成",icon:"none",duration:1e3,position:"bottom"});setTimeout((function(){t.back()}),1e3)},toMate:function(t){this.categoryText=t.name,this.category=t.mid,this.hideModal()},imgUpload:function(){var t=this;uni.chooseImage({count:1,sourceType:["album","camera"],success:function(i){uni.showLoading({title:"加载中"});var e=i.tempFilePaths,n=uni.uploadFile({url:t.$API.upload(),filePath:e[0],name:"file",formData:{token:t.token},success:function(i){setTimeout((function(){uni.hideLoading()}),1e3);var e=JSON.parse(i.data);uni.showToast({title:e.msg,icon:"none"}),1==e.code&&(t.imgurl=e.data.url)},fail:function(){setTimeout((function(){uni.hideLoading()}),1e3)}});n.onProgressUpdate((function(t){}))}})}}};i.default=s},8319:function(t,i,e){"use strict";var n=e("570d"),a=e.n(n);a.a},ccf8:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-9e96e43c]{overflow:hidden}.post[data-v-9e96e43c]{display:flex;flex:1;flex-direction:column;justify-content:space-between}",""]),t.exports=i},ee2d:function(t,i,e){"use strict";e.r(i);var n=e("fd52"),a=e("f9f5");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("8319");var o=e("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"9e96e43c",null,!1,n["a"],void 0);i["default"]=l.exports},f9f5:function(t,i,e){"use strict";e.r(i);var n=e("76ab"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},fd52:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={mpHtml:e("a1ba").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"post",class:t.AppStyle},[e("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"},{top:t.jpHeight+"px"}]},[e("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"})],1),e("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("商品详细设置")]),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[e("v-uni-button",{staticClass:"cu-btn round bg-blue"},[t._v("保存")])],1)],1)],1),e("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),e("v-uni-form",[e("v-uni-view",{staticClass:"cu-form-group margin-top"},[e("v-uni-view",{staticClass:"title"},[t._v("商品价格")]),e("v-uni-input",{attrs:{placeholder:"输入商品价格",type:"number",name:"input","adjust-position":!1,focus:!1},on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.ToisText(0)},blur:function(i){arguments[0]=i=t.$handleEvent(i),t.ToisText(0)}},model:{value:t.price,callback:function(i){t.price=i},expression:"price"}}),e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-red",attrs:{"data-target":"RadioModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("设置VIP折扣")])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("商品数量")]),e("v-uni-input",{attrs:{placeholder:"输入商品数量",type:"number",name:"input","adjust-position":!1,focus:!1},on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.ToisText(0)},blur:function(i){arguments[0]=i=t.$handleEvent(i),t.ToisText(0)}},model:{value:t.num,callback:function(i){t.num=i},expression:"num"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("缩略图")]),e("v-uni-input",{attrs:{placeholder:"",name:"input",disabled:"disabled"},model:{value:t.imgurl,callback:function(i){t.imgurl=i},expression:"imgurl"}}),e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cu-btn bg-blue radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.imgUpload.apply(void 0,arguments)}}},[t._v("上传图片")])],1)],1),e("v-uni-view",{staticClass:"edit-tool"},[e("v-uni-text",{attrs:{"data-target":"RadioModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("H")]),e("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toBold.apply(void 0,arguments)}}},[t._v("B")]),e("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toItalic.apply(void 0,arguments)}}},[t._v("I")]),e("v-uni-text",{staticClass:"cuIcon-picfill",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upload.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"cuIcon-playfill",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadVideo.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"cuIcon-font",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toCode.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"cuIcon-link",attrs:{"data-target":"LinksModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"cuIcon-read",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toIsShow.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[t.isShow?t._e():e("v-uni-textarea",{staticClass:"text",style:t.poststyle,attrs:{maxlength:"-1",placeholder:"收费显示内容,在这里设置文本,链接,或者联系信息","adjust-position":!1,focus:!1},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.textareaAInput.apply(void 0,arguments)},focus:function(i){arguments[0]=i=t.$handleEvent(i),t.ToisText(1)},blur:function(i){arguments[0]=i=t.$handleEvent(i),t.ToisText(0)}},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}}),t.isShow?e("v-uni-scroll-view",{staticClass:"text",style:t.readstyle,attrs:{"scroll-y":!0}},[e("mp-html",{attrs:{content:t.value,selectable:!0,"show-img-menu":!0,"lazy-load":!0,markdown:!0,"scroll-table":!0}})],1):t._e()],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"metaModal"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[e("v-uni-radio-group",{staticClass:"block"},[e("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.metaList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMate(i)}}},[e("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[e("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(i.name))]),e("v-uni-radio",{staticClass:"round"})],1)],1)})),1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"RadioModal"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[e("v-uni-radio-group",{staticClass:"block"},[e("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(5,(function(i,n){return e("v-uni-view",{key:n,staticClass:"cu-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toTitle(n+1)}}},[e("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[e("v-uni-view",{staticClass:"flex-sub"},[t._v("标题 "+t._s(n+1))]),e("v-uni-radio",{staticClass:"round"})],1)],1)})),1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal LinksModal",class:"LinksModal"==t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"content"},[t._v("插入外部链接")]),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[e("v-uni-input",{attrs:{placeholder:"链接标题"},model:{value:t.link.title,callback:function(i){t.$set(t.link,"title",i)},expression:"link.title"}}),e("v-uni-input",{attrs:{placeholder:"http(s)://"},model:{value:t.link.url,callback:function(i){t.$set(t.link,"url",i)},expression:"link.url"}})],1),e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-button",{staticClass:"cu-btn line-blue text-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-button",{staticClass:"cu-btn bg-blue margin-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tolinks.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:"RadioModal"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-dialog",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[e("v-uni-radio-group",{staticClass:"block",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.RadioChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.DiscountList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"cu-item"},[e("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[e("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(i.name))]),e("v-uni-radio",{staticClass:"round",class:t.vipDiscount==i.value?"checked":"",attrs:{checked:t.vipDiscount==i.value,value:i.value}})],1)],1)})),1)],1)],1)],1)],1)},s=[]}}]);