import{_ as s}from"./chunk-6deddc2e.js";import{T as _}from"./chunk-f1ca2155.js";import{d as c,r as d,c as f,j as k,D as v,m as t,q as a,S as L,l as U}from"./chunk-449c23a2.js";import{_ as w}from"./chunk-b6d0d6dd.js";import{_ as S}from"./chunk-4515d3e7.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"./chunk-a740628f.js";import"./chunk-767079b6.js";import"./chunk-55ba3dae.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-baa77311.js";import"./chunk-78769b89.js";import"./chunk-fd51fbd2.js";import"./chunk-2749dac9.js";import"./chunk-6d336811.js";function x(e){if(!e.match(/\.safelinks\.protection\.outlook\.com/))throw new Error("Invalid SafeLinks URL provided");return new URL(e).searchParams.get("url")}const $=c({__name:"safelink-decoder",setup(e){const o=d(""),p=f(()=>{try{return x(o.value)}catch(r){return r.toString()}});return(r,n)=>{const i=s,u=w,l=S;return k(),v("div",null,[t(i,{value:a(o),"onUpdate:value":n[0]||(n[0]=m=>L(o)?o.value=m:null),"raw-text":"",placeholder:"Your input Outlook SafeLink Url...",autofocus:"",label:"Your input Outlook SafeLink Url:"},null,8,["value"]),t(u),t(l,{label:"Output decoded URL:"},{default:U(()=>[t(_,{value:a(p),"word-wrap":!0},null,8,["value"])]),_:1})])}}});export{$ as default};
