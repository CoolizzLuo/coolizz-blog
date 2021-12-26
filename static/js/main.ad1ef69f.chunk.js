(this["webpackJsonpcoolizz-blog"]=this["webpackJsonpcoolizz-blog"]||[]).push([[0],{241:function(e,n,t){"use strict";t.r(n);var r,a,o,s,i,c,d,l,b,u,j=t(3),p=t(0),m=t.n(p),f=t(56),x=t.n(f),h=t(34),g=Object(h.b)(r||(r=Object(j.a)(["\n  @font-face {\n    font-family: Cyber;\n    src: url(\"https://assets.codepen.io/605876/Blender-Pro-Bold.otf\");\n    font-display: swap;\n  }\n  * {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    /* font-family: \"Cyber\", Futura, sans-serif; */\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    box-sizing: border-box;\n    color: #333;\n  }\n  \n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    -webkit-border-radius: 10px;\n    border-radius: 10px;\n  }\n  ::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 4px;\n    border-radius: 4px;\n    background: rgb(219,219,219);\n  }\n\n  html {\n    font-size: 20px;\n    background: whitesmoke;\n  }\n\n  body {\n    margin: 32px 0 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  input {\n    font-family: \"Cyber\", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';\n  }\n"]))),O=t(6),v=t(5),w=t(24),y=t(12),k=(t(118),t(15)),z=t(2),S=t.n(z),C=t(11),L="token",P=function(e){return localStorage.setItem(L,e)},U=function(){return localStorage.getItem(L)},F="https://student-json-api.lidemy.me",q=function(){var e=Object(C.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(F,"/users")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=U(),e.abrupt("return",fetch("".concat(F,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=t(39),I=t(58),$=t(31),E=t(28),H=t(14),M=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object(p.useState)(!0),r=Object(O.a)(t,2),a=r[0],o=r[1],s=Object(p.useState)(),i=Object(O.a)(s,2),c=i[0],d=i[1],l=Object(p.useState)(),b=Object(O.a)(l,2),u=b[0],j=b[1],m=Object(p.useCallback)((function(){o(!0),d(void 0),j([]),e().then(j).catch(d).finally((function(){return o(!1)}))}),n);return Object(p.useEffect)((function(){m()}),[m]),{loading:a,error:c,data:u}},N={headers:{"Content-Type":"application/json"}},T=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return M((function(){return fetch(e,Object(H.a)(Object(H.a)({},N),n)).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}),t)},_=Object(p.createContext)(null),D=t(1);E.b.add(I.a);var A,J,G,V,W,Y,K,Q,X,Z,ee,ne,te,re,ae=v.a.article(a||(a=Object(j.a)(["\n  position: relative;\n  background: #fff;\n  padding: 1.4rem 1.6rem;\n  margin: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);\n\n  /* & + & {\n    border-top: 1px solid rgba(0, 12, 34, 0.2);\n  } */\n"]))),oe=v.a.header(o||(o=Object(j.a)(["\n  width: 100%;\n  text-align: left;\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n"]))),se=v.a.section(s||(s=Object(j.a)(["\n  font-size: .8rem;\n  margin: 1rem 0;\n"]))),ie=Object(v.a)(w.b)(i||(i=Object(j.a)(["\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #428bca;\n  text-decoration: none;\n  overflow: hidden;\n"]))),ce=v.a.div(c||(c=Object(j.a)(["\n  display: flex;\n  font-size: .6rem;\n  padding: .4rem 0;\n\n  path, span {\n    color: #aaa;\n  }\n\n  svg {\n    margin-right: .2rem;\n  }\n\n  span {\n    margin-right: .8rem;\n  }\n"]))),de=v.a.span(d||(d=Object(j.a)(["\n  font-weight: 500;\n"]))),le=v.a.span(l||(l=Object(j.a)(["\n"]))),be=v.a.span(b||(b=Object(j.a)(["\n\n"]))),ue=Object(v.a)(w.b)(u||(u=Object(j.a)(["\n  position: absolute;\n  right: 1.6rem;\n  bottom: 1.4rem;\n  font-size: .6rem;\n  color: #338ccc;\n"]))),je=function(e){var n,t=e.post,r=e.userList,a=t.id,o=t.title,s=t.body,i=t.userId,c=t.createdAt,d=s.split("\n").slice(0,2).join(" ");return Object(D.jsxs)(ae,{children:[Object(D.jsxs)(oe,{children:[Object(D.jsx)(ie,{to:"/post/".concat(a),children:o}),Object(D.jsxs)(ce,{children:[Object(D.jsxs)(le,{children:[Object(D.jsx)(B.a,{icon:$.b}),new Date(c).toLocaleString("zh-TW",{hour12:!1})]}),Object(D.jsxs)(de,{children:[Object(D.jsx)(B.a,{icon:$.d}),null===(n=function(e){return r.find((function(n){return n.id===e}))}(i))||void 0===n?void 0:n.username]}),Object(D.jsxs)(be,{children:[Object(D.jsx)(B.a,{icon:$.c}),"Test"]})]})]}),Object(D.jsx)(se,{children:d.length>30?"".concat(d.substr(0,30),"..."):d}),Object(D.jsx)(ue,{to:"/post/".concat(a),children:"Read More"})]})},pe=function(e){var n=e.page,t=void 0===n?1:n,r=Object(p.useContext)(_).userList,a=T("https://student-json-api.lidemy.me/posts?_page=".concat(t,"&_limit=5&_sort=createdAt&_order=desc")),o=a.loading,s=a.error,i=a.data,c=Object(p.useRef)(null);return Object(p.useEffect)((function(){return o?c.current=y.b.loading("loading..."):y.b.dismiss(c.current),function(){return y.b.dismiss(c.current)}}),[o]),Object(p.useEffect)((function(){s&&y.b.error("Network error")}),[s]),Object(D.jsx)(D.Fragment,{children:i&&i.map((function(e){return Object(D.jsx)(je,{post:e,userList:r},e.id)}))})},me=v.a.div(A||(A=Object(j.a)(["\n  width: 100%;\n  padding: 0 .5rem;\n"]))),fe=function(){var e=Object(p.useState)([]),n=Object(O.a)(e,2);n[0],n[1];return Object(p.useEffect)((function(){}),[]),Object(D.jsx)(me,{children:Object(D.jsx)(pe,{})})},xe=v.a.div(J||(J=Object(j.a)(["\n  width: 80%;\n  margin: 2rem auto 0;\n  font-size: calc(20px + 0.33vw);\n  text-align: left;\n"]))),he=function(){return Object(D.jsxs)(xe,{children:[Object(D.jsx)("h1",{children:"Hello."}),Object(D.jsx)("h3",{children:"My name is Enzo Luo."}),Object(D.jsx)("p",{children:"I am an operator engineer and good at JavaScript."}),Object(D.jsx)("p",{children:"If you happen to speak Chinese, my Chinese name is (Luo Shih Jie). You can also find me on Twitter and Github."}),Object(D.jsx)("p",{children:"Outside of programming and helping my wife take care of our two kids, I enjoy video games, karaoke, sushi and collecting watches."})]})},ge=function(){return Object(D.jsx)("h1",{children:"New post page"})},Oe=(v.a.div(G||(G=Object(j.a)(["\n  padding: 1.4rem .6rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  & + & {\n    border-top: 1px solid rgba(0, 12, 34, 0.2);\n  }\n"]))),Object(v.a)(w.b)(V||(V=Object(j.a)(["\n  font-size: 1rem;\n  font-weight: 700;\n  color: #d04444;\n  text-decoration: none;\n  overflow: hidden;\n"]))),v.a.div(W||(W=Object(j.a)(["\n  font-size: .8rem;\n  margin: 1rem 0;\n"]))),v.a.div(Y||(Y=Object(j.a)(["\n  display: flex;\n  font-size: .7rem;\n"]))),v.a.div(K||(K=Object(j.a)(["\n  color: #d04444;\n  font-weight: 500;\n"]))),v.a.div(Q||(Q=Object(j.a)(["\n  color: rgba(0, 0, 0, 0.8);\n  margin-left: .2rem;\n"]))),function(e){var n=e.id,t=T("https://student-json-api.lidemy.me/posts/".concat(n)),r=t.loading,a=t.error,o=t.data,s=Object(p.useRef)(null);return Object(p.useEffect)((function(){return r?s.current=y.b.loading("loading..."):y.b.dismiss(s.current),function(){return y.b.dismiss(s.current)}}),[r]),Object(p.useEffect)((function(){a&&y.b.error("Network error")}),[a]),Object(D.jsxs)("div",{children:[console.log(o),Object(D.jsx)("h2",{children:null===o||void 0===o?void 0:o.title}),Object(D.jsx)("p",{children:null===o||void 0===o?void 0:o.body})]})}),ve=function(){Object(k.f)().history;var e=Object(k.g)().id;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(Oe,{id:e})})},we=t(38),ye=t(59),ke=t.n(ye),ze=function(e){var n=ke.a.create({baseURL:e||"https://student-json-api.lidemy.me/",timeout:1e3});return n.interceptors.request.use((function(e){var n=U();return e.headers.Authorization="Bearer "+n,e}),(function(e){return Promise.reject(e)})),n}(),Se=t(22),Ce=v.a.div(X||(X=Object(j.a)(["\n  display: flex;\n  height: 70%;\n  justify-content: center;\n  align-items: center;\n"]))),Le=v.a.form(Z||(Z=Object(j.a)(["\n  font-size: .8rem;\n  width: 350px;\n  padding: 1.5rem 1.5rem 2rem;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);\n"]))),Pe=v.a.label(ee||(ee=Object(j.a)(["\n  display: block;\n  text-align: left;\n  margin: .3rem 0;\n"]))),Ue=v.a.input(ne||(ne=Object(j.a)(["\n  font-size: .75rem;\n  padding: 7px 11px;\n  margin-bottom: .2rem;\n  outline: none;\n  width: 100%;\n  max-width: 100%;\n  background-color: white;\n  border: 1px #dbdbdb solid;\n  border-radius: 4px;\n  color: #363636;\n  box-shadow: inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);\n\n  ","\n"])),(function(e){return e.$danger&&"\n    border-color: #fa7c91;\n  "})),Fe=v.a.p(te||(te=Object(j.a)(["\n  text-align: left;\n  color: #fa7c91;\n  font-weight: 300;\n"]))),qe=v.a.button(re||(re=Object(j.a)(["\n  font-size: .8rem;\n  padding: 7px 16px;\n  width: 100%;\n  margin-top: .5rem;\n  background-color: #a29bfe;\n  border-color: transparent;\n  border-radius: 4px;\n  color: #fff;\n  cursor: pointer;\n"]))),Re=function(e){var n=e.history,t=Object(Se.d)(),r=t.register,a=t.handleSubmit,o=t.formState.errors,s=Object(p.useContext)(_),i=(s.user,s.setUser),c=function(){var e=Object(C.a)(S.a.mark((function e(t){var r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.username,a=t.password,y.b.promise(ze.post("/login",{username:r,password:a}),{pending:"Login...",success:{render:function(e){var t,r=e.data;if(1!==(null===(t=r.data)||void 0===t?void 0:t.ok))return r.data.message;var a=r.data.token;P(a);var o=Object(we.a)(a);return i(o.username),n.push("/"),"Hi, ".concat(o.username," welcome")||!1}},error:{render:function(e){var n;return(null===(n=e.data.response.data)||void 0===n?void 0:n.message)||"Login rejected \ud83e\udd2f"}}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(D.jsx)(Ce,{children:Object(D.jsxs)(Le,{onSubmit:a(c),children:[Object(D.jsxs)("div",{children:[Object(D.jsx)(Pe,{children:"Username"}),Object(D.jsx)(Ue,Object(H.a)({type:"text",placeholder:"Username",$danger:o.username},r("username",{required:"username is required"}))),o.username&&Object(D.jsx)(Fe,{children:o.username.message})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)(Pe,{children:"Password"}),Object(D.jsx)(Ue,Object(H.a)({type:"password",placeholder:"Password",$danger:o.password},r("password",{required:"password is required",minLength:{value:6,message:"cannot be less than 6 digits"}}))),o.password&&Object(D.jsx)(Fe,{children:o.password.message})]}),Object(D.jsx)(qe,{children:"Login"})]})})},Be=function(){return Object(D.jsx)("h1",{children:"Not Found Page"})},Ie=function(){return Object(D.jsxs)(k.c,{children:[Object(D.jsx)(k.a,{path:"/",exact:!0,component:fe}),Object(D.jsx)(k.a,{path:"/about",component:he}),Object(D.jsx)(k.a,{path:"/new_post",component:ge}),Object(D.jsx)(k.a,{path:"/post/:id",component:ve}),Object(D.jsx)(k.a,{path:"/login",component:Re}),Object(D.jsx)(k.a,{path:"*",component:Be})]})},$e=t(10),Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(p.useState)(e),t=Object(O.a)(n,2),r=t[0],a=t[1],o=Object(p.useCallback)((function(){return a((function(e){return!e}))}),[]);return[r,o]};var He=Object($e.a)("div",{target:"e1zeili0"})({name:"7cndkg",styles:"position:fixed;display:flex;justify-content:center;align-items:flex-start;inset:0;background:rgba(0, 0, 0, .5);transition:all .2s;z-index:99;user-select:none;animation:zoom-in 1s"}),Me=function(e){var n=e.children;return Object(D.jsx)(He,{children:n})},Ne=t(61),Te=t(23);var _e=Object($e.a)("h2",{target:"ei8ep8010"})({name:"1bvh8bk",styles:"margin:2rem 0 0;text-align:center"}),De=Object($e.a)("form",{target:"ei8ep809"})({name:"ferpkv",styles:"margin:1.5rem 0 1rem"}),Ae=Object($e.a)("div",{target:"ei8ep808"})({name:"1c4td0t",styles:"position:relative;width:100%;margin:.75rem 0 .75rem"}),Je=Object($e.a)("div",{target:"ei8ep807"})({name:"102mht6",styles:"font-size:.85rem;position:absolute;top:0;bottom:0;padding:.7rem .7rem .5rem;color:#aaa;transition:transform 0.1s;pointer-events:none"}),Ge=Object($e.a)("input",{target:"ei8ep806"})("font-size:.9rem;width:100%;border:1px #dbdbdb solid;border:1px solid transparent;border-radius:5px;padding:1rem .7rem .4rem;margin:0 0 .6rem;outline:none;letter-spacing:0.5px;background:#f1f5ff;color:#363636;box-shadow:inset 0 0.0625em 0.125em rgb(10 10 10 / 5%);&:placeholder-shown::placeholder{color:transparent;}&:focus{box-shadow:1px 1px 1px #ccc;}&:focus+",Je,",&:not(:placeholder-shown)+",Je,"{color:#757575;transform:scale(0.75) translate(-18px, -22px);}",(function(e){return e.$danger&&"\n    border-color: #f02849;\n  "}),";"),Ve=Object($e.a)("div",{target:"ei8ep805"})({name:"pp9nji",styles:"position:relative;width:100%;margin:1.25rem 0 .75rem"}),We=Object($e.a)("label",{target:"ei8ep804"})("display:grid;grid-template-columns:1rem auto;gap:0.5em;line-height:1.2;font-size:13px;color:#757575;font-weight:500;margin:10px 0px 25px;cursor:pointer;",(function(e){return e.$danger&&"\n    color: #f02849;\n  "}),";"),Ye=Object($e.a)("input",{target:"ei8ep803"})({name:"srejxe",styles:"transform:translate(3px, 3px)"}),Ke=Object($e.a)("p",{target:"ei8ep802"})({name:"12b3o06",styles:"font-size:.6rem;font-weight:500;position:absolute;bottom:-.5rem;width:100%;text-align:right;color:#f02849"}),Qe=Object($e.a)("button",{target:"ei8ep801"})({name:"1xf0z9y",styles:"font-size:.9rem;padding:.3rem 1rem;width:100%;margin-top:.5rem;background-color:#a29bfe;border-color:transparent;border-radius:4px;box-shadow:2px 2px 2px #666;color:#fff;cursor:pointer;transition:all .3s;&:active{transform:translate(2px, 2px);box-shadow:none;}&:hover{transform:scale(1.05);}"}),Xe=Object($e.a)("div",{target:"ei8ep800"})({name:"1ef5wz9",styles:"display:flex;justify-content:center;p{color:#aaa;}button{position:relative;font-weight:500;color:#a29bfe;background:transparent;margin-left:10px;border:none;cursor:pointer;&::after{content:'';position:absolute;bottom:0;right:0;left:0;width:0%;height:2px;background:#a29bfe;transition:width 1s .2s;}&:hover::after{width:100%;}}"}),Ze=Te.b({username:Te.d().required(),password:Te.d().min(6).max(18).required()}).required(),en=function(e){var n=e.toggleModal,t=e.switchForm,r=Object(p.useContext)(_).setUser,a=Object(Se.d)({resolver:Object(Ne.a)(Ze)}),o=a.register,s=a.handleSubmit,i=a.reset,c=a.formState.errors,d=function(){var e=Object(C.a)(S.a.mark((function e(t){var a,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.username,o=t.password,y.b.promise(ze.post("/login",{username:a,password:o}),{pending:"Loading...",success:{render:function(e){var t,a=e.data;if(1!==(null===(t=a.data)||void 0===t?void 0:t.ok))return a.data.message;var o=a.data.token,s=Object(we.a)(o).username;return P(o),r(s),n(),"Hi, ".concat(s," welcome")||!1}},error:{render:function(e){var n,t,r=e.data;return i(),(null===(n=r.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Login rejected \ud83e\udd2f"}}},{autoClose:3e3});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(_e,{children:"Log into Blog"}),Object(D.jsxs)(De,{onSubmit:s(d),children:[Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Ge,Object(H.a)({type:"text",placeholder:"...",$danger:c.username},o("username"))),Object(D.jsx)(Je,{children:"Username"}),c.username&&Object(D.jsx)(Ke,{children:c.username.message})]}),Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Ge,Object(H.a)({type:"password",placeholder:"...",$danger:c.password},o("password"))),Object(D.jsx)(Je,{children:"Password"}),c.password&&Object(D.jsx)(Ke,{children:c.password.message})]}),Object(D.jsx)(Qe,{children:"Log In"})]}),Object(D.jsxs)(Xe,{children:[Object(D.jsx)("p",{children:"Don't have an account?"}),Object(D.jsx)("button",{onClick:t,children:"Sign up"})]})]})},nn=Te.b({nickname:Te.d().min(2).max(8).required(),username:Te.d().min(4).max(8).required(),password:Te.d().min(6).max(12).required(),confirmPassword:Te.d().min(6).max(12).oneOf([Te.c("password"),null],"Passwords must be match").required(),checkRules:Te.a().oneOf([!0],"(must be required)")}).required(),tn=function(e){var n=e.toggleModal,t=e.switchForm,r=Object(p.useContext)(_).setUser,a=Object(Se.d)({resolver:Object(Ne.a)(nn)}),o=a.register,s=a.handleSubmit,i=a.reset,c=a.formState.errors,d=function(){var e=Object(C.a)(S.a.mark((function e(t){var a,o,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.nickname,o=t.username,s=t.password,y.b.promise(ze.post("/register",{nickname:a,username:o,password:s}),{pending:"Loading...",success:{render:function(e){var t,a=e.data;if(1!==(null===(t=a.data)||void 0===t?void 0:t.ok))return a.data.message;var o=a.data.token,s=Object(we.a)(o).username;return P(o),r(s),n(),"Hi, ".concat(s," welcome")||!1}},error:{render:function(e){var n,t=e.data;return i(),(null===(n=t.response.data)||void 0===n?void 0:n.message)||"Login rejected \ud83e\udd2f"}}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(_e,{children:"Create an account"}),Object(D.jsxs)(De,{onSubmit:s(d),children:[Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Ge,Object(H.a)({type:"text",placeholder:"...",$danger:c.nickname},o("nickname"))),Object(D.jsx)(Je,{children:"Nickname"}),c.nickname&&Object(D.jsx)(Ke,{children:c.nickname.message})]}),Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Ge,Object(H.a)({type:"text",placeholder:"...",$danger:c.username},o("username"))),Object(D.jsx)(Je,{children:"Username"}),c.username&&Object(D.jsx)(Ke,{children:c.username.message})]}),Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Ge,Object(H.a)({type:"password",placeholder:"...",$danger:c.password},o("password"))),Object(D.jsx)(Je,{children:"Password"}),c.password&&Object(D.jsx)(Ke,{children:c.password.message})]}),Object(D.jsxs)(Ae,{children:[Object(D.jsx)(Ge,Object(H.a)({type:"password",placeholder:"...",$danger:c.confirmPassword},o("confirmPassword"))),Object(D.jsx)(Je,{children:"Confirm Password"}),c.confirmPassword&&Object(D.jsx)(Ke,{children:c.confirmPassword.message})]}),Object(D.jsx)(Ve,{children:Object(D.jsxs)(We,{$danger:c.checkRules,children:[Object(D.jsx)(Ye,Object(H.a)({type:"checkbox",$danger:c.checkRules},o("checkRules"))),"By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings. ",c.checkRules&&c.checkRules.message]})}),Object(D.jsx)(Qe,{children:"Sing Up"})]}),Object(D.jsxs)(Xe,{children:[Object(D.jsx)("p",{children:"Already have an account?"}),Object(D.jsx)("button",{onClick:t,children:"Log in"})]})]})};E.b.add(I.a);var rn=Object($e.a)("div",{target:"e1887xno1"})({name:"8w2meb",styles:"position:relative;font-size:.8rem;width:400px;padding:1.5rem 1.25rem 1.25rem;margin:3rem 0 0;border-radius:10px;background:#fff;box-shadow:0 0.5em 1em -0.125em rgb(10 10 10 / 10%),0 0px 0 1px rgb(10 10 10 / 2%)"}),an=Object($e.a)("div",{target:"e1887xno0"})({name:"1ohj6kx",styles:"font-size:.7rem;position:absolute;top:32px;left:28px;cursor:pointer;& span{margin-left:10px;}&::after{content:'';position:absolute;bottom:-4px;right:0;left:0;width:0%;height:2px;background:#a29bfe;transition:width 1s .2s;}&:hover{font-weight:700;}&:hover::after{width:100%;}"}),on=function(e){var n=e.handleToggle,t=Ee(!0),r=Object(O.a)(t,2),a=r[0],o=r[1];return Object(D.jsx)(Me,{children:Object(D.jsxs)(rn,{children:[Object(D.jsxs)(an,{onClick:n,children:[Object(D.jsx)(B.a,{icon:$.a}),Object(D.jsx)("span",{children:"Back"})]}),a?Object(D.jsx)(en,{toggleModal:n,switchForm:o}):Object(D.jsx)(tn,{toggleModal:n,switchForm:o})]})})};var sn=Object($e.a)("header",{target:"ejo6f2m4"})({name:"10g11oy",styles:"display:flex;width:100%;justify-content:space-between;align-items:center"}),cn=Object($e.a)("div",{target:"ejo6f2m3"})({name:"zjik7",styles:"display:flex"}),dn=Object($e.a)(w.c,{activeClassName:"active",target:"ejo6f2m2"})({name:"17x7skg",styles:"justify-content:center;align-items:center;box-sizing:border-box;padding:2px 12px;border-radius:8px;cursor:pointer;color:#999;text-decoration:none;&+&{margin-left:6px;}&.active{color:#000;}&:hover{color:#444;background:#ddd;}"}),ln=Object($e.a)("span",{target:"ejo6f2m1"})({name:"10857ze",styles:"font-size:1rem;font-weight:700;margin-right:1rem"}),bn=Object($e.a)("button",{target:"ejo6f2m0"})({name:"18l48m5",styles:"font-size:.9rem;padding:2px 8px;background-color:#a29bfe;border-color:transparent;border-radius:4px;box-shadow:2px 2px 2px #666;color:#fff;cursor:pointer;transition:all .3s;&:active{transform:translate(2px, 2px);box-shadow:none;}"}),un=function(){var e=Ee(),n=Object(O.a)(e,2),t=n[0],r=n[1],a=Object(p.useContext)(_),o=a.user,s=a.setUser;return Object(D.jsxs)(sn,{children:[t&&Object(D.jsx)(on,{handleToggle:r}),Object(D.jsxs)(cn,{children:[Object(D.jsx)(dn,{exact:!0,to:"/",children:"Home"}),o&&Object(D.jsx)(dn,{to:"/new_post",children:"Post"}),Object(D.jsx)(dn,{to:"/about",children:"About me"})]}),Object(D.jsxs)("div",{children:[(null===o||void 0===o?void 0:o.username)&&Object(D.jsx)(ln,{children:"Hi "+o.username}),o?Object(D.jsx)(bn,{onClick:function(){localStorage.removeItem(L),s(null),y.b.warn("Logout success !",{autoClose:3e3})},children:"log out"}):Object(D.jsx)(bn,{onClick:r,children:"login"})]})]})};var jn,pn,mn,fn=Object($e.a)("footer",{target:"e22pel00"})({name:"1xd19qn",styles:"font-family:\"Cyber\",-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue';font-size:.8rem;padding:16px 0 16px;text-align:center;a{font-family:\"Cyber\",-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue';font-style:italic;color:#74b9ff;}"}),xn=function(){return Object(D.jsxs)(fn,{children:["\xa9 copyright 2021 by ",Object(D.jsx)("a",{href:"https://github.com/CoolizzLuo",target:"_blank",rel:"noreferrer",children:"Enzo"})]})},hn=v.a.div(jn||(jn=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  padding: 0 30px;\n  max-width: 768px;\n"]))),gn=v.a.div(pn||(pn=Object(j.a)(["\n  text-align: center;\n  width: 100%;\n  /* height: calc(100vh - 204px); */\n  height: calc(100vh - 64px - 24px - 53px );\n  overflow: auto;\n  margin: 24px 0 0;\n  /* padding: 24px 0 0; */\n"]))),On=function(){var e=Object(p.useState)(null),n=Object(O.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)([]),o=Object(O.a)(a,2),s=o[0],i=o[1],c=U();return Object(p.useLayoutEffect)((function(){R().then((function(e){1===e.ok&&r(e.data)}))}),[c]),Object(p.useLayoutEffect)((function(){q().then((function(e){i(e)}))}),[]),Object(D.jsxs)(_.Provider,{value:{user:t,setUser:r,userList:s},children:[Object(D.jsx)(y.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}),Object(D.jsx)(hn,{children:Object(D.jsxs)(w.a,{children:[Object(D.jsx)(un,{}),Object(D.jsx)(gn,{children:Object(D.jsx)(Ie,{})}),Object(D.jsx)(xn,{})]})})]})};x.a.render(Object(D.jsxs)(m.a.StrictMode,{children:[Object(D.jsx)(h.a,{styles:Object(h.b)(mn||(mn=Object(j.a)(["",""])),g)}),Object(D.jsx)(On,{})]}),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.ad1ef69f.chunk.js.map