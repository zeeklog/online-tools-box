import{s as p,d as g,x as u,r as o,l as c,I as f,y as h,j as _,S as v,T as y,Q as m,P as C}from"../chunks/chunk-e9714d86.js";import{_ as n}from"../chunks/chunk-cf010ec4.js";const r={},F={},E={},P={},x=[],d={},L=!0,R=[],b={onBeforeRoute:null,onPrerenderStart:null},w=Object.assign({"/src/pages/404.page.vue":()=>n(()=>import("./src_pages_404.page.6bb55506.js"),["assets/entries/src_pages_404.page.6bb55506.js","assets/chunks/chunk-5a4ab062.js","assets/chunks/chunk-449c23a2.js","assets/static/c-button.1b70e3dc.css","assets/chunks/chunk-ee54c1e8.js","assets/chunks/chunk-cf010ec4.js"]),"/src/pages/Home.page.vue":()=>n(()=>import("./src_pages_Home.page.16dc467b.js").then(e=>e.aR),["assets/entries/src_pages_Home.page.16dc467b.js","assets/chunks/chunk-449c23a2.js","assets/static/c-button.1b70e3dc.css","assets/chunks/chunk-a740628f.js","assets/static/lodash.af515ca7.css","assets/chunks/chunk-cf010ec4.js","assets/chunks/chunk-ee54c1e8.js","assets/static/Home.page.d5a6dada.css"]),"/src/ui/demo/demo-home.page.vue":()=>n(()=>import("./src_ui_demo_demo-home.page.4cfbf913.js"),["assets/entries/src_ui_demo_demo-home.page.4cfbf913.js","assets/chunks/chunk-fb60a83f.js","assets/chunks/chunk-449c23a2.js","assets/static/c-button.1b70e3dc.css","assets/chunks/chunk-cf010ec4.js","assets/chunks/chunk-d8b8b4f8.js","assets/static/c-alert.926bd053.css","assets/chunks/chunk-3db18d93.js","assets/chunks/chunk-a740628f.js","assets/static/lodash.af515ca7.css","assets/chunks/chunk-323c539f.js","assets/chunks/chunk-a3974c29.js","assets/chunks/chunk-e0e1a528.js","assets/chunks/chunk-6deddc2e.js","assets/chunks/chunk-9a43cce8.js","assets/chunks/chunk-340feaf0.js","assets/static/c-input-text.556101b4.css","assets/chunks/chunk-893bf84a.js","assets/chunks/chunk-153e0e77.js","assets/chunks/chunk-767079b6.js","assets/static/c-modal-value.6b78fab4.css","assets/chunks/chunk-606d31d4.js","assets/chunks/chunk-27eb844d.js","assets/static/c-select.8dd6cbf5.css","assets/chunks/chunk-baf8ab22.js","assets/chunks/chunk-a66a4022.js","assets/static/demo-home.page.a31aff5d.css"])}),S={...w};r[".page"]=S;const H=Object.assign({}),O={...H};r[".page.client"]=O;const z=Object.assign({}),I={...z};d[".page.server"]=I;const j=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:L,neverLoaded:d,pageConfigGlobal:b,pageConfigs:R,pageFilesEager:F,pageFilesExportNamesEager:P,pageFilesExportNamesLazy:E,pageFilesLazy:r,pageFilesList:x},Symbol.toStringTag,{value:"Module"}));p(j);const l=g({withoutHash:!0});async function A(){const e=u();return o(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromClient:!1}),o(e,await B(e._pageId)),T(),e}function T(){const e=g({withoutHash:!0});c(l===e,`The URL was manipulated before the hydration finished ('${l}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function B(e){const a={},{pageFilesAll:s,pageConfigs:i}=await f(!0);return o(a,{_pageFilesAll:s,_pageConfigs:i}),o(a,await h(s,i,e)),s.filter(t=>t.fileType!==".page.server").forEach(t=>{_(!t.fileExports?.onBeforeRender,`export { onBeforeRender } of ${t.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),a}v();const U=!0;y(U);k();async function k(){const e=await A();await m(e,!1),C(e,"onHydrationEnd"),await e.exports.onHydrationEnd?.(e)}