(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contents-alltag"],{"003d":function(t,a,e){t.exports=e.p+"static/img/loading.edead6c4.gif"},"45f9":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("e9c4"),e("a9e3"),e("14d9"),e("99af");var i=e("0af4"),s={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,tagList:[],searchText:"",isLoading:0,type:"all",curNum:0,moreText:"加载更多",page:1}},onPullDownRefresh:function(){},onShow:function(){},onLoad:function(t){this.getTagList(!1),t.type&&(this.type=t.type)},methods:{back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",0==this.isLoad&&this.getTagList(!0)},getTagList:function(t){var a=this,e=a.page;t&&e++,a.$Net.request({url:a.$API.getMetasList(),data:{searchParams:JSON.stringify(a.$API.removeObjectEmptyKey({type:"tag"})),limit:50,page:e,searchKey:a.searchText,order:"order"},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){if(a.isLoading=1,a.isLoad=0,1==e.data.code){var s=e.data.data;if(s.length>0){var n=[];for(var o in s){if(s[o].active=0,"edit"==a.type&&i.localStorage.getItem("ctag")){var c=i.localStorage.getItem("ctag"),u=c.split(",");for(var r in u)if(""!=u[r]){var l=Number(u[r]);s[o].mid==l&&(s[o].active=1,a.curNum++)}}n.push(s[o])}t?(a.page++,a.tagList=a.tagList.concat(n)):a.tagList=n,a.moreText="加载更多"}else a.moreText="没有更多数据了"}setTimeout((function(){a.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){setTimeout((function(){a.isLoading=1,clearTimeout("timer")}),300);a.isLoading=1,a.isLoad=0,a.moreText="加载更多"}})},toCategoryContents:function(t,a,e){if("all"==this.type){uni.navigateTo({url:"/pages/contents/contentlist?title="+t+"&type=meta&id="+a})}else if(1==this.tagList[e].active)this.curNum--,this.tagList[e].active=0;else{if(this.curNum>4)return uni.showToast({title:"最多选择五个标签",icon:"none"}),!1;this.curNum++,this.tagList[e].active=1}},searchTag:function(){this.searchText;this.page=1,this.getTagList()},submit:function(){var t="",a=this.tagList;for(var e in a)1==a[e].active&&(t+=","+a[e].mid);if(""==t)return uni.showToast({title:"请选择分类",icon:"none"}),!1;i.localStorage.setItem("ctag",t);this.tagList;for(var e in a)this.tagList[e].active=0;this.back()}}};a.default=s},"4abd":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"user",class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("全部标签"),"edit"==t.type?[t._v("(多选)")]:t._e()],2),"edit"==t.type?[i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cu-btn bg-blue text-sm radius"},[t._v("确定")])],1)]:t._e()],2)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"data-box"},[i("v-uni-view",{staticClass:"cu-bar bg-white search"},[i("v-uni-view",{staticClass:"search-form round"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{type:"text",placeholder:"搜索标签"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.searchTag.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(a){t.searchText=a},expression:"searchText"}})],1)],1),0==t.tagList.length?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),i("v-uni-view",{staticClass:"tags"},t._l(t.tagList,(function(a,e){return i("v-uni-text",{key:e,staticClass:"tags-box",class:1==a.active?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toCategoryContents("#"+a.name+"#",a.mid,e)}}},[t._v(t._s(a.name))])})),1),t.tagList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],1),0==t.isLoading?i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"loading-main"},[i("v-uni-image",{attrs:{src:e("003d")}})],1)],1):t._e()],1)},s=[]},"4c91":function(t,a,e){"use strict";e.r(a);var i=e("45f9"),s=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},a0b3:function(t,a,e){"use strict";e.r(a);var i=e("4abd"),s=e("4c91");for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return s[t]}))}(n);var o=e("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"55333568",null,!1,i["a"],void 0);a["default"]=c.exports}}]);