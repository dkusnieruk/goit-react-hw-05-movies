"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[649],{75:function(e,t,n){n.d(t,{Hc:function(){return o},VM:function(){return f},ZS:function(){return u},qw:function(){return p},rU:function(){return l}});var r=n(861),a=n(757),s=n.n(a),c=n(912),i="209b988e1e5a3c54f84bfbe290fdf3e2";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/popular?api_key=".concat(i,"&language=en-US&page=1"),e.next=3,c.Z.get(t);case 3:return n=e.sent,e.next=6,n.data.results;case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"),e.next=3,c.Z.get(n);case 3:return r=e.sent,e.next=6,r.data.cast;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),e.next=3,c.Z.get(n);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.next=3,c.Z.get(n);case 3:return r=e.sent,e.next=6,r.data.results;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"),e.next=3,c.Z.get(n);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},649:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(439),a=n(791),s=n(87),c=n(689),i=n(75),u="singleMovie_image__5eQE8",o="singleMovie_movie__oIhEw",l="singleMovie_title__Zh6MI",f="singleMovie_score__38ZzP",p="singleMovie_subTitle__9ntv-",v="singleMovie_content__TWCKo",d="singleMovie_contentGenre__UAOZj",h="singleMovie_genresList__hJI-H",m="singleMovie_back__58Kld",_=n(184),g=function(){var e=(0,c.UO)().moviesId,t=(0,a.useState)(""),n=(0,r.Z)(t,2),g=n[0],x=n[1],w=(0,c.TH)();return(0,a.useEffect)((function(){(0,i.qw)(e).then((function(e){x(e)}))}),[x]),(0,_.jsx)(_.Fragment,{children:g&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s.rU,{className:m,to:w.state?w.state.from:"/goit-react-hw-05-movies/",state:{from:w},children:"Go Back"}),(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500/".concat(g.poster_path),alt:g.title}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h1",{className:l,children:g.title}),(0,_.jsxs)("h2",{className:f,children:["User score: ",(g.vote_average/10*100).toFixed(2)," ","%"," "]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{className:p,children:"Overview:"}),(0,_.jsx)("p",{className:v,children:g.overview})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{className:p,children:"Genres:"}),(0,_.jsx)("div",{className:h,children:g.genres.map((function(e){return(0,_.jsx)("p",{className:d,children:e.name},e.id)}))})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{className:p,children:"Additional Information:"}),(0,_.jsx)(s.rU,{className:d,state:{from:w.state.from},to:"cast",children:"Cast"}),(0,_.jsx)(s.rU,{className:d,state:{from:w.state.from},to:"reviews",children:"Reviews"})]}),(0,_.jsx)("section",{children:(0,_.jsx)(c.j3,{})})]})]})]})})}}}]);
//# sourceMappingURL=649.c53ddccf.chunk.js.map