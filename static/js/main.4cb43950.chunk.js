(this["webpackJsonpreal-time-chat"]=this["webpackJsonpreal-time-chat"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(4),r=n.n(c),s=n(16),i=n.n(s),u=(n(25),n(10)),o=(n(26),n(8)),l=(n(15),n(14),n(17)),d=(n(29),function(e){return Object(a.jsx)("button",{className:"signInButton",onClick:function(){var t=new o.a.auth.GoogleAuthProvider;e.auth.signInWithPopup(t)},children:"Sign in with Google"})}),h=n(13),j=n.n(h),m=n(18),b=n(19),f=(n(31),function(e){return Object(a.jsxs)("div",{className:e.sent?"sent":"received",children:[Object(a.jsx)("img",{className:e.sent?"sent-image":"received-image",src:e.photoURL}),Object(a.jsx)("div",{className:e.sent?"sent-message":"received-message",children:e.message})]})}),p=(n(32),function(e){var t=e.firestore.collection("messages"),n=t.orderBy("createdAt"),r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],l=s[1],d=Object(b.a)(n,{idField:"id"}),h=Object(u.a)(d,1)[0];Object(c.useEffect)((function(){p()}),[h]);var p=function(){var e=document.getElementById("messages");e&&(e.scrollTop=e.scrollHeight)},g=function(){var n=Object(m.a)(j.a.mark((function n(a){var c,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""===i){n.next=4;break}return n.next=4,t.add({text:i,createdAt:o.a.firestore.FieldValue.serverTimestamp(),uid:null===(c=e.auth.currentUser)||void 0===c?void 0:c.uid,photoURL:null===(r=e.auth.currentUser)||void 0===r?void 0:r.photoURL}).then((function(){return p()})).catch((function(e){return alert(e)}));case 4:l("");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"messages",className:"messages",children:h&&h.map((function(t){var n;return Object(a.jsx)(f,{message:t.text,sent:t.uid===(null===(n=e.auth.currentUser)||void 0===n?void 0:n.uid),photoURL:t.photoURL},t.id)}))}),Object(a.jsxs)("form",{className:"chatBox",onSubmit:g,children:[Object(a.jsx)("input",{placeholder:"Enter your message...",value:i,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("button",{className:"sendButton",type:"submit",children:"Send"})]})]})}),g=(n(33),function(e){return e.auth.currentUser&&Object(a.jsx)("button",{className:"signOutButton",onClick:function(){return e.auth.signOut()},children:"Sign out"})});o.a.initializeApp({apiKey:"AIzaSyDi_lxSLjiaMSY5_-otw2Lx4urkn_kbhTk",authDomain:"real-time-chat-75142.firebaseapp.com",projectId:"real-time-chat-75142",storageBucket:"real-time-chat-75142.appspot.com",messagingSenderId:"967555832373",appId:"1:967555832373:web:c170b32e8a4717d5376f7c",measurementId:"G-M7G77BR3V9"});var v=o.a.auth(),O=o.a.firestore();var x=function(){var e=Object(l.a)(v),t=Object(u.a)(e,1)[0];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"title",children:"Real-time Chatroom"}),Object(a.jsx)(g,{auth:v})]}),t?Object(a.jsx)(p,{auth:v,firestore:O}):Object(a.jsx)(d,{auth:v})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.4cb43950.chunk.js.map