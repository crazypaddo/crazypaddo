(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[2],{78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(15),r=n.n(a),i=n(14),l=n(16),o=n.n(l),j=n(37),b=n(13),h=n(7),d=n(40),u=s.a.lazy((function(){return Promise.all([n.e(1),n.e(15),n.e(13)]).then(n.bind(null,103))})),x=s.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(5)]).then(n.bind(null,104))})),O=s.a.lazy((function(){return n.e(10).then(n.bind(null,96))})),f=s.a.lazy((function(){return n.e(11).then(n.bind(null,97))})),m=s.a.lazy((function(){return n.e(8).then(n.bind(null,98))})),p=s.a.lazy((function(){return n.e(12).then(n.bind(null,99))})),g=s.a.lazy((function(){return n.e(7).then(n.bind(null,100))})),y=s.a.lazy((function(){return Promise.all([n.e(0),n.e(16),n.e(14)]).then(n.bind(null,105))})),v=[{path:"/",exact:!0,name:"Groups",component:u},{path:"/groups",exact:!0,name:"Groups",component:u},{path:"/lights",exact:!0,name:"Lights",component:x},{path:"/linkbutton",exact:!0,name:"LinkButton",component:O},{path:"/mqtt",exact:!0,name:"MQTT",component:f},{path:"/deconz",exact:!0,name:"Deconz",component:m},{path:"/alarm",exact:!0,name:"Alarm",component:g},{path:"/bridge",exact:!0,name:"Bridge",component:s.a.lazy((function(){return n.e(6).then(n.bind(null,101))}))},{path:"/devices",exact:!0,name:"Devices",component:y},{path:"/hue",exact:!0,name:"Hue Bridge",component:s.a.lazy((function(){return n.e(9).then(n.bind(null,102))}))},{path:"/tradfri",exact:!0,name:"Tradfri",component:p}],k=n(6),F=Object(k.jsx)("div",{className:"pt-3 text-center",children:Object(k.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),A=function(e){var t=e.API_KEY;return Object(k.jsx)("main",{className:"container",children:Object(k.jsx)(c.Suspense,{fallback:F,children:Object(k.jsx)(b.a,{children:Object(k.jsxs)(h.d,{children:[v.map((function(e,n){return e.component&&Object(k.jsx)(h.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(k.jsx)(d.d,{children:Object(k.jsx)(e.component,{API_KEY:t})})}},n)})),Object(k.jsx)(h.a,{from:"/",to:"/groups"})]})})})})},N=s.a.memo(A),S=n(9),z=n.p+"static/media/logo.f4d77638.svg",E=function(e){var t=e.showSidebar,n=e.setShowSidebar,s=e.API_KEY,a=Object(c.useState)(!1),r=Object(i.a)(a,2),l=r[0],j=r[1];Object(c.useEffect)((function(){b();var e=setInterval((function(){b()}),5e3);return function(){return clearInterval(e)}}),[s]);var b=function(){void 0!==s&&o.a.get("/api/".concat(s,"/groups/0")).then((function(e){console.log(e.data),j(e.data.state.any_on)})).catch((function(e){console.error(e)}))};return Object(k.jsxs)("div",{className:"topbar",children:[Object(k.jsx)("img",{src:z,alt:"diyHue Logo"}),Object(k.jsxs)("button",{type:"button",id:"sidebarCollapse",className:"sidebarToggle",onClick:function(){return n(!t)},children:[Object(k.jsx)(S.a,{}),Object(k.jsx)("span",{})]}),Object(k.jsxs)("div",{className:"switchContainer",children:[Object(k.jsxs)("p",{children:["Turn all ",l?"off":"on"]}),Object(k.jsxs)("label",{className:"switch",children:[Object(k.jsx)("input",{type:"checkbox",value:l,checked:l,onChange:function(e){return function(e){var t={on:e};j(e),console.log("Apply state "+JSON.stringify(t)),o.a.put("/api/".concat(s,"/groups/0/action"),t)}(e.target.checked)}}),Object(k.jsx)("span",{className:"slider"})]})]}),Object(k.jsx)("div",{className:"groupToggle",children:Object(k.jsx)("i",{onClick:"toggleLights(this)",className:"fas fa-couch"})})]})},I=n(39),P=function(e){var t=e.showSidebar;return Object(k.jsx)("div",{className:"sidebar ".concat(t?"":"active"),children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{className:"iconBox"}),Object(k.jsx)("a",{href:"#home",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.i,{style:{color:"#0092FF"}})," Home"]})}),Object(k.jsx)("a",{href:"#lights",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.k,{style:{color:"#FF9E00"}})," Lights"]})}),Object(k.jsx)("a",{href:"#linkbutton",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.l,{style:{color:"#FF92FF"}})," Link Button"]})}),Object(k.jsx)("a",{href:"#bridge",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.g,{style:{color:"#92FFFF"}})," Bridge"]})}),Object(k.jsx)("a",{href:"#devices",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.b,{style:{color:"#764600"}})," Devices"]})}),Object(k.jsx)("a",{href:"#deconz",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.g,{style:{color:"#42A138"}})," Deconz"]})}),Object(k.jsx)("a",{href:"#tradfri",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(I.a,{style:{color:"#CCA138"}})," Tradfri"]})}),Object(k.jsx)("a",{href:"#hue",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.j,{style:{color:"#8400FF"}})," Hue Bridge"]})}),Object(k.jsx)("a",{href:"#MQTT",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.g,{style:{color:"#0084FF"}})," MQTT"]})}),Object(k.jsx)("a",{href:"#alarm",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.h,{style:{color:"#AE2D00"}})," Alarm"]})}),Object(k.jsx)("a",{href:"#settings",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.e,{style:{color:"#8B00FF"}})," Settings"]})}),Object(k.jsx)("a",{href:"/logout",children:Object(k.jsxs)("li",{children:[Object(k.jsx)(S.o,{style:{color:"#fff"}})," Logout"]})})]})})},w=s.a.memo(P),T=function(e){var t=e.API_KEY,n=Object(j.useMediaQuery)({query:"(max-width: 760px)"}),s=Object(c.useState)(!n),a=Object(i.a)(s,2),r=a[0],l=a[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(E,{API_KEY:t,showSidebar:r,setShowSidebar:l}),Object(k.jsx)(w,{showSidebar:r}),Object(k.jsx)(N,{API_KEY:t})]})},_=(n(78),Object(k.jsx)("div",{className:"pt-3 text-center",children:Object(k.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})})),B=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){o.a.get("/get-key").then((function(e){"string"===typeof e.data&&32===e.data.length?(console.log("API_KEY from API: ".concat(e.data)),a(e.data)):console.log("Unable to fetch API_KEY!")})).catch((function(e){console.error(e)}))}),[]),Object(k.jsx)(s.a.Suspense,{fallback:_,children:Object(k.jsx)("div",{className:"flexContainer",children:Object(k.jsx)(T,{API_KEY:n})})})};r.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root"))}},[[79,3,4]]]);
//# sourceMappingURL=main.9d9dd227.chunk.js.map