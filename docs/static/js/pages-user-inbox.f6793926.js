(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-inbox"],{"00c0":function(t,e,a){"use strict";a.r(e);var i=a("bd0d"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},ac0e:function(t,e,a){"use strict";a.r(e);var i=a("fe7b"),s=a("00c0");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"15aca7a1",null,!1,i["a"],void 0);e["default"]=c.exports},bd0d:function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("ade3"));a("99af"),a("c975"),a("ac1f"),a("5319"),a("5b81"),a("1276"),a("14d9"),a("e9c4"),a("e25e"),a("fb6a");var n,o=a("cfbc"),c=i(a("212c")),l={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,inboxList:[],chatList:[],oldChatList:[],uid:0,type:"inbox",moreText:"加载更多",page:1,token:"",isLoading:0,owo:c.default,owoList:[],chatLoading:null}},onPullDownRefresh:function(){},onHide:function(){clearInterval(this.chatLoading),this.chatLoading=null},onReachBottom:function(){this.loadMore()},onShow:function(){if(this.page=1,o.localStorage.getItem("userinfo")){var t=JSON.parse(o.localStorage.getItem("userinfo"));this.uid=t.uid}o.localStorage.getItem("token")&&(this.token=o.localStorage.getItem("token"),this.getInboxList(!1),this.setRead()),o.localStorage.getItem("chatList")&&(this.oldChatList=JSON.parse(o.localStorage.getItem("chatList")))},onLoad:function(){var t=this.owo.data,e=[];for(var a in t)e=e.concat(t[a].container);this.owoList=e},methods:(n={back:function(){clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateBack({delta:1})},loadMore:function(){0==this.isLoad&&"inbox"==this.type&&(this.moreText="正在加载中...",this.getInboxList(!0))},markHtml:function(t){var e=this.owoList;for(var a in e)-1!=this.replaceSpecialChar(t).indexOf(e[a].data)&&(t=this.replaceAll(this.replaceSpecialChar(t),e[a].data,"<img src='/"+e[a].icon+"' class='tImg' />"));return t},replaceAll:function(t,e,a){return t.split(e).join(a)},toInfo:function(t,e){clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:"/pages/contents/info?cid="+t+"&title="+e})},goInbox:function(t){if("comment"==t.type&&this.toInfo(t.contentsInfo.cid,t.contenTitle),"finance"==t.type&&(clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:"/pages/user/assets"})),"system"==t.type)return!1},getUserLv:function(t){if(!t)t=0;var e=this.$API.GetRankList();return e[t]},getUserLvStyle:function(t){if(!t)t=0;var e=this.$API.GetRankStyle(),a="color:#fff;background-color: "+e[t];return a},toType:function(t){var e=this;e.type=t,e.page=1,e.moreText="加载更多",e.isLoad=0,"inbox"==t?(clearInterval(e.chatLoading),e.chatLoading=null,e.getInboxList(!1)):(e.getMyChat(!1),e.msgLoading=setInterval((function(){e.getMyChat(!1)}),3e3))},getInboxList:function(t){var e=this,a=e.page;if(t&&a++,""==e.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;e.$Net.request({url:e.$API.getInbox(),data:{token:e.token,limit:8,page:a},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(a){if(e.isLoad=0,1==a.data.code){var i=a.data.data;if(i.length>0){var s=[];for(var n in i){var o=i[n];o.style="background-image:url("+i[n].userJson.avatar+");",s.push(o)}t?(e.page++,e.inboxList=e.inboxList.concat(s)):e.inboxList=s}else e.moreText="没有更多消息了"}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){e.isLoad=0,e.moreText="加载更多";setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},getMyChat:function(e){var a=this,i=a.page;if(e&&i++,""==a.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;a.$Net.request({url:a.$API.myChat(),data:{token:a.token,limit:30,page:i,order:"lastTime"},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(a.isLoad=0,1==i.data.code){var s=i.data.data;if(s.length>0){var n=[];for(var c in s){var l=s[c];l.isNew=0,l.unRead=0,n.push(l)}if(e)a.page++,a.chatList=a.chatList.concat(n);else{var u=[];if(null!=a.oldChatList&&(u=a.oldChatList),u.length>0){if(!a.arraysEqual(u,n)){for(var r in t.log("开始对比"),n)for(var v in u)if(u[v].id==n[r].id&&u[v].lastTime<n[r].lastTime){t.log("赋值完成"),n[r].isNew=1;var d=n[r].msgNum-u[v].msgNum;d<=0&&(d=0),n[r].unRead=d}a.oldChatList=n,a.chatList=n,o.localStorage.setItem("chatList",JSON.stringify(n))}}else a.oldChatList=n,a.chatList=n,o.localStorage.setItem("chatList",JSON.stringify(n))}}else a.moreText="没有更多消息了"}setTimeout((function(){a.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){a.isLoad=0,a.moreText="加载更多";setTimeout((function(){a.isLoading=1,clearTimeout("timer")}),300)}})},arraysEqual:function(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!=e.length)return!1;for(var a in t)for(var i in e)if(e[i].id==t[a].id&&e[i].lastTime!=t[a].lastTime)return!1},commentsAdd:function(t,e,a,i){clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:"/pages/contents/commentsadd?cid="+i+"&coid="+e+"&title="+t+"&isreply="+a})},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=e+"-"+a+"-"+i+" "+s+":"+n;return o},chatFormatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=s+":"+n,c=new Date,l=c.getFullYear(),u=(("0"+(c.getMonth()+1)).slice(-2),("0"+c.getDate()).slice(-2));return o=e==l&&e==l&&i==u?s+":"+n:a+"-"+i,o},replaceSpecialChar:function(t){return!!t&&(t=t.replace(/&quot;/g,'"'),t=t.replace(/&amp;/g,"&"),t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&nbsp;/g," "),t)}},(0,s.default)(n,"getUserLv",(function(t){if(!t)t=0;var e=this.$API.GetRankList();return e[t]})),(0,s.default)(n,"getUserLvStyle",(function(t){if(!t)t=0;var e=this.$API.GetRankStyle(),a="color:#fff;background-color: "+e[t];return a})),(0,s.default)(n,"setRead",(function(){this.$Net.request({url:this.$API.setRead(),data:{token:this.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){t.data.code},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})})),(0,s.default)(n,"goChat",(function(t){clearInterval(this.chatLoading),this.chatLoading=null;var e=t.id,a=this.chatList;for(var i in a)a[i].id==e&&(a[i].isNew=0,a[i].unRead=0);this.chatList=a,this.oldChatList=a,o.localStorage.setItem("chatList",JSON.stringify(a));var s=t.userJson.name,n=t.userJson.uid;clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:"/pages/chat/chat?uid="+n+"&name="+s+"&chatid="+e})})),n)};e.default=l}).call(this,a("5a52")["default"])},e5d4:function(t,e,a){t.exports=a.p+"static/img/loading.edead6c4.gif"},fe7b:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("消息中心")]),i("v-uni-view",{staticClass:"action"})],1)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"data-box data-inbox"},[i("v-uni-view",{staticClass:"search-type grid col-2"},[i("v-uni-view",{staticClass:"search-type-box",class:"inbox"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("inbox")}}},[i("v-uni-text",[t._v("平台消息")])],1),i("v-uni-view",{staticClass:"search-type-box",class:"chat"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("chat")}}},[i("v-uni-text",[t._v("用户消息")])],1)],1),"inbox"==t.type?[i("v-uni-view",{staticClass:"cu-card dynamic no-card"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-list menu-avatar comment"},[0==t.inboxList.length?i("v-uni-view",{staticClass:"no-data"},[t._v("暂时没有消息")]):t._e(),i("v-uni-view",{staticClass:"cu-card dynamic no-card",staticStyle:{"margin-top":"20upx"}},t._l(t.inboxList,(function(e,a){return t.inboxList.length>0?i("v-uni-view",{key:a,staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-list menu-avatar comment",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goInbox(e)}}},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round",style:e.style}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userJson.name)),"system"==e.type?[i("v-uni-text",{staticClass:"userlv bg-red"},[t._v("系统通知")])]:t._e(),"finance"==e.type?[i("v-uni-text",{staticClass:"userlv bg-gradual-orange"},[t._v("财务通知")])]:t._e(),"comment"==e.type?[i("v-uni-text",{staticClass:"userlv",style:t.getUserLvStyle(e.userJson.lv)},[t._v(t._s(t.getUserLv(e.userJson.lv)))]),e.userJson.customize&&""!=e.userJson.customize?i("v-uni-text",{staticClass:"userlv customize"},[t._v(t._s(e.userJson.customize))]):t._e(),e.userJson.isvip>0?[1==e.userJson.vip?[i("v-uni-text",{staticClass:"isVIP bg-gradual-red"},[t._v("VIP")])]:[i("v-uni-text",{staticClass:"isVIP bg-yellow"},[t._v("VIP")])]]:t._e()]:t._e()],2),i("v-uni-view",{staticClass:"text-content text-df"},[i("v-uni-rich-text",{attrs:{nodes:t.markHtml(e.text)}})],1),"comment"==e.type?i("v-uni-view",{staticClass:"bg-grey light padding-sm radius margin-top-sm  text-sm"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v(t._s(e.contenTitle))])],1)],1):t._e(),i("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[i("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(t.formatDate(e.created)))]),i("v-uni-view")],1)],1)],1)],1)],1):t._e()})),1),t.inboxList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],1)],1)],1)]:t._e(),"chat"==t.type?[t.chatList.length>0?i("v-uni-view",{staticClass:"cu-list menu-avatar"},[t._l(t.chatList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goChat(e)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+e.userJson.avatar+");"}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(e.userJson.name))])],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-view",{staticClass:"text-cut"},[null!=e.lastMsg?[4!=e.lastMsg.type?[e.lastMsg.uid==t.uid?[t._v("我:")]:[t._v(t._s(e.userJson.name)+":")],0==e.lastMsg.type?[t._v(t._s(e.lastMsg.text))]:t._e(),1==e.lastMsg.type?[t._v("[图片]")]:t._e()]:["ban"==e.lastMsg.text?[e.lastMsg.uid==t.uid?[i("v-uni-text",{staticClass:"text-blue"},[t._v("[你屏蔽了对方]")])]:[i("v-uni-text",{staticClass:"text-blue"},[t._v("[对方屏蔽了你]")])]]:[e.lastMsg.uid==t.uid?[i("v-uni-text",{staticClass:"text-blue"},[t._v("[你解除了屏蔽]")])]:[i("v-uni-text",{staticClass:"text-blue"},[t._v("[对方解除了屏蔽]")])]]]]:[t._v("暂无消息")]],2)],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v(t._s(t.chatFormatDate(e.lastTime)))]),null!=e.lastMsg?[e.lastMsg.uid==t.uid?[i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")])]:[0==e.isNew?i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")]):i("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v(t._s(e.unRead))])]]:[i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")])]],2)],1)]}))],2):t._e()]:t._e()],2),0==t.isLoading?i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"loading-main"},[i("v-uni-image",{attrs:{src:a("e5d4")}})],1)],1):t._e()],1)},s=[]}}]);