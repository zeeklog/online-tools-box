import{s as n}from"./chunk-9a43cce8.js";function i({withUppercase:r=!0,withLowercase:t=!0,withNumbers:s=!0,withSymbols:a=!1,length:e=64,alphabet:o}){const u=o??[r?"ABCDEFGHIJKLMOPQRSTUVWXYZ":"",t?"abcdefghijklmopqrstuvwxyz":"",s?"0123456789":"",a?`.,;:!?./-"'#{([-|\\@)]=}*+`:""].join("");return n(u.repeat(e)).substring(0,e)}export{i as c};
