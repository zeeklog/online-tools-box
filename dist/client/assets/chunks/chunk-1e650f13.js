import{a as e}from"./chunk-a740628f.js";function o({ip:t}){return i({ip:t})?t.trim().split(".").reduce((r,n,a)=>r+Number(n)*256**(3-a),0):0}function p({ip:t,prefix:r="0000:0000:0000:0000:0000:ffff:"}){return i({ip:t})?r+e.chain(t).trim().split(".").map(n=>Number.parseInt(n).toString(16).padStart(2,"0")).chunk(2).map(n=>n.join("")).join(":").value():""}function i({ip:t}){const r=t.trim();return/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(r)}export{i as a,p as b,o as i};
