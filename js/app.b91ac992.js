(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/stocknepal/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("8a23"),r=a.n(s);r.a},3776:function(t,e,a){},4356:function(t,e,a){"use strict";var s=a("8072"),r=a.n(s);r.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("1276");var s=a("3835"),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"blue","hide-on-scroll":!0}},[a("div",{staticClass:"d-flex align-center"},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),a("router-link",{staticClass:"mainTitle",attrs:{to:{name:"home"}}},[a("h3",[t._v("stockFly")])])],1),a("v-spacer"),t.user?a("v-btn",{attrs:{text:""}},[t._v(" Logout")]):a("v-btn",{attrs:{text:""},on:{click:t.goToLogin}},[a("span",{staticClass:"mr-2"},[t._v("Login")]),a("v-icon",[t._v("mdi-account")])],1)],1),a("v-navigation-drawer",{attrs:{right:!1,absolute:"",dark:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{class:"px-0",attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("@"+t._s(t.userDetails?t.userDetails.userName:""))]),a("v-list-item-subtitle",[t._v(t._s(t.userDetails?t.userDetails.email:""))])],1)],1),a("v-divider"),t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[a("router-link",{attrs:{to:{name:e.routeName}}},[t._v(" "+t._s(e.title)+" ")])],1)],1)],1)}))],2)],1),a("v-content",[a("keep-alive",{attrs:{exclude:"singlePage"}},[a("router-view")],1)],1)],1)},n=[],o=a("5530"),c=a("2f62"),l={name:"App",components:{},data:function(){return{drawer:!1,items:[{title:"Today's Price",routeName:"home",icon:""},{title:"Your Portfolio",routeName:"portfolio",icon:""},{title:"Watch list",routeName:"watchlist",icon:"mdi-heart"},{title:"Today's Summary",routeName:"watchlist",icon:""},{title:"Chat groups",routeName:"brokers",icon:"  "},{title:"Brokers",routeName:"brokers",icon:"  "},{title:"News",routeName:"brokers",icon:"  "}]}},computed:Object(o["a"])({},Object(c["c"])(["user","userDetails"])),methods:{goToLogin:function(){var t="6145srbi3mf6bhqejrkr1p9r8a",e="https://lomashbhattarai.github.io/stocknepal/home";window.location.href="https://stockfly.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=".concat(t,"&redirect_uri=").concat(e)}}},u=l,d=(a("034f"),a("2877")),m=a("6544"),f=a.n(m),h=a("7496"),p=a("40dc"),b=a("5bc1"),v=a("8336"),y=a("a75b"),g=a("ce7e"),j=a("132d"),C=a("8860"),k=a("da13"),w=a("8270"),_=a("5d23"),P=a("34c3"),x=a("f774"),D=a("2fa4"),S=Object(d["a"])(u,i,n,!1,null,null,null),V=S.exports;f()(S,{VApp:h["a"],VAppBar:p["a"],VAppBarNavIcon:b["a"],VBtn:v["a"],VContent:y["a"],VDivider:g["a"],VIcon:j["a"],VList:C["a"],VListItem:k["a"],VListItemAvatar:w["a"],VListItemContent:_["a"],VListItemIcon:P["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:x["a"],VSpacer:D["a"]});a("7db0"),a("d81d"),a("b680");var O=a("bc3a"),A=function(t){var e=100*t.difference/t.prevClosingPrice;return+e.toFixed(2)};r["a"].use(c["a"]);var T=new c["a"].Store({state:{watchlist:[],tokens:"",user:"",userDetails:"",companies:[],todaysPrice:[]},mutations:{addToWatchlist:function(t,e){t.watchlist=e},addToken:function(t,e){t.tokens=e},setUser:function(t,e){t.user=e},setUserDetails:function(t,e){t.userDetails=e},setCompanies:function(t,e){t.companies=e},setTodaysPrice:function(t,e){t.todaysPrice=e}},actions:{getCompanyList:function(t){var e=t.commit;O.get("https://2e39214vbk.execute-api.us-east-2.amazonaws.com/dev/getCompanyFromDb").then((function(t){var a=t.data;e("setCompanies",a.company)}))},getUserDetails:function(t,e){var a=t.commit,s=t.state,r=e.email;O.get(" https://r7ytk8m6dj.execute-api.us-east-2.amazonaws.com/dev/api/portfolio/get",{params:{email:r}}).then((function(t){var e=t.data;e.user.portfolio.map((function(t,a){var r=s.todaysPrice.find((function(e){return e.symbol==t.symbol}));r&&(e.user.portfolio[a]["closingPrice"]=r.closingPrice)})),a("setUserDetails",e.user),a("addToWatchlist",e.user.watchlist)}))},getTodaysPrice:function(t){var e=t.commit;return O.get("https://2e39214vbk.execute-api.us-east-2.amazonaws.com/dev/getTodaysPrice").then((function(t){var a=t.data;a.prices.map((function(t,e){a.prices[e].percentDiff=A(t)})),e("setTodaysPrice",a.prices)})).catch((function(t){console.log(t)}))}},modules:{}}),L=a("f309");r["a"].use(L["a"]);var z=new L["a"]({}),B=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{dark:""}},[a("v-card-title",[t._v(" Today's Price "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),t.todaysPrice.length?a("v-card-subtitle",[t._v(" As of "+t._s(t.todaysPrice[0].today.replace(/-/g," "))+" "),a("v-btn",{attrs:{text:"",icon:"",color:"green",title:"Refresh"},on:{click:t.getData}},[a("v-icon",[t._v("mdi-cached")])],1)],1):t._e(),a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"green"}},[t._v(" "+t._s(t.dataSummary.positive)+" Positive ")]),a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"red"}},[t._v(" "+t._s(t.dataSummary.negative)+" Negative ")]),a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"orange"}},[t._v(" "+t._s(t.dataSummary.neutral)+" Neutral ")]),a("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",dark:"",loading:t.loaders.todaysPrice,headers:t.headers,search:t.searchKey,items:t.todaysPrice,"items-per-page":200},on:{"click:row":t.handleRowClick},scopedSlots:t._u([{key:"item.name",fn:function(e){var s=e.item;return[a("span",{class:t.getColor(s.difference)+"--text"},[t._v(t._s(s.name))])]}},{key:"item.symbol",fn:function(e){var s=e.item;return[a("span",{class:t.getColor(s.difference)+"--text"},[t._v(t._s(s.symbol))])]}},{key:"item.difference",fn:function(e){var s=e.item;return[a("span",{class:t.getColor(s.difference)+"--text"},[t._v(t._s(s.difference))])]}},{key:"item.percentDiff",fn:function(e){var s=e.item;return[a("span",{class:t.getColor(s.difference)+"--text"},[t._v(t._s(s.percentDiff)+" ")])]}}])})],1)},I=[],$={name:"Home",data:function(){return{searchKey:"",loaders:{todaysPrice:!1},headers:[{text:"Name",align:"left",value:"name"},{text:"Symbol",value:"symbol"},{text:"Traded Shares",value:"tradedShares"},{text:"Max Price",value:"maxPrice"},{text:"Min Price",value:"minPrice"},{text:"Closing Price",value:"closingPrice"},{text:"Prev Closing",value:"prevClosingPrice"},{text:"Difference",value:"difference"},{text:"% Diff",value:"percentDiff"}]}},created:function(){var t=this;this.todaysPrice.length||(this.loaders.todaysPrice=!0,this.getTodaysPrice().then((function(){t.loaders.todaysPrice=!1})))},computed:Object(o["a"])({},Object(c["c"])(["todaysPrice"]),{dataSummary:function(){var t={positive:0,negative:0,neutral:0};return this.todaysPrice.length&&this.todaysPrice.map((function(e){e.difference>0?t["positive"]++:e.difference<0?t["negative"]++:t["neutral"]++})),t}}),methods:Object(o["a"])({},Object(c["b"])(["getTodaysPrice"]),{getData:function(){var t=this;this.loaders.todaysPrice=!0,this.getTodaysPrice().then((function(){t.loaders.todaysPrice=!1}))},addToWatchlist:function(t){this.$store.commit("addToWatchlist",t)},handleRowClick:function(t){this.$router.push({name:"singlePage",params:{symbol:t.symbol}})},getColor:function(t){return t<0?"red":t>0?"green":"orange"},calcPercentDiff:function(t){var e=100*t.difference/t.prevClosingPrice;return+e.toFixed(2)}})},F=$,N=(a("8b71"),a("b0af")),R=a("99d9"),W=a("cc20"),H=a("8fea"),M=a("8654"),U=Object(d["a"])(F,E,I,!1,null,null,null),K=U.exports;f()(U,{VBtn:v["a"],VCard:N["a"],VCardSubtitle:R["b"],VCardTitle:R["c"],VChip:W["a"],VDataTable:H["a"],VIcon:j["a"],VSpacer:D["a"],VTextField:M["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search by Name, Address or Code","single-line":"","hide-details":""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),t.loaders.brokers?a("v-row",t._l(5,(function(t){return a("v-col",{key:t},[a("v-skeleton-loader",{ref:"skeleton",refInFor:!0,staticClass:"mx-auto",attrs:{boilerplate:!1,type:"article",tile:!1}})],1)})),1):a("v-row",t._l(t.fileredBrokers,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",shaped:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-row",[a("v-col",[a("v-avatar",{attrs:{color:"teal",size:"58"}},[a("span",{staticClass:"white--text"},[t._v(t._s(e.code))])])],1),a("v-col",{staticClass:"overline mb-4"},[t._v(t._s(e.name))])],1),a("span",{staticClass:"subtitle-2"},[a("label",{staticClass:"font-weight-medium overline mb-1"},[t._v("address: ")]),t._v(t._s(e.address))]),a("span",{staticClass:"subtitle-2"},[a("label",{staticClass:"font-weight-medium overline mb-1"},[t._v("telephone:")]),t._v(" "+t._s(e.telephone))]),a("span",{staticClass:"subtitle-2"},[a("label",{staticClass:"font-weight-medium overline mb-1"},[t._v("email:")]),t._v(" "+t._s(e.email))]),a("span",{staticClass:"subtitle-2"},[a("label",{staticClass:"font-weight-medium overline mb-1"},[t._v("website:")]),t._v(" "+t._s(e.website))]),a("span",{staticClass:"subtitle-2"},[a("label",{staticClass:"font-weight-medium overline mb-1"},[t._v("person:")]),t._v(" "+t._s(e.person))])],1)],1),a("v-card-actions")],1)],1)})),1)],1)},J=[],q=(a("4de4"),a("caad"),a("b0c0"),a("2532"),a("bc3a")),Y={name:"Home",data:function(){return{brokers:[],searchKey:"",loaders:{brokers:!1}}},computed:{fileredBrokers:function(){var t=this;return this.brokers.length?(console.log("yes"),this.brokers.filter((function(e){return console.log(),e.name.toLowerCase().includes(t.searchKey.toLowerCase())||e.code.toLowerCase().includes(t.searchKey.toLowerCase())||e.address.toLowerCase().includes(t.searchKey.toLowerCase())}))):[]}},created:function(){var t=this;this.loaders.brokers=!0,q.get("https://2e39214vbk.execute-api.us-east-2.amazonaws.com/dev/getBrokers").then((function(e){var a=e.data;console.log(a.prices),t.loaders.brokers=!1,t.brokers=a.brokers})).catch((function(e){t.loaders.brokers=!1,alert(e)}))}},Q=Y,X=a("8212"),Z=a("62ad"),tt=a("a523"),et=a("0fd9"),at=a("3129"),st=Object(d["a"])(Q,G,J,!1,null,null,null),rt=st.exports;f()(st,{VAvatar:X["a"],VCard:N["a"],VCardActions:R["a"],VCol:Z["a"],VContainer:tt["a"],VListItem:k["a"],VListItemContent:_["a"],VRow:et["a"],VSkeletonLoader:at["a"],VTextField:M["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[t.loaders.todaysPrice?a("v-row",t._l(5,(function(t){return a("v-col",{key:t},[a("v-skeleton-loader",{ref:"skeleton",refInFor:!0,staticClass:"mx-auto",attrs:{boilerplate:!1,type:"article",tile:!1}})],1)})),1):a("v-row",t._l(t.watchlistDetails,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:"","max-width":"344",shaped:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-list-item-title",[t._v(t._s(e.symbol)+" "),a("span",{staticClass:"caption",class:e.difference>0?"green--text":"red--text"},[e.difference>0?a("v-icon",{attrs:{color:"green",small:""}},[t._v("mdi-arrow-up")]):a("v-icon",{attrs:{color:"red",small:""}},[t._v("mdi-arrow-down")]),t._v(" "+t._s(e.difference)+" ")],1)])],1),a("v-col",{attrs:{cols:"8"}},[a("v-btn",{staticClass:"mr-2",attrs:{small:"",text:"",outlined:"",color:"pink"},on:{click:function(a){return t.removeFromWatchlist(e)}}},[t._v(" Remove ")]),a("v-btn",{attrs:{small:"",ripple:"",outlined:"",text:"",color:"blue"},on:{click:function(a){return t.goToSinglePage(e)}}},[t._v(" See Chart ")])],1)],1),a("v-list-item-subtitle",{staticClass:"overline"},[t._v(t._s(e.name))]),a("span",[a("label",{staticClass:"subtitle-2"},[t._v("closing Price:")]),t._v(" "+t._s(e.closingPrice)+", "),a("label",{staticClass:"subtitle-2"},[t._v("max:")]),t._v(" "+t._s(e.maxPrice)+", "),a("label",{staticClass:"subtitle-2"},[t._v("min:")]),t._v(" "+t._s(e.minPrice)+" ")])],1)],1)],1)],1)})),1)],1)},nt=[],ot=a("bc3a"),ct=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],lt={name:"Home",data:function(){return{loaders:{todaysPrice:!1},width:2,radius:10,padding:8,lineCap:"round",gradient:ct[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",gradients:ct,fill:!1,type:"trend",autoLineWidth:!1}},computed:Object(o["a"])({},Object(c["c"])(["userDetails","watchlist","todaysPrice"]),{watchlistDetails:function(){var t=this;return this.watchlist.map((function(e){var a=t.todaysPrice.find((function(t){return t.symbol==e.symbol}));return a?(a["watchListId"]=e._id,a):[]}))}}),created:function(){},methods:{goToSinglePage:function(t){this.$router.push({name:"singlePage",params:{symbol:t.symbol}})},removeFromWatchlist:function(t){var e=this;if(this.userDetails){var a={email:this.userDetails.email,id:t.watchListId};ot.post(" https://r7ytk8m6dj.execute-api.us-east-2.amazonaws.com/dev/api/watchlist/delete",a).then((function(){e.$store.dispatch("getUserDetails",{email:e.userDetails.email})}))}else{var s=this.watchlist.filter((function(e){return e.symbol!=t.symbol}));this.$store.commit("addToWatchlist",s)}}}},ut=lt,dt=Object(d["a"])(ut,it,nt,!1,null,null,null),mt=dt.exports;f()(dt,{VBtn:v["a"],VCard:N["a"],VCol:Z["a"],VContainer:tt["a"],VIcon:j["a"],VListItem:k["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:et["a"],VSkeletonLoader:at["a"]});var ft,ht,pt,bt,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-5"},[a("v-btn",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("Back")]),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{hint:"Pick a company to see its charts","persistent-hint":"",items:t.companiesSortedArray},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v(" "+t._s(e.item.symbol)+" - "+t._s(e.item.name)+" ")]}},{key:"item",fn:function(e){return[t._v(" "+t._s(e.item.symbol)+" - "+t._s(e.item.name)+" ")]}}]),model:{value:t.selectedCompany,callback:function(e){t.selectedCompany=e},expression:"selectedCompany"}}),a("v-card",{staticClass:"mx-auto mt-5",attrs:{"max-width":"344",outlined:"",shaped:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.selectedCompany.symbol)+" "),a("span",[t.isaddedToWatchList?a("v-icon",{attrs:{color:"pink",title:"on your  watch list"}},[t._v("mdi-heart")]):a("v-icon",{attrs:{title:"Add to watch list"},on:{click:function(e){return t.addToWatchlist(t.selectedCompany)}}},[t._v("mdi-heart-outline")])],1)]),a("v-list-item-subtitle",[t._v(" "+t._s(t.selectedCompany.name))])],1)],1),a("v-btn",{attrs:{text:"",color:"blue"}},[t._v("Add to Portfolio")])],1)],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card",{staticClass:"mt-5"},[a("lineChart",{attrs:{symbol:t.selectedCompany.symbol,closingPriceArray:t.closingPriceArray,maxPriceArray:t.maxPriceArray,minPriceArray:t.minPriceArray,days:t.dayArray}}),a("customBarChart",{staticClass:"mt-5",attrs:{days:t.dayArray,volumeArray:t.volumeArray}})],1)],1)],1)],1)},yt=[],gt=(a("99af"),a("a15b"),a("fb6a"),a("45fc"),a("2909")),jt=a("1fca"),Ct={extends:jt["b"],props:{closingPriceArray:Array,maxPriceArray:Array,minPriceArray:Array,days:Array,symbol:String},data:function(){return{formatting:{fill:!1,lineTension:.3,borderCapStyle:"butt",borderDash:[],borderWidth:2,borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:10,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10}}},watch:{days:function(){this.renderChart(this.chartData,this.options)}},computed:{options:function(){return{legend:{position:"top"},title:{display:!0,text:"Price History(".concat(this.symbol,")")},responsive:!0,maintainAspectRatio:!1}},chartData:function(){return{labels:this.days,datasets:[Object(o["a"])({label:"Closing Price"},this.formatting,{borderColor:"rgb(30,144,255)",data:this.closingPriceArray}),Object(o["a"])({label:"Max Price"},this.formatting,{borderColor:"green",data:this.maxPriceArray,hidden:!0}),Object(o["a"])({label:"Min Price"},this.formatting,{borderColor:"red",data:this.minPriceArray,hidden:!0})]}}},mounted:function(){this.renderChart(this.chartData,this.options)}},kt=Ct,wt=Object(d["a"])(kt,ft,ht,!1,null,null,null),_t=wt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("barChart",{staticClass:"smallDiv",attrs:{chartdata:t.chartData,options:t.options}})},xt=[],Dt={extends:jt["a"],props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},data:function(){return{}},watch:{chartdata:function(){this.renderChart(this.chartdata,this.options)}},mounted:function(){this.renderChart(this.chartdata,this.options)}},St=Dt,Vt=Object(d["a"])(St,pt,bt,!1,null,null,null),Ot=Vt.exports,At={name:"AxesLessBar",components:{barChart:Ot},props:{volumeArray:Array,days:Array},computed:{chartData:function(){return{labels:this.days,datasets:[{label:"Volume",backgroundColor:"blue",borderColor:"blue",hoverBackgroundColor:"blue",hoverBorderColor:"blue",data:this.volumeArray}]}},options:function(){return{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Volume",position:"bottom"},legend:{display:!1},scales:{xAxes:[{barPercentage:1,barThickness:40,minBarLength:2,offset:!1,gridLines:{offsetGridLines:!1,display:!1,drawBorder:!1},ticks:{display:!1}}],yAxes:[{barPercentage:.5,barThickness:6,maxBarThickness:8,minBarLength:2,offset:!1,gridLines:{offsetGridLines:!1,display:!0,drawBorder:!1},ticks:{display:!0,callback:function(t){return t/1e3+"k"}}}]}}}}},Tt=At,Lt=(a("4356"),Object(d["a"])(Tt,Pt,xt,!1,null,null,null)),zt=Lt.exports,Bt=a("bc3a"),Et={name:"singlePage",data:function(){return{historyData:[],days:["January","February","March","April","May","June","July"],companies:[{name:"agriculture development bank",symbol:"ADBL"}],selectedCompany:{name:"",symbol:this.$route.params.symbol},symbol:this.$route.params.symbol}},computed:Object(o["a"])({},Object(c["c"])(["userDetails","watchlist"]),{isaddedToWatchList:function(){var t=this;return this.watchlist.some((function(e){return e.symbol==t.selectedCompany.symbol}))},dayArray:function(){return this.historyData.map((function(t){return t.today.split("-").slice(1,3).join("-")}))},closingPriceArray:function(){return this.historyData.map((function(t){return t.closingPrice}))},maxPriceArray:function(){return this.historyData.map((function(t){return t.maxPrice}))},minPriceArray:function(){return this.historyData.map((function(t){return t.minPrice}))},volumeArray:function(){return this.historyData.map((function(t){return t.tradedShares}))},companiesSortedArray:function(){return this.companies.slice().sort((function(t,e){return t.name>e.name}))}}),methods:{getHistroyFromSymbol:function(){var t=this;Bt.get("https://2e39214vbk.execute-api.us-east-2.amazonaws.com/dev/getHistoryBySymbol/".concat(this.selectedCompany.symbol)).then((function(e){var a=e.data;t.historyData=a.history}))},getCompanyList:function(){var t=this;return Bt.get("https://2e39214vbk.execute-api.us-east-2.amazonaws.com/dev/getCompanyFromDb").then((function(e){var a=e.data;t.companies=a.company}))},changeRoute:function(){this.$router.push({name:"singlePage",params:{symbol:this.selectedCompany.symbol}})},addToWatchlist:function(t){var e=this;if(this.userDetails){var a={email:this.userDetails.email,symbol:t.symbol};Bt.post("https://r7ytk8m6dj.execute-api.us-east-2.amazonaws.com/dev/api/watchlist/create",a).then((function(){e.$store.dispatch("getUserDetails",{email:e.userDetails.email})}))}else this.$store.commit("addToWatchlist",[].concat(Object(gt["a"])(this.watchlist),[{symbol:t.symbol}]))}},watch:{"selectedCompany.symbol":function(t,e){e!=t&&(this.changeRoute(),this.getHistroyFromSymbol())}},mounted:function(){var t=this;this.getHistroyFromSymbol(),this.getCompanyList().then((function(){t.selectedCompany=t.companies.find((function(e){return e.symbol==t.selectedCompany.symbol}))}))},components:{lineChart:_t,customBarChart:zt}},It=Et,$t=a("b974"),Ft=Object(d["a"])(It,vt,yt,!1,null,null,null),Nt=Ft.exports;f()(Ft,{VBtn:v["a"],VCard:N["a"],VCol:Z["a"],VContainer:tt["a"],VIcon:j["a"],VListItem:k["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:et["a"],VSelect:$t["a"]});var Rt,Wt,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[t.user?a("v-row",[a("v-col",[a("PieChart",{attrs:{chartdata:t.chartdata,options:t.options}}),a("h3",{staticClass:"text-xs-center mt-5"},[t._v("Current Valuation : Rs."+t._s(t.currentValuation))]),a("h5",{staticClass:"text-xs-center"},[t._v("Total Investment: Rs."+t._s(t.totalCostPrice))])],1),a("v-col",[a("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.userDetails.portfolio,"items-per-page":10,"mobile-breakpoint":"0"},scopedSlots:t._u([{key:"item.diff",fn:function(e){var s=e.item;return[a("span",{class:t.getColor(s.closingPrice-s.costPrice)+"--text"},[t._v(" "+t._s((s.closingPrice-s.costPrice)*s.numOfShares)+" ")])]}},{key:"item.actions",fn:function(e){var s=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(s)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(s)}}},[t._v(" mdi-delete ")])]}}],null,!1,3919351369)}),a("v-list",[a("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-card-title",[t._v("Add Stock to Portfolio")])]},proxy:!0}],null,!1,2163225513)},[a("v-form",[a("v-autocomplete",{attrs:{items:t.companies,color:"white","item-text":"name","item-value":"symbol",label:"Stocks"},scopedSlots:t._u([{key:"item",fn:function(e){return[t._v(" "+t._s(e.item.name+"("+e.item.symbol+")")+" ")]}}],null,!1,106030297),model:{value:t.newEntry.symbol,callback:function(e){t.$set(t.newEntry,"symbol",e)},expression:"newEntry.symbol"}}),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"No of Shares"},model:{value:t.newEntry.numOfShares,callback:function(e){t.$set(t.newEntry,"numOfShares",e)},expression:"newEntry.numOfShares"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"Cost Price"},model:{value:t.newEntry.costPrice,callback:function(e){t.$set(t.newEntry,"costPrice",e)},expression:"newEntry.costPrice"}})],1)],1),a("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-card-title",[t._v("optional")])]},proxy:!0}],null,!1,1527185479)},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.newEntry.date,callback:function(e){t.$set(t.newEntry,"date",e)},expression:"newEntry.date"}}),a("v-file-input",{attrs:{multiple:"",label:"Receipt of Purchase"}})],1),a("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:t.addEntryToPortfolio}},[t._v(" Add To Portfolio ")])],1)],1)],1)],1)],1):a("v-row",[t._v(" Login To Manage your portfolio ")])],1)],1)},Mt=[],Ut=(a("13d5"),{extends:jt["c"],props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},data:function(){return{}},watch:{chartdata:function(){this.renderChart(this.chartdata,this.options)}},mounted:function(){this.renderChart(this.chartdata,this.options)}}),Kt=Ut,Gt=Object(d["a"])(Kt,Rt,Wt,!1,null,null,null),Jt=Gt.exports,qt=a("bc3a"),Yt={components:{PieChart:Jt},data:function(){return{headers:[{text:"Symbol",value:"symbol",sortable:!1},{text:"Cost Price",value:"costPrice",sortable:!1},{text:"Num of Shares",value:"numOfShares",sortable:!1},{text:"Closing Price",value:"closingPrice",sortable:!1},{text:"Gain/loss",value:"diff",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],newEntry:{symbol:"",numOfShares:"",costPrice:"",upperStop:"",lowerStop:"",date:(new Date).toISOString().substr(0,10)},options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"My Portfolio"},pieceLabel:{mode:"percentage",precision:1}}}},watch:{newEntry:function(t){this.newEntry.upperStop=t.costPrice,this.newEntry.lowerStop=t.costPrice}},computed:Object(o["a"])({},Object(c["c"])(["user","userDetails","companies","todaysPrice"]),{totalCostPrice:function(){return this.userDetails.portfolio.reduce((function(t,e){return e?t+e.costPrice*e.numOfShares:t}),0)},currentValuation:function(){var t=this;return this.userDetails.portfolio.reduce((function(e,a){if(a){var s=t.todaysPrice.find((function(t){return t.symbol==a.symbol}));return s?e+s.closingPrice*a.numOfShares:e}return e}),0)},chartdata:function(){var t,e;return this.userDetails&&(t=this.userDetails.portfolio.map((function(t){return t.symbol})),e=this.userDetails.portfolio.map((function(t){return t.closingPrice*t.numOfShares}))),{labels:t,datasets:[{backgroundColor:["#007CC3","#F47A1F","#FDBB2F","#377B2B"," #b03a2e","#7AC142","#1abc9c","#8e44ad"],data:e}]}}}),mounted:function(){var t=this;this.getCompanyList(),this.todaysPrice.length?this.$store.dispatch("getUserDetails",{email:this.userDetails.email}):this.getTodaysPrice().then((function(){t.$store.dispatch("getUserDetails",{email:t.userDetails.email})}))},methods:Object(o["a"])({},Object(c["b"])(["getCompanyList","getTodaysPrice"]),{addEntryToPortfolio:function(){var t=this;if(this.userDetails&&this.newEntry.symbol&&this.newEntry.costPrice&&this.newEntry.numOfShares){var e={email:this.userDetails.email,symbol:this.newEntry.symbol,costPrice:this.newEntry.costPrice,numOfShares:this.newEntry.numOfShares};qt.post("https://2e39214vbk.execute-api.us-east-2.amazonaws.com/dev/api/portfolio/create",e).then((function(){t.$store.dispatch("getUserDetails",{email:t.userDetails.email}),t.newEntry={symbol:"",numOfShares:"",costPrice:"",upperStop:"",lowerStop:"",date:(new Date).toISOString().substr(0,10)}}))}},getColor:function(t){return t<0?"red":t>0?"green":"orange"}})},Qt=Yt,Xt=(a("8383"),a("c6a6")),Zt=a("2e4b"),te=a("23a7"),ee=a("4bd4"),ae=a("56b0"),se=Object(d["a"])(Qt,Ht,Mt,!1,null,null,null),re=se.exports;f()(se,{VAutocomplete:Xt["a"],VBtn:v["a"],VCardTitle:R["c"],VCol:Z["a"],VContainer:tt["a"],VDataTable:H["a"],VDatePicker:Zt["a"],VFileInput:te["a"],VForm:ee["a"],VIcon:j["a"],VList:C["a"],VListGroup:ae["a"],VRow:et["a"],VTextField:M["a"]});var ie=[{path:"/",alias:"/home",name:"home",component:K},{path:"/brokers",name:"brokers",component:rt},{path:"/watchlist",name:"watchlist",component:mt},{path:"/:symbol/singlePage",name:"singlePage",component:Nt},{path:"/portfolio",name:"portfolio",component:re}],ne=ie;r["a"].use(B["a"]);var oe=new B["a"]({routes:ne}),ce=a("bc3a");r["a"].config.productionTip=!1,new r["a"]({router:oe,store:T,vuetify:z,render:function(t){return t(V)},created:function(){var t=this;if(sessionStorage.redirect){var e=sessionStorage.redirect||location.href,a=e.split("#id_token=")[1],r=a.split("&access_token="),i=Object(s["a"])(r,2),n=i[0],o=i[1];o=o.split("&expires_in=")[0],this.$store.commit("addToken",{id_token:n,assess_token:o}),ce.get("https://stockfly.auth.us-east-2.amazoncognito.com/oauth2/userInfo",{headers:{Authorization:"Bearer ".concat(o)}}).then((function(e){var a=e.data;t.$store.commit("setUser",a),console.log(a.email),a.email&&t.$store.dispatch("getUserDetails",{email:a.email})}))}window.mobileCheck=function(){return window.innerWidth<=800&&window.innerHeight<=600}}}).$mount("#app")},8072:function(t,e,a){},8383:function(t,e,a){"use strict";var s=a("3776"),r=a.n(s);r.a},"8a23":function(t,e,a){},"8b71":function(t,e,a){"use strict";var s=a("ce77"),r=a.n(s);r.a},ce77:function(t,e,a){}});
//# sourceMappingURL=app.b91ac992.js.map