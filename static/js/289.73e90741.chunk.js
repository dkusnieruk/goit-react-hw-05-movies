"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[289],{75:function(e,n,t){t.d(n,{Hc:function(){return p},VM:function(){return l},ZS:function(){return o},qw:function(){return v},rU:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(912),s="209b988e1e5a3c54f84bfbe290fdf3e2";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=u.Z.defaults.baseURL,o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"/movie/popular?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,u.Z.get(n);case 3:return t=e.sent,e.next=6,t.data.results;case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data.cast;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},289:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(439),a=t(791),c=t(689),u=t(75),s="review_list__wyFFK",i="review_author__Idjne",o="review_review__igvdn",p=t(184),f=function(){var e=(0,c.UO)().moviesId,n=(0,a.useState)(""),t=(0,r.Z)(n,2),f=t[0],l=t[1];return(0,a.useEffect)((function(){(0,u.rU)(e).then((function(e){l(e)}))}),[]),(0,p.jsx)("ul",{className:s,children:f.length>0&&f.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{className:i,children:["Author : ",e.author]}),(0,p.jsxs)("p",{className:o,children:["Review : ",e.content]})]})},e.id)}))})}}}]);
//# sourceMappingURL=289.73e90741.chunk.js.map