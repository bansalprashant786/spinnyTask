(this.webpackJsonpspinny_task=this.webpackJsonpspinny_task||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(6),u=a(2),s=a(13),i=a(10),d=a(1),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"naruto",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://api.jikan.moe/v3/search/anime?q=".concat(e,"&limit=16&page=").concat(t))},p={data:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUCCESS":return console.log("payload",t.payload),e=Object(d.a)(Object(d.a)({},e),{},{data:t.payload.results,error:!1});case"FETCH_FAIL":return e=Object(d.a)(Object(d.a)({},e),{},{error:!0});case"LOAD_MORE_SUCCESS":return e=Object(d.a)(Object(d.a)({},e),{},{data:[].concat(Object(i.a)(e.data),Object(i.a)(t.payload.results)),loadMoreError:!1});case"LOAD_MORE_FAIL":return e=Object(d.a)(Object(d.a)({},e),{},{loadMoreError:!0});default:return e}},E=Object(u.c)(m,Object(u.a)(s.a));E.subscribe((function(){console.log(E.getState())}));var h=E,b=a(14),O=function(e){var t=e.cardData;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"cardwrapper"},r.a.createElement("img",{src:t.image_url,alt:t.title}),r.a.createElement("p",null,t.title)))},y=(a(26),1),C=Object(l.b)((function(e){return{cardsInfo:e.data}}),{fetchCards:function(e,t){return function(a){return new Promise((function(n,r){f(e,t).then((function(e){return e.json()})).then((function(e){n(a({type:"FETCH_SUCCESS",payload:e}))})).catch((function(e){r(a({type:"FETCH_FAIL",payload:e}))}))}))}},loadMoreCards:function(e,t){return function(a){return new Promise((function(n,r){f(e,t).then((function(e){return e.json()})).then((function(e){n(a({type:"LOAD_MORE_SUCCESS",payload:e}))})).catch((function(e){r(a({type:"LOAD_MORE_FAIL",payload:e}))}))}))}}})((function(e){var t=e.fetchCards,a=e.cardsInfo,c=e.loadMoreCards,o=Object(n.useState)(""),l=Object(b.a)(o,2),u=l[0],s=l[1],i=function(){t(u,y)};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"flex"},r.a.createElement("input",{type:"text",className:"wfull",placeholder:"search",onChange:function(e){s(e.target.value)},value:u,onKeyPress:function(e){"Enter"===e.key&&i()}}),r.a.createElement("button",{onClick:i},"Go")),r.a.createElement("div",{className:"flex flexWrap flexStart pt100"},a.map((function(e){return r.a.createElement(O,{cardData:e,key:e.mal_id})}))),a.length?r.a.createElement("div",{className:"flex justifyCenter"},r.a.createElement("button",{className:"load-more-btn",onClick:function(){c(u,y+=1)}},"Load More")):null)}));o.a.render(r.a.createElement(l.a,{store:h},r.a.createElement(C,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.407d161b.chunk.js.map