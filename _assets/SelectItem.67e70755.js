let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,aV as i,I as s,i as a,o as n,j as d,k as o,n as r,J as l,bo as p}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import{S as c}from"./index.41f60c4b.js";import"./Trigger.142edc1f.js";import"./omit.02e063d9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6b76f1fa.js";import"./CheckOutlined.fffda28c.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./index.9f7110f0.js";import"./index.599b5919.js";import"./index.fd6c0f11.js";import"./index.47ef10aa.js";import"./index.157eaf85.js";import"./RightOutlined.29e5aa33.js";import"./SettingOutlined.86be5837.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";import"./useAttrs.1918a6ca.js";import"./useHeaderSetting.4557334c.js";import{b as m}from"./index.2bd2010c.js";var f=t({name:"SelectItem",components:{Select:c},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=p("data-v-6110ac28")(((e,t,i,s,p,c)=>{const m=a("Select");return n(),d("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(m,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=u,f.__scopeId="data-v-6110ac28";export default f;