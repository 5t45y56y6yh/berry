(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contents-comments"],{"892f":function(t,e,a){"use strict";a.r(e);var n=a("edef"),i=a("ffd2");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"cde58bf2",null,!1,n["a"],void 0);e["default"]=c.exports},"99c6":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e9c4"),a("14d9"),a("99af"),a("e25e"),a("fb6a"),a("ac1f"),a("5319");a("cfbc"),a("718b"),a("ca41");var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,commentsList:[],moreText:"加载更多",page:1,isLoad:0,isLoading:0}},onPullDownRefresh:function(){},onReachBottom:function(){this.loadMore()},onShow:function(){this.page=1,this.getCommentsList(!1)},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",0==this.isLoad&&this.getCommentsList(!0)},toInfo:function(t,e){uni.navigateTo({url:"/pages/contents/info?cid="+t+"&title="+e})},getCommentsList:function(t){var e=this,a=e.page;t&&a++,e.$Net.request({url:e.$API.getCommentsList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey({type:"comment",status:"approved"})),limit:5,page:a},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(a){if(e.isLoading=1,e.isLoad=0,1==a.data.code){var n=a.data.data;if(n.length>0){var i=[];for(var s in n){var o=n[s];o.style="background-image:url("+n[s].avatar+");",i.push(o)}t?(e.page++,e.commentsList=e.commentsList.concat(i)):e.commentsList=i,e.moreText="加载更多"}else e.moreText="没有更多评论了"}},fail:function(t){e.isLoading=1,e.isLoad=0,e.moreText="加载更多"}})},getUserLv:function(t){if(!t)t=0;var e=this.$API.GetRankList();return e[t]},getUserLvStyle:function(t){if(!t)t=0;var e=this.$API.GetRankStyle(),a="color:#fff;background-color: "+e[t];return a},commentsAdd:function(t,e,a,n){uni.navigateTo({url:"/pages/contents/commentsadd?cid="+n+"&coid="+e+"&title="+t+"&isreply="+a})},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),s=("0"+t.getMinutes()).slice(-2),o=e+"-"+a+"-"+n+" "+i+":"+s;return o},replaceSpecialChar:function(t){return!!t&&(t=t.replace(/&quot;/g,'"'),t=t.replace(/&amp;/g,"&"),t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&nbsp;/g," "),t)},toUserContents:function(t){var e=t.author,a=t.author+"的信息",n=t.authorId;uni.navigateTo({url:"/pages/contents/userinfo?title="+a+"&name="+e+"&uid="+n+"&avatar="+encodeURIComponent(t.avatar)})}}};e.default=n},e5d4:function(t,e,a){t.exports=a.p+"static/img/loading.edead6c4.gif"},edef:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("全站实时评论")]),n("v-uni-view",{staticClass:"action"})],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"cu-card dynamic no-card",staticStyle:{"margin-top":"20upx"}},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-list menu-avatar comment"},[0==t.commentsList.length?n("v-uni-view",{staticClass:"no-data"},[t._v("暂时没有评论")]):t._e(),n("v-uni-view",{staticClass:"cu-card dynamic no-card",staticStyle:{"margin-top":"20upx"}},[t._l(t.commentsList,(function(e,a){return t.commentsList.length>0?[n("commentItem",{key:a+"_0",attrs:{item:e}})]:t._e()}))],2),t.commentsList.length>0?n("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],1)],1)],1),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:a("e5d4")}})],1)],1):t._e()],1)},i=[]},ffd2:function(t,e,a){"use strict";a.r(e);var n=a("99c6"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a}}]);