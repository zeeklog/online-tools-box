import{_ as D}from"./chunk-30e914ce.js";import{g as k,e as F}from"./chunk-a740628f.js";import{w as R}from"./chunk-4d6daddf.js";import{d as I,g as X,j as B,D as V,E as P,m as E,l as T,q as M,S as L,F as $}from"./chunk-449c23a2.js";import{_ as z}from"./chunk-3ef38193.js";import{_ as U}from"./chunk-4515d3e7.js";import{_ as W}from"./chunk-aa4619b6.js";import"./chunk-f1ca2155.js";import"./chunk-767079b6.js";import"./chunk-55ba3dae.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-baa77311.js";import"./chunk-78769b89.js";import"./chunk-6deddc2e.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"./chunk-f823181b.js";import"./chunk-6222e43f.js";import"./chunk-2749dac9.js";import"./chunk-567e13ca.js";import"./chunk-1d5b5526.js";import"./chunk-416dc92c.js";import"./chunk-6d336811.js";import"./chunk-66ac4853.js";import"./chunk-015e5c20.js";import"./chunk-26a03a7a.js";import"./chunk-9519e52e.js";import"./chunk-f94e2689.js";import"./chunk-fc34c9a6.js";import"./chunk-af6e0163.js";import"./chunk-b0332f36.js";import"./chunk-f206ee20.js";import"./chunk-05af1949.js";var O={exports:{}},j={exports:{}};(function(p,a){Object.defineProperty(a,"__esModule",{value:!0}),a.ParsingError=void 0;class f extends Error{constructor(n,i){super(n),this.cause=i}}a.ParsingError=f;let l;function h(){return x(!1)||t()||m()||b()}function c(){return o(/\s*/),x(!0)||m()||v()||w(!1)}function _(){const r=w(!0),n=[];let i,u=c();for(;u;){if(u.node.type==="Element"){if(i)throw new Error("Found multiple root nodes");i=u.node}u.excluded||n.push(u.node),u=c()}if(!i)throw new f("Failed to parse XML","Root Element not found");if(l.xml.length!==0)throw new f("Failed to parse XML","Not Well-Formed XML");return{declaration:r?r.node:null,root:i,children:n}}function w(r){const n=o(r?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!n)return;const i={name:n[1],type:"ProcessingInstruction",attributes:{}};for(;!(g()||d("?>"));){const u=e();if(u)i.attributes[u.name]=u.value;else return}return o(/\?>/),{excluded:r?!1:l.options.filter(i)===!1,node:i}}function x(r){const n=o(/^<([^?!</>\s]+)\s*/);if(!n)return;const i={type:"Element",name:n[1],attributes:{},children:[]},u=r?!1:l.options.filter(i)===!1;for(;!(g()||d(">")||d("?>")||d("/>"));){const S=e();if(S)i.attributes[S.name]=S.value;else return}if(o(/^\s*\/>/))return i.children=null,{excluded:u,node:i};o(/\??>/);let C=h();for(;C;)C.excluded||i.children.push(C.node),C=h();return o(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/),{excluded:u,node:i}}function v(){const r=o(/^<!DOCTYPE\s+[^>]*>/);if(r){const n={type:"DocumentType",content:r[0]};return{excluded:l.options.filter(n)===!1,node:n}}}function b(){if(l.xml.startsWith("<![CDATA[")){const r=l.xml.indexOf("]]>");if(r>-1){const n=r+3,i={type:"CDATA",content:l.xml.substring(0,n)};return l.xml=l.xml.slice(n),{excluded:l.options.filter(i)===!1,node:i}}}}function m(){const r=o(/^<!--[\s\S]*?-->/);if(r){const n={type:"Comment",content:r[0]};return{excluded:l.options.filter(n)===!1,node:n}}}function t(){const r=o(/^([^<]+)/);if(r){const n={type:"Text",content:r[1]};return{excluded:l.options.filter(n)===!1,node:n}}}function e(){const r=o(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);if(r)return{name:r[1].trim(),value:s(r[2].trim())}}function s(r){return r.replace(/^['"]|['"]$/g,"")}function o(r){const n=l.xml.match(r);if(n)return l.xml=l.xml.slice(n[0].length),n}function g(){return l.xml.length===0}function d(r){return l.xml.indexOf(r)===0}function y(r,n={}){r=r.trim();const i=n.filter||(()=>!0);return l={xml:r,options:Object.assign(Object.assign({},n),{filter:i})},_()}p.exports=y,a.default=y})(j,j.exports);var q=j.exports;(function(p,a){var f=F&&F.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0});const l=f(q);function h(t){if(!t.options.indentation&&!t.options.lineSeparator)return;t.content+=t.options.lineSeparator;let e;for(e=0;e<t.level;e++)t.content+=t.options.indentation}function c(t,e){t.content+=e}function _(t,e,s){if(typeof t.content=="string")w(t.content,e,s);else if(t.type==="Element")x(t,e,s);else if(t.type==="ProcessingInstruction")b(t,e);else throw new Error("Unknown node type: "+t.type)}function w(t,e,s){if(!s){const o=t.trim();(e.options.lineSeparator||o.length===0)&&(t=o)}t.length>0&&(!s&&e.content.length>0&&h(e),c(e,t))}function x(t,e,s){if(!s&&e.content.length>0&&h(e),c(e,"<"+t.name),v(e,t.attributes),t.children===null){const o=e.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";c(e,o)}else if(t.children.length===0)c(e,"></"+t.name+">");else{const o=t.children;c(e,">"),e.level++;let g=t.attributes["xml:space"]==="preserve";if(!g&&e.options.collapseContent){let d=!1,y=!1,r=!1;o.forEach(function(n,i){n.type==="Text"?(n.content.includes(`
`)?(y=!0,n.content=n.content.trim()):(i===0||i===o.length-1)&&n.content.trim().length===0&&(n.content=""),n.content.trim().length>0&&(d=!0)):n.type==="CDATA"?d=!0:r=!0}),d&&(!r||!y)&&(g=!0)}o.forEach(function(d){_(d,e,s||g)}),e.level--,!s&&!g&&h(e),c(e,"</"+t.name+">")}}function v(t,e){Object.keys(e).forEach(function(s){const o=e[s].replace(/"/g,"&quot;");c(t," "+s+'="'+o+'"')})}function b(t,e){e.content.length>0&&h(e),c(e,"<?"+t.name),v(e,t.attributes),c(e,"?>")}function m(t,e={}){e.indentation="indentation"in e?e.indentation:"    ",e.collapseContent=e.collapseContent===!0,e.lineSeparator="lineSeparator"in e?e.lineSeparator:`\r
`,e.whiteSpaceAtEndOfSelfclosingTag=e.whiteSpaceAtEndOfSelfclosingTag===!0,e.throwOnFailure=e.throwOnFailure!==!1;try{const s=(0,l.default)(t,{filter:e.filter}),o={content:"",level:0,options:e};return s.declaration&&b(s.declaration,o),s.children.forEach(function(g){_(g,o,!1)}),e.lineSeparator?o.content.replace(/\r\n/g,`
`).replace(/\n/g,e.lineSeparator):o.content}catch(s){if(e.throwOnFailure)throw s;return t}}m.minify=(t,e={})=>m(t,Object.assign(Object.assign({},e),{indentation:"",lineSeparator:""})),p.exports=m,a.default=m})(O,O.exports);var Y=O.exports;const N=k(Y);function A(p){return p.trim()}function G(p,a){return R(()=>N(A(p),a)??"","")}function Q(p){const a=A(p);if(a==="")return!0;try{return N(a),!0}catch{return!1}}const H={"important:flex-full":"","important:flex-shrink-0":"","important:flex-grow-0":""},J={flex:"","justify-center":""},K="<hello><world>foo</world><world>bar</world></hello>",Ne=I({__name:"xml-formatter",setup(p){const a=X("xml-formatter:indent-size",2),f=X("xml-formatter:collapse-content",!0);function l(c){return G(c,{indentation:" ".repeat(a.value),collapseContent:f.value,lineSeparator:`
`})}const h=[{validator:Q,message:"Provided XML is not valid."}];return(c,_)=>{const w=z,x=U,v=W,b=D;return B(),V($,null,[P("div",H,[P("div",J,[E(x,{label:"Collapse content:","label-placement":"left"},{default:T(()=>[E(w,{value:M(f),"onUpdate:value":_[0]||(_[0]=m=>L(f)?f.value=m:null)},null,8,["value"])]),_:1}),E(x,{label:"Indent size:","label-placement":"left","label-width":"100","show-feedback":!1},{default:T(()=>[E(v,{value:M(a),"onUpdate:value":_[1]||(_[1]=m=>L(a)?a.value=m:null),min:"0",max:"10","w-100px":""},null,8,["value"])]),_:1})])]),E(b,{"input-label":"Your XML","input-placeholder":"Paste your XML here...","output-label":"Formatted XML from your XML","output-language":"xml","input-validation-rules":h,transformer:l,"input-default":K})],64)}}});export{Ne as default};