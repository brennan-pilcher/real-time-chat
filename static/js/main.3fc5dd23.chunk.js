(this["webpackJsonpreal-time-chat"]=this["webpackJsonpreal-time-chat"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(4),c=n.n(r),i=n(16),s=n.n(i),u=(n(25),n(10)),o=(n(26),n(8)),d=(n(15),n(14),n(17)),l=(n(29),function(e){return Object(a.jsx)("button",{className:"signInButton",onClick:function(){var t=new o.a.auth.GoogleAuthProvider;e.auth.signInWithPopup(t)},children:"Sign in with Google"})}),h=n(13),j=n.n(h),m=n(18),b=n(19),p=(n(31),function(e){return Object(a.jsxs)("div",{className:e.sent?"sent":"received",children:[Object(a.jsx)("img",{className:e.sent?"sent-image":"received-image",src:e.photoURL}),Object(a.jsx)("div",{className:e.sent?"sent-message":"received-message",children:e.message})]})}),f=(n(32),function(e){var t=e.firestore.collection("messages"),n=t.orderBy("createdAt").limit(25),c=Object(r.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],l=Object(b.a)(n,{idField:"id"}),h=Object(u.a)(l,1)[0],f=function(){var n=Object(m.a)(j.a.mark((function n(a){var r,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""===s){n.next=4;break}return n.next=4,t.add({text:s,createdAt:o.a.firestore.FieldValue.serverTimestamp(),uid:null===(r=e.auth.currentUser)||void 0===r?void 0:r.uid,photoURL:null===(c=e.auth.currentUser)||void 0===c?void 0:c.photoURL}).catch((function(e){return alert(e)}));case 4:d("");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"messages",children:h&&h.map((function(t){var n;return Object(a.jsx)(p,{message:t.text,sent:t.uid===(null===(n=e.auth.currentUser)||void 0===n?void 0:n.uid),photoURL:t.photoURL},t.id)}))}),Object(a.jsxs)("form",{onSubmit:f,children:[Object(a.jsx)("input",{placeholder:"Enter your message...",value:s,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("button",{className:"sendButton",type:"submit",children:"Send"})]})]})}),g=(n(33),function(e){return e.auth.currentUser&&Object(a.jsx)("button",{className:"signOutButton",onClick:function(){return e.auth.signOut()},children:"Sign out"})});o.a.initializeApp({apiKey:"AIzaSyDi_lxSLjiaMSY5_-otw2Lx4urkn_kbhTk",authDomain:"real-time-chat-75142.firebaseapp.com",projectId:"real-time-chat-75142",storageBucket:"real-time-chat-75142.appspot.com",messagingSenderId:"967555832373",appId:"1:967555832373:web:c170b32e8a4717d5376f7c",measurementId:"G-M7G77BR3V9"});var v=o.a.auth(),O=o.a.firestore();var x=function(){var e=Object(d.a)(v),t=Object(u.a)(e,1)[0];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"title",children:"Real-time Chatroom"}),Object(a.jsx)(g,{auth:v})]}),Object(a.jsx)("section",{children:t?Object(a.jsx)(f,{auth:v,firestore:O}):Object(a.jsx)(l,{auth:v})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.3fc5dd23.chunk.js.map