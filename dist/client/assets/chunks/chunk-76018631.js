import{_ as c}from"./chunk-6deddc2e.js";import{c as _}from"./chunk-0c1b4166.js";import{_ as f}from"./chunk-3fb34e39.js";import{m as b}from"./chunk-0e27dfca.js";import{d as g,r as v,c as h,j as r,D as i,m,l as x,z as y,q as s,S as k,F as $,U as A,L as V,k as w}from"./chunk-449c23a2.js";import{_ as C}from"./chunk-f82e52c7.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"./chunk-a740628f.js";import"./chunk-302442b1.js";import"./chunk-44692048.js";import"./chunk-3db18d93.js";import"./chunk-767079b6.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-a0dc36f0.js";import"./chunk-60fffae6.js";import"./chunk-567e13ca.js";import"./chunk-aff6c081.js";import"./chunk-416dc92c.js";import"./chunk-9519e52e.js";import"./chunk-f94e2689.js";import"./chunk-6e5bd8af.js";import"./chunk-f206ee20.js";const L={key:0},et=g({__name:"ipv6-ula-generator",setup(T){const e=v("20:37:06:12:34:56"),p=h(()=>{const l=new Date().getTime(),t=_.SHA1(l+e.value).toString().substring(30),o=`fd${t.substring(0,2)}:${t.substring(2,6)}:${t.substring(6)}`;return[{label:"IPv6 ULA:",value:`${o}::/48`},{label:"First routable block:",value:`${o}:0::/64`},{label:"Last routable block:",value:`${o}:ffff::/64`}]}),n=b(e);return(l,t)=>{const o=C,u=c;return r(),i("div",null,[m(o,{title:"Info",type:"info"},{default:x(()=>[y(" This tool uses the first method suggested by IETF using the current timestamp plus the mac address, sha1 hashed, and the lower 40 bits to generate your random ULA. ")]),_:1}),m(u,{value:s(e),"onUpdate:value":t[0]||(t[0]=a=>k(e)?e.value=a:null),placeholder:"Type a MAC address",clearable:"",label:"MAC address:","raw-text":"","my-8":"",validation:s(n)},null,8,["value","validation"]),s(n).isValid?(r(),i("div",L,[(r(!0),i($,null,A(s(p),({label:a,value:d})=>(r(),w(f,{key:a,value:d,label:a,"label-width":"160px","label-align":"right","label-position":"left",readonly:"","mb-2":""},null,8,["value","label"]))),128))])):V("",!0)])}}});export{et as default};
