(this["webpackJsonpjs-keycodes"]=this["webpackJsonpjs-keycodes"]||[]).push([[0],{17:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var c={};t.r(c),t.d(c,"CodeDisplay",(function(){return l})),t.d(c,"KeyDisplay",(function(){return m})),t.d(c,"InitialMessage",(function(){return O})),t.d(c,"App",(function(){return x})),t.d(c,"Keyboard",(function(){return k}));var r,i,o,a,s,d=t(0),u=t.n(d),j=t(9),f=t.n(j),b=(t(17),t(7)),y=t(2),p=t(3),l=p.a.div(r||(r=Object(y.a)(["\n    font-size: 12rem;\n    display: flex;\n    justify-content: center;\n    font-family: 'Mate SC', serif;\n    margin: 0.5em 0 2em 0;\n"]))),m=p.a.div(i||(i=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n"]))),O=p.a.div(o||(o=Object(y.a)(["\n    font-size: 2em;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    margin-top: 9em;\n"]))),x=p.a.div(a||(a=Object(y.a)(["\n"]))),k=p.a.kbd(s||(s=Object(y.a)(["\n    background-color: #f4f4f4;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    box-shadow: 0 1px 0 rgba(0,0,0,.1), inset 0 0 0 1px #fff;\n    color: #333;\n    font-size: 2.5rem;\n    padding: .25em .7em;\n    margin: 0.5em .15em;\n"]))),v=t(1),g=function(e){var n=e.code;return Object(v.jsx)(c.CodeDisplay,{children:n||" "})},h=function(e){var n=e.keyboardKey;return Object(v.jsx)(c.KeyDisplay,{children:n?Object(v.jsxs)(c.Keyboard,{children:[" ",n," "]}):" "})},K=function(){return Object(v.jsx)(c.InitialMessage,{children:"Press a key to start"})},S=function(){document.title="JS-KeyCodes";var e=Object(d.useState)(""),n=Object(b.a)(e,2),t=n[0],r=n[1],i=Object(d.useState)(0),o=Object(b.a)(i,2),a=o[0],s=o[1];new Audio("key.mp3");Object(d.useEffect)((function(){return document.addEventListener("keyup",u),function(){document.removeEventListener("keyup",u)}}),[]);var u=function(e){r(e.key),s(e.keyCode)};return Object(v.jsxs)(c.App,{children:[!a&&Object(v.jsx)(K,{}),Object(v.jsx)(g,{code:a}),Object(v.jsx)(h,{keyboardKey:" "===t?"Space":t})]})};f.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.cd823b71.chunk.js.map