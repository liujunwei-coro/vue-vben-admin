import{d as f,r,cp as v,cq as _,h as o,o as l,i as d,j as t,bs as S,H as j,b9 as b,bw as h,m as x}from"./index.de7a3c72.js";import{a as T}from"./index.2419be78.js";import{_ as g}from"./index.46623d23.js";import{F as w,S as R,a as X,b as y,c as Y,d as k,e as C,f as E,g as I,h as O,i as $,E as F,j as P}from"./index.cf88fb23.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./RightOutlined.dcad5eff.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./index.95c10fda.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";const B=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],D=B.map(e=>({label:e,value:e,key:e}));var n=f({components:{Select:T,PageWrapper:g,FadeTransition:w,ScaleTransition:R,SlideYTransition:X,ScrollYTransition:y,SlideYReverseTransition:Y,ScrollYReverseTransition:k,SlideXTransition:C,ScrollXTransition:E,SlideXReverseTransition:I,ScrollXReverseTransition:O,ScaleRotateTransition:$,ExpandXTransition:F,ExpandTransition:P},setup(){const e=r("Fade"),a=r(!0);function i(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:D,value:e,start:i,show:a}}}),me=`.box[data-v-51fb1392] {
  width: 150px;
  height: 150px;
  margin-top: 20px;
  background: #7eaaec;
}
`;const s=h("data-v-51fb1392");v("data-v-51fb1392");const W={class:"flex"},q=x(" start "),A={class:"box"};_();const L=s((e,a,i,N,U,V)=>{const p=o("Select"),c=o("a-button"),u=o("PageWrapper");return l(),d(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[t("div",W,[t(p,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=m=>e.value=m),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),t(c,{type:"primary",class:"ml-4",onClick:e.start},{default:s(()=>[q]),_:1},8,["onClick"])]),(l(),d(S(`${e.value}Transition`),null,{default:s(()=>[j(t("div",A,null,512),[[b,e.show]])]),_:1}))]),_:1})});n.render=L,n.__scopeId="data-v-51fb1392";export default n;