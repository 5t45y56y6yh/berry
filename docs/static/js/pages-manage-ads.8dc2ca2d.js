(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-ads"],{"102f":function(t,e,i){"use strict";i.r(e);var a=i("7e9b"),n=i("53f1");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"203157ae",null,!1,a["a"],void 0);e["default"]=c.exports},5335:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e25e"),i("fb6a"),i("d401"),i("d3b7"),i("25f0"),i("c975"),i("a9e3"),i("14d9"),i("e9c4"),i("99af");var a=i("0af4"),n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,status:0,modalName:null,adsInfo:null,searchText:"",day:"",page:1,moreText:"加载更多",isLoad:0,token:"",adsList:[]}},onPullDownRefresh:function(){},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){this.page=1,a.localStorage.getItem("token")&&(this.page=1,this.token=a.localStorage.getItem("token"),this.getAdsList(!1))},onLoad:function(t){a.localStorage.getItem("token")&&(this.token=a.localStorage.getItem("token"),this.getAdsList(!1))},methods:{back:function(){uni.navigateBack({delta:1})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},getType:function(t){return["文章推流广告","横幅广告","启动图广告"][t]},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getAdsList(!0)},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),i=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2),n=("0"+t.getHours()).slice(-2),s=("0"+t.getMinutes()).slice(-2),o=e+"-"+i+"-"+a+" "+n+":"+s;return o},isRealNum:function(t){return""!==t&&null!=t&&!isNaN(t)},limit:function(t,e){if(this.isRealNum(t)){var i=t.toString();if(-1!=i.indexOf(".")){var a=i.split("."),n=a[0],s=a[1];s.length>e&&(s=s.slice(0,e)),i=Number(n)+"."+s,t=i}}else t=t.substr(0,t.length-1),t=this.isRealNum(t)?t:"";return t},previewImage:function(t){var e=[];e.push(t),uni.previewImage({urls:e,current:e[0]})},setStatus:function(t){this.adsList=[],this.status=t,this.page=1,this.getAdsList(!1)},searchTag:function(){this.searchText;this.page=1,this.getAdsList()},searchClose:function(){this.searchText="",this.page=1,this.getAdsList()},getAdsList:function(t){var e=this;if(""==e.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;var i=e.page;t&&i++;var a={status:e.status};e.$Net.request({url:e.$API.adsList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey(a)),limit:8,searchKey:e.searchText,page:i,token:e.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(e.isLoad=0,e.moreText="加载更多",1==i.data.code){var a=i.data.data;a.length>0?t?(e.page++,e.adsList=e.contentsList.concat(a)):e.adsList=a:(e.moreText="没有更多数据了",t||(e.adsList=a))}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300);e.moreText="加载更多",e.isLoad=0}})},goEdit:function(t){var e=t.type,i=t.aid;uni.navigateTo({url:"/pages/ads/adsPost?post=edit&type="+e+"&aid="+i})},toAudit:function(e){var i=this,n="";if(a.localStorage.getItem("userinfo")){var s=JSON.parse(a.localStorage.getItem("userinfo"));n=s.token}var o={id:e,token:n};uni.showModal({title:"确定要通过审核吗？",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.auditAds(),data:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getAdsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},toRenewal:function(t){this.adsInfo=t,this.modalName="renewal"},adsRenewal:function(){var t=this,e="",i=t.adsInfo.aid;if(""==t.day||t.day<=0)return!1;if(a.localStorage.getItem("userinfo")){var n=JSON.parse(a.localStorage.getItem("userinfo"));e=n.token}var s={id:i,token:e,day:t.day};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.renewalAds(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){setTimeout((function(){uni.hideLoading(),t.modalName=null}),1e3),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code&&(t.page=1,t.moreText="加载更多",t.isLoad=0,t.getAdsList())},fail:function(e){setTimeout((function(){t.modalName=null,uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})},toDelete:function(e){var i=this,n="";if(a.localStorage.getItem("userinfo")){var s=JSON.parse(a.localStorage.getItem("userinfo"));n=s.token}var o={id:e,token:n};uni.showModal({title:"确定要删除该广告吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.deleteAds(),data:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getAdsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})}}};e.default=n}).call(this,i("5a52")["default"])},"53f1":function(t,e,i){"use strict";i.r(e);var a=i("5335"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"7e9b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user",class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("广告管理")])],1)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"data-box"},[i("v-uni-view",{staticClass:"cu-bar bg-white search"},[i("v-uni-view",{staticClass:"search-form round"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{type:"text",placeholder:"输入搜索关键字"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchTag.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),""!=t.searchText?i("v-uni-view",{staticClass:"search-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchClose()}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1):t._e()],1)],1),i("v-uni-view",{staticClass:"search-type grid col-3"},[i("v-uni-view",{staticClass:"search-type-box",class:0==t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setStatus(0)}}},[i("v-uni-text",[t._v("待审核")])],1),i("v-uni-view",{staticClass:"search-type-box",class:1==t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setStatus(1)}}},[i("v-uni-text",[t._v("已发布")])],1),i("v-uni-view",{staticClass:"search-type-box",class:2==t.status?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setStatus(2)}}},[i("v-uni-text",[t._v("已到期")])],1)],1),i("v-uni-view",{staticClass:"myAds"},[0==t.adsList.length?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.adsList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"myAds-box"},[i("v-uni-view",{staticClass:"myAds-title"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"myAds-time"},[t._v("预计到期时间："),i("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(t.formatDate(e.close)))]),i("v-uni-text",{staticClass:"text-green"},[t._v(t._s(t.getType(e.type)))])],1),i("v-uni-view",{staticClass:"myAds-concent"},[i("v-uni-view",{staticClass:"myAds-pic"},[i("v-uni-image",{attrs:{src:e.img,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.previewImage(e.img)}}})],1),i("v-uni-view",{staticClass:"myAds-intro"},[t._v(t._s(e.intro))])],1),i("v-uni-view",{staticClass:"myAds-btn"},[0==t.status?i("v-uni-text",{staticClass:"text-red radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toAudit(e.aid)}}},[t._v("快捷审核")]):t._e(),1==t.status?i("v-uni-text",{staticClass:"text-green radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toRenewal(e)}}},[t._v("续期")]):t._e(),i("v-uni-text",{staticClass:"text-blue radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goEdit(e)}}},[t._v("编辑")]),i("v-uni-text",{staticClass:"text-blue radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDelete(e.aid)}}},[t._v("删除")])],1)],1)}))],2),t.adsList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],1),i("v-uni-view",{staticClass:"cu-modal",class:"renewal"==t.modalName?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("广告续期")]),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),i("v-uni-view",{staticClass:"padding-xl ads-renewal"},[i("v-uni-input",{attrs:{placeholder:"输入续期天数",type:"number",name:"input","adjust-position":!1,focus:!1},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.day=t.limit(t.day,0)}},model:{value:t.day,callback:function(e){t.day=e},expression:"day"}})],1),i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn line-blue text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-button",{staticClass:"cu-btn bg-blue margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.adsRenewal.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)],1)},n=[]}}]);