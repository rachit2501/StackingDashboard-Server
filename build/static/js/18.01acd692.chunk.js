(this["webpackJsonpstackedsats-dashboard"]=this["webpackJsonpstackedsats-dashboard"]||[]).push([[18],{183:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.children,t=e.title;return n.a.createElement("div",{className:"min-w-0 p-4 bg-gray-800 rounded-lg shadow-xs"},n.a.createElement("p",{className:"mb-4 font-semibold text-gray-300"},t),a)}},187:function(e,a){e.exports=function(e,a,t,l){var n=new Blob("undefined"!==typeof l?[l,e]:[e],{type:t||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,a);else{var r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(n):window.webkitURL.createObjectURL(n),c=document.createElement("a");c.style.display="none",c.href=r,c.setAttribute("download",a),"undefined"===typeof c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(r)}),200)}}},324:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.legends;return n.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-400"},a.map((function(e){return n.a.createElement("div",{className:"flex items-center",key:e.title},n.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(e.color," rounded-full")}),n.a.createElement("span",null,e.title))})))}},82:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.children,t=e.left,l=e.right;return a?n.a.createElement("div",{className:"flex items-center justify-between px-8 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},n.a.createElement("h1",{show:a,className:"mb-3 text-2xl"},a)):a?void 0:n.a.createElement("div",{className:"flex flex-wrap items-center justify-between px-12 pt-10 pb-8 mb-8 -mx-6 text-gray-100 border-b-2 border-gray-900 bg-gray-950"},n.a.createElement("div",null,t),n.a.createElement("div",null,l))}},968:function(e,a,t){"use strict";t.r(a);var l=t(84),n=t.n(l),r=t(99),c=t(12),s=t(0),m=t.n(s),i=t(82),o=t(25),d=t(102),u=t(26),b=t.n(u),f=t(183),p=t(315),E=t(324),g=t(187),x=t.n(g),v=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",{className:"mb-3 text-2xl"},"Contract Detail"),m.a.createElement("div",null,"ST000000000000000000002AMW42H.pox"))},y=function(){return m.a.createElement(m.a.Fragment,null)};a.default=function(){var e=Object(s.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1],u=Object(s.useState)([]),g=Object(c.a)(u,2),w=g[0],N=g[1],h=Object(s.useState)([]),C=Object(c.a)(h,2),j=C[0],T=C[1],k=Object(s.useState)({}),O=Object(c.a)(k,2),S=O[0],L=O[1];Object(s.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var a,t,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://temp12345673.herokuapp.com","/callHistory"));case 2:a=e.sent,l(a.data),t={},r=[],c=[],a.data.forEach((function(e){r.push(e.fee),c.push(new Date(e.date).getTime()),t[e.functionName]?t[e.functionName]+=t[e.functionName]:t[e.functionName]=1})),N(r),T(c),s={sum:[],functionName:[]},Object.keys(t).forEach((function(e){s.sum.push(t[e]),s.functionName.push(e)})),L(s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var R={labels:S.functionName,datasets:[{label:"# of Votes",data:S.sum,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},F={data:{labels:j,datasets:[{label:"Fees",backgroundColor:"#0694a2",borderColor:"#0694a2",data:w,fill:!0}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!1}};return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.a,{left:m.a.createElement(v,null),right:m.a.createElement(y,null)}),m.a.createElement("div",{className:"p-4 space-y-6"},m.a.createElement("div",{className:"grid grid-cols-1 mb-8 xl:gap-6 xl:grid-cols-3"},m.a.createElement("div",{class:"col-span-2"},m.a.createElement(o.Card,{className:"mb-8 shadow-md"},m.a.createElement(o.CardBody,{className:"text-white"},m.a.createElement("div",{className:"flex flex-wrap justify-between mb-4"},m.a.createElement("div",{className:"flex items-center space-x-2"},m.a.createElement("span",null,m.a.createElement("h3",{className:"mr-4 text-lg font-medium"},"Call History")),m.a.createElement("div",{className:"flex items-center ml-10 text-primary-400"},m.a.createElement(d.c,null),m.a.createElement("button",{onClick:function(){var e=t.map((function(e){return JSON.stringify(e)}));x()(e,"calls.csv")},className:"ml-1"},"Export")))),m.a.createElement(o.TableContainer,{className:"mb-8"},m.a.createElement(o.Table,null,m.a.createElement(o.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(o.TableCell,null,"Function"),m.a.createElement(o.TableCell,null,"Contracts"),m.a.createElement(o.TableCell,null,"Fee"),m.a.createElement(o.TableCell,null,"Time"))),m.a.createElement(o.TableBody,{className:"text-lg divide-gray-500"},t.map((function(e,a){return m.a.createElement(o.TableRow,{className:"text-white",key:a},m.a.createElement(o.TableCell,null,e.functionName),m.a.createElement(o.TableCell,null,e.stxAddress),m.a.createElement(o.TableCell,null,e.fee," STX"),m.a.createElement(o.TableCell,null,parseInt((Date.now()-new Date(e.date))/144e4,10)," ","min. ago"))})))))))),m.a.createElement("div",{className:"space-y-6"},m.a.createElement(o.Card,null,m.a.createElement(o.CardBody,{className:"-mb-8 space-y-8 text-white"},m.a.createElement("div",{className:"flex flex-wrap justify-between"},m.a.createElement("div",{className:"flex flex-wrap items-center"},m.a.createElement("h2",{className:"mr-3 text-xl font-medium"},"Function Calls")),m.a.createElement("div",null,m.a.createElement(o.Select,{className:"py-1 pl-2 mt-1 bg-transparent border-gray-300 leading-1"},m.a.createElement("option",null,"24 Hrs")))),m.a.createElement("div",{className:"pb-3 mb-3 border-b border-gray-500"},m.a.createElement("div",{className:"flex flex-wrap justify-between"},m.a.createElement("div",null,"Total # of Function Calls"),m.a.createElement("div",{className:"flex font-medium text-success-500"},"200"))),m.a.createElement(f.a,{title:""},m.a.createElement(p.d,{data:R})))),m.a.createElement(o.Card,null,m.a.createElement(o.CardBody,{className:"-mb-8 space-y-8 text-white"},m.a.createElement("h2",{className:"mr-3 text-xl font-medium"},"Transaction fees"),m.a.createElement(f.a,{title:"Doughnut"},m.a.createElement(p.c,F),m.a.createElement(E.a,{legends:[{title:"Fees",color:"bg-teal-600"}]}))))))))}}}]);
//# sourceMappingURL=18.01acd692.chunk.js.map