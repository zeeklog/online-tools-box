import{r as s,az as r,A as l,c as n,aA as d}from"./chunk-449c23a2.js";function f(a,{throttle:c}={}){const e=s(!0);let t;const u=()=>e.value=!0;return c?r(a,u,{throttle:c}):l(a,u),[n(()=>(e.value&&(t=a(),e.value=!1),t)),u]}function m(a,c){const e=s(!0);let t;const u=()=>e.value=!0;return l(a,u),[d(async()=>(e.value&&(t=await a(),e.value=!1),t),c),u]}export{m as a,f as c};