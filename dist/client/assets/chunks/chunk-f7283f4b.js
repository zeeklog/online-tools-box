import{b as k}from"./chunk-a740628f.js";import{_ as b}from"./chunk-6deddc2e.js";import{ap as p}from"../entries/src_pages_Home.page.16dc467b.js";import{u as B}from"./chunk-27eb844d.js";import{d as F,r as S,c as w,j as t,D as s,m as C,q as _,S as z,F as d,U as f,E as c,M as o,k as D,l as E}from"./chunk-449c23a2.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";const M={"mb-2":"","text-xl":""},N={"text-lg":"","font-bold":""},R={"op-70":""},G=F({__name:"http-status-codes",setup(T){const e=S(""),{searchResult:h}=B({search:e,data:p.flatMap(({codes:u,category:a})=>u.map(r=>({...r,category:a}))),options:{keys:[{name:"code",weight:3},{name:"name",weight:2},"description","category"]}}),v=w(()=>e.value?[{category:"Search results",codes:h.value}]:p);return(u,a)=>{const r=b,g=k;return t(),s("div",null,[C(r,{value:_(e),"onUpdate:value":a[0]||(a[0]=n=>z(e)?e.value=n:null),placeholder:"Search http status...",autofocus:"","raw-text":"","mb-10":""},null,8,["value"]),(t(!0),s(d,null,f(_(v),({codes:n,category:i})=>(t(),s("div",{key:i,"mb-8":""},[c("div",M,o(i),1),(t(!0),s(d,null,f(n,({code:l,description:x,name:y,type:m})=>(t(),D(g,{key:l,"mb-2":""},{default:E(()=>[c("div",N,o(l)+" "+o(y),1),c("div",R,o(x)+" "+o(m!=="HTTP"?`For ${m}.`:""),1)]),_:2},1024))),128))]))),128))])}}});export{G as default};