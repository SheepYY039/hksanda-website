(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00cb":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),i=Object(c["k"])("h1",null,"傳媒專訪",-1),a={key:0},b=["src","alt"],r={key:1};function u(e,t,n,u,l,j){var o=Object(c["M"])("Button"),O=Object(c["M"])("Card"),s=Object(c["M"])("Timeline");return Object(c["E"])(),Object(c["j"])(c["b"],null,[i,Object(c["o"])(s,{value:e.getInterviews,align:"left"},{content:Object(c["X"])((function(e){var t=e.item;return[Object(c["o"])(O,null,{title:Object(c["X"])((function(){return[Object(c["n"])(Object(c["Q"])(t.title)+" - "+Object(c["Q"])(t.company),1)]})),subtitle:Object(c["X"])((function(){return[Object(c["n"])(Object(c["Q"])(j.moment(t.publishedDate).format("L")),1)]})),content:Object(c["X"])((function(){return[t.images.length>0?(Object(c["E"])(),Object(c["j"])("div",a,[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["K"])(t.images,(function(e){return Object(c["E"])(),Object(c["j"])("img",{key:e.imageUrl,src:e.imageUrl,alt:e.alt,class:"img-fluid"},null,8,b)})),128))])):Object(c["i"])("",!0),t.content?(Object(c["E"])(),Object(c["j"])("p",r,Object(c["Q"])(t.content),1)):Object(c["i"])("",!0),t.url?(Object(c["E"])(),Object(c["h"])(o,{key:2,label:"Read more",class:"p-button-text"})):Object(c["i"])("",!0)]})),_:2},1024)]})),_:1},8,["value"])],64)}var l,j,o=n("213a"),O=n("c1df"),s=n.n(O),m=n("8785"),w=n("5184"),d=(Object(w["a"])(l||(l=Object(m["a"])(["\n    mutation addInterviewMutation($files: [Upload]) {\n        addInterview(interview: interviewInput) {\n            company\n            id\n            publishedDate\n            images {\n                imageUrl\n                alt\n            }\n            title\n            url\n        }\n    }\n"]))),Object(w["a"])(j||(j=Object(m["a"])(["\n    query getInterviewsQuery {\n        getInterviews {\n            id\n            company\n            title\n            images {\n                imageUrl\n                alt\n            }\n            url\n            publishedDate\n        }\n    }\n"])))),f={name:"MediaInterviewsView",setup:function(){Object(o["c"])({title:"傳媒專訪"})},apollo:{getInterviews:{query:d}},methods:{moment:s.a}},v=(n("8c6f"),n("b9a6")),p=n.n(v);const g=p()(f,[["render",u]]);t["default"]=g},"8c6f":function(e,t,n){"use strict";n("c4c3")},b651:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function i(e,t,n,i,a,b){var r=Object(c["M"])("render-view");return Object(c["E"])(),Object(c["h"])(r,{view:b.view},null,8,["view"])}var a=n("5530"),b=n("213a"),r=n("5502"),u=n("806f"),l={name:"BylawsView",components:{RenderView:u["a"]},setup:function(){Object(b["c"])({title:"本會章程"})},computed:Object(a["a"])(Object(a["a"])({},Object(r["c"])(["getViewByRoute"])),{},{view:function(){return this.getViewByRoute("/about/bylaws")}})},j=n("b9a6"),o=n.n(j);const O=o()(l,[["render",i]]);t["default"]=O},c4c3:function(e,t,n){}}]);
//# sourceMappingURL=about.ec145f30.js.map