(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),o=s(30),r=s.n(o),a=(s(78),s(4)),l=s(2),i=s(72),d=s(5),u=s(0);var x=function(e){return e.isSent?Object(u.jsxs)("div",{className:"px-6 py-4",children:[Object(u.jsx)("div",{class:"text-right text-xl font-medium text-black",children:"You"}),Object(u.jsx)("p",{class:"text-gray-500",children:e.content})]}):Object(u.jsxs)("div",{className:"px-6 py-4",children:[Object(u.jsx)("div",{class:"text-left text-xl font-medium text-black",children:e.name}),Object(u.jsx)("p",{class:"text-gray-500",children:e.content})]})},j=s(32),m=s.n(j),b=s(22),h=s(6),g="LOGIN",f="LOGOUT",p=new(s(73).a),O={userInfo:void 0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return p.set("token",t.token),Object(h.a)(Object(h.a)({},e),{},{userInfo:t.userInfo});case f:return p.remove("token"),Object(h.a)(Object(h.a)({},e),{},{userInfo:void 0});default:return e}},y=Object(b.b)({user:v}),w=Object(b.c)(y,+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),N="192.168.0.10:4000",k="http";function S(){return void 0!==w.getState().user.userInfo}function C(e){return"http://192.168.0.10:4000/images/"+e+".jpeg"}var I=function(e){return Object(u.jsx)("div",{className:"flex-shrink-0 place-self-start mt-5",children:Object(u.jsx)("img",{src:C(e.username),alt:"",className:"h-12 w-12 rounded-full"})})},L=s(137);var E=function(e){return console.log(e),console.log(e),console.log(e),e.isSent?Object(u.jsxs)(L.a.div,{style:{opacity:0},animate:{opacity:1},className:"break-all px-6 py-1 m-auto w-max max-w-full bg-white rounded-xl shadow-md flex flex-row-reverse space-x-4 self-end",children:[Object(u.jsx)(I,{isSent:!0,username:e.sender.username}),Object(u.jsx)(x,{isSent:!0,name:e.sender.username,content:e.content})]}):Object(u.jsxs)(L.a.div,{style:{opacity:0},animate:{opacity:1},className:"break-all px-6 py-1 m-auto w-max max-w-full bg-white rounded-xl shadow-md flex space-x-4",children:[Object(u.jsx)(I,{isSent:!0,username:e.sender.username}),Object(u.jsx)(x,{name:e.sender.username,content:e.content})]})};var G=function(e){var t=null;Object(n.useEffect)((function(){s()}));var s=function(){t.scrollIntoView({behavior:"smooth"})};return Object(u.jsxs)("div",{className:"max-h-full space-x-5 space-y-5 overflow-y-scroll overflow-x-hidden flex flex-col items-start",children:[Object(u.jsx)("div",{}),e.messages.data.map((function(e,t){return Object(u.jsx)(E,{isSent:e.isSent,sender:e.sender,content:e.text},t)})),Object(u.jsx)("div",{id:"dummyDiv",ref:function(e){t=e}})]})};var _=function(e){var t=Object(n.useState)(!1),s=Object(d.a)(t,2),c=s[0],o=s[1];return Object(u.jsxs)("nav",{className:"bg-gray-800",children:[Object(u.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(u.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(u.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(u.jsxs)("button",{onClick:function(){o(!c)},type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(u.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(u.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Object(u.jsx)("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})}),Object(u.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(u.jsx)("div",{className:"flex-shrink-0 flex items-center",children:Object(u.jsx)("img",{className:"hidden lg:block h-8 w-auto",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICloud_logo.svg/640px-ICloud_logo.svg.png",alt:"Workflow"})}),Object(u.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(u.jsxs)("div",{className:"flex space-x-4",children:[Object(u.jsx)(a.c,{to:"/gpt",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"GPT-3 Chat"}),Object(u.jsx)(a.c,{to:"/global",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Global chat"})]})})]}),Object(u.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:Object(u.jsx)("div",{className:"ml-3 relative",children:Object(u.jsxs)("div",{className:"flex space-x-4",children:[Object(u.jsx)(a.c,{to:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Login"}),Object(u.jsx)(a.c,{to:"/signup",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Sign up"})]})})})]})}),c?Object(u.jsx)("div",{className:"",id:"mobile-menu",children:Object(u.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(u.jsx)(a.c,{to:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",activeClassName:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Login"}),Object(u.jsx)(a.c,{to:"/signup",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",activeClassName:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Sign up"})]})}):Object(u.jsx)("div",{})]})},T=s(12);var M=Object(T.b)((function(e){return{loggedIn:e.user.loggedIn,user:e.user.userInfo}}),null)((function(e){var t=Object(n.useState)(!1),s=Object(d.a)(t,2),c=s[0],o=s[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),i=l[0],x=l[1];return Object(u.jsxs)("nav",{className:"bg-gray-800",children:[Object(u.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(u.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(u.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(u.jsxs)("button",{onClick:function(){x(!i)},type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(u.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(u.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Object(u.jsx)("svg",{className:"hidden h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})}),Object(u.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(u.jsx)("div",{className:"flex-shrink-0 flex items-center",children:Object(u.jsx)("img",{className:"hidden lg:block h-8 w-auto",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICloud_logo.svg/640px-ICloud_logo.svg.png",alt:"Workflow"})}),Object(u.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(u.jsxs)("div",{className:"flex space-x-4",children:[Object(u.jsx)(a.c,{to:"/gpt",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"GPT-3 Chat"}),Object(u.jsx)(a.c,{to:"/global",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Global chat"})]})})]}),Object(u.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[Object(u.jsxs)("button",{className:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(u.jsx)("span",{className:"sr-only",children:"View notifications"}),Object(u.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})]}),Object(u.jsxs)("div",{className:"ml-3 relative",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){o(!c)},type:"button",className:"bg-gray-800 flex text-sm rounded-full focus:outline-none",id:"user-menu","aria-expanded":"false","aria-haspopup":"true",children:[Object(u.jsx)("span",{className:"sr-only",children:"Open user menu"}),Object(u.jsx)("img",{className:"h-8 w-8 rounded-full",src:"http://192.168.0.10:4000/images/"+e.user.uid+".jpeg",alt:""})]})}),c?Object(u.jsxs)("div",{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu",children:[Object(u.jsx)(a.c,{to:"/profile",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Your Profile"}),Object(u.jsx)(a.c,{to:"/settings",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Settings"}),Object(u.jsx)(a.c,{to:"/logout",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Sign out"})]}):Object(u.jsx)("div",{})]})]})]})}),i?Object(u.jsx)("div",{className:"",id:"mobile-menu",children:Object(u.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(u.jsx)(a.c,{to:"/gpt",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",activeClassName:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",children:"GPT-3 Chat"}),Object(u.jsx)(a.c,{to:"/global",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",activeClassName:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Global chat"})]})}):Object(u.jsx)("div",{})]})}));var D=function(e){return S()?Object(u.jsx)(M,{}):Object(u.jsx)(_,{})},P=s(70),F=s.n(P);var H=Object(T.b)((function(e){return{user:e.user.userInfo}}),null)((function(e){var t=Object(n.useState)({data:[]}),s=Object(d.a)(t,2),c=s[0],o=s[1],r=Object(n.useState)(""),a=Object(d.a)(r,2),l=a[0],x=a[1],j=Object(n.useState)(null),m=Object(d.a)(j,2),b=m[0],h=m[1];Object(n.useEffect)((function(){var e=F()("192.168.0.10:4000");h(e)}),[]),Object(n.useEffect)((function(){if(console.log("socket changed"),null!=b)return console.log(e.roomName),console.log(e.roomName),console.log(e.roomName),console.log(e.roomName),b.emit("roomJoin",{roomName:e.roomName}),b.on("response",(function(e){f(e)})),function(){return b.disconnect()}}),[b]);var g=null,f=function(e){o((function(t){return{data:[].concat(Object(i.a)(t.data),[e])}}))},p=function(){if(x(l.trim()),null!=b){if(""!=l){var t={text:l,isSent:!0,sender:e.user,time:(new Date).toLocaleString()};b.emit("message",t),f(t),g.value=""}x("")}else alert("socket is null")};return Object(u.jsxs)("div",{className:"h-screen",children:[Object(u.jsx)("div",{className:"h-1/10",children:Object(u.jsx)(D,{user:e.user})}),Object(u.jsx)("main",{children:Object(u.jsxs)("div",{class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:[Object(u.jsx)("div",{class:"px-4 py-6 sm:px-0",children:Object(u.jsx)("div",{class:"border-4 shadow-lg border-gray-200 rounded-lg h-96",children:Object(u.jsx)(G,{messages:c})})}),Object(u.jsxs)("div",{className:"flex flex-row items-center content-center gap-3",children:[Object(u.jsx)("div",{className:"flex-grow",children:Object(u.jsx)("input",{type:"text",placeholder:"Enter message",onChange:function(e){x(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&p()},ref:function(e){g=e},class:"px-3 py-3 w-full placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"})}),Object(u.jsx)("div",{className:"pr-px",children:Object(u.jsx)("button",{className:"text-black-300 border-gray-300 border-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none",onClick:p,children:"Send"})})]})]})})]})}));var W=function(e){return Object(u.jsx)(H,{roomName:"fakeroom#gpt3"})};var B=function(e){return Object(u.jsx)(H,{roomName:"room#global"})};var U=function(e){return Object(u.jsx)(l.a,{to:{pathname:"/gpt",state:{from:e.location}}})},V=s(33);var R=function(e){var t=e.component,s=e.hasFooterHeader,c=Object(V.a)(e,["component","hasFooterHeader"]),o=S(),r=null;return r=s?Object(u.jsxs)("div",{children:[Object(u.jsx)(n.Header,{}),Object(u.jsx)(n.Shell,{children:Object(u.jsx)(t,Object(h.a)({},c))}),Object(u.jsx)(n.Footer,{})]}):Object(u.jsx)(t,Object(h.a)({},c)),Object(u.jsx)(l.b,Object(h.a)(Object(h.a)({},c),{},{render:function(e){return 1==o?r:Object(u.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var X=function(e){var t=e.component,s=e.hasFooterHeader,c=Object(V.a)(e,["component","hasFooterHeader"]),o=S(),r=null;return r=s?Object(u.jsxs)("div",{children:[Object(u.jsx)(n.Header,{}),Object(u.jsx)(n.Shell,{children:Object(u.jsx)(t,Object(h.a)({},c))}),Object(u.jsx)(n.Footer,{})]}):Object(u.jsx)(t,Object(h.a)({},c)),Object(u.jsx)(l.b,Object(h.a)(Object(h.a)({},c),{},{render:function(e){return 0==o?r:Object(u.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})}}))},q=s(71),J=s.n(q),Y=function(){return console.log("LOGGING OUT"),{type:f}};var A=Object(T.b)((function(e){return{user:e.user.userInfo}}),(function(e){return{logIn:function(t,s){return e(function(e,t){return console.log("LOGGING IN"),console.log("user: ",e),console.log("token: ",t),{type:g,userInfo:e,token:t}}(t,s))},logOut:function(){return e(Y())}}}))((function(e){var t=null,s=null,c=Object(n.useState)(""),o=Object(d.a)(c,2),r=o[0],i=o[1],x=Object(n.useState)(!1),j=Object(d.a)(x,2),b=j[0],h=j[1];Object(n.useEffect)((function(){e.logOut()}),[]);var g=function(e){console.log(e)};return b?Object(u.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}}):Object(u.jsxs)("div",{className:"h-screen",children:[Object(u.jsx)("div",{className:"h-1/10",children:Object(u.jsx)(D,{user:e.user})}),Object(u.jsx)("div",{className:"lg:w-1/2 xl:max-w-screen-sm m-auto",children:Object(u.jsxs)("div",{className:"mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl",children:[Object(u.jsx)("h2",{className:"text-center text-4xl text-gray-800 font-display font-semibold lg:text-center xl:text-5xl xl:text-bold",children:"Log in"}),Object(u.jsxs)("div",{className:"mt-12 flex flex-col",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-sm font-bold text-gray-700 tracking-wide",children:"Username"}),Object(u.jsx)("input",{className:"w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",type:!0,placeholder:"SillyGoose99",ref:function(e){t=e}})]}),Object(u.jsxs)("div",{className:"mt-8",children:[Object(u.jsxs)("div",{className:"flex justify-between items-center",children:[Object(u.jsx)("div",{className:"text-sm font-bold text-gray-700 tracking-wide",children:"Password"}),Object(u.jsx)("div",{children:Object(u.jsx)(a.b,{to:"forgot-password",className:"text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer",children:"Forgot Password?"})})]}),Object(u.jsx)("input",{type:"password",name:"password",className:"w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",placeholder:"Enter your password",ref:function(e){s=e}})]}),Object(u.jsx)("div",{className:"mt-10",children:Object(u.jsx)("button",{className:"bg-gray-800 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-400 shadow-lg",onClick:function(){var n,c;t.value&&s.value&&(i("Logging in..."),(n=t.value,c=s.value,m()({method:"post","Content-Type":"application/json",url:"".concat(k,"://").concat(N,"/api/user/login"),validateStatus:!1,data:{username:n,password:c}})).then((function(t){if(t.data.ok){console.log(t.data);var s=t.data.user,n=t.data.token;e.logIn(s,n),i(t.data.message),setTimeout((function(){h(!0)}),500)}else i(t.data.message)})).catch((function(e){i("Request error"),console.log("Error logging in"),console.log(e.reponse)})))},children:"Log In"})})]})}),Object(u.jsx)("div",{className:"mt-5 self-center",children:Object(u.jsx)(J.a,{className:"font-bold",clientId:"408678250871-16cqcdjpg1hggln0si3o2j4dcenl4opj.apps.googleusercontent.com",buttonText:"Log in with Google",onSuccess:g,onFailure:g,cookiePolicy:"single_host_origin"})}),Object(u.jsxs)("div",{className:"mt-12 text-sm font-display font-semibold text-gray-700 text-center",children:["Don't have an account ? ",Object(u.jsx)(a.b,{to:"/signup",className:"cursor-pointer text-indigo-600 hover:text-indigo-800",children:"Sign up"})]}),Object(u.jsx)(L.a.div,{className:"mt-2 self-center font-bold content-center "+("Logging in..."==r?"text-yellow-500":"Success"==r?"text-green-600":"text-red-700"),children:r})]})]})})]})}));var K=Object(T.b)((function(e){return{user:e.user.userInfo}}),(function(e){return{logOut:function(){return e(Y())}}}))((function(e){return Object(n.useEffect)((function(){e.logOut()}),[]),Object(u.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}));var z=function(e){return Object(u.jsx)(l.a,{to:{pathname:"/",state:{from:e.location}}})};var Q=function(e){var t=null,s=null,c=null,o=Object(n.useState)(!1),r=Object(d.a)(o,2),a=r[0],i=r[1],x=Object(n.useState)(""),j=Object(d.a)(x,2),b=j[0],h=j[1];return a?Object(u.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}}):Object(u.jsxs)("div",{className:"h-screen",children:[Object(u.jsx)("div",{className:"h-1/10",children:Object(u.jsx)(D,{user:e.user})}),Object(u.jsx)("div",{className:"lg:w-1/2 xl:max-w-screen-sm m-auto",children:Object(u.jsxs)("div",{className:"mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl flex flex-col",children:[Object(u.jsx)("h2",{className:"text-center text-4xl text-gray-800 font-display font-semibold lg:text-center xl:text-5xl xl:text-bold",children:"Sign up"}),Object(u.jsx)("div",{className:"mt-12",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-sm font-bold text-gray-700 tracking-wide",children:"Username"}),Object(u.jsx)("input",{className:"w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",type:!0,placeholder:"SillyGoose99",ref:function(e){t=e}})]}),Object(u.jsxs)("div",{className:"mt-8",children:[Object(u.jsx)("div",{className:"flex justify-between items-center",children:Object(u.jsx)("div",{className:"text-sm font-bold text-gray-700 tracking-wide",children:"Email"})}),Object(u.jsx)("input",{className:"w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",placeholder:"Enter your password",ref:function(e){s=e}})]}),Object(u.jsxs)("div",{className:"mt-8",children:[Object(u.jsx)("div",{className:"flex justify-between items-center",children:Object(u.jsx)("div",{className:"text-sm font-bold text-gray-700 tracking-wide",children:"Password"})}),Object(u.jsx)("input",{type:"password",name:"password",className:"w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",placeholder:"Enter your password",ref:function(e){c=e}})]}),Object(u.jsx)("div",{className:"mt-10",children:Object(u.jsx)("button",{className:"bg-gray-800 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-400 shadow-lg",onClick:function(){var e;t.value&&c.value&&s.value&&(h("Signing up..."),(e={username:t.value,email:s.value,password:c.value},m()({method:"post","Content-Type":"application/json",url:"".concat(k,"://").concat(N,"/api/user/signup"),validateStatus:!1,data:e})).then((function(e){e.data.ok?(h(e.data.message),setTimeout((function(){i(!0)}),500)):h(e.data.message)})).catch((function(e){h("".concat(e)),console.log("Error signing up"),console.log(e)})))},children:"Sign up"})})]})}),Object(u.jsx)(L.a.div,{className:"mt-2 self-center font-bold content-center "+("Signing up..."==b?"text-yellow-500":"Done!"==b?"text-green-600":"text-red-700"),children:b})]})})]})};var Z=Object(T.b)((function(e){return{user:e.user.userInfo}}),null)((function(e){var t=Object(n.useState)(!1),s=Object(d.a)(t,2),c=(s[0],s[1],Object(n.useState)(null)),o=Object(d.a)(c,2),r=o[0],a=o[1],l=Object(n.useRef)(null);return Object(n.useEffect)((function(){}),[r]),Object(u.jsxs)("div",{className:"h-screen",children:[Object(u.jsx)("div",{className:"h-1/10",children:Object(u.jsx)(D,{user:e.user})}),Object(u.jsxs)("div",{class:"bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto",children:[Object(u.jsx)("div",{class:"relative h-40",children:Object(u.jsx)("img",{class:"absolute h-full w-full object-cover",src:"https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"})}),Object(u.jsxs)("div",{onClick:function(){l.current.click()},class:"relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4",children:[Object(u.jsx)("input",{type:"file",id:"file",onChange:function(e){a(e.target.files[0])},ref:l,style:{display:"none"}}),Object(u.jsx)("img",{class:"object-cover w-full h-full",src:C(e.user.username)})]}),Object(u.jsxs)("div",{class:"mt-16",children:[Object(u.jsx)("h1",{class:"text-lg text-center font-semibold",children:e.user.username}),Object(u.jsx)("p",{class:"text-sm text-gray-600 text-center",children:e.user.email})]})]})]})}));var $=function(){return Object(u.jsx)(a.a,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(X,{path:"/login",exact:!0,component:A}),Object(u.jsx)(X,{path:"/signup",exact:!0,component:Q}),Object(u.jsx)(R,{path:"/",exact:!0,component:U}),Object(u.jsx)(R,{path:"/profile",exact:!0,component:Z}),Object(u.jsx)(R,{path:"/gpt",exact:!0,component:W}),Object(u.jsx)(R,{path:"/global",exact:!0,component:B}),Object(u.jsx)(R,{path:"/logout",exact:!0,component:K}),Object(u.jsx)(l.b,{component:z})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T.a,{store:w,children:Object(u.jsx)($,{})})}),document.getElementById("root"))},78:function(e,t,s){}},[[135,1,2]]]);
//# sourceMappingURL=main.4795898a.chunk.js.map