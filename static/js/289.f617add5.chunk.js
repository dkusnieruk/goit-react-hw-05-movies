"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[289],{75:function(e,n,t){t.d(n,{Hc:function(){return o},VM:function(){return f},ZS:function(){return i},qw:function(){return l},rU:function(){return p}});var r=t(861),a=t(757),u=t.n(a),c=t(912),s="209b988e1e5a3c54f84bfbe290fdf3e2";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/popular?api_key=".concat(s,"&language=en-US&page=1"),e.next=3,c.Z.get(n);case 3:return t=e.sent,e.next=6,t.data.results;case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,c.Z.get(t);case 3:return r=e.sent,e.next=6,r.data.cast;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,c.Z.get(t);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),e.next=3,c.Z.get(t);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"),e.next=3,c.Z.get(t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},289:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(439),a=t(791),u=t(689),c=t(75),s="review_list__wyFFK",i="review_author__Idjne",o="review_review__igvdn",p=t(184),f=function(){var e=(0,u.UO)().moviesId,n=(0,a.useState)(""),t=(0,r.Z)(n,2),f=t[0],l=t[1];return(0,a.useEffect)((function(){(0,c.rU)(e).then((function(e){l(e)}))}),[]),(0,p.jsx)("ul",{className:s,children:f.length>0&&f.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{className:i,children:["Author : ",e.author]}),(0,p.jsxs)("p",{className:o,children:["Review : ",e.content]})]})},e.id)}))})}}}]);
//# sourceMappingURL=289.f617add5.chunk.js.map