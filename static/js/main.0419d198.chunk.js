(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(17),s=n.n(a),r=(n(26),n(27),n(9)),l=n(10),j=n(18),o=n(19),d=[{title:"Home",path:"/#about",cName:"nav-text"},{title:"Projects",path:"/projects",cName:"nav-text"},{title:"Services",path:"/services",cName:"nav-text"},{title:"About",path:"/#about",cName:"nav-text"}],b="Sarfaraj",u=(n(28),n(0)),h=n(1);var x=function(){var e,t=Object(c.useState)(!1),n=Object(r.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(-1),x=Object(r.a)(s,2),v=x[0],m=x[1];return Object(h.jsx)(u.b.Provider,{value:{color:"#fff"},children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"Navbar-cust nav-box-element",children:[Object(h.jsxs)("div",{className:"navbar-brand text-center",children:[Object(h.jsx)("div",{className:"clay-logo"}),Object(h.jsx)("div",{children:b})]}),Object(h.jsx)("div",{className:"toggle",children:Object(h.jsx)(l.b,{to:"#",id:"toggle-btn",onClick:function(){return a(!i)},className:i?"menu-bars toggles-nav-sm active":"menu-bars toggles-nav-sm",children:(e=i,e?Object(h.jsx)(o.a,{color:"rgb(177, 37, 13)"}):Object(h.jsx)(j.a,{color:"#f82c15"}))})}),Object(h.jsx)("div",{className:"nav-menu-lg",children:d.map((function(e,t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.b,{to:e.path,children:Object(h.jsx)("div",{className:t==v?" active":"menu-bars",onClick:function(){return m(t)},children:e.title})})})}))})]}),Object(h.jsx)("nav",{className:i?"nav-menu active":"nav-menu nav-menu-inactive",children:Object(h.jsx)("ul",{className:"nav-menu-items",children:d.map((function(e,t){return Object(h.jsx)("li",{className:e.cName,children:Object(h.jsx)(l.b,{to:e.path,className:i?"linkk":"svg",children:Object(h.jsx)("span",{id:"title",children:e.title})})},t)}))})})]})})},v=n(3),m=(n(35),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"herocontainer",children:[Object(h.jsxs)("div",{className:"hero",children:[Object(h.jsxs)("h1",{className:"intro",children:["Hi! I'm ",Object(h.jsx)("div",{children:"Sarfaraj Ansari"})]}),Object(h.jsx)("hr",{className:"hr-text","data-content":"AND"}),Object(h.jsx)("div",{className:"label",style:{textAlign:"center"},children:Object(h.jsxs)("h2",{children:["I ",Object(h.jsx)("div",{className:"sol"})," solutions to ",Object(h.jsx)("div",{className:"apps"})," web application"]})})]}),Object(h.jsx)("svg",{viewBox:"0 0 1320 500",children:Object(h.jsx)("path",{fillOpacity:"1",d:"\r M0,192\r C220,100,440,100,660,192\r C880,290,1100,290,1320,192\r L1320 500\r L0 500\r ",fill:" #e6dee9"})})]})})}),O=(n(36),n.p+"static/media/paper.c39836d2.png"),g=n(21);var p=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),s=Object(r.a)(a,2),l=s[0],j=s[1],o=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return e+1}))}}();function d(e,t){return{x:e*(window.innerWidth/100),y:t*(document.getElementsByClassName("paper-plane-animation")[0].offsetHeight/100),opacity:1}}return Object(c.useEffect)((function(){var e=window.innerWidth<=725?-10:0,t=[d(90+e,20),d(90+e,10),d(0,40),d(0,30),d(90+e,60),d(90+e,50),d(0,80),d(0,70)];t.forEach((function(e){e.title="",e.active=!1})),j(t),setInterval(o,10);var c=document.getElementById("paper-plane"),a=c.offsetParent,s=c.getBoundingClientRect(),r=s.y-a.getBoundingClientRect().y+s.height/2,b=c.getBoundingClientRect().x+s.width/2;i([{x:b,y:r,r:2}]),window.onscroll=function(){if(s=c.getBoundingClientRect(),r=s.y-a.getBoundingClientRect().y+s.height/2,b=c.getBoundingClientRect().x+s.width/2,0===n.filter((function(e){return e.x<=b+7&&e.x>=b-7&&e.y<=r+7&&e.y>=r-7})).length&&window.innerWidth>=725){var e=n;e.push({x:b,y:r,r:2}),i(e)}var o=0===l.length?t:l,d=window.innerWidth/24;o.forEach((function(e){e.x<=b+d&&e.y<=r+d&&(e.active=!0)})),j(o)}}),[]),Object(h.jsxs)("div",{id:"trigger-element",className:"paper-plane-animation",children:[Object(h.jsx)("img",{id:"paper-plane",className:"paper-plane",src:O,alt:"paperplane"}),Object(h.jsx)("svg",{className:"circle-svg",height:"100vh",width:"100vw",children:n.map((function(e){return Object(h.jsx)("circle",{cx:e.x,cy:e.y,r:e.r})}))}),Object(h.jsx)(h.Fragment,{children:l.map((function(e,t){return Object(h.jsx)("div",{className:e.active?"flag active flag"+String(t):"flag flag"+String(t),style:{position:"absolute",top:String(e.y)+"px",left:String(e.x)+"px"},children:Object(h.jsx)(g.a,{})})}))})]})};var f=function(){return Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{id:"App-grid",className:"App",children:[Object(h.jsxs)("div",{id:"header",children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{id:"banner-sm"})]}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)(m,{}),Object(h.jsx)(p,{}),Object(h.jsx)(v.b,{})]}),Object(h.jsx)("div",{id:"footer"})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.0419d198.chunk.js.map