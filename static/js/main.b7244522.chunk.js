(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(59),s=a.n(c),o=(a(93),a(6)),r=(a(94),a(95),a(111)),i=a(113),m=a(67),d=a.n(m),u=a(65),p=a.n(u),g=a(66),E=a.n(g),f=a(62),h=a.n(f),v=a(72),N=a.n(v),b=a(68),y=a.n(b),x=a(70),w=a.n(x),C=a(69),k=a.n(C),O=a(71),L=a.n(O),S=function(e){return l.a.createElement("div",{className:"post"},l.a.createElement("div",{className:"postPop"},l.a.createElement("form",{onSubmit:e.submitPost},l.a.createElement("div",{className:"postHeading"},l.a.createElement("div",{className:"postHeadingleft"},l.a.createElement(h.a,null)," ",l.a.createElement("a",{href:"#",className:"heading"}," Compose Post ")),l.a.createElement("div",{className:"postHeadingleft"},l.a.createElement(p.a,null)," ",l.a.createElement("a",{href:"#",className:"heading"}," Photo/Video Album ")),l.a.createElement("div",{className:"postHeadingleft"},l.a.createElement(E.a,null)," ",l.a.createElement("a",{href:"#",className:"heading"}," Live Video ")),l.a.createElement("div",{className:"postHeadingRight"},l.a.createElement(r.a,null," ",l.a.createElement(d.a,null)," "))),l.a.createElement("div",{className:"postTop"},l.a.createElement(i.a,null)),l.a.createElement("div",{className:"postBody"},l.a.createElement("textarea",{rows:"3",placeholder:"Write something here... ",onChange:e.handleTextarea})),l.a.createElement("div",{className:"postBottom"},l.a.createElement("div",{className:"postBottomLeft"},l.a.createElement("div",{className:"leftOption"},l.a.createElement(y.a,{style:{color:"blue",width:"20px"}}),l.a.createElement("button",{className:"post-button",type:"button"},"Tag friends")),l.a.createElement("div",{className:"leftOption"},l.a.createElement(k.a,{style:{color:"grey",width:"20px"}}),l.a.createElement("button",{className:"post-button",type:"button",onClick:e.fetchData},"GIF "))),l.a.createElement("div",{className:"postBottomRight"},l.a.createElement("div",{className:"rightOption"},l.a.createElement(w.a,{style:{color:"red",width:"20px"}}),l.a.createElement("button",{className:"post-button",type:"button"},"Check in")),l.a.createElement("div",{className:"rightOption"},l.a.createElement(L.a,{style:{color:"lightred",width:"20px"}}),l.a.createElement("button",{className:"post-button",type:"button"},"Tag Event")))),l.a.createElement("div",{className:"postFooter"},l.a.createElement("div",{className:"postFoterLeft"}),l.a.createElement("div",{className:"postFoterRight"},l.a.createElement(N.a,{className:"icon"})," ",l.a.createElement("input",{type:"button",className:"post_button",value:"Only me"}),l.a.createElement("input",{type:"submit",className:"post_submit",value:"Post"}))))))},I=(a(99),function(e){var t=e.gifLinks,a=e.handleImageClick,n=e.handleSearch;return l.a.createElement(l.a.Fragment,null,0!=t&&l.a.createElement("div",{className:"modalPop"},l.a.createElement("div",{className:"modalHeading"},l.a.createElement("input",{type:"text",placeholder:"Search gif across app..",onChange:n,className:"searchBar"})),l.a.createElement("div",{className:"modalBody"},t.map(function(e){return l.a.createElement("div",{className:"container",key:e.id},l.a.createElement("img",{src:e.images.fixed_height.url,onClick:function(){return a(e)},style:{width:"250px",color:"red"},alt:"gif"}))}))))}),P=(a(100),function(e){var t=e.postMsg,a=e.gifLinks;return l.a.createElement("div",{className:"postMessage"},l.a.createElement("div",{className:"messageHeader"},l.a.createElement(i.a,null)),l.a.createElement("div",{className:"messageBody"},l.a.createElement("p",{className:"text"},t.text),a.map(function(e){return l.a.createElement("div",{className:"gif",key:e.id},e.id==t.imageId?l.a.createElement("img",{src:e.images.fixed_height.url,style:{color:"red"},alt:"gif"}):"")})))});var j=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),i=r[0],m=r[1],d=Object(n.useState)(""),u=Object(o.a)(d,2),p=u[0],g=u[1],E=Object(n.useState)({imageId:"",text:""}),f=Object(o.a)(E,2),h=f[0],v=f[1];return l.a.createElement("div",{className:"app"},l.a.createElement(S,{fetchData:function(){fetch("https://api.giphy.com/v1/gifs/search?q=${trending}&api_key=tnAte8frboaXuOzCyt9CSmLwaPCpEiYr&limit=50").then(function(e){return e.json()}).then(function(e){c(e.data),console.log(e),console.log("working")})},handleTextarea:function(e){g(e.target.value)},submitPost:function(e){e.preventDefault(),""==h.imageId&&""==h.text&&alert("please provide both Text and Gif input")}}),0!=(h.imageId&&h.text)?l.a.createElement(P,{postMsg:h,gifLinks:a}):l.a.createElement(I,{gifLinks:a,handleImageClick:function(e){v({imageId:e.id,text:p})},handleSearch:function(e){var t=e.target.value;console.log(t);var n=a.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())});c(n),m(i),0==n&&alert("no match"),console.log(n)}}))},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,114)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),l(e),c(e),s(e)})};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),B()},88:function(e,t,a){e.exports=a(102)},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.b7244522.chunk.js.map