let e=document.createElement("style");e.innerHTML=".step-form-content[data-v-234603f7]{padding:24px;background:#fff}.step-form-form[data-v-234603f7]{width:750px;margin:0 auto}",document.head.appendChild(e);import{a as t,r as i,b as n,a6 as a,c$ as r,d0 as o,i as s,o as p,j as d,k as m,aI as l,aJ as c,m as f,aS as u,p as j}from"./index.b40ad814.js";import"./xlsx.a48e520c.js";import"./index.177f6a07.js";import"./Trigger.89356da9.js";import"./omit.b740cc6c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.75a704a4.js";import"./CheckOutlined.f94f10c7.js";import"./index.82e3a32a.js";import"./colors.519923f8.js";import"./RightOutlined.b50e3123.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4e7ee3f0.js";import"./index.869eb5dd.js";import"./index.a172b251.js";import"./index.28e3d310.js";import"./UpOutlined.3222a916.js";import"./index.26143528.js";import"./index.28d4be50.js";import"./index.3e43cab0.js";import"./index.5faa6d92.js";import"./LoadingOutlined.693212d5.js";import"./RightOutlined.6d34f4ae.js";import"./tsxHelper.bf0a56cb.js";import"./index.e1b49b7d.js";import"./useAttrs.ad7eb934.js";import"./index.53deb937.js";import"./index.010fea9b.js";import"./useForm.ea39812c.js";import"./data.c52dc084.js";import x from"./Step1.247c62b3.js";import S from"./Step2.47e39540.js";import v from"./Step3.1eaf5a44.js";var b=t({components:{Step1:x,Step2:S,Step3:v},setup(){const e=i(0),t=n({initSetp2:!1,initSetp3:!1});return{current:e,handleStep1Next:function(i){e.value++,t.initSetp2=!0},handleStep2Next:function(i){e.value++,t.initSetp3=!0},handleRedo:function(){e.value=0,t.initSetp2=!1,t.initSetp3=!1},handleStepPrev:function(){e.value--},...a(t)}}});const h=u("data-v-234603f7");r("data-v-234603f7");const g=j(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 "),N={class:"m-5 step-form-content"},O={class:"step-form-form"},R={class:"mt-5"};o();const _=h(((e,t,i,n,a,r)=>{const o=s("a-page-header"),u=s("a-step"),j=s("a-steps"),x=s("Step1"),S=s("Step2"),v=s("Step3");return p(),d("div",null,[m(o,{title:"分步表单",ghost:!1},{default:h((()=>[g])),_:1}),m("div",N,[m("div",O,[m(j,{current:e.current},{default:h((()=>[m(u,{title:"填写转账信息"}),m(u,{title:"确认转账信息"}),m(u,{title:"完成"})])),_:1},8,["current"])]),m("div",R,[l(m(x,{onNext:e.handleStep1Next},null,8,["onNext"]),[[c,0===e.current]]),e.initSetp2?l((p(),d(S,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[c,1===e.current]]):f("v-if",!0),e.initSetp3?l((p(),d(v,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[c,2===e.current]]):f("v-if",!0)])])])}));b.render=_,b.__scopeId="data-v-234603f7";export default b;