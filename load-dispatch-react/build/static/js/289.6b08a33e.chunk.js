"use strict";(self.webpackChunkcentral_dispatch=self.webpackChunkcentral_dispatch||[]).push([[289],{7757:function(e,a,n){n.r(a),n.d(a,{default:function(){return Z}});var t=n(4942),r=n(1413),i=n(4165),l=n(5861),o=n(9439),c=n(2791),d=n(7689),p=n(83),u=n(2810),s=n(3999),m=n(3342),h=n(9508),f=n(161),v=n(5434),x=n(9895),g=n(7212),j=n(184),Z=function(){var e,a=(0,c.useContext)(f.V),n=(0,d.s0)(),Z=(0,h.x)(),k=Z.isLoading,y=Z.error,b=Z.sendRequest,C=Z.clearError,L=(0,c.useState)({model:{value:"",isValid:!1},address:{value:"",isValid:!1},payment:{value:"",isValid:!1},price:{value:"",isValid:!1},phoneNumber:{value:"",isValid:!1},pickupDate:{value:"",isValid:!1},pickupLocation:{value:"",isValid:!1},dropOffLocation:{value:"",isValid:!1},image:{value:null,isValid:!1},isValid:!0}),D=(0,o.Z)(L,2),N=D[0],q=D[1];function P(e){var a=e.target?e.target:e,n=a.name,i=a.value;q((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},n,i))})),console.log(n,i)}return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.Z,{error:y,onClear:C}),(0,j.jsxs)("form",{className:"load-form",onSubmit:function(t){return(e=e||(0,l.Z)((0,i.Z)().mark((function e(t){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("https://load-dispatch-rest-api.vercel.app/api/loads"),e.prev=2,(r=new FormData).append("model",N.model),r.append("pickupDate",N.pickupDate),r.append("pickupLocation",N.pickupLocation),r.append("dropOffLocation",N.dropOffLocation),r.append("price",N.price),r.append("phoneNumber",N.phoneNumber),r.append("payment",N.payment),r.append("address",N.address),r.append("image",N.image.value),r.append("companyName",a.companyName),e.next=16,b("https://load-dispatch-rest-api.vercel.app/api/loads","POST",r,{Authorization:"Bearer "+a.token});case 16:n("/".concat(a.userId,"/loads")),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(2);case 21:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)},children:[k&&(0,j.jsx)(x.Z,{asOverlay:!0}),(0,j.jsx)(u.Z,{id:"model",element:"input",type:"text",label:"Model",name:"model",onChange:P,value:N.model.value,required:!0}),(0,j.jsx)(u.Z,{id:"address",element:"input",type:"text",label:"Full address",name:"address",onChange:P,value:N.address.value,required:!0}),(0,j.jsxs)("fieldset",{className:"radio-buttons",children:[(0,j.jsx)("legend",{children:"Payment Method"}),(0,j.jsx)(u.Z,{element:"radio",type:"radio",id:"cash",label:"Cash",name:"payment",value:"cash",checked:"cash"===N.payment,onChange:P}),(0,j.jsx)(u.Z,{element:"radio",type:"radio",id:"direct",label:"Direct",name:"payment",value:"direct",checked:"direct"===N.payment,onChange:P}),(0,j.jsx)(u.Z,{element:"radio",type:"radio",id:"check",label:"Check",name:"payment",value:"check",checked:"check"===N.payment,onChange:P})]}),(0,j.jsx)(u.Z,{id:"price",element:"input",type:"number",label:"Price USD$",name:"price",onChange:P,value:N.price.value,required:!0}),(0,j.jsx)(u.Z,{id:"phoneNumber",element:"input",type:"tel",label:"Phone Number",name:"phoneNumber",onChange:P,value:N.phoneNumber.value,required:!0}),(0,j.jsx)(u.Z,{id:"pickupDate",element:"date",type:"date",label:"Ready for Pickup",name:"pickupDate",onChange:P,value:N.pickupDate.value}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"pickupLocation",children:"Pickup location:"}),(0,j.jsx)(p.ZP,{options:m.Z,id:"pickupLocation",onChange:function(e){return P((0,r.Z)((0,r.Z)({},e),{},{name:"pickupLocation"}))},name:"pickupLocation",required:!0})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"dropOffLocation",children:"Drop off location:"}),(0,j.jsx)(p.ZP,{options:m.Z,id:"dropOffLocation",onChange:function(e){return P((0,r.Z)((0,r.Z)({},e),{},{name:"dropOffLocation"}))},name:"dropOffLocation",required:!0})]}),(0,j.jsx)(g.Z,{id:"image",onInput:function(e,a,n){q((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,t.Z)({},e,(0,r.Z)((0,r.Z)({},n[e]),{},{value:a})))}))},required:!0,center:!0,errorText:""}),(0,j.jsx)(s.Z,{type:"submit",children:"ADD LOAD"})]})]})}},7212:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(9439),r=n(2791),i=n(3999),l=n(184),o=function(e){var a=(0,r.useState)(),n=(0,t.Z)(a,2),o=n[0],c=n[1],d=(0,r.useState)(),p=(0,t.Z)(d,2),u=p[0],s=p[1],m=(0,r.useState)(!1),h=(0,t.Z)(m,2),f=h[0],v=h[1],x=(0,r.useRef)();(0,r.useEffect)((function(){if(o){var e=new FileReader;e.onload=function(){s(e.result)},e.readAsDataURL(o)}}),[o]);return(0,l.jsxs)("div",{className:"form-control",children:[(0,l.jsx)("input",{id:e.id,ref:x,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(a){var n,t=f;a.target.files&&1===a.target.files.length?(n=a.target.files[0],c(n),v(!0),t=!0):(v(!1),t=!0),e.onInput(e.id,n,t)},required:!0}),(0,l.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,l.jsxs)("div",{className:"image-upload__preview",children:[u&&(0,l.jsx)("img",{src:u,alt:"Preview"}),!u&&(0,l.jsx)("p",{children:"Please pick an image."})]}),(0,l.jsx)(i.Z,{type:"button",onClick:function(){x.current.click()},children:"PICK IMAGE"})]}),!f&&(0,l.jsx)("p",{children:e.errorText})]})}},2810:function(e,a,n){n.d(a,{Z:function(){return r}});n(2791);var t=n(184),r=function(e){var a;return"input"===e.element||"email"===e.element?a=(0,t.jsx)("input",{type:e.type,placeholder:e.placeholder,name:e.name,onChange:e.onChange,value:e.value,required:!0}):"password"===e.element?a=(0,t.jsx)("input",{type:"password",placeholder:e.placeholder,name:e.name,onChange:e.onChange,value:e.value,required:!0}):"radio"===e.element?a=(0,t.jsx)("input",{type:"radio",placeholder:e.placeholder,name:e.name,value:e.value,checked:e.checked,onChange:e.onChange,required:!0}):"date"===e.element&&(a=(0,t.jsx)("input",{type:"date",placeholder:e.placeholder,name:e.name,value:e.value,checked:e.checked,onChange:e.onChange,required:!0})),(0,t.jsxs)("div",{className:"".concat("radio"!==e.element&&"form-control"),children:[(0,t.jsx)("label",{for:e.id,children:e.label}),a]})}}}]);
//# sourceMappingURL=289.6b08a33e.chunk.js.map