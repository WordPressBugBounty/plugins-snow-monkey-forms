(()=>{var e,n={572:(e,n,o)=>{"use strict";const r=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-forms/control-checkboxes","uK":{"xV":{"A":"{}"}}}'),s=window.ReactJSXRuntime;var l=o(942),a=o.n(l);const i=window.wp.blockEditor,c=window.wp.components,d=window.wp.compose,u=window.wp.element,m=window.wp.i18n,f=({value:e,onChange:n})=>{const o={};return""===e&&(o.borderColor="#d94f4f"),(0,s.jsx)(c.TextControl,{label:(0,m.__)("name","snow-monkey-forms"),help:(0,m.__)("Required. Input a unique machine-readable name.","snow-monkey-forms"),value:e,onChange:n,required:!0,style:o})},h=({value:e,onChange:n})=>(0,s.jsx)(c.TextareaControl,{label:(0,m.__)("value","snow-monkey-forms"),help:(0,m.sprintf)(
// translators: %1$s: line-break-char
// translators: %1$s: line-break-char
(0,m.__)("Optional. Initial value. Enter in the following format: value%1$s","snow-monkey-forms"),"↵"),value:e,onChange:n}),p=({value:e,onChange:n})=>{const o={};return""===e&&(o.borderColor="#d94f4f"),(0,s.jsx)(c.TextareaControl,{label:(0,m.__)("options","snow-monkey-forms"),value:e,help:(0,m.sprintf)(
// translators: %1$s: line-break-char
// translators: %1$s: line-break-char
(0,m.__)('Required. Enter in the following format: "value" : "label"%1$s or value%1$s',"snow-monkey-forms"),"↵"),onChange:n,required:!0,style:o})},v=window.lodash;function b(e){const n=e.replace(/\r?\n/g,"\n").split("\n");return(0,v.uniqBy)(n.map((e=>{const n=(()=>{try{return JSON.parse(`{ ${e} }`)}catch(n){return{[e]:e}}})();return{value:Object.keys(n)[0],label:Object.values(n)[0]}})),"value").map((e=>{var n;const o={};return o[null!==(n=e.value)&&void 0!==n?n:""]=e.label,o}))}const g=(0,d.createHigherOrderComponent)((e=>n=>{const{attributes:o,setAttributes:r}=n,{validations:t}=o;if(void 0===t)return(0,s.jsx)(e,{...n});const l=JSON.parse(t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.InspectorControls,{children:(0,s.jsx)(c.PanelBody,{title:(0,m.__)("Validation","snow-monkey-forms"),children:(0,s.jsx)(c.ToggleControl,{label:(0,m.__)("Required","snow-monkey-forms"),checked:!!l.required,onChange:e=>{r({validations:JSON.stringify({...l,required:e})})}})})}),(0,s.jsx)(e,{...n})]})}),"withValidations"),x=(0,d.compose)(g)((({attributes:e,setAttributes:n})=>{const{name:o,grouping:r,legend:l,legendInvisible:d,options:v,values:g,delimiter:x,direction:w,description:y,isDisplayDescriptionConfirm:k,validations:_}=e;(0,u.useEffect)((()=>{n({validations:JSON.stringify({...JSON.parse(t.uK.xV.A),...JSON.parse(_)})})}),[]),(0,u.useEffect)((()=>{""===o&&n({name:`checkboxes-${((new Date).getTime()+Math.floor(8999*Math.random()+1e3)).toString(32)}`}),""===v&&n({options:'value1\n"value2" : "label2"\n"value3" : "label3"'})}),[o,v]);const j=b(v),C=b(g).map((e=>{const n=Object.keys(e)[0];return"undefined"!==n?n:""})),O=a()("smf-checkboxes-control",{[`smf-checkboxes-control--${w}`]:!!w}),N=(0,i.useBlockProps)({className:"smf-placeholder"}),S=()=>(0,s.jsx)("div",{className:"smf-checkboxes-control__control","data-validations":Object.keys(Object.fromEntries(Object.entries(JSON.parse(_)).filter((([,e])=>!!e)))).join(" ")||void 0,children:j.map((e=>{const n=Object.keys(e)[0],r=Object.values(e)[0];return(0,s.jsx)("div",{className:"smf-label",children:(0,s.jsx)("label",{htmlFor:`${o}-${n}`,children:(0,s.jsxs)("span",{className:"smf-checkbox-control",children:[(0,s.jsx)("input",{type:"checkbox",name:`${o}[]`,value:n,checked:C.includes(n),disabled:"disabled",className:"smf-checkbox-control__control",id:`${o}-${n}`}),(0,s.jsx)("span",{className:"smf-checkbox-control__label",children:r})]})})},n)}))});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.InspectorControls,{children:[(0,s.jsxs)(c.PanelBody,{title:(0,m.__)("Attributes","snow-monkey-forms"),children:[(0,s.jsx)(f,{value:o,onChange:e=>n({name:e})}),(0,s.jsx)(c.ToggleControl,{label:(0,m.__)("Grouping","snow-monkey-forms"),help:(0,m.__)("Enable if you want to group by fieldset and label by legend.","snow-monkey-forms"),checked:r,onChange:e=>{n({grouping:e})}}),r&&(0,s.jsx)(c.ToggleControl,{label:(0,m.__)("Make legend invisible","snow-monkey-forms"),help:(0,m.__)("When activated, the legend will not appear on the screen, but will be read by screen readers.","snow-monkey-forms"),checked:d,onChange:e=>{n({legendInvisible:e})}}),(0,s.jsx)(p,{value:v,onChange:e=>n({options:e})}),(0,s.jsx)(h,{value:g,onChange:e=>n({values:e})}),(0,s.jsx)(c.TextControl,{label:(0,m.__)("Delimiter","snow-monkey-forms"),help:(0,m.__)("Optional. Character that separates each item.","snow-monkey-forms"),value:x,onChange:e=>n({delimiter:e})})]}),(0,s.jsxs)(c.PanelBody,{title:(0,m.__)("Block settings","snow-monkey-forms"),children:[(0,s.jsx)(c.SelectControl,{label:(0,m.__)("Direction","snow-monkey-forms"),value:w,options:[{value:"",label:(0,m.__)("Default","snow-monkey-forms")},{value:"horizontal",label:(0,m.__)("Horizontal","snow-monkey-forms")},{value:"vertical",label:(0,m.__)("Vertical","snow-monkey-forms")}],onChange:e=>n({direction:e})}),(0,s.jsx)(c.TextControl,{label:(0,m.__)("Description","snow-monkey-forms"),value:y,onChange:e=>n({description:e})}),(0,s.jsx)(c.ToggleControl,{label:(0,m.__)("Description is also displayed on the confirmation screen","snow-monkey-forms"),checked:k,onChange:e=>{n({isDisplayDescriptionConfirm:e})}})]})]}),(0,s.jsxs)("div",{...N,"data-name":o,children:[(0,s.jsx)("div",{className:O,children:r?(0,s.jsxs)("fieldset",{className:"smf-control-fieldset",children:[(0,s.jsx)(i.RichText,{tagName:"legend",value:l,onChange:e=>n({legend:e}),placeholder:(0,m.__)("Label","snow-monkey-forms"),className:a()("smf-control-legend",{"screen-reader-text":d})}),(0,s.jsx)(S,{})]}):(0,s.jsx)(S,{})}),y&&(0,s.jsx)("div",{className:"smf-control-description",children:y})]})]})}));(0,r.registerBlockType)(t.UU,{icon:{src:function(){return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{color:"#cd162c"},children:[(0,s.jsx)("rect",{fill:"none",x:"3.75",y:"3.75",width:"16.5",height:"16.5",rx:"1.53571",stroke:"currentColor",strokeWidth:"1.5"}),(0,s.jsx)("path",{fill:"none",d:"M16.6232 7.99994L10.6895 15.9801L7.24875 13.4218",stroke:"currentColor",strokeWidth:"1.5"})]})}},edit:x,save:()=>null})},942:(e,n)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function t(){for(var e="",n=0;n<arguments.length;n++){var o=arguments[n];o&&(e=l(e,s(o)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var o in e)r.call(e,o)&&e[o]&&(n=l(n,o));return n}function l(e,n){return n?e?e+" "+n:e+n:e}e.exports?(t.default=t,e.exports=t):void 0===(o=function(){return t}.apply(n,[]))||(e.exports=o)}()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={exports:{}};return n[e](s,s.exports,r),s.exports}r.m=n,e=[],r.O=(n,o,t,s)=>{if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],t=e[d][1],s=e[d][2];for(var a=!0,i=0;i<o.length;i++)(!1&s||l>=s)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(d--,1);var c=t();void 0!==c&&(n=c)}}return n}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,t,s]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={498:0,414:0};r.O.j=n=>0===e[n];var n=(n,o)=>{var t,s,l=o[0],a=o[1],i=o[2],c=0;if(l.some((n=>0!==e[n]))){for(t in a)r.o(a,t)&&(r.m[t]=a[t]);if(i)var d=i(r)}for(n&&n(o);c<l.length;c++)s=l[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var t=r.O(void 0,[414],(()=>r(572)));t=r.O(t)})();