import{ci as b}from"./index.de7a3c72.js";function l(r,a,e){var s=r.length;return e=e===void 0?s:e,!a&&e>=s?r:b(r,a,e)}var m="\\ud800-\\udfff",R="\\u0300-\\u036f",C="\\ufe20-\\ufe2f",p="\\u20d0-\\u20ff",v=R+C+p,A="\\ufe0e\\ufe0f",S="\\u200d",$=RegExp("["+S+m+v+A+"]");function o(r){return $.test(r)}function M(r){return r.split("")}var n="\\ud800-\\udfff",h="\\u0300-\\u036f",k="\\ufe20-\\ufe2f",x="\\u20d0-\\u20ff",y=h+k+x,j="\\ufe0e\\ufe0f",H="["+n+"]",f="["+y+"]",u="\\ud83c[\\udffb-\\udfff]",J="(?:"+f+"|"+u+")",d="[^"+n+"]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",t="[\\ud800-\\udbff][\\udc00-\\udfff]",O="\\u200d",c=J+"?",g="["+j+"]?",T="(?:"+O+"(?:"+[d,i,t].join("|")+")"+g+c+")*",U=g+c+T,V="(?:"+[d+f+"?",f,i,t,H].join("|")+")",E=RegExp(u+"(?="+u+")|"+V+U,"g");function W(r){return r.match(E)||[]}function Z(r){return o(r)?W(r):M(r)}export{l as c,o as h,Z as s};