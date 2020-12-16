import{a as e,i as o,o as i,j as s,k as r,w as t,p as n}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import"./index.e028f2ec.js";import{A as a}from"./index.b797736d.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.ced671f3.js";import"./index.03e0e622.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import"./useForm.8e6b95f4.js";import{u as d}from"./index.854d6bdb.js";import p from"./Modal1.31e1d1cb.js";import l from"./Modal2.0e0661c2.js";import m from"./Modal3.d6c166d2.js";import c from"./Modal4.f37e777b.js";var f=e({components:{Alert:a,Modal1:p,Modal2:l,Modal3:m,Modal4:c},setup(){const[e,{openModal:o,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:n}]=d(),[a,{openModal:p}]=d();return{register1:e,openModal1:o,register2:s,openModal2:r,register3:t,openModal3:n,register4:a,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const j={class:"px-10 py-4"},g=n("打开弹窗 默认可以拖动/全屏"),u=n("打开弹窗"),M=n("打开弹窗"),b=n("打开弹窗并传递数据");f.render=function(e,n,a,d,p,l){const m=o("Alert"),c=o("a-button"),f=o("Modal1"),x=o("Modal2"),y=o("Modal3"),k=o("Modal4");return i(),s("div",j,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:t((()=>[M])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),r(f,{onRegister:e.register1},null,8,["onRegister"]),r(x,{onRegister:e.register2},null,8,["onRegister"]),r(y,{onRegister:e.register3},null,8,["onRegister"]),r(k,{onRegister:e.register4},null,8,["onRegister"])])};export default f;