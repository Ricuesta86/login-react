(this["webpackJsonpteam-react-51-comfeco"]=this["webpackJsonpteam-react-51-comfeco"]||[]).push([[0],{146:function(e,c,t){},147:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t(27),n=t.n(s),o=t(21),r=t(18),l=t(53),i="[Auth] Login",d="[Auth] Logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case i:return{uid:c.payload.uid,name:c.payload.displayName};case d:return{};default:return e}},m="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,b=Object(r.c)({auth:j}),p=Object(r.e)(b,m(Object(r.a)(l.a))),x=t(10),u=t(7),h=t(17),O=t(25);t(148),t(64);O.a.initializeApp({apiKey:"AIzaSyDnCNVgd4DbPQGRGgLkokR75tgjkcgJKR4",authDomain:"login-react-a0855.firebaseapp.com",projectId:"login-react-a0855",storageBucket:"login-react-a0855.appspot.com",messagingSenderId:"696848255815",appId:"1:696848255815:web:da5555c3332d5fdb9d5a62"});O.a.firestore();var g=new O.a.auth.GoogleAuthProvider,v=function(e,c){return{type:i,payload:{uid:e,displayName:c}}},f=t(29),N=t(36),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=Object(a.useState)(e),t=Object(h.a)(c,2),s=t[0],n=t[1],o=function(){n(e)},r=function(e){var c=e.target;n(Object(N.a)(Object(N.a)({},s),{},Object(f.a)({},c.name,c.value)))};return[s,r,o]},w=t(1),k=function(){var e=Object(o.b)(),c=y({email:"ricuesta1986@gmail.com",password:"1234567"}),t=Object(h.a)(c,2),a=t[0],s=t[1],n=a.email,r=a.password;return Object(w.jsxs)("form",{onSubmit:function(c){c.preventDefault(),e((function(e){setTimeout((function(){e(v(123,"Ricuesta"))}),3500)}))},children:[Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("input",{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Correo electr\xf3nico",value:n,onChange:s})}),Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",placeholder:"Contrace\xf1a",value:r,onChange:s})}),Object(w.jsxs)("div",{className:"row py-3 text-sm-center text-md-center",children:[Object(w.jsx)("div",{className:"col-sm-12 col-md-8 col-lg-6",children:Object(w.jsx)(x.b,{to:"/reassign",className:"link",children:"\xbfOlvidaste tu contrase\xf1a?"})}),Object(w.jsxs)("div",{className:"col-sm-12 col-md-8 col-lg-6 text-white ",children:[Object(w.jsx)("input",{type:"checkbox",name:"checkbox",id:"checkbox"})," Mantenerme conectado."]})]}),Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("button",{className:"btn btn-secondary btn-block py-2",children:"Ingresar"})}),Object(w.jsx)("p",{className:"text-center py-2 text-white font-weight-bold",children:"Tambi\xe9n puedes iniciar con tus redes"})]})},C=function(){return Object(w.jsxs)("div",{className:"row pb-5",children:[Object(w.jsx)("div",{className:"col-sm-10 col-md-4 col-lg-5 text-center",children:Object(w.jsx)(x.c,{className:"font-weight-bold nav-form",activeClassName:"active",exact:!0,to:"/login",children:"Iniciar sesi\xf3n"})}),Object(w.jsx)("div",{className:"col-sm-1 col-md-4 col-lg-2 text-center",children:"|"}),Object(w.jsx)("div",{className:"col-sm-12 col-md-4 col-lg-5 text-center",children:Object(w.jsx)(x.c,{className:"font-weight-bold nav-form",activeClassName:"active",exact:!0,to:"/register",children:"Registrate"})})]})},E=function(){var e=Object(o.b)();return Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-6 text-center",children:Object(w.jsx)("button",{className:"btn btn-secondary",children:"Ingresar con Facebook"})}),Object(w.jsx)("div",{className:"col-6 text-center",children:Object(w.jsx)("button",{className:"btn btn-secondary",onClick:function(){e((function(e){O.a.auth().signInWithPopup(g).then((function(c){var t=c.user;e(v(t.uid,t.displayName))}))}))},children:"Ingresar con Google"})})]})},I=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"card col-sm-12 col-md-8 col-lg-6 bg-dark p-lg-5 p-sm-5 p-md-4 p-5",children:[Object(w.jsx)(C,{}),Object(w.jsx)(k,{}),Object(w.jsx)(E,{})]})})},D=function(){var e=y({email:""}),c=Object(h.a)(e,2),t=c[0],a=c[1],s=t.email;return Object(w.jsxs)("div",{className:"card col-sm-12 col-md-8 col-lg-6 bg-dark p-lg-5 p-sm-5 p-md-4 p-5",children:[Object(w.jsx)("h2",{className:"reassign",children:"Reasignar contrace\xf1a"}),Object(w.jsx)("p",{className:"text-white",children:"Te enviaremos un correo electr\xf3nico con un enlace privado para que reasignes tu contrace\xf1a. Este enlace sera valido por una hora."}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(s)},children:[Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("input",{type:"text",name:"email",placeholder:"Correo electr\xf3nico",className:"form-control",value:s,onChange:a})}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-6",children:Object(w.jsx)("button",{className:"btn btn-secondary",children:"Enviar enlace"})}),Object(w.jsx)("div",{className:"col-6 text-right",children:Object(w.jsx)(x.b,{to:"/login",className:"link ",children:"Iniciar sesi\xf3n"})})]})]})]})},S=t(54),R=t.n(S),T=function(){var e=y({nick:"",email:"",password:"",passwordVerificar:""}),c=Object(h.a)(e,2),t=c[0],a=c[1],s=t.nick,n=t.email,o=t.password,r=t.passwordVerificar,l=function(){return s.trim().length<3?(console.log("Se requiere el nick"),!1):R.a.isEmail(n)?!(o!==r||o<6)||(console.log("La contrace\xf1a debe tener mas de 6 caracteres y considir con la otra."),!1):(console.log("El Email no es valido"),!1)};return Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l()&&console.log("Formulario correcto")},children:[Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("input",{type:"text",name:"nick",id:"nick",className:"form-control",placeholder:"Nick",value:s,onChange:a})}),Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("input",{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Correo electr\xf3nico",value:n,onChange:a})}),Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",placeholder:"Contrace\xf1a",value:o,onChange:a})}),Object(w.jsx)("div",{className:"py-2",children:Object(w.jsx)("input",{type:"password",name:"passwordVerificar",id:"passwordVerificar",className:"form-control",placeholder:"Verificar la Contrace\xf1a",value:r,onChange:a})}),Object(w.jsx)("div",{className:"py-1",children:Object(w.jsx)("button",{className:"btn btn-secondary btn-block",children:"Crear una cuenta"})}),Object(w.jsx)("p",{className:"text-center py-1 text-white font-weight-bold",children:"O reg\xedstrate usando"})]})},V=function(){return Object(w.jsxs)("div",{className:"card col-sm-12 col-md-8 col-lg-6 bg-dark p-lg-5 p-sm-5 p-md-4 p-5",children:[Object(w.jsx)(C,{}),Object(w.jsx)(T,{}),Object(w.jsx)(E,{}),Object(w.jsxs)("p",{className:"text-white text-center pt-4 terminos",children:["Al registrate, estas aceptando ",Object(w.jsx)(x.b,{to:"",children:"T\xe9rminos y condiciones"})," y la",Object(w.jsx)(x.b,{to:"",children:" Pol\xedtica de privacidad y protecci\xf3n de datos"})," de COMFECO"]})]})},_=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("footer",{className:"bg-dark container-fluid",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-lg-4 col-sm-12 col-md-4 text-white text-center font-weight-bold py-2",children:"Copyright \xa92020"}),Object(w.jsx)("div",{className:"col-lg-4 col-sm-12 col-md-4 text-white text-center font-weight-bold py-2",children:"Developed by Team 51 Comfeco"}),Object(w.jsxs)("div",{className:"col-lg-4 d-flex justify-content-center",children:[Object(w.jsx)("img",{src:"./assets/facebook.svg",alt:"Facebook",className:"img-svg"}),Object(w.jsx)("img",{src:"./assets/discord.svg",alt:"Discord",className:"img-svg"}),Object(w.jsx)("img",{src:"./assets/youtube-icon.svg",alt:"Youtube",className:"img-svg"})]})]})})})},A=function(){return Object(w.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(w.jsx)(x.b,{className:"navbar-brand",to:"/",children:Object(w.jsx)("img",{src:"./assets/logo.png",alt:"Logo",className:"img-logo"})}),Object(w.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(w.jsx)("ul",{className:"navbar-nav ml-auto"})})]})},F=function(){return Object(w.jsx)(x.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(A,{}),Object(w.jsx)("div",{className:"container-md d-flex d-flex justify-content-center align-items-center flex-wrap p-2 p-md-4 app",children:Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{exact:!0,path:"/login",component:I}),Object(w.jsx)(u.a,{exact:!0,path:"/register",component:V}),Object(w.jsx)(u.a,{exact:!0,path:"/reassign",component:D}),Object(w.jsx)(u.a,{path:"/",component:I})]})}),Object(w.jsx)(_,{})]})})},L=function(){return Object(w.jsx)(o.a,{store:p,children:Object(w.jsx)(F,{})})};t(146);n.a.render(Object(w.jsx)(L,{}),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.9302b31c.chunk.js.map