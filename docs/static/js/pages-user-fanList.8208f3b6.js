(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-fanList"],{"003d":function(t,e,i){t.exports=i.p+"static/img/loading.edead6c4.gif"},"2a77":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e25e"),i("fb6a"),i("14d9"),i("99af");i("0af4");var s={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,userList:[],page:1,moreText:"加载更多",isLoad:0,isLoading:0,uid:0}},onPullDownRefresh:function(){this.page=1,this.getUserList(!1),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){this.page=1},onLoad:function(t){t.uid&&(this.uid=t.uid),this.getUserList(!1)},methods:{back:function(){uni.navigateBack({delta:1})},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),i=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),a=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),u=e+"-"+i+"-"+s+" "+a+":"+n;return u},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getUserList(!0)},getUserList:function(t){var e=this,i=e.page;t&&i++,e.$Net.request({url:e.$API.fanList(),data:{touid:e.uid,limit:10,page:i},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(e.isLoad=0,1==i.data.code){var s=i.data.data;if(s.length>0){var a=[];for(var n in s){var u=s[n];u.style="background-image:url("+s[n].userJson.avatar+");",a.push(u)}t?(e.page++,e.userList=e.userList.concat(a)):e.userList=a}else e.moreText="没有更多数据了"}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){e.isLoad=0,e.moreText="加载更多";setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},toUserContents:function(t){var e=t.name,i=t.name+"的信息";t.screenName&&(i=t.screenName+" 的信息",e=t.screenName);var s=t.uid;uni.navigateTo({url:"/pages/contents/userinfo?title="+i+"&name="+e+"&uid="+s+"&avatar="+encodeURIComponent(t.avatar)})},subText:function(t,e){return t?t.length>e?(t=t.substring(0,e),t+"……"):t:"Ta还没有个人介绍哦"}}};e.default=s},"79e0":function(t,e,i){"use strict";i.r(e);var s=i("2a77"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},a0b8:function(t,e,i){"use strict";i.r(e);var s=i("bcb3"),a=i("79e0");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var u=i("f0c5"),o=Object(u["a"])(a["default"],s["b"],s["c"],!1,null,"66635f24",null,!1,s["a"],void 0);e["default"]=o.exports},bcb3:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"user",class:t.AppStyle},[s("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[s("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[s("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-back"})],1),s("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("粉丝列表")]),s("v-uni-view",{staticClass:"action"})],1)],1),s("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),s("v-uni-view",{staticClass:"cu-list menu-avatar userList",staticStyle:{"margin-top":"20upx"}},[0==t.userList.length?s("v-uni-view",{staticClass:"no-data"},[s("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.userList,(function(e,i){return s("v-uni-view",{key:i,staticClass:"cu-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toUserContents(e.userJson)}}},[s("v-uni-view",{staticClass:"cu-avatar round lg",style:e.style}),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"text-grey"},[[t._v(t._s(e.userJson.name))],"contributor"==e.userJson.groupKey||"administrator"==e.userJson.groupKey?s("v-uni-text",{staticClass:"cuIcon-lightfill"}):t._e(),e.userJson.isvip>0?[1==e.userJson.vip?[s("v-uni-text",{staticClass:"isVIP bg-gradual-red"},[t._v("VIP")])]:[s("v-uni-text",{staticClass:"isVIP bg-yellow"},[t._v("VIP")])]]:t._e()],2),s("v-uni-view",{staticClass:"text-gray text-sm flex"},[s("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(t.subText(e.userJson.introduce,100)))])],1)],1),s("v-uni-view",{staticClass:"action goUserIndex"},[s("v-uni-view",{staticClass:"cu-btn bg-gradual-red"},[t._v("主页")])],1)],1)})),t.userList.length>0?s("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[s("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],2),0==t.isLoading?s("v-uni-view",{staticClass:"loading"},[s("v-uni-view",{staticClass:"loading-main"},[s("v-uni-image",{attrs:{src:i("003d")}})],1)],1):t._e()],1)},a=[]}}]);