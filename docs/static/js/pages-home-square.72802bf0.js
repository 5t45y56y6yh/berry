(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-square"],{2319:function(t,e,a){"use strict";var i=a("a08d"),s=a.n(i);s.a},"2b7c":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"waves",class:t.itemClass,attrs:{id:t.wavesId},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchstart(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[t._t("default"),a("v-uni-view",{staticClass:"waves-ripple",class:{active:t.active},style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.field.finalWidth+"px",height:t.field.finalWidth+"px","background-color":t.wavesColor}})],2)},s=[]},3534:function(t,e,a){"use strict";a.r(e);var i=a("650b"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},5819:function(t,e,a){"use strict";a.r(e);var i=a("2b7c"),s=a("fa9a");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("2319");var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"235bc8a0",null,!1,i["a"],void 0);e["default"]=c.exports},"650b":function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e25e"),a("fb6a"),a("14d9"),a("99af"),a("e9c4");var s=i(a("5819")),n=a("cfbc"),o={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,userInfo:null,token:"",isLoading:0,toolid:0,noticeSum:0,squareid:0,searchText:"",chatList:[],oldChatList:[],spaceList:[],isGetChat:null,uid:0,dataLoad:!1,page:1,moreText:"加载更多"}},onPullDownRefresh:function(){0==this.squareid&&this.getSpaceList(!1);setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onHide:function(){clearInterval(this.isGetChat),this.isGetChat=null},onShow:function(){this.page=1,n.localStorage.getItem("userinfo")&&(this.userInfo=JSON.parse(n.localStorage.getItem("userinfo")),this.userInfo.style="background-image:url("+this.userInfo.avatar+");",this.uid=this.userInfo.uid),n.localStorage.getItem("token")&&(this.token=n.localStorage.getItem("token")),n.localStorage.getItem("chatList")&&(this.oldChatList=JSON.parse(n.localStorage.getItem("chatList"))),this.userStatus(),this.unreadNum(),0==this.squareid&&this.getSpaceList(!1)},onLoad:function(){},methods:{setSquare:function(t){var e=this;e.page=1,e.squareid=t,clearInterval(e.isGetChat),e.isGetChat=null,0==t&&e.getSpaceList(!1),1==t&&""!=e.token&&(e.getMyChat(!1),e.isGetChat=setInterval((function(){e.getMyChat(!1)}),4e3))},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,0==this.squareid&&this.getSpaceList(!0)},searchClose:function(){this.searchText="",this.page=1,this.getUserList(!1)},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=e+"-"+a+"-"+i+" "+s+":"+n;return o},toInfo:function(t){clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:"/pages/contents/info?cid="+t.cid+"&title="+t.title})},toPage:function(t,e){clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:"/pages/contents/info?cid="+e+"&title="+t})},toSearch:function(){clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:"/pages/contents/search"})},goPage:function(t){clearInterval(this.chatLoading),this.chatLoading=null,uni.navigateTo({url:t})},toCategoryContents:function(t,e){clearInterval(this.chatLoading),this.chatLoading=null;uni.navigateTo({url:"/pages/contents/contentlist?title="+t+"&type=meta&id="+e})},userStatus:function(){var t=this;t.$Net.request({url:t.$API.userStatus(),data:{token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){t.isLoading=1,0==e.data.code&&(n.localStorage.removeItem("userinfo"),n.localStorage.removeItem("token"),t.token="",t.userinfo=null)},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},toLink:function(t){if(!n.localStorage.getItem("token")||""==n.localStorage.getItem("token"))return uni.showToast({title:"请先登录哦",icon:"none"}),!1;uni.navigateTo({url:t})},toGroup:function(){var t=that.$API.GetGroupUrl();window.open(t)},unreadNum:function(){var t=this;t.$Net.request({url:t.$API.unreadNum(),data:{token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.noticeSum=e.data.data)},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},getMyChat:function(e){var a=this,i=a.page;if(e&&i++,""==a.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;a.$Net.request({url:a.$API.allChat(),data:{token:a.token,limit:30,page:i,type:a.type,order:"lastTime"},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(a.isLoading=1,a.isLoad=0,1==i.data.code){var s=i.data.data;if(s.length>0){var o=[];for(var c in s){var u=s[c];u.isNew=0,u.unRead=0,o.push(u)}if(e)a.page++,a.chatList=a.chatList.concat(o);else{var r=[];if(null!=a.oldChatList&&(r=a.oldChatList),r.length>0){if(!a.arraysEqual(r,o)){for(var l in t.log("开始对比"),o)for(var d in r)if(r[d].id==o[l].id&&r[d].lastTime<o[l].lastTime){t.log("赋值完成"),o[l].isNew=1;var v=o[l].msgNum-r[d].msgNum;v<=0&&(v=0),o[l].unRead=v}a.oldChatList=o,a.chatList=o,n.localStorage.setItem("AllchatList",JSON.stringify(o))}}else a.oldChatList=o,a.chatList=o,n.localStorage.setItem("AllchatList",JSON.stringify(o))}}}},fail:function(t){a.isLoading=1,a.isLoad=0}})},arraysEqual:function(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!=e.length)return!1;for(var a in t)for(var i in e)if(e[i].id==t[a].id&&e[i].lastTime!=t[a].lastTime)return!1},chatFormatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=s+":"+n,c=new Date,u=c.getFullYear(),r=(("0"+(c.getMonth()+1)).slice(-2),("0"+c.getDate()).slice(-2));return o=e==u&&e==u&&i==r?s+":"+n:a+"-"+i,o},goChat:function(t){var e=t.id;clearInterval(this.chatLoading),this.chatLoading=null;var a=this.chatList;for(var i in a)a[i].id==e&&(a[i].isNew=0,a[i].unRead=0);if(this.chatList=a,this.oldChatList=this.chatList,n.localStorage.setItem("AllchatList",JSON.stringify(this.chatList)),0==t.type){var s=t.userJson.name,o=t.userJson.uid;uni.navigateTo({url:"/pages/chat/chat?uid="+o+"&name="+s+"&chatid="+e+"&type=0"})}if(1==t.type){s=t.name;uni.navigateTo({url:"/pages/chat/chat?&name="+s+"&chatid="+e+"&type=1"})}},postSpace:function(t){1==t?uni.navigateTo({url:"/pages/user/post?isSpace=1"}):5==t?uni.navigateTo({url:"/pages/user/addshop?isSpace=1"}):uni.navigateTo({url:"/pages/space/post?type="+t})},getSpaceList:function(t){var e=this,a=e.page;t&&a++,e.$Net.request({url:e.$API.spaceList(),data:{limit:10,page:a,order:"created",token:e.token},method:"get",dataType:"json",success:function(a){if(e.isLoading=1,e.isLoad=0,e.moreText="加载更多",t||(e.dataLoad=!0),1==a.data.code){var i,s=a.data.data;for(var n in s){if(0==s[n].type)if(s[n].pic){var o=s[n].pic;s[n].picList=o.split("||")}else s[n].picList=[];if(2==s[n].type)if(s[n].forwardJson.pic){o=s[n].forwardJson.pic;s[n].forwardJson.picList=o.split("||")}else s[n].forwardJson.picList=[]}i=s,s.length>0?t?(e.page++,e.spaceList=e.spaceList.concat(i)):e.spaceList=i:e.moreText="没有更多动态了"}},fail:function(t){e.isLoading=1,e.moreText="加载更多",e.isLoad=0}})},goUserInfo:function(){if(!n.localStorage.getItem("token")||""==n.localStorage.getItem("token"))return uni.navigateTo({url:"/pages/user/login"}),!1;uni.switchTab({url:"/pages/home/user"})},goLogin:function(){uni.navigateTo({url:"/pages/user/login"})},goRegister:function(){uni.navigateTo({url:"/pages/user/register"})}},components:{waves:s.default}};e.default=o}).call(this,a("5a52")["default"])},a08d:function(t,e,a){var i=a("fad5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("b7f8fc44",i,!0,{sourceMap:!1,shadowMode:!1})},a4ba:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("ac1f");var i=0,s={props:{wavesColor:{type:String,default:"rgba(0, 0, 0, .15)"},itemClass:{type:String,default:""}},data:function(){return i++,{rippleTop:0,rippleLeft:0,field:{},active:Boolean,wavesId:"waves_"+i}},methods:{onTap:function(t){this.$emit("onTap")},onTouchstart:function(t){var e=this;this.active=!1,this.$nextTick((function(){e.activeWaves(t)}))},activeWaves:function(t){var e=this;this.getClientRect().then((function(a){var i,s;a.height&&(a.finalWidth=a.height>a.width?a.height:a.width,a.finalWidth&&(e.field=a,i=t.touches[0].clientX,s=t.touches[0].clientY,e.rippleTop=s-a.top-a.finalWidth/2,e.rippleLeft=i-a.left-a.finalWidth/2,e.$nextTick((function(){e.active=!0}))))}))},getClientRect:function(){var t=this;return new Promise((function(e){var a=uni.createSelectorQuery().in(t),i="#"+t.wavesId;a.select(i).boundingClientRect((function(t){e(t)})).exec()}))}}};e.default=s},e5d4:function(t,e,a){t.exports=a.p+"static/img/loading.edead6c4.gif"},eca0:function(t,e,a){"use strict";a.r(e);var i=a("f8e8"),s=a("3534");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"222eb650",null,!1,i["a"],void 0);e["default"]=c.exports},f8e8:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"square-box",class:0==t.squareid?"cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSquare(0)}}},[t._v("动态")])],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]}),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-search"})],1)],1)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),0==t.squareid?[i("v-uni-view",{staticClass:"data-box"},[i("v-uni-view",{staticClass:"square-post"},[i("v-uni-view",{staticClass:"square-post-header"},[i("v-uni-view",{staticClass:"square-user",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goUserInfo()}}},[""!=t.token?i("v-uni-view",{staticClass:"cu-avatar round",style:t.userInfo.style}):i("v-uni-view",{staticClass:"cu-avatar round"},[i("v-uni-text",{staticClass:"text-blue text-sm"},[t._v("登录")])],1)],1),i("v-uni-view",{staticClass:"square-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.postSpace(0)}}},[t._v("分享你的想法吧！")])],1),i("v-uni-view",{staticClass:"square-post-btn grid col-1"},[i("v-uni-view",{staticClass:"square-post-btn-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.postSpace(1)}}},[i("v-uni-text",{staticClass:"cuIcon-read text-blue"}),t._v("文章")],1)],1)],1)],1),0==t.spaceList.length?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有动态哦！"),i("v-uni-view",{staticClass:"text-center margin-top-sm"},[i("v-uni-text",{staticClass:"cu-btn bg-gradual-orange radius",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.postSpace(0)}}},[t._v("我要发布")])],1)],1):t._e(),i("spaceItem",{attrs:{spaceList:t.spaceList}}),t.dataLoad&&t.chatList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()]:t._e(),1==t.squareid?[""==t.token?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-text",{staticClass:"cuIcon-text"}),t._v("请先登录哦！"),i("v-uni-view",{staticClass:"text-center margin-top-sm"},[i("v-uni-text",{staticClass:"cu-btn bg-blue radius",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin()}}},[t._v("登录")]),i("v-uni-text",{staticClass:"cu-btn line-blue margin-left-sm radius",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRegister()}}},[t._v("注册")])],1)],1):t._e(),""!=t.token?i("v-uni-view",{staticClass:"cu-list menu-avatar"},[i("v-uni-view",{staticClass:"cu-bar bg-white search"},[i("v-uni-view",{staticClass:"search-form round"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{type:"text",placeholder:"搜索群聊"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),""!=t.searchText?i("v-uni-view",{staticClass:"search-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchClose()}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1):t._e()],1)],1),0==t.chatList.length?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.chatList,(function(e,a){return[-1!=e.name.indexOf(t.searchText)?i("v-uni-view",{key:a+"_0",staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goChat(e)}}},[1==e.type?[i("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+e.pic+");"})]:[i("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+e.userJson.avatar+");"})],i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-view",{staticClass:"text-cut"},[null!=e.lastMsg?[4!=e.lastMsg.type?[e.lastMsg.uid==t.uid?[t._v("我:")]:t._e(),e.lastMsg.uid!=t.uid?[t._v(t._s(e.name)+":")]:t._e(),0==e.lastMsg.type?[t._v(t._s(e.lastMsg.text))]:t._e(),1==e.lastMsg.type?[t._v("[图片]")]:t._e()]:["ban"==e.lastMsg.text?[i("v-uni-text",{staticClass:"text-red"},[t._v("[已开启全体禁言]")])]:[i("v-uni-text",{staticClass:"text-blue"},[t._v("[已解除全体禁言]")])]]]:[t._v("暂无消息")]],2)],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v(t._s(t.chatFormatDate(e.lastTime)))]),null!=e.lastMsg?[e.lastMsg.uid==t.uid?[i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")])]:[0==e.isNew?i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")]):i("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v(t._s(e.unRead))])]]:[i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")])]],2)],2):t._e()]}))],2):t._e()]:t._e(),0==t.isLoading?i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"loading-main"},[i("v-uni-image",{attrs:{src:a("e5d4")}})],1)],1):t._e()],2)},s=[]},fa9a:function(t,e,a){"use strict";a.r(e);var i=a("a4ba"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},fad5:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".waves[data-v-235bc8a0]{position:relative;overflow:hidden}.waves .waves-ripple[data-v-235bc8a0]{position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1}.waves .active[data-v-235bc8a0]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s ease-out,-webkit-transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out;transition:opacity 1s ease-out,transform .3s ease-out,-webkit-transform .3s ease-out}",""]),t.exports=e}}]);