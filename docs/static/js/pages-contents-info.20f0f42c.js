(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contents-info"],{"003d":function(t,e,i){t.exports=i.p+"static/img/loading.edead6c4.gif"},"0d58":function(t,e,i){"use strict";i.r(e);var n=i("ae41"),a=i("c258");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3d322542",null,!1,n["a"],void 0);e["default"]=c.exports},ae41:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={mpHtml:i("6ac0").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"user",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("文章详情")]),n("v-uni-view",{staticClass:"action info-btn"},[n("v-uni-text",{staticClass:"cuIcon-search",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}})],1)],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"info",staticStyle:{"margin-top":"20upx"}},[n("v-uni-view",{staticClass:"info-title"},[t._v(t._s(t.replaceSpecialChar(t.title)))]),n("v-uni-view",{staticClass:"info-tyle"},[t.category.length>0?n("v-uni-text",{staticClass:"text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCategoryContents(t.category)}}},[t._v(t._s(t.category[0].name))]):t._e(),0==t.category.length?n("v-uni-text",{staticClass:"text-gray"},[t._v("暂无分类")]):t._e(),""!=t.created?n("v-uni-text",{staticClass:"info-date"},[t._v(t._s(t.formatDate(t.created)))]):t._e()],1),n("v-uni-view",{staticClass:"info-author"},[n("v-uni-view",{staticClass:"cu-list menu-avatar"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-avatar round lg",style:t.userInfo.style,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUserInfo(t.userInfo)}}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[t.userInfo.screenName?[t._v(t._s(t.userInfo.screenName))]:[t._v(t._s(t.userInfo.name))],n("v-uni-text",{staticClass:"userlv",style:t.getUserLvStyle(t.userInfo.lv)},[t._v(t._s(t.getUserLv(t.userInfo.lv)))]),t.userInfo.customize&&""!=t.userInfo.customize?n("v-uni-text",{staticClass:"userlv customize"},[t._v(t._s(t.userInfo.customize))]):t._e(),1==t.userInfo.isvip?[1==t.userInfo.vip?[n("v-uni-text",{staticClass:"isVIP bg-gradual-red"},[t._v("VIP")])]:[n("v-uni-text",{staticClass:"isVIP bg-yellow"},[t._v("VIP")])]]:t._e()],2),n("v-uni-view",{staticClass:"text-gray text-sm flex"},[n("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(t.subText(t.userInfo.introduce,60)))])],1)],1),n("v-uni-view",{staticClass:"action goUserIndex"},[1==t.isFollow?n("v-uni-button",{staticClass:"cu-btn isFollow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.follow(0)}}},[t._v("已关注")]):n("v-uni-button",{staticClass:"cu-btn unFollow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.follow(1)}}},[n("v-uni-text",{staticClass:"cuIcon-add"}),t._v("关注")],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"info-content"},[n("mp-html",{attrs:{content:t.html,selectable:!0,"show-img-menu":!0,"scroll-table":!0,markdown:!0,"lazy-load":!1}}),""!=t.shopValue?n("v-uni-view",{staticClass:"shop-value"},[n("v-uni-view",{staticClass:"shop-value-title"},[t._v("付费内容")]),n("mp-html",{attrs:{content:t.shopValue,selectable:!0,"show-img-menu":!0,"scroll-table":!0,markdown:!0}})],1):t._e(),""==t.shopValue?n("v-uni-view",{staticClass:"content-shop"},t._l(t.shopList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-card article no-card"},[1==e.type?[n("v-uni-view",{staticClass:"shop-tool text-center"},[n("v-uni-view",{staticClass:"shop-name"},[t._v("实体商品")]),n("v-uni-image",{attrs:{src:e.imgurl,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"text-content"},[t._v(t._s(e.title))]),0==t.isBuy?n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"text-red text-bold"},[t._v(t._s(e.price)+" "+t._s(t.currencyName))]),n("v-uni-text",{staticClass:"margin-left-sm text-sm"},[t._v("VIP只需")]),n("v-uni-text",{staticClass:"text-yellow text-bold"},[t._v(t._s(parseInt(e.price*e.vipDiscount))+" "+t._s(t.currencyName))])],1):t._e(),n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopBuy(e.id)}}},[t._v("立即下单")]),n("v-uni-text",{staticClass:"cu-btn text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopInfo(e)}}},[t._v("商品详情")])],1)],1)]:t._e(),2==e.type?[n("v-uni-view",{staticClass:"shop-tool text-center"},[n("v-uni-view",{staticClass:"shop-name"},[t._v("源码")]),n("v-uni-image",{attrs:{src:e.imgurl,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"text-content"},[t._v(t._s(e.title))]),0==t.isBuy?n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"text-red text-bold"},[t._v(t._s(e.price)+" "+t._s(t.currencyName))]),n("v-uni-text",{staticClass:"margin-left-sm text-sm"},[t._v("VIP只需")]),n("v-uni-text",{staticClass:"text-yellow text-bold"},[t._v(t._s(parseInt(e.price*e.vipDiscount))+" "+t._s(t.currencyName))])],1):t._e(),1==t.isBuy?n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toShopValue(e.id,e.type)}}},[t._v("查看收费内容")]),n("v-uni-text",{staticClass:"cu-btn text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopInfo(e)}}},[t._v("商品详情")])],1):n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopBuy(e.id)}}},[t._v("购买后下载")]),n("v-uni-text",{staticClass:"cu-btn text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopInfo(e)}}},[t._v("商品详情")])],1)],1)]:t._e(),3==e.type?[n("v-uni-view",{staticClass:"shop-tool text-center"},[n("v-uni-view",{staticClass:"shop-name"},[t._v("软件工具")]),n("v-uni-image",{attrs:{src:e.imgurl,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"text-content"},[t._v(t._s(e.title))]),0==t.isBuy?n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"text-red text-bold"},[t._v(t._s(e.price)+" "+t._s(t.currencyName))]),n("v-uni-text",{staticClass:"margin-left-sm text-sm"},[t._v("VIP只需")]),n("v-uni-text",{staticClass:"text-yellow text-bold"},[t._v(t._s(parseInt(e.price*e.vipDiscount))+" "+t._s(t.currencyName))])],1):t._e(),1==t.isBuy?n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toShopValue(e.id,e.type)}}},[t._v("查看收费内容")]),n("v-uni-text",{staticClass:"cu-btn text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopInfo(e)}}},[t._v("商品详情")])],1):n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopBuy(e.id)}}},[t._v("购买后下载")]),n("v-uni-text",{staticClass:"cu-btn text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopInfo(e)}}},[t._v("商品详情")])],1)],1)]:t._e(),4==e.type?[n("v-uni-view",{staticClass:"shop-tool text-center"},[n("v-uni-view",{staticClass:"shop-name"},[t._v("付费阅读")]),0==t.isBuy?n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"text-red text-bold"},[t._v(t._s(e.price)+" "+t._s(t.currencyName))]),n("v-uni-text",{staticClass:"margin-left-sm text-sm"},[t._v("VIP只需")]),n("v-uni-text",{staticClass:"text-yellow text-bold"},[t._v(t._s(parseInt(e.price*e.vipDiscount))+" "+t._s(t.currencyName))])],1):t._e(),1==t.isBuy?n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toShopValue(e.id,e.type)}}},[t._v("查看收费内容")])],1):n("v-uni-view",{staticClass:"tool-price"},[n("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shopBuy(e.id)}}},[t._v("购买后阅读剩余内容")])],1)],1)]:t._e()],2)})),1):t._e(),n("v-uni-view",{staticClass:"content-btn grid col-2"},[n("v-uni-view",{staticClass:"content-btn-box"},[n("v-uni-view",{staticClass:"content-btn-i",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLikes.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-appreciatefill btn-i"}),n("v-uni-text",[t._v("点赞( "+t._s(t.formatNumber(t.likes))+" )")])],1)],1),n("v-uni-view",{staticClass:"content-btn-box",attrs:{"data-target":"ChooseModal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content-btn-i"},[n("v-uni-text",{staticClass:"cuIcon-rechargefill btn-i"}),n("v-uni-text",[t._v("投币")])],1)],1)],1),t.tagList.length>0?n("v-uni-view",{staticClass:"tags"},t._l(t.tagList,(function(e,i){return n("v-uni-text",{key:i,staticClass:"tags-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toTagsContents("#"+e.name+"#",e.mid)}}},[t._v(t._s(e.name))])})),1):t._e()],1),null!=t.bannerAdsInfo?n("v-uni-view",{staticClass:"ads-banner"},[n("v-uni-image",{attrs:{src:t.bannerAdsInfo.img,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAds(t.bannerAdsInfo)}}})],1):t._e(),1==t.isComment?n("v-uni-view",{staticClass:"data-box"},[n("v-uni-view",{staticClass:"cu-bar bg-white"},[n("v-uni-view",{staticClass:"action data-box-title"},[n("v-uni-text",{staticClass:"cuIcon-titles text-rule"}),t._v("评论区"),t.commentsNum>0?n("v-uni-text",[t._v("( "+t._s(t.commentsNum)+" )")]):t._e()],1),n("v-uni-view",{staticClass:"action more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.commentsAdd(t.title,0,0)}}},[n("v-uni-text",{staticClass:"cuIcon-add"}),n("v-uni-text",[t._v("发布评论")])],1)],1),0==t.commentsList.length?n("v-uni-view",{staticClass:"no-data"},[t._v("暂时没有评论")]):t._e(),n("v-uni-view",{staticClass:"cu-card dynamic no-card info-comment",staticStyle:{"margin-top":"20upx"}},[t._l(t.commentsList,(function(e,i){return t.commentsList.length>0?[n("commentItem",{key:i+"_0",attrs:{item:e,isContent:!0}})]:t._e()}))],2),t.commentsList.length>0?n("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e(),n("v-uni-view",{staticStyle:{height:"100upx"}})],1):t._e()],1),n("v-uni-view",{staticClass:"cu-modal bottom-modal",class:"ChooseModal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"cu-bar bg-white"},[n("v-uni-view",{staticClass:"action text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",{staticClass:"action text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toReward.apply(void 0,arguments)}}},[t._v("确定")])],1),n("v-uni-view",{staticClass:"grid col-3 padding-sm"},t._l(t.checkbox,(function(e,i){return n("v-uni-view",{key:i,staticClass:"padding-xs"},[n("v-uni-button",{staticClass:"cu-btn orange lg block",class:e.checked?"bg-orange":"line-orange",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseCheckbox(i)}}},[t._v(t._s(e.num)+t._s(t.currencyName)),e.hot?n("v-uni-view",{staticClass:"cu-tag sm round",class:e.checked?"bg-white text-orange":"bg-orange"},[t._v("HOT")]):t._e()],1)],1)})),1)],1)],1),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:i("003d")}})],1)],1):t._e(),n("v-uni-view",{staticClass:"info-operate-bg",class:t.isShare?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShare=!1}}}),n("v-uni-view",{staticClass:"info-operate",class:t.isShare?"show":""},[n("v-uni-view",{staticClass:"info-operate-main grid col-2"},[n("v-uni-view",{staticClass:"index-sort-box"},[n("v-uni-view",{staticClass:"index-sort-main",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLink("../space/post?type=1&toid="+t.cid)}}},[n("v-uni-view",{staticClass:"index-sort-i",staticStyle:{background:"rgba(21, 159, 44, 0.2)"}},[n("v-uni-text",{staticClass:"cuIcon-creativefill",staticStyle:{color:"#159f2c"}})],1),n("v-uni-view",{staticClass:"index-sort-text"},[t._v("分享到我的动态")])],1)],1),n("v-uni-view",{staticClass:"index-sort-box"},[n("v-uni-view",{staticClass:"index-sort-main",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ToShare.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"index-sort-i",staticStyle:{background:"rgba(30, 134, 231, 0.2)"}},[n("v-uni-text",{staticClass:"cuIcon-share",staticStyle:{color:"#1e86e7"}})],1),n("v-uni-view",{staticClass:"index-sort-text"},[t._v("分享到其他应用")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"info-footer grid col-2"},[n("v-uni-view",{staticClass:"info-footer-input"},[n("v-uni-view",{staticClass:"info-input-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.commentsAdd(t.title,0,0)}}},[n("v-uni-text",{staticClass:"cuIcon-writefill"}),t._v("留下评论&吐槽")],1)],1),n("v-uni-view",{staticClass:"info-footer-btn"},[0==t.isLikes?n("v-uni-text",{staticClass:"cuIcon-appreciate",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLikes.apply(void 0,arguments)}}}):n("v-uni-text",{staticClass:"cuIcon-appreciatefill text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLikes.apply(void 0,arguments)}}}),0==t.isMark?n("v-uni-text",{staticClass:"cuIcon-favor",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMark.apply(void 0,arguments)}}}):n("v-uni-text",{staticClass:"cuIcon-favorfill text-orange",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rmMark.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"cuIcon-recharge",attrs:{"data-target":"ChooseModal"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"cuIcon-share text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShare=!t.isShare}}})],1)],1)],1)},o=[]},c258:function(t,e,i){"use strict";i.r(e);var n=i("da36"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},da36:function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af"),i("a9e3"),i("ac1f"),i("5319"),i("5b81"),i("c975"),i("1276"),i("e9c4"),i("14d9"),i("e25e"),i("fb6a");var a=n(i("6ac0")),o=i("0af4"),s=n(i("4596")),c={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,cid:0,title:"",html:"",commentsNum:0,category:[],created:"",markdownData:{},userInfo:{},slug:"",tagList:[],commentsList:[],moreText:"加载更多",page:1,isLoad:0,isLoading:0,isMark:0,logid:-1,token:"",likes:0,isLikes:0,type:"post",shopList:[],shopID:-1,owo:s.default,owoList:[],isCommnet:0,modalName:null,checkbox:[{value:0,name:"5积分",num:5,checked:!1,hot:!1},{value:1,name:"10积分",num:10,checked:!1,hot:!1},{value:2,name:"30积分",num:30,checked:!1,hot:!1},{value:3,name:"50积分",num:50,checked:!1,hot:!1},{value:4,name:"100积分",num:100,checked:!1,hot:!1},{value:5,name:"200积分",num:200,checked:!1,hot:!1}],ads:"",userlvStyle:"",vipDiscount:0,vipPrice:0,scale:0,isBuy:0,shopValue:"",bannerAds:[],bannerAdsInfo:null,isComment:0,images:[],group:"",authorId:0,isFollow:0,currencyName:"",isShare:!1}},components:{mpHtml:a.default},onReachBottom:function(){this.loadMore()},onShow:function(){if(this.currencyName=this.$API.getCurrencyName(),o.localStorage.getItem("userinfo")){var t=JSON.parse(o.localStorage.getItem("userinfo"));this.group=t.group}this.getAdsCache(),this.isComment=1,this.isLoad=0,this.page=1,0!=this.cid&&(this.getIsCommnet(),this.getInfo(this.cid),this.getCommentsList(!1,this.cid)),o.localStorage.getItem("token")&&(this.token=o.localStorage.getItem("token"),this.toIsMark()),this.getVipInfo()},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.getInfo(t.cid),t.getCommentsList(!1,t.cid)}),1e3)},onLoad:function(t){this.cid=t.cid,this.title=t.title;var e=this.owo.data,i=[];for(var n in e)i=i.concat(e[n].container);if(this.owoList=i,o.localStorage.getItem("likeDate_"+this.cid)){var a=o.localStorage.getItem("likeDate_"+this.cid),s=(new Date).getTime(),c=Number(s)-Number(a);c>=864e5?(this.isLikes=0,o.localStorage.removeItem("likeDate_"+this.cid)):this.isLikes=1}this.allCache(),this.getInfo(this.cid),this.getShopList(),this.getCommentsList(!1,this.cid);this.$refs.article},methods:{getAdsCache:function(){if(o.localStorage.getItem("bannerAds")){this.bannerAds=JSON.parse(o.localStorage.getItem("bannerAds"));var t=this.bannerAds.length;if(t>0){var e=Math.floor(Math.random()*t);this.bannerAdsInfo=this.bannerAds[e]}}},backHome:function(){uni.switchTab({url:"/pages/home/home"})},back:function(){var t=getCurrentPages();1===t.length?uni.switchTab({url:"/pages/home/home"}):uni.navigateBack({delta:1})},allCache:function(){var t=this.cid;if(o.localStorage.getItem("postInfo_"+t)){var e=JSON.parse(o.localStorage.getItem("postInfo_"+t));this.category=e.category,this.created=e.created,this.commentsNum=e.commentsNum,this.images=e.images,this.html=this.markHtml(e.text),this.tagList=e.tag,this.slug=e.slug,this.authorId=e.authorId,this.getUserInfo(e.authorId),this.getIsFollow(e.authorId)}o.localStorage.getItem("commentsList_"+t)&&(this.commentsList=JSON.parse(o.localStorage.getItem("commentsList_"+t)))},markHtml:function(t){t=this.replaceAll(t,"@!!!","@@@@"),t=this.replaceAll(t,"!!!",""),t=this.replaceAll(t,"@@@@","@!!!"),1==this.isCommnet?(t=this.replaceAll(t,"[hide]","<div style='width:100%;padding:15px 15px;background:#dff0d8;color:#3c763d;border:solid 1px #d6e9c6;box-sizing: border-box;border-radius: 5px;word-break:break-all;'>"),t=this.replaceAll(t,"[/hide]","</div>"),t=this.replaceAll(t,"{hide}","<div style='width:100%;padding:15px 15px;background:#dff0d8;color:#3c763d;border:solid 1px #d6e9c6;box-sizing: border-box;border-radius: 5px;word-break:break-all;'>"),t=this.replaceAll(t,"{/hide}","</div>")):(t=t.replace(/\[hide(([\s\S])*?)\[\/hide\]/g,"<div style='width:100%;padding:15px 15px;background:#f2dede;color:#a94442;border:solid 1px #ebccd1;box-sizing: border-box;border-radius: 5px;'>此内容需要评论后方可阅读！</div>"),t=t.replace(/{hide(([\s\S])*?){\/hide}/g,"<div style='width:100%;padding:15px 15px;background:#f2dede;color:#a94442;border:solid 1px #ebccd1;box-sizing: border-box;border-radius: 5px;'>此内容需要评论后方可阅读！</div>"));var e=this.owoList;for(var i in e)-1!=this.replaceSpecialChar(t).indexOf(e[i].data)&&(t=this.replaceAll(this.replaceSpecialChar(t),e[i].data,"<img src='"+e[i].icon+"' class='tImg' />"));return t=t.replace(/(?<!\r)\n(?!\r)/g,"\n\n"),t=this.replaceAll(t,"||rn||","\n\n"),t},markCommentHtml:function(t){var e=this.owoList;for(var i in e)-1!=this.replaceSpecialChar(t).indexOf(e[i].data)&&(t=this.replaceAll(this.replaceSpecialChar(t),e[i].data,"<img src='/"+e[i].icon+"' class='tImg' />"));return t},getUserLv:function(t){if(!t)t=0;var e=this.$API.GetRankList();return e[t]},getUserLvStyle:function(t){if(!t)t=0;var e=this.$API.GetRankStyle(),i="color:#fff;background-color: "+e[t];return i},replaceAll:function(t,e,i){return t.split(e).join(i)},toUserInfo:function(t){var e=t.name,i=t.name+"的信息";t.screenName&&(i=t.screenName+" 的信息",e=t.screenName);var n=t.uid;uni.navigateTo({url:"/pages/contents/userinfo?title="+i+"&name="+e+"&uid="+n+"&avatar="+encodeURIComponent(t.avatar)})},toTagsContents:function(t,e){uni.navigateTo({url:"/pages/contents/contentlist?title="+t+"&type=meta&id="+e})},toCategoryContents:function(t){var e=t[0].name,i=t[0].mid;uni.navigateTo({url:"/pages/contents/contentlist?title="+e+"&type=meta&id="+i})},loadMore:function(){this.moreText="正在加载中...",0==this.isLoad&&this.getCommentsList(!0,this.cid)},getVipInfo:function(){var t=this;t.$Net.request({url:t.$API.getVipInfo(),header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.vipDiscount=e.data.data.vipDiscount,t.vipPrice=e.data.data.vipPrice,t.scale=e.data.data.scale);setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(e){setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})},getInfo:function(t){var e=this,i={key:e.cid,isMd:0};e.$Net.request({url:e.$API.getContentsInfo(),data:i,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(uni.stopPullDownRefresh(),t.data.title){e.title=t.data.title,e.category=t.data.category,e.created=t.data.created,e.commentsNum=t.data.commentsNum,e.images=t.data.images;var i=e.markHtml(t.data.text);e.html=i,e.tagList=t.data.tag,e.slug=t.data.slug,e.type=t.data.type,e.likes=t.data.likes,e.authorId=t.data.authorId,e.getUserInfo(t.data.authorId),e.getIsFollow(t.data.authorId),o.localStorage.removeItem("postInfo_"+e.cid),o.localStorage.setItem("postInfo_"+e.cid,JSON.stringify(t.data));setTimeout((function(){e.allCache()}),200),setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}},fail:function(t){uni.stopPullDownRefresh()}})},getUserInfo:function(t){var e=this,i={key:t};e.$Net.request({url:e.$API.getUserInfo(),data:i,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){1==t.data.code?(e.userInfo=t.data.data,e.userInfo.style="background-image:url("+t.data.data.avatar+");"):e.userInfo.name="用户已注销"},fail:function(t){}})},getCommentsList:function(t,e){var i=this,n={cid:e,status:"approved"},a=i.page;t&&a++,i.$Net.request({url:i.$API.getCommentsList(),data:{searchParams:JSON.stringify(i.$API.removeObjectEmptyKey(n)),limit:4,page:a},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){if(uni.stopPullDownRefresh(),i.isLoad=0,1==e.data.code){var n=e.data.data;if(n.length>0){var a=[];for(var s in n){var c=n[s];c.style="background-image:url("+n[s].avatar+");",a.push(c)}t?(i.page++,i.commentsList=i.commentsList.concat(a)):i.commentsList=a,o.localStorage.setItem("commentsList_"+i.cid,JSON.stringify(i.commentsList))}else i.moreText="没有更多评论了",1!=i.page||t||(o.localStorage.removeItem("commentsList_"+i.cid),i.commentsList=[])}},fail:function(t){uni.stopPullDownRefresh(),uni.showToast({title:"网络开小差了哦",icon:"none"}),i.isLoad=0;setTimeout((function(){i.isLoading=1,clearTimeout("timer")}),300);i.moreText="加载更多"}})},commentsAdd:function(t,e,i){if(!o.localStorage.getItem("userinfo"))return uni.showToast({title:"请先登录",icon:"none"}),uni.navigateTo({url:"/pages/user/login"}),!1;var n=this.cid;uni.navigateTo({url:"/pages/contents/commentsadd?cid="+n+"&coid="+e+"&title="+t+"&isreply="+i})},toReward:function(){var t=this,e=t.checkbox,i=10;for(var n in e)e[n].checked&&(i=e[n].num);var a={type:"reward",cid:t.cid,num:i};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.addLog(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(a)),token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){t.hideModal(),setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code&&uni.showToast({title:"成功打赏 "+i+" "+t.currencyName,icon:"none"})},fail:function(e){t.hideModal(),setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:"网络开小差了哦",icon:"none"})}})},toLikes:function(){var t=this,e={type:"likes",cid:t.cid};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.addLog(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(e)),token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){if(setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code){var i=(new Date).getTime();t.isLikes=1,o.localStorage.setItem("likeDate_"+t.cid,i),t.likes++}},fail:function(t){setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:"网络开小差了哦",icon:"none"})}})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},ChooseCheckbox:function(t){for(var e=this.checkbox,i=0,n=e.length;i<n;++i)this.checkbox[i].checked=!1;this.checkbox[t].checked=!this.checkbox[t].checked},toIsMark:function(){var t=this;t.$Net.request({url:t.$API.getIsMark(),data:{token:t.token,cid:t.cid},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.isMark=e.data.data.isMark,t.logid=e.data.data.logid)},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},toMark:function(){var t=this,e={type:"mark",cid:t.cid};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.addLog(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(e)),token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code&&(t.toIsMark(),t.isMark=1)},fail:function(t){setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:"网络开小差了哦",icon:"none"})}})},rmMark:function(){var t=this;uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.removeLog(),data:{key:t.logid,token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:e.data.msg,icon:"none"}),1==e.data.code&&(t.isMark=0,t.toIsMark())},fail:function(t){setTimeout((function(){uni.hideLoading()}),500),uni.showToast({title:"网络开小差了哦",icon:"none"})}})},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),i=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),a=("0"+t.getHours()).slice(-2),o=("0"+t.getMinutes()).slice(-2),s=e+"-"+i+"-"+n+" "+a+":"+o;return s},ToCopy:function(t){var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length),uni.showToast({title:"复制成功"});document.execCommand("copy");e.remove()},goAds:function(t){var e=t.url;t.urltype;window.open(e)},ToShare:function(){var t=this.$API.GetLinkRule(),e=t.replace("{cid}",this.cid);if(-1!=t.indexOf("{category}")){var i=this.category[0].slug;e=e.replace("{category}",i)}if("post"!=this.type){var n=this.$API.GetPageRule();e=n.replace("{slug}",this.slug)}},formatNumber:function(t){return t>=1e3&&t<1e4?(t/1e3).toFixed(1)+"k":t>=1e4?(t/1e4).toFixed(1)+"w":t},getShopList:function(){var t=this;if(o.localStorage.getItem("userinfo")){var e=JSON.parse(o.localStorage.getItem("userinfo"));e.uid}var i={cid:t.cid};t.$Net.request({url:t.$API.shopList(),data:{searchParams:JSON.stringify(t.$API.removeObjectEmptyKey(i)),limit:1,page:1},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){if(1==e.data.code){var i=e.data.data;t.shopList=i,i.length>0&&(t.shopID=i[0].id,t.isBuyShop(t.shopID,i[0].type))}},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},getIsCommnet:function(){var t=this,e="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));e=i.token}if(""==e)return!1;var n={key:t.cid,token:e};t.$Net.request({url:t.$API.isCommnet(),data:n,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.isCommnet=1,t.getInfo(t.cid))},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},shopInfo:function(t){var e=t.id;if(1!=t.status)return uni.showToast({title:"该商品未上架",icon:"none"}),!1;uni.navigateTo({url:"/pages/contents/shopinfo?sid="+e})},toSearch:function(){uni.redirectTo({url:"/pages/contents/search"})},toAds:function(t){window.open(t)},replaceSpecialChar:function(t){return!!t&&(t=t.replace(/&quot;/g,'"'),t=t.replace(/&amp;/g,"&"),t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&nbsp;/g," "),t)},isBuyShop:function(t,e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={sid:t,token:n};i.$Net.request({url:i.$API.isBuyShop(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(n){1==n.data.code&&(i.isBuy=1,4==e&&i.toShopValue(t,e))},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},shopBuy:function(t){var e=this,i="";if(!o.localStorage.getItem("userinfo")){uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"});setTimeout((function(){uni.navigateTo({url:"../user/login"}),clearTimeout("timer")}),1e3);return!1}var n=JSON.parse(o.localStorage.getItem("userinfo"));i=n.token;var a={token:i,sid:t};uni.showModal({title:"确定购买此商品吗?",content:" ",success:function(t){t.confirm&&(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.buyShop(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code)setTimeout((function(){uni.redirectTo({url:"/pages/user/order"}),clearTimeout("timer")}),1e3);else if("购买实体商品前，需要先设置收货地址"==t.data.msg)setTimeout((function(){uni.redirectTo({url:"/pages/user/address"}),clearTimeout("timer")}),1e3)},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}}))}})},toShopValue:function(t,e){var i=this;if(1==e)uni.showToast({title:"实体商品请留意快递信息",icon:"none"});else if(4==e){i=this;var n="";o.localStorage.getItem("token")&&(n=o.localStorage.getItem("token"));var a={key:t,token:n};i.$Net.request({url:i.$API.shopInfo(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){uni.stopPullDownRefresh(),t.data.value&&(i.shopValue=t.data.value);setTimeout((function(){i.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){uni.stopPullDownRefresh(),uni.showToast({title:"网络开小差了哦",icon:"none"});setTimeout((function(){i.isLoading=1,clearTimeout("timer")}),300)}})}else uni.navigateTo({url:"/pages/contents/shoptext?sid="+t})},subText:function(t,e){return t?t.length>e?(t=t.substring(0,e),t+"……"):t:"Ta还没有个人介绍哦"},toUserContents:function(t){var e=t.author,i=t.author+"的信息",n=t.authorId;uni.navigateTo({url:"/pages/contents/userinfo?title="+i+"&name="+e+"&uid="+n+"&avatar="+encodeURIComponent(t.avatar)})},toBan:function(t){if(!t)return uni.showToast({title:"该用户不存在",icon:"none"}),!1;uni.navigateTo({url:"/pages/manage/banuser?uid="+t})},toDelete:function(e){var i=this,n="";if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={key:e,token:n};uni.showModal({title:"确定要删除该评论吗",success:function(e){e.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.commentsDelete(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.getCommentsList(!1,i.cid))},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):e.cancel&&t.log("用户点击取消")}})},getIsFollow:function(t){var e=this,i="";if(o.localStorage.getItem("userinfo")){var n=JSON.parse(o.localStorage.getItem("userinfo"));i=n.token}var a={token:i,touid:t};e.$Net.request({url:e.$API.isFollow(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){e.isFollow=t.data.code},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})},follow:function(t){var e=this,i="";if(!o.localStorage.getItem("userinfo"))return uni.showToast({title:"请先登录",icon:"none"}),uni.navigateTo({url:"/pages/user/login"}),!1;var n=JSON.parse(o.localStorage.getItem("userinfo"));i=n.token;var a={token:i,touid:e.authorId,type:t};e.isFollow=t,uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.follow(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),e.getIsFollow(e.authorId)},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh(),e.getIsFollow(e.authorId)}})},toLink:function(t){if(!o.localStorage.getItem("token")||""==o.localStorage.getItem("token"))return uni.showToast({title:"请先登录哦",icon:"none"}),!1;uni.navigateTo({url:t})}}};e.default=c}).call(this,i("5a52")["default"])}}]);