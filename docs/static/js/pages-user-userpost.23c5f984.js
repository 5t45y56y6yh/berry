(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userpost"],{"003d":function(t,e,i){t.exports=i.p+"static/img/loading.edead6c4.gif"},"04fa":function(t,e,i){"use strict";i.r(e);var n=i("825af"),a=i("208b");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"68f8f7c6",null,!1,n["a"],void 0);e["default"]=c.exports},"208b":function(t,e,i){"use strict";i.r(e);var n=i("56ae"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"56ae":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("99af"),i("e25e"),i("fb6a"),i("ac1f"),i("5319");var n=i("0af4"),a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,page:1,moreText:"加载更多",isLoad:0,token:"",contentsList:[],isLoading:0,type:"waiting",allowDelete:0}},onPullDownRefresh:function(){this.page=1,this.getContentsList(!1);setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){this.page=1,n.localStorage.getItem("token")&&(this.token=n.localStorage.getItem("token"),this.getContentsList(!1)),this.contentConfig()},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getContentsList(!0)},getContentsList:function(t){var e=this;if(""==e.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;var i=JSON.parse(n.localStorage.getItem("userinfo")),a=i.uid,s={type:"post",authorId:a,status:e.type},o=e.page;t&&o++,e.$Net.request({url:e.$API.getContentsList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey(s)),limit:8,page:o,order:"created",token:e.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(e.isLoad=0,e.moreText="加载更多",1==i.data.code){var n=i.data.data;n.length>0?t?(e.page++,e.contentsList=e.contentsList.concat(n)):e.contentsList=n:(e.moreText="没有更多文章了",t||(e.contentsList=n))}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300);e.moreText="加载更多",e.isLoad=0}})},contentConfig:function(){var t=this;t.$Net.request({url:t.$API.contentConfig(),method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.allowDelete=e.data.data.allowDelete)},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},toDelete:function(e){var i=this,a="";if(n.localStorage.getItem("userinfo")){var s=JSON.parse(n.localStorage.getItem("userinfo"));a=s.token}var o={key:e,token:a};uni.showModal({title:"确定要删除该文章吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.contentsDelete(),data:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},toPost:function(){uni.navigateTo({url:"/pages/user/post"})},toEdit:function(t){uni.navigateTo({url:"/pages/user/post?type=edit&cid="+t})},toType:function(t){this.type=t,this.page=1,this.moreText="加载更多",this.isLoad=0,this.getContentsList(!1)},subText:function(t,e){return t.length<null?t.substring(0,e)+"……":t},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),i=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),a=("0"+t.getHours()).slice(-2),s=("0"+t.getMinutes()).slice(-2),o=e+"-"+i+"-"+n+" "+a+":"+s;return o},replaceSpecialChar:function(t){return!!t&&(t=t.replace(/&quot;/g,'"'),t=t.replace(/&amp;/g,"&"),t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&nbsp;/g," "),t)}}};e.default=a}).call(this,i("5a52")["default"])},"825af":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"userpost",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("投稿列表")]),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPost.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-add"})],1)],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"data-box"},[n("v-uni-view",{staticClass:"search-type grid col-3"},[n("v-uni-view",{staticClass:"search-type-box",class:"waiting"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("waiting")}}},[n("v-uni-text",[t._v("待审核")])],1),n("v-uni-view",{staticClass:"search-type-box",class:"publish"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("publish")}}},[n("v-uni-text",[t._v("已发布")])],1),n("v-uni-view",{staticClass:"search-type-box",class:"reject"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("reject")}}},[n("v-uni-text",[t._v("已拒绝")])],1)],1),n("v-uni-view",{staticClass:"cu-card article no-card"},[0==t.contentsList.length?n("v-uni-view",{staticClass:"no-data"},[n("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.contentsList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toEdit(e.cid)}}},[e.images.length>0?n("v-uni-image",{attrs:{src:e.images[0],mode:"aspectFill"}}):t._e(),n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"text-content"},[t._v(t._s(t.replaceSpecialChar(e.title)))]),n("v-uni-view",["publish"==e.status?n("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v("已发布")]):t._e(),"waiting"==e.status?n("v-uni-view",{staticClass:"cu-tag bg-orange light sm round"},[t._v("待审核")]):t._e(),n("v-uni-view",{staticClass:"cu-tag data-time"},[t._v(t._s(t.formatDate(e.created)))])],1)],1)],1),n("v-uni-view",{staticClass:"manage-btn",staticStyle:{"text-align":"right"}},[1==t.allowDelete?n("v-uni-text",{staticClass:"text-red radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDelete(e.cid)}}},[t._v("删除")]):t._e()],1)],1)})),t.contentsList.length>0?n("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],2)],1),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:i("003d")}})],1)],1):t._e()],1)},a=[]}}]);