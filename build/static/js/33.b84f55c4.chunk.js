(this["webpackJsonpstackedsats-dashboard"]=this["webpackJsonpstackedsats-dashboard"]||[]).push([[33],{956:function(e,a,t){"use strict";t.r(a);var n=t(84),r=t.n(n),s=t(99),l=t(12),c=t(0),o=t.n(c),m=t(17),u=t(26),i=t.n(u),d=t(25),p=t(112),b=t(13),f=t(14),g=t(2),h=t(313),E=t.n(h),y=E.a.object({username:E.a.string().email({tlds:{allow:!1}})});a.default=function(){var e=Object(g.g)(),a=Object(c.useState)(""),t=Object(l.a)(a,2),n=t[0],u=t[1],h=Object(c.useState)(""),E=Object(l.a)(h,2),v=E[0],w=E[1],x=Object(c.useState)(!1),N=Object(l.a)(x,2),k=N[0],j=N[1],O=Object(b.b)(),S=function(){var a=Object(s.a)(r.a.mark((function a(){var t,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(j(!1),t=y.validate({username:n}),!t.error){a.next=6;break}j(!0),a.next=10;break;case 6:return a.next=8,i()({url:"".concat("","/login"),data:{username:n,password:v},method:"post"});case 8:200===(s=a.sent).status?(localStorage.setItem("auth",s.data.token),O({type:f.d,payload:s.data.user}),e.push("/app/network")):j(!0);case 10:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return o.a.createElement("div",{className:"flex items-center min-h-screen p-6 bg-gray-900"},o.a.createElement("div",{className:"flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl"},o.a.createElement("main",{className:"flex items-center justify-center p-6 sm:p-12"},o.a.createElement("div",{className:"w-full"},o.a.createElement("h1",{className:"text-3xl font-medium text-gray-700"},"Welcome"),o.a.createElement("p",{className:"mb-8 text-gray-300"},"Please Login to access your Dashboard"),o.a.createElement(d.Label,null,o.a.createElement("span",null,"Email"),o.a.createElement(d.Input,{className:"py-3 mt-1 bg-gray-50",type:"email",placeholder:"john@doe.com",onChange:function(e){u(e.target.value)},value:n})),o.a.createElement(d.Label,{className:"mt-4"},o.a.createElement("span",null,"Password"),o.a.createElement(d.Input,{className:"py-3 mt-1 bg-gray-50",type:"password",placeholder:"***************",onChange:function(e){w(e.target.value)},value:v,onKeyDown:function(e){"Enter"===e.key&&S()}})),o.a.createElement("div",{className:"mt-4 btn btn-primary btn-lg btn-block",block:!0,to:"/app/my-portfolio",onClick:S},"Log in"),k&&o.a.createElement("p",{style:{color:"red"}},"Invalid Email or Password"),o.a.createElement("p",{className:"mt-4"},o.a.createElement(m.b,{className:"font-medium text-gray-300 hover:underline",to:"/forgot-password"},"Forgot your password?")),o.a.createElement("p",{className:"mt-6"},"Don't have an account?"),o.a.createElement(m.b,{className:"flex items-center mt-3 text-lg font-medium text-success-500 hover:underline",to:"/create-account"},o.a.createElement("span",{className:"mr-2"},"Sign Up")," ",o.a.createElement(p.a,null)),o.a.createElement(m.b,{className:"flex items-center mt-8 font-medium text-primary-500 hover:underline",to:"/forgot-password"},"Forgot Password")))))}}}]);
//# sourceMappingURL=33.b84f55c4.chunk.js.map