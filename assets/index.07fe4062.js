import{d as o,u as e,ag as t,a9 as s,q as a,aq as i,e as r,as as n,bD as d,bE as l,h as c,o as p,i as u,j as m,l as f,k as j,aL as b}from"./index.ab86ea0e.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import{L as _}from"./index.a3d37602.js";import"./index.6b7fc4eb.js";import{G as x}from"./GithubFilled.63078cbc.js";import"./RightOutlined.a9c21d9a.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useWindowSizeFn.15cac271.js";import"./index.8c6f99a8.js";import"./useSortable.25942234.js";import"./usePageContext.201ece62.js";import"./index.e0cc2a8d.js";import"./useHeaderSetting.9772060d.js";import{D as C,G as F,S as g}from"./siteSetting.2daee9f0.js";var h=o({name:"LayoutFooter",components:{Footer:_.Footer,GithubFilled:x},setup(){const{t:o}=e(),{getShowFooter:d}=n(),{currentRoute:l}=t(),{prefixCls:c}=s("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return r(d)&&!(null==(o=r(l).meta)?void 0:o.hiddenFooter)})),prefixCls:c,t:o,DOC_URL:C,GITHUB_URL:F,SITE_URL:g,openWindow:i}}});const L=b("data-v-47369c67");d("data-v-47369c67");const S=m("div",null,"Copyright ©2020 Vben Admin",-1);l();const v=L(((o,e,t,s,a,i)=>{const r=c("GithubFilled"),n=c("Footer");return o.getShowLayoutFooter?(p(),u(n,{key:0,class:o.prefixCls},{default:L((()=>[m("div",{class:`${o.prefixCls}__links`},[m("a",{onClick:e[1]||(e[1]=e=>o.openWindow(o.SITE_URL))},f(o.t("layout.footer.onlinePreview")),1),m(r,{onClick:e[2]||(e[2]=e=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),m("a",{onClick:e[3]||(e[3]=e=>o.openWindow(o.DOC_URL))},f(o.t("layout.footer.onlineDocument")),1)],2),S])),_:1},8,["class"])):j("",!0)}));h.render=v,h.__scopeId="data-v-47369c67";export default h;