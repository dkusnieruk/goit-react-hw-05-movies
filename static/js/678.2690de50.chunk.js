"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[678],{75:function(e,t,n){n.d(t,{Hc:function(){return o},VM:function(){return f},ZS:function(){return i},qw:function(){return l},rU:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(912),s="209b988e1e5a3c54f84bfbe290fdf3e2";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/popular?api_key=".concat(s,"&language=en-US&page=1"),e.next=3,u.Z.get(t);case 3:return n=e.sent,e.next=6,n.data.results;case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.next=6,r.data.cast;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},678:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),a=n(791),c=n(689),u=n(75),s="cast_image__e+dCu",i="cast_list__r9g9p",o=n(184),p=function(){var e=(0,c.UO)().moviesId,t=(0,a.useState)(""),n=(0,r.Z)(t,2),p=n[0],f=n[1];return(0,a.useEffect)((function(){(0,u.Hc)(e).then((function(e){f(e)}))}),[]),(0,o.jsx)("ul",{className:i,children:p.length>0&&p.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Actor : ",e.name]}),(0,o.jsxs)("p",{children:["Character : ",e.character]})]})]})},e.id)}))})}}}]);
//# sourceMappingURL=678.2690de50.chunk.js.map