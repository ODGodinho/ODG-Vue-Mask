!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";var o={S:{pattern:/[a-zA-Z]/u},A:{pattern:/[a-zA-Z]/u,transform:t=>String(t).toLocaleUpperCase()},a:{pattern:/[a-zA-Z]/u,transform:t=>String(t).toLocaleLowerCase()},Y:{pattern:/[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/u,transform:t=>String(t).toLocaleUpperCase()},y:{pattern:/[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/u,transform:t=>String(t).toLocaleLowerCase()},X:{pattern:/[a-zA-Z0-9]/u},"#":{pattern:/[a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF]/u},0:{pattern:/\d/u},9:{pattern:/\d/u,optional:!0},"?":{nextElement:!0,optional:!0},"!":{nextElement:!0,noMask:!0}};const a=function(t,e,n={tokens:null,el:null,currentPosition:null}){if("array"==typeof(r=e)||r instanceof Array){let o="";const r=[];let u=null;for(let i=0;i<e.length;i++)if(o=e[i],r[i]=a(t,o,n),u=u?r[i].unmasked.length>u.unmasked.length?r[i]:u:r[i],n.firstMatch&&r[i].valid)return r[i];return u}var r;let u=0,i=0;const l=t||"",s=e||"",c=n.tokens||a.defaultTokens||o,f=s.length;let d=0,p=0,v="",m="",g="",y=null,w="",h=null,E=!1,b=null,x="",k=null;for(;u<f;){x=s[u-1],k=c[x],g=s[u],y=c[g],w=l[i],k&&k.nextElement&&(y=y?{...y,...k}:k,y.nextElement=!1),h=Boolean(y),y=y||{},k=k||{},b=Boolean(y.noMask),E=!!y&&y.nextElement;let t=!1;if(y.pattern&&!E&&!b&&w){if(t=y.pattern.test(w),t){const t=y.transform?y.transform(w):w;v+=t,m+=t,d+=y.optional?0:1,p+=1}}else(!h&&!E||b&&!E||!w)&&(d+=y.optional?0:1,p+=1,w&&(v+=g)),t=!0;(t&&!0!==E&&h||y.pattern&&!y.optional||g===w&&(!h||y.optional))&&i++,(t||y.optional)&&u++}let S=-1;if(n.el&&"INPUT"===n.el.tagName){const{el:t}=n;S=t.selectionEnd;const e=t.value[S-1];for(;S<=v.length&&v.charAt(S-1)!==e;)S++}const P=v.length;return this?(this.value=v,this.valid=u===f&&P>=d&&P<=p,this.unmasked=m,this.newPosition=S,this):{value:v,valid:u===f&&P>=d&&P<=p,unmasked:m,newPosition:S}};a.defaultTokens=o,a.prototype.defaultTokens={...a.defaultTokens},window.ODGMask=a;e.a=a},function(t,e,n){"use strict";var o=n(0);n(4);var a=o.a;const r=function(t,e,n){const o=function(t){let e=null,n=null;return t.data.directives.forEach(t=>{"model"===t.name&&(e=t.expression),"text"===t.name&&(n=t.expression)}),e||n}(n);if(!e.value)return;if(!o)return void function(t,e,n){let o=t.innerText;const r=document.activeElement===t?"input":"change";"INPUT"===t.tagName&&(o=t.value),o=String(o);const u=n.data.attrs?n.data.attrs["odg-mask-options"]:{},i=a(o,e.value,{...u,el:t});if(i&&o!==i.value)if("INPUT"===t.tagName){t.value=i.value,t.selectionStart=i.newPosition,t.selectionEnd=i.newPosition;const e=document.createEvent("Event");e.initEvent(r,!0,!0),t.dispatchEvent(e)}else t.innerText=i.value}(t,e,n);const r=function(t){return"string"==typeof t&&t.endsWith(".value")?t.substr(0,t.lastIndexOf(".value")):t}(o),u=n.context[r],i=!!((l=u)||"array"==typeof l||l instanceof Array)&&("object"==typeof l||l instanceof Object||Object.is(l));var l;let s=u;i&&(s=u.value);const c=n.data.attrs?n.data.attrs["odg-mask-options"]:{},f=a(String(s),e.value,{...c,el:t});let d=!1;f&&(i?String(u.value)===f.value&&u.valid===f.valid&&u.unmasked===f.unmasked||(n.context[r]={...n.context[r],...f},d=!0):String(u)!==f.value&&(n.context[r]=f.value,d=!0),t===document.activeElement&&d&&(t.selectionStart=f.newPosition,t.selectionEnd=f.newPosition))};e.a={acceptStatement:!0,twoWay:!0,bind:function(t,e,n){r(t,e,n)},update:function(t,e,n){r(t,e,n)}}},function(t,e,n){"use strict";n.r(e),function(t){var o=n(1);const a=t=>{t.directive("odg-mask",o.a)};let r=null;"undefined"!=typeof window&&window.Vue?r=window.Vue:void 0!==t&&t.Vue&&(r=t.Vue),r&&r.use(a),e.default=a}.call(this,n(3))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var o=n(0);document.addEventListener("input",t=>{if(!(t=>{try{const e=t.target;if(!e)return!1;if(!e.getAttribute("odg-mask"))return!1}catch(t){return!1}return!0})(t))return;const e=t.target,n=e.getAttribute("odg-mask"),a=Object(o.a)(e.value,n,{el:e});a.value!==e.value&&(e.value=a.value,e.selectionStart=a.newPosition,e.selectionEnd=a.newPosition)})}]);