let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,au as n,u as a,s as i,i as s,o as d,j as l,k as o,n as r,v as c,aR as p}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.46cea309.js";import{S as h}from"./index.03e0e622.js";import"./SettingOutlined.085bf9bb.js";import"./index.f85b5e36.js";import"./useHeaderSetting.b10edb20.js";import{b as u}from"./index.9ec48e8e.js";var m=t({name:"SwitchItem",components:{Switch:h},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=n("setting-switch-item"),{t:s}=a();return{prefixCls:t,t:s,handleChange:function(t){e.event&&u(e.event,t)},getBindValue:i((()=>e.def?{checked:e.def}:{}))}}});const b=p("data-v-2b7b2ae4")(((e,t,n,a,i,p)=>{const h=s("Switch");return d(),l("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(h,c(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=b,m.__scopeId="data-v-2b7b2ae4";export default m;