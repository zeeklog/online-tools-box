import{d as v,r as P,j as h,D as k,E as o,m as r,l as u,q as i,S as K,B as x,z as g,F as w,K as C}from"./chunk-449c23a2.js";import{l as p}from"./chunk-157ebde1.js";import{T as c}from"./chunk-f1ca2155.js";import{a as B}from"./chunk-4d6daddf.js";import{u as T}from"./chunk-340feaf0.js";import{a as V}from"./chunk-ca3460ec.js";import{_ as R}from"./chunk-aa4619b6.js";import{_ as A}from"./chunk-4515d3e7.js";import"./chunk-a740628f.js";import"./chunk-44692048.js";import"./chunk-767079b6.js";import"./chunk-55ba3dae.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-baa77311.js";import"./chunk-78769b89.js";import"./chunk-66ac4853.js";import"./chunk-2749dac9.js";import"./chunk-015e5c20.js";import"./chunk-416dc92c.js";import"./chunk-567e13ca.js";import"./chunk-26a03a7a.js";import"./chunk-f823181b.js";import"./chunk-9519e52e.js";import"./chunk-f94e2689.js";import"./chunk-1d5b5526.js";import"./chunk-fc34c9a6.js";import"./chunk-af6e0163.js";import"./chunk-b0332f36.js";import"./chunk-f206ee20.js";import"./chunk-05af1949.js";import"./chunk-6d336811.js";const E="/assets/static/prime.worker.min.e367bd53.js";function N({bits:a=2048}){return new Promise((e,t)=>p.pki.rsa.generateKeyPair({bits:a,workerScript:E},(s,n)=>{if(s){t(s);return}e(n)}))}async function j(a={}){const{privateKey:e,publicKey:t}=await N(a);return{publicKeyPem:p.pki.publicKeyToPem(t),privateKeyPem:p.pki.privateKeyToPem(e)}}const D={style:{flex:"0 0 100%"}},F={"item-style":"flex: 1 1 0",style:{"max-width":"600px"},"mx-auto":"",flex:"","gap-3":""},S=o("h3",null,"Public key",-1),q=o("h3",null,"Private key",-1),ve=v({__name:"rsa-key-pair-generator",setup(a){const e=P(2048),t={publicKeyPem:"",privateKeyPem:""},{attrs:s}=T({source:e,rules:[{message:"Bits should be 256 <= bits <= 16384 and be a multiple of 8",validator:m=>m>=256&&m<=16384&&m%8===0}]}),[n,_]=V(()=>B(()=>j({bits:e.value}),t),t);return(m,l)=>{const f=R,d=A,y=C;return h(),k(w,null,[o("div",D,[o("div",F,[r(d,x({label:"Bits :"},i(s),{"label-placement":"left","label-width":"100"}),{default:u(()=>[r(f,{value:i(e),"onUpdate:value":l[0]||(l[0]=b=>K(e)?e.value=b:null),min:"256",max:"16384",step:"8"},null,8,["value"])]),_:1},16),r(y,{onClick:i(_)},{default:u(()=>[g(" Refresh key-pair ")]),_:1},8,["onClick"])])]),o("div",null,[S,r(c,{value:i(n).publicKeyPem},null,8,["value"])]),o("div",null,[q,r(c,{value:i(n).privateKeyPem},null,8,["value"])])],64)}}});export{ve as default};