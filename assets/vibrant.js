(()=>{"use strict";var e,t={18271:(e,t,r)=>{var o=r(1082);const n=document.getElementById("main_image");o.from(n.getAttribute("src")).getSwatches().then((e=>{for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t]){const r=document.createElement("span"),o=document.createTextNode(t+" / "+e[t].getHex()),n=document.getElementById("swatcheslist");r.className="badge badge-secondary my-2 py-2",r.setAttribute("style","display: block; text-shadow: 1px 1px 3px #000; background-color: "+e[t].getHex()),r.appendChild(o),n.append(r)}}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,n,a]=e[d],i=!0,c=0;c<r.length;c++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={451:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[l,i,c]=r,s=0;if(l.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var d=c(o)}for(t&&t(r);s<l.length;s++)a=l[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},r=globalThis.webpackChunkbolt=globalThis.webpackChunkbolt||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[82],(()=>o(18271)));n=o.O(n)})();