import{b as y}from"./chunk-a740628f.js";import{_ as N}from"./chunk-3fb34e39.js";import{d as U,r as s,c as x,j as R,D as X,E as a,m as l,l as w,q as o,S as n}from"./chunk-449c23a2.js";import{_ as Y}from"./chunk-aa4619b6.js";import"./chunk-6deddc2e.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"./chunk-3db18d93.js";import"./chunk-767079b6.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-66ac4853.js";import"./chunk-2749dac9.js";import"./chunk-015e5c20.js";import"./chunk-416dc92c.js";import"./chunk-567e13ca.js";import"./chunk-26a03a7a.js";import"./chunk-f823181b.js";import"./chunk-9519e52e.js";import"./chunk-f94e2689.js";import"./chunk-1d5b5526.js";import"./chunk-fc34c9a6.js";import"./chunk-af6e0163.js";import"./chunk-b0332f36.js";import"./chunk-f206ee20.js";import"./chunk-05af1949.js";const F={style:{flex:"0 0 100%"}},k={style:{margin:"0 auto","max-width":"600px"}},S=a("div",{"mb-3":"","sm:hidden":""}," What is ",-1),B={flex:"","gap-2":""},D=a("div",{hidden:"","pt-1":"","sm:block":"",style:{"min-width":"48px"}}," What is ",-1),T=a("div",{"min-w-fit":"","pt-1":""}," % of ",-1),W=a("div",{"mb-3":"","sm:hidden":""}," X is what percent of Y ",-1),C={flex:"","gap-2":""},E=a("div",{hidden:"","min-w-fit":"","pt-1":"","sm:block":""}," is what percent of ",-1),I=a("div",{"mb-3":""}," What is the percentage increase/decrease ",-1),V={flex:"","gap-2":""},ve=U({__name:"percentage-calculator",setup(j){const d=s(),p=s(),_=x(()=>d.value===void 0||p.value===void 0?"":(d.value/100*p.value).toString()),m=s(),v=s(),f=x(()=>{if(m.value===void 0||v.value===void 0)return"";const u=100*m.value/v.value;return!Number.isFinite(u)||Number.isNaN(u)?"":u.toString()}),r=s(),c=s(),b=x(()=>{if(r.value===void 0||c.value===void 0)return"";const u=(c.value-r.value)/r.value*100;return!Number.isFinite(u)||Number.isNaN(u)?"":u.toString()});return(u,e)=>{const i=Y,g=N,h=y;return R(),X("div",F,[a("div",k,[l(h,{"mb-3":""},{default:w(()=>[S,a("div",B,[D,l(i,{value:o(d),"onUpdate:value":e[0]||(e[0]=t=>n(d)?d.value=t:null),"data-test-id":"percentageX",placeholder:"X"},null,8,["value"]),T,l(i,{value:o(p),"onUpdate:value":e[1]||(e[1]=t=>n(p)?p.value=t:null),"data-test-id":"percentageY",placeholder:"Y"},null,8,["value"]),l(g,{value:o(_),"onUpdate:value":e[2]||(e[2]=t=>n(_)?_.value=t:null),"data-test-id":"percentageResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(h,{"mb-3":""},{default:w(()=>[W,a("div",C,[l(i,{value:o(m),"onUpdate:value":e[3]||(e[3]=t=>n(m)?m.value=t:null),"data-test-id":"numberX",placeholder:"X"},null,8,["value"]),E,l(i,{value:o(v),"onUpdate:value":e[4]||(e[4]=t=>n(v)?v.value=t:null),"data-test-id":"numberY",placeholder:"Y"},null,8,["value"]),l(g,{value:o(f),"onUpdate:value":e[5]||(e[5]=t=>n(f)?f.value=t:null),"data-test-id":"numberResult",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1}),l(h,{"mb-3":""},{default:w(()=>[I,a("div",V,[l(i,{value:o(r),"onUpdate:value":e[6]||(e[6]=t=>n(r)?r.value=t:null),"data-test-id":"numberFrom",placeholder:"From"},null,8,["value"]),l(i,{value:o(c),"onUpdate:value":e[7]||(e[7]=t=>n(c)?c.value=t:null),"data-test-id":"numberTo",placeholder:"To"},null,8,["value"]),l(g,{value:o(b),"onUpdate:value":e[8]||(e[8]=t=>n(b)?b.value=t:null),"data-test-id":"percentageIncreaseDecrease",readonly:"",placeholder:"Result",style:{"max-width":"150px"}},null,8,["value"])])]),_:1})])])}}});export{ve as default};