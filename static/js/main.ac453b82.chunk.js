(this.webpackJsonpdon=this.webpackJsonpdon||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(1),r=n.n(c),i=n(12),s=n.n(i),l=n(45),o=(n(134),n(34)),j=n(14),d=(n(135),n(20)),b=n(35),h=n(5),u=n(215),O=n(227),x=n(219),p=n(213),g=n(214),m=n(218),f=n(86),v=n(221),y=n(110),P=n(120),N=n.n(P),S=n(121),w=n.n(S),C=n(11),B=n(225),k=n(206),L=n(208),R=n(209),W=n(229),I=n(97),E=n(210),A=n(211),F=n(230),T=n(224),M=n(98),q=n.n(M),D=n(114),z=Object(c.createContext)(),G=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)([]),l=Object(d.a)(s,2),o=l[0],j=l[1],b=Object(c.useState)([]),h=Object(d.a)(b,2),u=h[0],O=h[1];return Object(a.jsx)(z.Provider,{value:{SelectedPlayers:o,setSelectedPlayers:j,Players:r,setPlayers:i,SearchPlayers:u,setSearchPlayers:O},children:e.children})};function H(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function J(e,t){return"desc"===e?function(e,n){return H(e,n,t)}:function(e,n){return-H(e,n,t)}}var U=function(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))},V=function(e){var t=e.order,n=e.orderBy,c=e.onRequestSort,r=function(e){return function(t){c(t,e)}},i=Y();return Object(a.jsx)(k.a,{children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(R.a,{align:"center",className:i.title,children:"SELECT"}),Object(a.jsx)(R.a,{align:"center",className:i.title,children:"PLAYER NAME"}),Object(a.jsx)(R.a,{align:"center",className:i.title,children:"LEVEL"}),Object(a.jsx)(R.a,{align:"center",className:i.title,children:"AVATAR"}),Object(a.jsx)(R.a,{align:"center",sortDirection:"Bet"===n&&t,className:i.title,children:Object(a.jsx)(W.a,{active:"Bet"===n,direction:"Bet"===n?t:"asc",onClick:r("Bet"),children:"BET"})}),Object(a.jsx)(R.a,{align:"center",className:i.title,children:"WINS"}),Object(a.jsx)(R.a,{align:"center",className:i.title,children:"LOST"}),Object(a.jsx)(R.a,{align:"center",sortDirection:"Price"===n&&t,className:i.title,children:Object(a.jsx)(W.a,{active:"Price"===n,direction:"Price"===n?t:"asc",onClick:r("Price"),children:"PRICE"})})]})})},Q=function(){var e=X(),t=Object(c.useState)("asc"),n=Object(d.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(""),l=Object(d.a)(s,2),o=l[0],j=l[1],b=Object(c.useState)(0),h=Object(d.a)(b,2),u=h[0],O=h[1],x=Object(c.useState)(10),p=Object(d.a)(x,1)[0],g=Object(c.useContext)(z),m=g.Players,f=g.SelectedPlayers,v=g.setSelectedPlayers;return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(I.a,{className:e.paper,children:[Object(a.jsxs)(E.a,{className:e.table,"aria-labelledby":"tableTitle","aria-label":"enhanced table",children:[Object(a.jsx)(V,{classes:e,order:r,orderBy:o,onRequestSort:function(e,t){i(o===t&&"asc"===r?"desc":"asc"),j(t)}}),Object(a.jsx)(A.a,{children:m?U(m,J(r,o)).slice(u*p,u*p+p).map((function(e,t){var n,c=(n=e.Name,-1!==f.indexOf(n)),r="enhanced-table-checkbox-".concat(t);return Object(a.jsxs)(L.a,{hover:!0,onClick:function(t){return function(e,t){var n=f.indexOf(t),a=[];-1===n?a=a.concat(f,t):0===n?a=a.concat(f.slice(1)):n===f.length-1?a=a.concat(f.slice(0,-1)):n>0&&(a=a.concat(f.slice(0,n),f.slice(n+1))),v(a)}(0,e.Name)},role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[Object(a.jsx)(R.a,{padding:"checkbox",children:Object(a.jsx)(B.a,{checked:c,inputProps:{"aria-labelledby":r}})}),Object(a.jsx)(R.a,{component:"th",id:r,scope:"row",padding:"none",align:"center",children:e.Name}),Object(a.jsx)(R.a,{align:"center",children:e.Level}),Object(a.jsx)(R.a,{align:"center",children:Object(a.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(a.jsx)(F.a,{alt:"Remy Sharp",src:e["Profile Image"]})})}),Object(a.jsx)(R.a,{align:"center",children:e.Bet}),Object(a.jsx)(R.a,{align:"center",children:e.Wins}),Object(a.jsx)(R.a,{align:"center",children:e.Loss}),Object(a.jsx)(R.a,{align:"center",children:e.Price})]},e.Name)})):Object(a.jsx)("div",{})})]}),Object(a.jsx)(T.a,{rowsPerPageOptions:[],labelRowsPerPage:"",component:"div",count:m.length,rowsPerPage:p,page:u,onChangePage:function(e,t){O(t)}})]})})},X=Object(u.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(0)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),Y=Object(u.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(C.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),K=n(118),Z=n.n(K),$=n(119),_=n(220),ee=n(222),te=n(212),ne=n(217),ae=n(216),ce=n(83),re=n(84),ie=n(85),se=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},sub:{direction:"flex"}}}));function le(e){var t=e.Name,n=e.Avtr,c=e.Wins,r=e.Bet,i=e.Price,s=se();return Object(a.jsxs)(te.a,{className:s.root,children:[Object(a.jsx)(ae.a,{children:Object(a.jsx)(F.a,{alt:"Remy Sharp",src:n})}),Object(a.jsxs)(ne.a,{children:[Object(a.jsx)(f.a,{variant:"h6",children:t}),Object(a.jsxs)(f.a,{variant:"caption",className:s.sub,children:[Object(a.jsxs)("div",{style:{display:"inline",marginRight:20},children:[Object(a.jsx)(ce.a,{})," ",c]}),Object(a.jsxs)("div",{style:{display:"inline",marginRight:20},children:[Object(a.jsx)(re.a,{})," ",r]}),Object(a.jsxs)("div",{style:{display:"inline",marginRight:20},children:[Object(a.jsx)(ie.a,{})," ",i]})]})]})]})}var oe=300,je=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),fontFamily:"'Roboto', 'sans-serif'"},appBarShift:{marginLeft:oe,width:"calc(100% - ".concat(oe,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:oe,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:oe,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(b.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},title:{margin:"auto ",fontFamily:"'Balsamiq Sans'"}}}));function de(e){var t,n,i=Object($.useMediaQuery)({query:"(max-device-width: 1224px)"}),s=je(),o=r.a.useState(!i),j=Object(d.a)(o,2),u=j[0],P=j[1],S=Object(c.useContext)(z),C=S.SelectedPlayers,B=S.setPlayers,k=S.SearchPlayers,L=Object(c.useState)(""),R=Object(d.a)(L,2),W=R[0],I=R[1];return Object(a.jsxs)("div",{className:s.root,children:[Object(a.jsx)(m.a,{}),Object(a.jsx)(x.a,{position:"fixed",className:Object(h.a)(s.appBar,Object(b.a)({},s.appBarShift,u)),children:Object(a.jsxs)(p.a,{variant:"regular",children:[Object(a.jsx)(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){P(!0)},edge:"start",className:Object(h.a)(s.menuButton,Object(b.a)({},s.hide,u)),children:Object(a.jsx)(N.a,{})}),Object(a.jsx)(Z.a,{value:W,onChange:function(e){return function(e){var t=k.filter((function(t){var n="".concat(t.Name.toUpperCase()),a=e.toUpperCase();return n.indexOf(a)>-1}));I(e),B(t)}(e)},onCancelSearch:function(){return B(k)}}),Object(a.jsxs)(f.a,{variant:"h5",className:s.title,children:["Players Seleceted  :  ",C.length]}),Object(a.jsx)(l.b,{to:"/Page2",style:{textDecoration:"none"},children:Object(a.jsx)(_.a,{variant:"contained",color:"secondary",disableElevation:!0,children:Object(a.jsx)(f.a,{className:s.title,children:"Start"})})})]})}),Object(a.jsxs)(O.a,{variant:"permanent",className:Object(h.a)(s.drawer,(t={},Object(b.a)(t,s.drawerOpen,u),Object(b.a)(t,s.drawerClose,!u),t)),classes:{paper:Object(h.a)((n={},Object(b.a)(n,s.drawerOpen,u),Object(b.a)(n,s.drawerClose,!u),n))},children:[Object(a.jsxs)("div",{className:s.toolbar,children:[Object(a.jsx)(f.a,{variant:"h5",align:"center",children:"Selected Players"}),Object(a.jsx)(y.a,{onClick:function(){P(!1)},children:Object(a.jsx)(w.a,{})})]}),Object(a.jsx)(v.a,{}),Object(a.jsx)(g.a,{children:C.map((function(e,t){var n=k.find((function(t){if(t.Name===e)return t}));return Object(a.jsx)(le,{Avtr:n["Profile Image"],Name:n.Name,Wins:n.Wins,Bet:n.Bet,Price:n.Price},t)}))})]}),Object(a.jsx)("main",{className:s.content,children:Object(a.jsxs)(ee.a,{children:[Object(a.jsx)("div",{className:s.toolbar}),e.children]})})]})}var be=function(){return Object(a.jsx)(de,{children:Object(a.jsx)(Q,{})})},he=n(228),ue=n(223);function Oe(e){var t=e.Img,n=e.Name,c=e.Bet,r=e.Price,i=e.Wins,s=e.color,l=(e.RandomNumber,"success"==s?"green":"red");return Object(a.jsx)(he.a,{border:s,style:{padding:"auto",borderWidth:3},children:Object(a.jsxs)(ue.a,{style:{padding:"10px"},children:[Object(a.jsx)("img",{width:102,height:102,className:" mr-3",src:t,alt:"Generic placeholder"}),Object(a.jsxs)(ue.a.Body,{children:[Object(a.jsx)("h5",{children:n}),Object(a.jsxs)("div",{style:{display:"inline",marginRight:20},children:[Object(a.jsx)(ce.a,{})," ",i]}),Object(a.jsxs)("div",{style:{display:"inline",marginRight:20},children:[Object(a.jsx)(re.a,{})," ",c]}),Object(a.jsxs)("div",{style:{display:"inline",marginRight:20},children:[Object(a.jsx)(ie.a,{})," ",r]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h6",{style:{color:"".concat(l)},children:"success"==s?"Winner":"Loser"})]})]})})}var xe=Object(u.a)({title:{margin:"auto ",fontFamily:"'Balsamiq Sans'"}}),pe=function(){var e=Object(c.useContext)(z),t=e.SelectedPlayers,n=e.SearchPlayers,r=e.Players,i=e.setPlayers,s=Object(c.useState)(Math.floor(9*Math.random())+1),j=Object(d.a)(s,2),b=j[0],h=j[1],u=xe();return Object(a.jsxs)("div",{style:{minHeight:"100vh",padding:"10px"},children:[Object(a.jsx)("div",{onClick:function(){return h(Math.floor(9*Math.random())+1)},className:"RandomNumber",children:b}),Object(a.jsx)(v.a,{}),Object(a.jsx)("div",{className:"Cards-Container",children:t.map((function(e,t){var c=n.find((function(t,n){if(t.Name===e)return t})),s=r.findIndex((function(t){return t.Name===e}));return c.Bet==b?function(e,t){var n=Object(o.a)(Object(o.a)({},e),{},{Level:e.Level+1,Wins:e.Wins+1,Price:2*e.Price}),a=r;a[t]=n,i(a)}(c,s):function(e,t){var n=Object(o.a)(Object(o.a)({},e),{},{Level:e.Level>0?e.Level-1:0,Loss:e.Loss+1}),a=r;a[t]=n,i(a)}(c,s),Object(a.jsx)(Oe,{Img:c["Profile Image"],Name:c.Name,Wins:c.Wins,Bet:c.Bet,Price:c.Price,color:c.Bet==b?"success":"danger",RandomNumber:b},t)}))}),Object(a.jsx)(l.b,{to:"/Page1",style:{textDecoration:"none"},children:Object(a.jsx)(_.a,{variant:"contained",color:"primary",children:Object(a.jsx)(f.a,{className:u.title,children:"Back"})})})]})};n(173);var ge=function(){var e=Object(c.useContext)(z),t=e.setPlayers,n=e.setSearchPlayers,i=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),a=n[0],i=n[1];return r.a.useEffect((function(){!function(){var t=Object(D.a)(q.a.mark((function t(){var n,a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,i(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),a}("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json");return Object(c.useEffect)((function(){!function(){if(i){var e=i.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{Price:Number(e.Price),Level:0,Wins:0,Loss:0})}));t(e),n(e)}}()}),[i]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j.a,{to:{pathname:"/Page1",state:{from:"/"}}}),Object(a.jsx)(j.b,{exact:!0,path:"/Page1",component:be}),Object(a.jsx)(j.b,{exact:!0,path:"/Page2",component:pe})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(G,{children:Object(a.jsx)(ge,{})})}),document.getElementById("root")),me()}},[[174,1,2]]]);
//# sourceMappingURL=main.ac453b82.chunk.js.map