(this["webpackJsonpstackedsats-dashboard"]=this["webpackJsonpstackedsats-dashboard"]||[]).push([[31],{955:function(e,a,t){"use strict";t.r(a);var n=t(84),r=t.n(n),l=t(99),s=t(12),c=t(0),m=t.n(c),o=t(2),u=t(17),i=t(311),p=t.n(i),d=t(25),g=t(102),b=t(26),f=t.n(b),h=p.a.object({username:p.a.string().email({tlds:{allow:!1}})});a.default=function(){var e=Object(o.g)(),a=Object(c.useState)(""),t=Object(s.a)(a,2),n=t[0],i=t[1],p=Object(c.useState)(""),b=Object(s.a)(p,2),y=b[0],E=b[1],v=Object(c.useState)(""),x=Object(s.a)(v,2),N=x[0],w=x[1],k=function(){var a=Object(l.a)(r.a.mark((function a(){var t,l,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("fsjkdhnf"),t=h.validate({username:n}),l=t.error,console.log(l),l){a.next=11;break}return a.next=6,f.a.post("".concat("","/register"),{username:n,password:y});case 6:s=a.sent,localStorage.setItem("stacksauth",s),e.push("/login"),a.next=12;break;case 11:w(!0);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return m.a.createElement("div",{className:"flex items-center min-h-screen p-6 bg-gray-900"},m.a.createElement("div",{className:"flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl"},m.a.createElement("main",{className:"flex items-center justify-center p-6 sm:p-12"},m.a.createElement("div",{className:"w-full"},m.a.createElement("h1",{className:"text-3xl font-medium text-gray-700"},"Welcome"),m.a.createElement("p",{className:"mb-8 text-gray-300"},"Please Sign up to create your account"),m.a.createElement(d.Label,null,m.a.createElement("span",null,"Email"),m.a.createElement(d.Input,{className:"py-3 mt-1 bg-gray-50",type:"email",placeholder:"john@doe.com",value:n,onChange:function(e){return i(e.target.value)}})),N&&m.a.createElement("p",{style:{color:"red"}},"Please Enter a Valid Email"),m.a.createElement(d.Label,{className:"mt-4"},m.a.createElement("span",null,"Password"),m.a.createElement(d.Input,{className:"py-3 mt-1 bg-gray-50",type:"password",placeholder:"***************",value:y,onChange:function(e){return E(e.target.value)}})),m.a.createElement("div",{className:"mt-4 btn btn-primary btn-lg btn-block",block:!0,onClick:k},"Log in"),m.a.createElement("p",{className:"mt-4 font-medium text-gray-300"},"By pressing \u201cCreate account\u201d you agree to our \xa0",m.a.createElement("a",{className:"hover:underline text-primary-500",href:"https://legacy.blockstack.org/legal/privacy-policy"},"privacy policy")),m.a.createElement("p",{className:"mt-6"},"Already have an account?"),m.a.createElement(u.b,{className:"flex items-center mt-3 text-lg font-medium text-success-500 hover:underline",to:"/login"},m.a.createElement("span",{className:"mr-2"},"Sign In")," ",m.a.createElement(g.a,null)),m.a.createElement(u.b,{className:"flex items-center mt-8 font-medium text-primary-500 hover:underline",to:"/forgot-password"},"Forgot Password")))))}}}]);
//# sourceMappingURL=31.dbcf4e61.chunk.js.map