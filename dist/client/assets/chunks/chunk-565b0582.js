import{b as f}from"./chunk-a740628f.js";import{d as v,r as h,aF as k,c as b,j as t,D as o,m as a,l,q as n,M as s,L as g,F as x,U as C,E as K,k as B,z as N}from"./chunk-449c23a2.js";import{_ as L}from"./chunk-3fb34e39.js";import{_ as S}from"./chunk-387ba65a.js";import{_ as V}from"./chunk-4ee2916e.js";import"./chunk-6deddc2e.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"./chunk-3db18d93.js";import"./chunk-767079b6.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-26a03a7a.js";import"./chunk-416dc92c.js";const w={key:0,"mb-2":"","text-3xl":""},E=K("span",{"lh-1":"","op-70":""}," Press the key on your keyboard you want to get info about this key ",-1),R=v({__name:"keycode-info",setup(F){const e=h();k(document,"keydown",r=>{e.value=r});const i=b(()=>e.value?[{label:"Key :",value:e.value.key,placeholder:"Key name..."},{label:"Keycode :",value:String(e.value.keyCode),placeholder:"Keycode..."},{label:"Code :",value:e.value.code,placeholder:"Code..."},{label:"Location :",value:String(e.value.location),placeholder:"Code..."},{label:"Modifiers :",value:[e.value.metaKey&&"Meta",e.value.shiftKey&&"Shift",e.value.ctrlKey&&"Ctrl",e.value.altKey&&"Alt"].filter(Boolean).join(" + "),placeholder:"None"}]:[]);return(r,M)=>{const p=f,u=S,c=V;return t(),o("div",null,[a(p,{"mb-5":"","text-center":"","important:py-12":""},{default:l(()=>[n(e)?(t(),o("div",w,s(n(e).key),1)):g("",!0),E]),_:1}),(t(!0),o(x,null,C(n(i),({label:m,value:_,placeholder:d},y)=>(t(),B(c,{key:y,style:{"margin-bottom":"5px"}},{default:l(()=>[a(u,{style:{flex:"0 0 150px"}},{default:l(()=>[N(s(m),1)]),_:2},1024),a(L,{value:_,readonly:"",placeholder:d},null,8,["value","placeholder"])]),_:2},1024))),128))])}}});export{R as default};
