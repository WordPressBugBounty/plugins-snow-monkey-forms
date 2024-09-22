(()=>{"use strict";var e,n={906:()=>{const e=window.wp.blocks,n=JSON.parse('{"UU":"snow-monkey-forms/control-text","uK":{"xV":{"A":"{}"}}}'),o=window.ReactJSXRuntime,a=window.wp.blockEditor,s=window.wp.components,t=window.wp.compose,l=window.wp.element,r=window.wp.i18n,i=({value:e,onChange:n})=>{const a={};return""===e&&(a.borderColor="#d94f4f"),(0,o.jsx)(s.TextControl,{label:(0,r.__)("name","snow-monkey-forms"),help:(0,r.__)("Required. Input a unique machine-readable name.","snow-monkey-forms"),value:e,onChange:n,required:!0,style:a})},c=({value:e,onChange:n,multiple:a=!1})=>{const t=a?s.TextareaControl:s.TextControl;return(0,o.jsx)(t,{label:(0,r.__)("value","snow-monkey-forms"),help:(0,r.__)("Optional. Initial value.","snow-monkey-forms"),value:e,onChange:n})},d=({value:e,onChange:n})=>(0,o.jsx)(s.TextControl,{label:(0,r.__)("placeholder","snow-monkey-forms"),value:e,onChange:n}),m=({value:e,onChange:n})=>(0,o.jsx)(s.TextControl,{label:(0,r.__)("maxlength","snow-monkey-forms"),help:(0,r.__)("Optional. Maximum number of characters. If 0, not restricted.","snow-monkey-forms"),value:e,onChange:n}),h=({value:e,onChange:n})=>(0,o.jsx)(s.TextControl,{label:(0,r.__)("size","snow-monkey-forms"),help:(0,r.__)("Optional. The width of this item. If 0, not restricted.","snow-monkey-forms"),value:e,onChange:n}),u=({value:e,onChange:n,options:a=[]})=>{const t=1>a.length?["","name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","email","username","new-password","current-password","one-time-code","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-extension","impp","url","photo"].map((e=>({value:e,label:e}))):a;return(0,o.jsx)(s.SelectControl,{label:(0,r.__)("autocomplete","snow-monkey-forms"),value:e,options:t,onChange:n})},p=({value:e,onChange:n})=>(0,o.jsx)(s.TextControl,{label:(0,r.__)("id","snow-monkey-forms"),value:e,onChange:n}),v=({value:e,onChange:n})=>(0,o.jsx)(s.TextControl,{label:(0,r.__)("class","snow-monkey-forms"),help:(0,r.__)("Separate multiple classes with spaces.","snow-monkey-forms"),value:e,onChange:n});function x(e,n){return""===e?0:null!==e.match(/^[0-9]+$/)?parseInt(e):n}window.lodash;const f=(0,t.createHigherOrderComponent)((e=>n=>{const{attributes:t,setAttributes:l}=n,{validations:i}=t;if(void 0===i)return(0,o.jsx)(e,{...n});const c=JSON.parse(i);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.InspectorControls,{children:(0,o.jsx)(s.PanelBody,{title:(0,r.__)("Validation","snow-monkey-forms"),children:(0,o.jsx)(s.ToggleControl,{label:(0,r.__)("Required","snow-monkey-forms"),checked:!!c.required,onChange:e=>{l({validations:JSON.stringify({...c,required:e})})}})})}),(0,o.jsx)(e,{...n})]})}),"withValidations"),g=(0,t.compose)(f)((({attributes:e,setAttributes:t})=>{const{name:f,value:g,placeholder:w,maxlength:y,size:C,autocomplete:b,id:j,controlClass:_,description:k,isDisplayDescriptionConfirm:O,validations:T}=e;(0,l.useEffect)((()=>{t({validations:JSON.stringify({...JSON.parse(n.uK.xV.A),...JSON.parse(T)})})}),[]),(0,l.useEffect)((()=>{""===f&&t({name:`text-${((new Date).getTime()+Math.floor(8999*Math.random()+1e3)).toString(32)}`})}),[f]);const z=(0,a.useBlockProps)({className:"smf-placeholder"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.InspectorControls,{children:[(0,o.jsxs)(s.PanelBody,{title:(0,r.__)("Attributes","snow-monkey-forms"),children:[(0,o.jsx)(i,{value:f,onChange:e=>t({name:e})}),(0,o.jsx)(c,{value:g,onChange:e=>t({value:e})}),(0,o.jsx)(d,{value:w,onChange:e=>t({placeholder:e})}),(0,o.jsx)(m,{value:y,onChange:e=>{t({maxlength:x(e,y)})}}),(0,o.jsx)(h,{value:C,onChange:e=>{t({size:x(e,C)})}}),(0,o.jsx)(u,{value:b,onChange:e=>t({autocomplete:e})}),(0,o.jsx)(p,{value:j,onChange:e=>t({id:e})}),(0,o.jsx)(v,{value:_,onChange:e=>t({controlClass:e})})]}),(0,o.jsxs)(s.PanelBody,{title:(0,r.__)("Block settings","snow-monkey-forms"),children:[(0,o.jsx)(s.TextControl,{label:(0,r.__)("Description","snow-monkey-forms"),value:k,onChange:e=>t({description:e})}),(0,o.jsx)(s.ToggleControl,{label:(0,r.__)("Description is also displayed on the confirmation screen","snow-monkey-forms"),checked:O,onChange:e=>{t({isDisplayDescriptionConfirm:e})}})]})]}),(0,o.jsxs)("div",{...z,"data-name":f,children:[(0,o.jsx)("div",{className:"smf-text-control",children:(0,o.jsx)("input",{type:"text",name:f,value:g,placeholder:w,maxLength:y||void 0,size:C||void 0,disabled:"disabled",id:j||void 0,className:`smf-text-control__control ${_}`,"data-validations":Object.keys(Object.fromEntries(Object.entries(JSON.parse(T)).filter((([,e])=>!!e)))).join(" ")||void 0})}),k&&(0,o.jsx)("div",{className:"smf-control-description",children:k})]})]})}));(0,e.registerBlockType)(n.UU,{icon:{src:function(){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{color:"#cd162c"},children:(0,o.jsx)("path",{d:"m6.30769 12.75h-2.30769v-1.5h2.3077zm3.23077 0h-2.30769v-1.5h2.3077zm3.23074 0h-2.3077v-1.5h2.3077zm-10.7692-5.25c-.27614 0-.5.22386-.5.5v8c0 .2761.22386.5.5.5h20c.2761 0 .5-.2239.5-.5v-8c0-.27614-.2239-.5-.5-.5zm0-1.5c-1.104569 0-2 .89543-2 2v8c0 1.1046.89543 2 2 2h20c1.1046 0 2-.8954 2-2v-8c0-1.10457-.8954-2-2-2z",clipRule:"evenodd",fillRule:"evenodd"})})}},edit:g,save:()=>null})}},o={};function a(e){var s=o[e];if(void 0!==s)return s.exports;var t=o[e]={exports:{}};return n[e](t,t.exports,a),t.exports}a.m=n,e=[],a.O=(n,o,s,t)=>{if(!o){var l=1/0;for(d=0;d<e.length;d++){for(var[o,s,t]=e[d],r=!0,i=0;i<o.length;i++)(!1&t||l>=t)&&Object.keys(a.O).every((e=>a.O[e](o[i])))?o.splice(i--,1):(r=!1,t<l&&(l=t));if(r){e.splice(d--,1);var c=s();void 0!==c&&(n=c)}}return n}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[o,s,t]},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={648:0,416:0};a.O.j=n=>0===e[n];var n=(n,o)=>{var s,t,[l,r,i]=o,c=0;if(l.some((n=>0!==e[n]))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(i)var d=i(a)}for(n&&n(o);c<l.length;c++)t=l[c],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(d)},o=globalThis.webpackChunk=globalThis.webpackChunk||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var s=a.O(void 0,[416],(()=>a(906)));s=a.O(s)})();