(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),o=t(2),i=function(e){var n=e.persons,t=e.filter,a=e.deletePerson,u=n.map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{id:e.id,onClick:a},"delete"))})),l=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{id:e.id,onClick:a},"delete"))}));return""===t?u:l},c=function(e){var n=e.filter,t=e.changeHandler;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.name,t=e.number,a=e.submitHandler,u=e.nameChangeHandler,l=e.numberChangeHandler;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=t(3),d=t.n(f),s="/api/persons",h=function(){return d.a.get(s).then((function(e){return e.data}))},b=function(e){return d.a.post(s,e).then((function(e){return e.data}))},v=function(e){var n=s+"/"+e;return d.a.delete(n).then((function(e){return e.data}))},p=function(e,n){var t=s+"/"+e;return d.a.put(t,n).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.fail?"failNotification":"notification";return null===n?null:r.a.createElement("div",{className:t},n)},E=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)(""),f=Object(o.a)(l,2),d=f[0],s=f[1],E=Object(a.useState)(""),w=Object(o.a)(E,2),j=w[0],C=w[1],O=Object(a.useState)(""),k=Object(o.a)(O,2),H=k[0],y=k[1],S=Object(a.useState)(null),T=Object(o.a)(S,2),L=T[0],D=T[1],N=Object(a.useState)(null),P=Object(o.a)(N,2),A=P[0],I=P[1];Object(a.useEffect)((function(){h().then((function(e){return u(e)}))}),[]);var J=function(e,n){p(e,n).then((function(a){u(t.map((function(n){return n.id!==e?n:a}))),s(""),C(""),I(!1),D("Updated "+n.name),setTimeout((function(){return D(null)}),3e3)})).catch((function(e){I(!0),D("Information of "+n.name+" has already been removed from the server."),setTimeout((function(){return D(null)}),3e3)}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:L,fail:A}),r.a.createElement(c,{filter:H,changeHandler:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(m,{name:d,number:j,submitHandler:function(e){e.preventDefault();var n={name:d,number:j};if(0===t.filter((function(e){return e.name===d})).length)b(n).then((function(e){u(t.concat(e)),s(""),C(""),I(!1),D("Added "+n.name),setTimeout((function(){return D(null)}),3e3)})).catch((function(e){console.log(e.response.data),console.log(typeof e.response.data),I(!0),D("this is working"),setTimeout((function(){return D(null)}),3e3)}));else if(window.confirm(n.name+" is already in the phonebook. Replace the old number?")){var a=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})).id;J(a,n)}},nameChangeHandler:function(e){console.log(e.target.value),s(e.target.value)},numberChangeHandler:function(e){console.log(e.target.value),C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(i,{persons:t,filter:H,deletePerson:function(e){var n=t.find((function(n){return n.id===e.target.id}));window.confirm("Delete "+n.name+"?")&&v(n.id).then((function(e){u(t.filter((function(e){return e.id!==n.id}))),I(!1),D("Deleted "+n.name),setTimeout((function(){return D(null)}),3e3)}))}}))};t(36);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d04f8ae8.chunk.js.map