(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-contents"],{"617b":function(t,e,i){"use strict";i.r(e);var n=i("99e4"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"851f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"userpost",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("内容管理")])],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"data-box"},[n("v-uni-view",{staticClass:"fullpost-btn"},["administrator"==t.group?n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMetas.apply(void 0,arguments)}}},[t._v("分类标签")]):t._e()],1),n("v-uni-view",{staticClass:"cu-bar bg-white search"},[n("v-uni-view",{staticClass:"search-form round"},[n("v-uni-text",{staticClass:"cuIcon-search"}),n("v-uni-input",{attrs:{type:"text",placeholder:"输入搜索关键字"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchTag.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),""!=t.searchText?n("v-uni-view",{staticClass:"search-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchClose()}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1):t._e()],1)],1),n("v-uni-view",{staticClass:"search-type grid col-3"},[n("v-uni-view",{staticClass:"search-type-box",class:"waiting"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("waiting")}}},[n("v-uni-text",[t._v("待审核")])],1),n("v-uni-view",{staticClass:"search-type-box",class:"publish"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("publish")}}},[n("v-uni-text",[t._v("已发布")])],1),n("v-uni-view",{staticClass:"search-type-box",class:"reject"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("reject")}}},[n("v-uni-text",[t._v("已拒绝")])],1)],1),n("v-uni-view",{staticClass:"cu-card article no-card"},["publish"==t.type?n("v-uni-view",{staticClass:"data-select"},[n("v-uni-text",{class:0==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(0)}}},[t._v("全部")]),n("v-uni-text",{class:1==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(1)}}},[t._v("推荐")]),n("v-uni-text",{class:2==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(2)}}},[t._v("置顶")]),n("v-uni-text",{class:3==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(3)}}},[t._v("轮播")])],1):t._e(),0==t.contentsList.length?n("v-uni-view",{staticClass:"no-data"},[n("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.contentsList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"text-content"},[t._v(t._s(e.title))]),n("v-uni-view",["publish"==e.status?n("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v("已发布")]):t._e(),"waiting"==e.status?n("v-uni-view",{staticClass:"cu-tag bg-orange light sm round"},[t._v("待审核")]):t._e(),"reject"==e.status?n("v-uni-view",{staticClass:"cu-tag bg-red light sm round"},[t._v("已拒绝")]):t._e(),n("v-uni-view",{staticClass:"cu-tag data-time"},[t._v(t._s(t.formatDate(e.created)))])],1)],1)],1),n("v-uni-view",{staticClass:"manage-btn"},["waiting"==e.status?n("v-uni-text",{staticClass:"text-green radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toAudit(e.cid,0)}}},[t._v("通过")]):t._e(),"waiting"==e.status?n("v-uni-text",{staticClass:"text-yellow radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toAudit(e.cid,1)}}},[t._v("拒绝")]):t._e(),"publish"==e.status&&"administrator"==t.group?[0==e.isrecommend?n("v-uni-text",{staticClass:"text-green radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addRecommend(e.cid)}}},[t._v("推荐")]):n("v-uni-text",{staticClass:"text-grey radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rmRecommend(e.cid)}}},[t._v("取消推荐")]),0==e.istop?n("v-uni-text",{staticClass:"text-green radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addTop(e.cid)}}},[t._v("置顶")]):n("v-uni-text",{staticClass:"text-grey radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rmTop(e.cid)}}},[t._v("取消置顶")]),0==e.isswiper?n("v-uni-text",{staticClass:"text-green radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addSwiper(e.cid)}}},[t._v("轮播")]):n("v-uni-text",{staticClass:"text-grey radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rmSwiper(e.cid)}}},[t._v("取消轮播")]),n("v-uni-text",{staticClass:"text-blue radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setFields(e.cid,e.abcimg)}}},[t._v("图文类型")])]:t._e(),n("v-uni-text",{staticClass:"text-blue radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toEdit(e.cid)}}},[t._v("编辑")]),"administrator"==t.group?n("v-uni-text",{staticClass:"text-red radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDelete(e.cid)}}},[t._v("删除")]):t._e(),n("v-uni-text",{staticClass:"text-gray radius",staticStyle:{float:"right"}},[t._v(t._s(e.authorInfo.name))])],2)],1)})),t.contentsList.length>0?n("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],2)],1),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:i("e5d4")}})],1)],1):t._e(),n("v-uni-view",{staticClass:"cu-modal",class:"RadioModal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-radio-group",{staticClass:"block",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.RadioChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.abcimgList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item"},[n("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[n("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(e.name))]),n("v-uni-radio",{staticClass:"round",class:t.abcimg==e.value?"checked":"",attrs:{checked:t.abcimg==e.value,value:e.value}})],1)],1)})),1)],1)],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"reject"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[t._v("输入拒绝理由")]),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl text-left"},[n("v-uni-textarea",{staticStyle:{width:"100%",height:"150upx"},attrs:{maxlength:"-1",placeholder:"输入拒绝理由"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-green text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAudit(t.curCid,1)}}},[t._v("确定")])],1)],1)],1)],1)],1)},a=[]},"99e4":function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("c975"),i("14d9"),i("99af"),i("e25e"),i("fb6a");var a=n(i("ade3")),o=i("cfbc"),s={data:function(){var t;return t={StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,page:1,moreText:"加载更多",isLoad:0,token:"",contentsList:[],searchText:"",type:"waiting",reason:"",curCid:0,isLoading:0,group:"",modalName:null,abcimg:"able",abcimgList:[{name:"默认",value:"able"},{name:"三图",value:"mable"},{name:"大图",value:"bable"}]},(0,a.default)(t,"curCid",""),(0,a.default)(t,"dataSelect",0),t},onPullDownRefresh:function(){this.page=1,this.getContentsList(!1);setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){if(this.page=1,o.localStorage.getItem("token")&&(this.token=o.localStorage.getItem("token"),this.getContentsList(!1)),o.localStorage.getItem("userinfo")){var t=JSON.parse(o.localStorage.getItem("userinfo"));this.group=t.group}},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getContentsList(!0)},searchTag:function(){this.searchText;this.page=1,this.getContentsList()},searchClose:function(){this.searchText="",this.page=1,this.getContentsList()},toType:function(t){this.type=t,this.page=1,this.moreText="加载更多",this.isLoad=0,this.getContentsList(!1)},toSelect:function(t){this.dataSelect=t,this.page=1,this.moreText="加载更多",this.isLoad=0,this.getContentsList(!1)},getContentsList:function(t){var e=this;if(""==e.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;var i={type:"post",status:e.type};1==e.dataSelect&&(i.isrecommend=1),2==e.dataSelect&&(i.istop=1),3==e.dataSelect&&(i.isswiper=1);var n=e.page;t&&n++,e.$Net.request({url:e.$API.getContentsList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey(i)),limit:8,page:n,searchKey:e.searchText,order:"created",token:e.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(e.isLoad=0,e.moreText="加载更多",1==i.data.code){var n=i.data.data;if(n.length>0){var a=[],o=e.$API.GetFields();for(var s in n){var c=n[s].fields;if(c.length>0)for(var u in c)-1!=o.indexOf(c[u].name)&&(n[s][c[u].name]=c[u].strValue);a.push(n[s])}t?(e.page++,e.contentsList=e.contentsList.concat(a)):e.contentsList=a}else e.moreText="没有更多文章了",t||(e.contentsList=n)}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){e.moreText="加载更多",e.isLoad=0;setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},toPost:function(){uni.navigateTo({url:"/pages/user/post"})},toEdit:function(t){uni.navigateTo({url:"/pages/user/post?type=edit&cid="+t})},subText:function(t,e){return t.length<null?t.substring(0,e)+"……":t},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),i=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),a=("0"+t.getHours()).slice(-2),o=("0"+t.getMinutes()).slice(-2),s=e+"-"+i+"-"+n+" "+a+":"+o;return s},toAudit:function(e,i){var n=this,a="";if(n.modalName=null,o.localStorage.getItem("userinfo")){var s=JSON.parse(o.localStorage.getItem("userinfo"));a=s.token}if(1==i&&""==n.reason)return n.modalName="reject",n.curCid=e,!1;var c="确定要审核通过该文章吗？";1==i&&(c="确定要拒绝该文章吗？");var u={type:i,key:e,token:a,reason:n.reason};uni.showModal({title:c,success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),n.$Net.request({url:n.$API.contentsAudit(),data:u,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(n.page=1,n.moreText="加载更多",n.isLoad=0,n.getContentsList()),n.reason="",n.curCid=0},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},toDelete:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,token:n};uni.showModal({title:"确定要删除该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.contentsDelete(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},addRecommend:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,recommend:1,token:n};uni.showModal({title:"确定要推荐该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.toRecommend(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},rmRecommend:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,recommend:0,token:n};uni.showModal({title:"确定要取消推荐该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.toRecommend(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},addTop:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,istop:1,token:n};uni.showModal({title:"确定要置顶该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.toTop(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},rmTop:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,istop:0,token:n};uni.showModal({title:"确定要取消置顶该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.toTop(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},addSwiper:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,isswiper:1,token:n};uni.showModal({title:"确定要轮播该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.toSwiper(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},rmSwiper:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,isswiper:0,token:n};uni.showModal({title:"确定要取消轮播该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.toSwiper(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},toMetas:function(){uni.navigateTo({url:"/pages/manage/metas"})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){var e=t.detail.value,i=this.curCid;this.setFields(i,e)},setFields:function(t,e){var i,n=this;if(n.curCid=t,n.abcimg=e||"able",null==n.modalName)return n.modalName="RadioModal",!1;if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));i=a.token}var s={cid:t,name:"abcimg",strvalue:n.abcimg,token:i};n.modalName=null,uni.showLoading({title:"加载中"}),n.$Net.request({url:n.$API.setFields(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){n.modalName=null,n.abcimg="able",n.curCid="",setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(n.page=1,n.moreText="加载更多",n.isLoad=0,n.getContentsList())},fail:function(t){n.modalName=null,n.abcimg="able",n.curCid="",setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})}}};e.default=s}).call(this,i("5a52")["default"])},"9ddc":function(t,e,i){"use strict";i.r(e);var n=i("851f"),a=i("617b");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"9b494558",null,!1,n["a"],void 0);e["default"]=c.exports},e5d4:function(t,e,i){t.exports=i.p+"static/img/loading.edead6c4.gif"}}]);