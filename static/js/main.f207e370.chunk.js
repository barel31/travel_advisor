(this.webpackJsonptravel_adviser=this.webpackJsonptravel_adviser||[]).push([[0],{110:function(e,t,a){e.exports=a(146)},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(88),i=a.n(l),c=a(2),s=a(186),o=a(184),u=a(30),m=a.n(u),p=a(72),d=a(73),g=a.n(d),f=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n){var r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://travel-advisor.p.rapidapi.com/".concat(t,"/list-in-boundary"),{params:{bl_latitude:a.lat,tr_latitude:n.lat,bl_longitude:a.lng,tr_longitude:n.lng},headers:{"X-RapidAPI-Host":"travel-advisor.p.rapidapi.com","X-RapidAPI-Key":"0f3e8c4c64msh59c9c779b48a874p160d7djsn336d6d35f15e"}});case 3:return r=e.sent,l=r.data.data,e.abrupt("return",l);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://community-open-weather-map.p.rapidapi.com/find",{method:"GET",url:"https://community-open-weather-map.p.rapidapi.com/weather",params:{lat:t,lon:a},headers:{"X-RapidAPI-Host":"community-open-weather-map.p.rapidapi.com","X-RapidAPI-Key":"0f3e8c4c64msh59c9c779b48a874p160d7djsn336d6d35f15e"}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),h=a(93),y=a(174),v=a(175),E=a(176),w=a(188),j=a(189),O=a(94),x=a.n(O),C=a(66),k=a(172),T=a(15),N=Object(k.a)((function(e){return{title:Object(C.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),I=function(e){var t=e.setCoordinates,a=N(),l=Object(n.useState)(null),i=Object(c.a)(l,2),s=i[0],o=i[1];return r.a.createElement("div",null,r.a.createElement(y.a,{position:"static"},r.a.createElement(v.a,{className:a.toolbar},r.a.createElement(E.a,{variant:"h5",className:a.title},"Travel Advisor"),r.a.createElement(w.a,{display:"flex"},r.a.createElement(E.a,{variant:"h6",className:a.title},"Explore new places"),r.a.createElement(h.a,{onLoad:function(e){return o(e)},onPlaceChanged:function(){var e=s.getPlace().geometry.location.lat(),a=s.getPlace().geometry.location.lng();t({lat:e,lng:a})}},r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(x.a,null)),r.a.createElement(j.a,{placeholder:"Search...",classes:{root:a.inputRoot,input:a.inputInput}})))))))},R=a(182),S=a(183),A=a(192),B=a(187),_=a(193),P=a(177),z=a(178),L=a(179),D=a(191),K=a(180),H=a(181),X=a(95),J=a.n(X),M=a(96),U=a.n(M),W=a(190),q=Object(k.a)((function(){return{chip:{margin:"5px 5px 5px 0"},subtitle:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px"},spacing:{display:"flex",alignItems:"center",justifyContent:"space-between"}}})),F=function(e){var t=e.place,a=e.selected,n=e.refProp,l=q();return a&&n&&n.current&&n.current.scrollIntoView({behavior:"smooth",block:"start"}),r.a.createElement("div",null,r.a.createElement(P.a,{elevation:6},r.a.createElement(z.a,{style:{height:350},image:t.photo?t.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",title:t.name}),r.a.createElement(L.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h5"},t.name),r.a.createElement(w.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(W.a,{value:Number(t.rating),readOnly:!0}),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},"ouf of ",t.num_reviews," reviews")),r.a.createElement(w.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(E.a,{variant:"subtitle1"},"Price"),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},t.price_level)),r.a.createElement(w.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(E.a,{variant:"subtitle1"},"Ranking"),r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},t.ranking)),t.awards?t.awards.map((function(e){return r.a.createElement(w.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.a.createElement("img",{my:1,src:e.images.small,alt:e.display_name}),r.a.createElement(E.a,{variant:"subtitle2",color:"textSecondary"},e.display_name))})):null,t.cuisine?t.cuisine.map((function(e){var t=e.name;return r.a.createElement(D.a,{key:t,size:"small",label:t,className:l.chip})})):null,t.address?r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2",color:"textSecondary",className:l.subtitle},r.a.createElement(J.a,null)," ",t.address):null,t.phone?r.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2",color:"textSecondary",className:l.spacing},r.a.createElement(U.a,null)," ",t.phone):null,r.a.createElement(K.a,null,r.a.createElement(H.a,{size:"small",color:"primary",onClick:function(){return window.open(t.web_url,"_blank")}},"Trip Advisor"),r.a.createElement(H.a,{size:"small",color:"primary",onClick:function(){return window.open(t.website,"_blank")}},"Website")))))},G=Object(k.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),V=function(e){var t=e.places,a=e.childClicked,l=e.isLoading,i=e.type,s=e.setType,u=e.rating,m=e.setRating,p=G(),d=Object(n.useState)([]),g=Object(c.a)(d,2),f=g[0],b=g[1];return Object(n.useEffect)((function(){if(t&&t.length){var e=Array(t.length).fill().map((function(e,t){return f[t]||Object(n.createRef)()}));b(e)}}),[t]),r.a.createElement("div",{className:p.container},r.a.createElement(E.a,{variant:"h4"},"Restaurants, Hotels & Attraction around you"),l?r.a.createElement("div",{className:p.loading},r.a.createElement(R.a,{size:"5rem"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{className:p.formControl},r.a.createElement(A.a,null,"Type"),r.a.createElement(B.a,{value:i,onChange:function(e){return s(e.target.value)}},r.a.createElement(_.a,{value:"restaurants"},"Restaurants"),r.a.createElement(_.a,{value:"hotels"},"Hotels"),r.a.createElement(_.a,{value:"attractions"},"Attractions"))),r.a.createElement(S.a,{className:p.formControl},r.a.createElement(A.a,null,"Rating"),r.a.createElement(B.a,{value:u,onChange:function(e){return m(e.target.value)}},r.a.createElement(_.a,{value:0},"All"),r.a.createElement(_.a,{value:3},"Above 3.0"),r.a.createElement(_.a,{value:4},"Above 4.0"),r.a.createElement(_.a,{value:4.5},"Above 4.5"))),r.a.createElement(o.a,{container:!0,spacing:3,className:p.list},t?t.map((function(e,t){return r.a.createElement(o.a,{ref:f[t],item:!0,key:t,xs:12},r.a.createElement(F,{place:e,selected:Number(a)===t,refProp:f[t]}))})):null)))},Y=a(99),Z=a(185),Q=a(101),$=a(98),ee=a.n($),te=Object(k.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",transform:"translate(-50%, -50%)",zIndex:1,"&:hover":{zIndex:2}},pointer:{cursor:"pointer"}}})),ae=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],ne=function(e){var t=e.setCoordinates,a=e.setBounds,n=e.coordinates,l=e.places,i=e.setChildClicked,c=e.weatherData,s=te(),o=Object(Z.a)("(min-width:600px)");return r.a.createElement("div",{className:s.mapContainer},r.a.createElement(Y.a,{bootstrapURLKeys:{key:"AIzaSyDcSM3aAma0qANK8xMfgx7-7ksPK0s-IjY"},defaultCenter:{lt:0,lng:0},center:n,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!0,zoomControl:!0,styles:ae},onChange:function(e){t({lat:e.center.lat,lng:e.center.lng}),a({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return i(e)}},l?l.map((function(e,t){return r.a.createElement("div",{className:s.markerContainer,lat:Number(e.latitude),lng:Number(e.longitude),key:t},o?r.a.createElement(Q.a,{elevation:3,className:s.paper},r.a.createElement(E.a,{className:s.typography,variant:"subtitle2",gutterBottom:!0},e.name),r.a.createElement("img",{className:s.pointer,src:e.photo?e.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",alt:e.name}),r.a.createElement(W.a,{size:"small",value:Number(e.rating),readOnly:!0})):r.a.createElement(ee.a,{color:"primary",fontSize:"large"}))})):null,c&&c.list?c.list.map((function(e,t){return r.a.createElement("div",{key:t,lat:e.coord.lat,lng:e.coord.lon},r.a.createElement("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")}))})):null))};var re=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)([]),u=Object(c.a)(i,2),m=u[0],p=u[1],d=Object(n.useState)([]),g=Object(c.a)(d,2),h=g[0],y=g[1],v=Object(n.useState)({lat:0,lng:0}),E=Object(c.a)(v,2),w=E[0],j=E[1],O=Object(n.useState)({}),x=Object(c.a)(O,2),C=x[0],k=x[1],T=Object(n.useState)(null),N=Object(c.a)(T,2),R=N[0],S=N[1],A=Object(n.useState)(!1),B=Object(c.a)(A,2),_=B[0],P=B[1],z=Object(n.useState)("restaurants"),L=Object(c.a)(z,2),D=L[0],K=L[1],H=Object(n.useState)(""),X=Object(c.a)(H,2),J=X[0],M=X[1];return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;j({lat:a,lng:n})}))}),[]),Object(n.useEffect)((function(){var e=a.filter((function(e){return e.rating>J}));y(e)}),[J]),Object(n.useEffect)((function(){C.sw&&C.ne&&(P(!0),b(w.lat,w.lng).then((function(e){return p(e)})),f(D,C.sw,C.ne).then((function(e){e&&l(e.filter((function(e){return e.name&&e.num_reviews>0}))),y([]),P(!1)})))}),[D,C]),r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement(I,{setCoordinates:j}),r.a.createElement(o.a,{container:!0,spacing:3,style:{width:"100%"}},r.a.createElement(o.a,{item:!0,xs:12,md:4},r.a.createElement(V,{places:h.length?h:a,childClicked:R,isLoading:_,type:D,setType:K,rating:J,setRating:M})),r.a.createElement(o.a,{item:!0,xs:12,md:8},r.a.createElement(ne,{setCoordinates:j,setBounds:k,coordinates:w,places:h.length?h:a,setChildClicked:S,weatherData:m}))))};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(re,null))}},[[110,1,2]]]);
//# sourceMappingURL=main.f207e370.chunk.js.map