import{d as e,h as t,o as a,i as o,w as r,j as s}from"./index.ab86ea0e.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import{e as n,S as i}from"./index.6b7fc4eb.js";import"./RightOutlined.a9c21d9a.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import{_ as m}from"./index.354d0644.js";import"./usePageContext.201ece62.js";import d from"./TargetContent.96f82c31.js";var p=e({components:{LazyContainer:n,TargetContent:d,Skeleton:i,PageWrapper:m}});const c={class:"lazy-base-demo-wrap"},l=s("h1",null,"向下滚动",-1),f={class:"lazy-base-demo-box"};p.render=function(e,n,i,m,d,p){const j=t("TargetContent"),u=t("LazyContainer"),b=t("PageWrapper");return a(),o(b,{title:"懒加载自定义动画示例",content:"懒加载组件显示动画"},{default:r((()=>[s("div",c,[l,s("div",f,[s(u,{transitionName:"custom"},{default:r((()=>[s(j)])),_:1})])])])),_:1})};export default p;