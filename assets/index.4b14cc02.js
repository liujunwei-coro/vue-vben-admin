import{a9 as t,P as e,V as n,d as s,B as o,C as c,G as i,Q as a,O as r,z as l,j as u,F as f,bO as d,I as h,J as p,R as b,a3 as g,T as O,W as y,d0 as v,Y as j,X as m,d1 as w,bU as C,d2 as P,d3 as x,b8 as V}from"./index.5083dc91.js";function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){N(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!f(t)}var B={success:y,info:v,error:j,warning:m},E={success:w,info:C,error:P,warning:x},I=t(s({name:"AAlert",mixins:[o],inheritAttrs:!1,props:{type:e.oneOf(n("success","info","warning","error")),closable:e.looseBool,closeText:e.VNodeChild,message:e.VNodeChild,description:e.VNodeChild,afterClose:e.func.def((function(){})),showIcon:e.looseBool,prefixCls:e.string,banner:e.looseBool,icon:e.VNodeChild,onClose:e.VNodeChild},emits:["close"],setup:function(){return{configProvider:c("configProvider",i)}},data:function(){return{closing:!1,closed:!1}},methods:{handleClose:function(t){t.preventDefault();var e=a(this);e.style.height="".concat(e.offsetHeight,"px"),e.style.height="".concat(e.offsetHeight,"px"),this.setState({closing:!0}),this.$emit("close",t)},animationEnd:function(){this.setState({closing:!1,closed:!0}),this.afterClose()}},render:function(){var t,e,n=this.prefixCls,s=this.banner,o=this.closing,c=this.closed,i=this.$attrs,a=(0,this.configProvider.getPrefixCls)("alert",n),f=this.closable,y=this.type,v=this.showIcon,j=r(this,"closeText"),m=r(this,"description"),w=r(this,"message"),C=r(this,"icon");v=!(!s||void 0!==v)||v;var P=(m?E:B)[y=s&&void 0===y?"warning":y||"info"]||null;j&&(f=!0);var x=l(a,(N(e={},"".concat(a,"-").concat(y),!0),N(e,"".concat(a,"-closing"),o),N(e,"".concat(a,"-with-description"),!!m),N(e,"".concat(a,"-no-icon"),!v),N(e,"".concat(a,"-banner"),!!s),N(e,"".concat(a,"-closable"),f),e)),A=f?u("button",{type:"button",onClick:this.handleClose,class:"".concat(a,"-close-icon"),tabindex:0},[j?u("span",{class:"".concat(a,"-close-text")},S(j)?j:{default:function(){return[j]}}):u(d,null,null)]):null,I=C&&(h(C)?p(C,{class:"".concat(a,"-icon")}):u("span",{class:"".concat(a,"-icon")},S(C)?C:{default:function(){return[C]}}))||u(P,{class:"".concat(a,"-icon")},null),T=b("".concat(a,"-slide-up"),{appear:!1,onAfterLeave:this.animationEnd});return c?null:u(O,T,S(t=g(u("div",D(D({},i),{},{class:[i.class,x],"data-show":!o}),[v?I:null,u("span",{class:"".concat(a,"-message")},S(w)?w:{default:function(){return[w]}}),u("span",{class:"".concat(a,"-description")},S(m)?m:{default:function(){return[m]}}),A]),[[V,!o]]))?t:{default:function(){return[t]}})}}));export{I as A};