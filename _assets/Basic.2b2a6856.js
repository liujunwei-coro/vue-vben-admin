import{a as e,r as i,i as t,o,j as r,k as a,w as s,p as d,n}from"./index.b40ad814.js";import"./xlsx.a48e520c.js";import"./index.c8f8d537.js";import"./index.177f6a07.js";import"./Trigger.89356da9.js";import"./omit.b740cc6c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.75a704a4.js";import"./CheckOutlined.f94f10c7.js";import"./index.82e3a32a.js";import"./colors.519923f8.js";import"./index.6d7fef69.js";import"./RightOutlined.b50e3123.js";import"./index.61481b9e.js";import"./types.21061cc2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4e7ee3f0.js";import"./_baseFor.f4e5f03f.js";import"./index.869eb5dd.js";import"./index.a172b251.js";import"./index.dc65dc5d.js";import"./index.28e3d310.js";import"./UpOutlined.3222a916.js";import"./LeftOutlined.f5c89844.js";import"./index.26143528.js";import"./index.28d4be50.js";import"./index.74f71be9.js";import"./index.3e43cab0.js";import"./index.1227a681.js";import"./zh_CN.0242bd16.js";import"./TableAction.4ab8111b.js";import"./index.5faa6d92.js";import"./CaretDownFilled.1920ec3e.js";import"./index.ae5ad30b.js";import"./CheckOutlined.bfdbeda5.js";import"./CloseOutlined.dc46097f.js";import{s as p}from"./EditTableHeaderIcon.3eac562f.js";import"./DownOutlined.5c039c25.js";import"./FullscreenOutlined.04d66ead.js";import"./functional.0e75de35.js";import"./LoadingOutlined.693212d5.js";import"./RedoOutlined.1825c355.js";import"./RightOutlined.6d34f4ae.js";import"./SettingOutlined.b96230a0.js";import"./useTimeout.1bfe8444.js";import"./tsxHelper.bf0a56cb.js";import"./index.0a2dd4cb.js";import"./domUtils.aa80c6b8.js";import"./index.e1b49b7d.js";import"./animation.7d37eb54.js";import"./useScrollTo.a4e46414.js";import"./useAttrs.ad7eb934.js";import"./index.53deb937.js";import"./index.010fea9b.js";import"./useForm.ea39812c.js";import"./index.2d2833fb.js";import"./useWindowSizeFn.70c01aff.js";import"./useFullScreen.b35deed9.js";import"./uuid.40269c00.js";import"./useExpose.a5ae0acd.js";import"./index.97b69a3c.js";import{getBasicColumns as m,getBasicData as l}from"./tableData.af0e1ad7.js";var c=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0),a=i(!1);return{columns:m(),data:l(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1,a.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:a}}});const j={class:"p-4"},u=d(" 开启loading ");c.render=function(e,i,p,m,l,c){const b=t("a-button"),f=t("BasicTable");return o(),r("div",j,[a(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:s((()=>[a(b,{type:"primary",onClick:e.toggleCanResize},{default:s((()=>[d(n(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),a(b,{type:"primary",onClick:e.toggleBorder},{default:s((()=>[d(n(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),a(b,{type:"primary",onClick:e.toggleLoading},{default:s((()=>[u])),_:1},8,["onClick"]),a(b,{type:"primary",onClick:e.toggleStriped},{default:s((()=>[d(n(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default c;