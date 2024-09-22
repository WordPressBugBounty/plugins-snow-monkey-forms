(()=>{"use strict";var e,o={781:()=>{const e=window.wp.blocks,o=JSON.parse('{"UU":"snow-monkey-forms/control-file","uK":{"xV":{"A":"{\\"uploaded\\":true}"}}}'),n=window.ReactJSXRuntime,s=window.wp.blockEditor,r=window.wp.components,i=window.wp.compose,l=window.wp.element,t=window.wp.i18n,a=({value:e,onChange:o})=>{const s={};return""===e&&(s.borderColor="#d94f4f"),(0,n.jsx)(r.TextControl,{label:(0,t.__)("name","snow-monkey-forms"),help:(0,t.__)("Required. Input a unique machine-readable name.","snow-monkey-forms"),value:e,onChange:o,required:!0,style:s})},c=({value:e,onChange:o})=>(0,n.jsx)(r.TextControl,{label:(0,t.__)("id","snow-monkey-forms"),value:e,onChange:o}),d=({value:e,onChange:o})=>(0,n.jsx)(r.TextControl,{label:(0,t.__)("class","snow-monkey-forms"),help:(0,t.__)("Separate multiple classes with spaces.","snow-monkey-forms"),value:e,onChange:o});window.lodash;const m=(0,i.createHigherOrderComponent)((e=>o=>{const{attributes:i,setAttributes:l}=o,{validations:a}=i;if(void 0===a)return(0,n.jsx)(e,{...o});const c=JSON.parse(a);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.InspectorControls,{children:(0,n.jsx)(r.PanelBody,{title:(0,t.__)("Validation","snow-monkey-forms"),children:(0,n.jsx)(r.ToggleControl,{label:(0,t.__)("Required","snow-monkey-forms"),checked:!!c.required,onChange:e=>{l({validations:JSON.stringify({...c,required:e})})}})})}),(0,n.jsx)(e,{...o})]})}),"withValidations"),f=(0,i.compose)(m)((({attributes:e,setAttributes:i})=>{const{name:m,id:f,controlClass:h,description:p,isDisplayDescriptionConfirm:u,validations:w}=e;(0,l.useEffect)((()=>{i({validations:JSON.stringify({...JSON.parse(o.uK.xV.A),...JSON.parse(w)})})}),[]),(0,l.useEffect)((()=>{""===m&&i({name:`file-${((new Date).getTime()+Math.floor(8999*Math.random()+1e3)).toString(32)}`})}),[m]);const v=(0,s.useBlockProps)({className:"smf-placeholder"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.InspectorControls,{children:[(0,n.jsxs)(r.PanelBody,{title:(0,t.__)("Attributes","snow-monkey-forms"),children:[(0,n.jsx)(a,{value:m,onChange:e=>i({name:e})}),(0,n.jsx)(c,{value:f,onChange:e=>i({id:e})}),(0,n.jsx)(d,{value:h,onChange:e=>i({controlClass:e})})]}),(0,n.jsxs)(r.PanelBody,{title:(0,t.__)("Block settings","snow-monkey-forms"),children:[(0,n.jsx)(r.TextControl,{label:(0,t.__)("Description","snow-monkey-forms"),value:p,onChange:e=>i({description:e})}),(0,n.jsx)(r.ToggleControl,{label:(0,t.__)("Description is also displayed on the confirmation screen","snow-monkey-forms"),checked:u,onChange:e=>{i({isDisplayDescriptionConfirm:e})}})]})]}),(0,n.jsxs)("div",{...v,"data-name":m,children:[(0,n.jsx)("div",{className:"smf-file-control",children:(0,n.jsxs)("label",{htmlFor:f||void 0,children:[(0,n.jsx)("input",{type:"file",name:m,disabled:"disabled",id:f||void 0,className:`smf-file-control__control ${h}`,"data-validations":Object.keys(Object.fromEntries(Object.entries(JSON.parse(w)).filter((([,e])=>!!e)))).join(" ")||void 0}),(0,n.jsx)("span",{className:"smf-file-control__label",children:(0,t.__)("Choose file","snow-monkey-forms")}),(0,n.jsx)("span",{className:"smf-file-control__filename",children:(0,t.__)("No file chosen","snow-monkey-forms")})]})}),p&&(0,n.jsx)("div",{className:"smf-control-description",children:p})]})]})}));(0,e.registerBlockType)(o.UU,{icon:{src:function(){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:"#cd162c"},children:(0,n.jsx)("path",{d:"M12.4542 6.58541L12.6615 7H13.125H19C19.6904 7 20.25 7.55964 20.25 8.25V17.75C20.25 18.4404 19.6904 19 19 19H5C4.30964 19 3.75 18.4404 3.75 17.75V6C3.75 5.30964 4.30964 4.75 5 4.75H10.7639C11.2374 4.75 11.6702 5.0175 11.882 5.44098L12.4542 6.58541Z",fill:"none",stroke:"currentColor",strokeWidth:"1.5"})})}},edit:f,save:()=>null})}},n={};function s(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.m=o,e=[],s.O=(o,n,r,i)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],t=!0,a=0;a<n.length;a++)(!1&i||l>=i)&&Object.keys(s.O).every((e=>s.O[e](n[a])))?n.splice(a--,1):(t=!1,i<l&&(l=i));if(t){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={111:0,247:0};s.O.j=o=>0===e[o];var o=(o,n)=>{var r,i,[l,t,a]=n,c=0;if(l.some((o=>0!==e[o]))){for(r in t)s.o(t,r)&&(s.m[r]=t[r]);if(a)var d=a(s)}for(o&&o(n);c<l.length;c++)i=l[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},n=globalThis.webpackChunk=globalThis.webpackChunk||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=s.O(void 0,[247],(()=>s(781)));r=s.O(r)})();