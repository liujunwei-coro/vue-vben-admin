import{D as e}from"./index.2e6150ee.js";import{u as t}from"./useDescription.8317653c.js";import{_ as s}from"./index.136e7d6e.js";import{d as a,h as i,o as r,i as o,w as m,j as n}from"./index.5083dc91.js";import"./index.e5cf39b5.js";import"./responsiveObserve.c545f1cc.js";import"./index.65229165.js";import"./index.ec9957f2.js";import"./domUtils.57616fad.js";import"./_stringToArray.267a0e21.js";import"./RightOutlined.e15855c8.js";/* empty css              */import"./useTimeout.6f85263a.js";import"./useScrollTo.946cd9d0.js";import"./animation.543b2081.js";import"./get.1bdf74a7.js";import"./index.dcb73a74.js";import"./index.e7b0242c.js";import"./EllipsisOutlined.3b6bce0a.js";import"./types.7d0557e6.js";import"./isEqual.54d9b6d5.js";import"./toInteger.368318f3.js";import"./DownOutlined.ad3384b4.js";import"./index.ec0ccb98.js";import"./usePageContext.d8053a7f.js";import"./transButton.8328ef76.js";import"./ArrowLeftOutlined.f35b6c77.js";import"./vendor.3b1829c7.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},c=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var p=a({components:{Description:e,PageWrapper:s},setup(){const[e]=t({title:"useDescription",data:l,schema:c}),[s]=t({title:"无边框",bordered:!1,data:l,schema:c});return{mockData:l,schema:c,register:e,register1:s}}});p.render=function(e,t,s,a,l,c){const p=i("Description"),d=i("PageWrapper");return r(),o(d,{title:"详情组件示例"},{default:m((()=>[n(p,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(p,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(p,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),n(p,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default p;