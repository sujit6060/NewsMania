(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(23),s=n.n(a),i=(n(96),n(97),n(12)),j=n(60),d=n(167),l=n(169),b=n(170),o=n(171),h=n(82),u=n.n(h),x=n(162),O=n(161),p=n(159),f=n(160),g=n(163),w=n(165),m=n(31),v=n(157),y=n(166),A=n(164),C=n(81),F=n.n(C),I=n(61),T=n.n(I),k=n(77),P=n(32),S=n(78),E=n.n(S),L=Object(P.b)("news/getnews",Object(k.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=e6c6c106a5724f68b06c2398e87bdc2c");case 2:return t=e.sent,e.abrupt("return",t.data.articles);case 4:case"end":return e.stop()}}),e)})))),N=n(168),R=n(7),B=n(2);function J(){var e=Object(R.a)(x.a)((function(e){var t=e.theme;return Object(j.a)(Object(j.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),t=r.a.useState(!1),n=Object(i.a)(t,2),a=n[0],s=n[1],h=Object(m.b)(),C=Object(m.c)((function(e){return e.enews.news}));return Object(c.useEffect)((function(){h(L())}),[]),Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{style:{paddingTop:"30px",textAlign:"center"},children:Object(B.jsx)("h1",{children:"NEWS MANIA"})}),Object(B.jsxs)(g.a,{fixed:!0,style:{paddingTop:"50px"},children:[C.length>0?C[0].map((function(t,n){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(v.a,{expanded:"panel1"===a,onChange:(c="panel1",function(e,t){s(!!t&&c)}),children:[Object(B.jsxs)(A.a,{expandIcon:Object(B.jsx)(F.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(B.jsx)(p.a,{children:Object(B.jsx)(f.a,{alt:"Profile Picture",src:t.urlToImage})}),Object(B.jsx)(w.a,{sx:{width:"100%",flexShrink:0},children:t.title})]}),Object(B.jsx)(y.a,{children:Object(B.jsx)(d.a,{sx:{flexGrow:1},children:Object(B.jsxs)(O.a,{container:!0,spacing:2,children:[Object(B.jsx)(O.a,{item:!0,xs:8,children:Object(B.jsx)(e,{children:Object(B.jsx)("img",{style:{width:"100%",height:"100%"},src:t.urlToImage})})}),Object(B.jsxs)(O.a,{item:!0,xs:4,style:{width:"100%",height:"100%"},children:[Object(B.jsx)(w.a,{children:t.description}),Object(B.jsx)("br",{}),Object(B.jsxs)(w.a,{children:["Author : ",t.author]}),Object(B.jsx)("br",{}),Object(B.jsxs)(w.a,{children:["PublishAt : ",t.publishedAt]}),Object(B.jsx)("br",{}),Object(B.jsx)(N.a,{href:t.url,underline:"hover",target:"_blank",children:"Read full news.."})]})]})})})]}),Object(B.jsx)(l.a,{})]});var c})):"",Object(B.jsx)(x.a,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:Object(B.jsx)(b.a,{showLabels:!0,children:Object(B.jsx)(o.a,{label:"Recents News",icon:Object(B.jsx)(u.a,{})})})})]})]})}var D=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(J,{})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},K=Object(P.c)({name:"counter",initialState:{news:[]},reducers:{},extraReducers:function(e){e.addCase(L.fulfilled,(function(e,t){e.news.push(t.payload)})).addCase(L.pending,(function(e,t){}))}}).reducer,M=Object(P.a)({reducer:{enews:K}});s.a.render(Object(B.jsx)(m.a,{store:M,children:Object(B.jsx)(D,{})}),document.getElementById("root")),G()},96:function(e,t,n){},97:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.2adf8db4.chunk.js.map