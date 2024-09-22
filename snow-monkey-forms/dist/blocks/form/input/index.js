(()=>{var e={942:(e,o)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e="",o=0;o<arguments.length;o++){var n=arguments[o];n&&(e=l(e,s(n)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var n in e)t.call(e,n)&&e[n]&&(o=l(o,n));return o}function l(e,o){return o?e?e+" "+o:e+o:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(o,[]))||(e.exports=n)}()}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";const e=window.wp.blocks,o=JSON.parse('{"UU":"snow-monkey-forms/form--input"}');var t=n(942),r=n.n(t);const s=window.wp.blockEditor,l=window.wp.data,a=window.wp.components,m=window.wp.i18n,i=window.wp.coreData,_=window.ReactJSXRuntime;function d({attributes:e,onChangeFormStyle:o}){const{formStyle:n}=e,[t,r]=(0,i.useEntityProp)("postType","snow-monkey-forms","meta");return(0,_.jsxs)(a.PanelBody,{title:(0,m.__)("Form settings","snow-monkey-forms"),children:[(0,_.jsx)(a.ToggleControl,{label:(0,m.__)("Use confirm page","snow-monkey-forms"),checked:t.use_confirm_page,onChange:e=>r({use_confirm_page:e})}),(0,_.jsx)(a.ToggleControl,{label:(0,m.__)("Use progress tracker","snow-monkey-forms"),checked:t.use_progress_tracker,onChange:e=>r({use_progress_tracker:e})}),(0,_.jsx)(a.SelectControl,{label:(0,m.__)("Form style","snow-monkey-forms"),value:n,options:[{value:"",label:(0,m.__)("Default","snow-monkey-forms")},{value:"smf-form--simple-table",label:(0,m.__)("Simple table","snow-monkey-forms")},{value:"smf-form--letter",label:(0,m.__)("Letter","snow-monkey-forms")},{value:"smf-form--business",label:(0,m.__)("Business","snow-monkey-forms")}],onChange:o}),t.use_confirm_page&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a.TextControl,{label:(0,m.__)("Confirm button label","snow-monkey-forms"),value:t.confirm_button_label,onChange:e=>r({confirm_button_label:e})}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Back button label","snow-monkey-forms"),value:t.back_button_label,onChange:e=>r({back_button_label:e})})]}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Send button label","snow-monkey-forms"),value:t.send_button_label,onChange:e=>r({send_button_label:e})})]})}const u=window.wp.element;function p(){const[e,o]=(0,u.useState)(!1);return(0,_.jsx)(a.Button,{icon:"editor-help",label:(0,m.__)("Help","snow-monkey-forms"),onClick:()=>o(!e),children:e&&(0,_.jsx)(a.Popover,{className:"smf-help-popover",placement:"top",children:(0,_.jsxs)("ul",{style:{margin:0,padding:"13px"},children:[(0,_.jsxs)("li",{children:[(0,m.__)("You can embed a submitted value in the following formats: ","snow-monkey-forms"),(0,_.jsx)("b",{style:{color:"#ca4a1f"},children:"{"}),"name",(0,_.jsx)("b",{style:{color:"#ca4a1f"},children:"}"})]}),(0,_.jsxs)("li",{children:[(0,m.__)("You can embed all submitted values ​​in the following format: ","snow-monkey-forms"),(0,_.jsx)("b",{style:{color:"#ca4a1f"},children:"{all-fields}"})]})]})})})}function y(){const[e,o]=(0,i.useEntityProp)("postType","snow-monkey-forms","meta"),n={borderColor:"#d94f4f"};return(0,_.jsxs)(a.PanelBody,{title:(0,m.__)("Administrator email","snow-monkey-forms"),children:[(0,_.jsx)(a.TextControl,{label:(0,m.__)("To (Email address)","snow-monkey-forms"),value:e.administrator_email_to,onChange:e=>o({administrator_email_to:e}),style:e.administrator_email_to?void 0:n}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Subject","snow-monkey-forms"),value:e.administrator_email_subject,onChange:e=>o({administrator_email_subject:e}),style:e.administrator_email_subject?void 0:n}),(0,_.jsx)(a.TextareaControl,{label:(0,m.__)("Body","snow-monkey-forms"),value:e.administrator_email_body,onChange:e=>o({administrator_email_body:e}),style:e.administrator_email_body?void 0:n}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Reply-To (Email address)","snow-monkey-forms"),help:(0,m.__)("Optional","snow-monkey-forms"),value:e.administrator_email_replyto,onChange:e=>o({administrator_email_replyto:e})}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("From (Email address)","snow-monkey-forms"),help:(0,m.__)("Optional","snow-monkey-forms"),value:e.administrator_email_from,onChange:e=>o({administrator_email_from:e})}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Sender","snow-monkey-forms"),help:(0,m.__)("Optional","snow-monkey-forms"),value:e.administrator_email_sender,onChange:e=>o({administrator_email_sender:e})}),(0,_.jsx)(p,{})]})}function c(){const[e,o]=(0,i.useEntityProp)("postType","snow-monkey-forms","meta"),n={borderColor:"#d94f4f"};return(0,_.jsxs)(a.PanelBody,{title:(0,m.__)("Auto reply email","snow-monkey-forms"),children:[(0,_.jsx)(a.TextControl,{label:(0,m.__)("To (Email address)","snow-monkey-forms"),help:(0,m.__)("Enter the name attribute value of the installed email form field in the following format: {name}","snow-monkey-forms"),value:e.auto_reply_email_to,onChange:e=>o({auto_reply_email_to:e}),style:e.auto_reply_email_to||!e.auto_reply_email_subject&&!e.auto_reply_email_body?void 0:n}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Subject","snow-monkey-forms"),value:e.auto_reply_email_subject,onChange:e=>o({auto_reply_email_subject:e}),style:e.auto_reply_email_to&&!e.auto_reply_email_subject?n:void 0}),(0,_.jsx)(a.TextareaControl,{label:(0,m.__)("Body","snow-monkey-forms"),value:e.auto_reply_email_body,onChange:e=>o({auto_reply_email_body:e}),style:e.auto_reply_email_to&&!e.auto_reply_email_body?n:void 0}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Reply-To (Email address)","snow-monkey-forms"),help:(0,m.__)("Optional","snow-monkey-forms"),value:e.auto_reply_email_replyto,onChange:e=>o({auto_reply_email_replyto:e})}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("From (Email address)","snow-monkey-forms"),help:(0,m.__)("Optional","snow-monkey-forms"),value:e.auto_reply_email_from,onChange:e=>o({auto_reply_email_from:e})}),(0,_.jsx)(a.TextControl,{label:(0,m.__)("Sender","snow-monkey-forms"),help:(0,m.__)("Optional","snow-monkey-forms"),value:e.auto_reply_email_sender,onChange:e=>o({auto_reply_email_sender:e})}),(0,_.jsx)(p,{})]})}(0,e.registerBlockType)(o.UU,{icon:{foreground:"#cd162c",src:"editor-ul"},edit:function(e){const{attributes:o,setAttributes:n,className:t}=e,{formStyle:i,templateLock:u}=o,p=r()("smf-form",t,{[i]:!!i}),f=(0,s.useBlockProps)({className:["components-panel","snow-monkey-forms-setting-panel"]}),b=(0,s.useInnerBlocksProps)({className:p},{templateLock:u,prioritizedInserterBlocks:["snow-monkey-forms/item"]});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(s.InspectorControls,{children:[(0,_.jsx)(d,{...e,onChangeFormStyle:e=>n({formStyle:e})}),(0,_.jsx)(y,{}),(0,_.jsx)(c,{})]}),(0,_.jsxs)("div",{...f,children:[(0,_.jsxs)("div",{className:"components-panel__header edit-post-sidebar-header snow-monkey-forms-setting-panel__header",children:[(0,m.__)("Input","snow-monkey-forms"),(0,_.jsx)(a.Button,{isSecondary:!0,onClick:()=>(0,l.dispatch)("core/edit-post").openGeneralSidebar("edit-post/block"),children:(0,m.__)("Open the form settings","snow-monkey-forms")})]}),(0,_.jsx)("div",{className:"components-panel__body is-opened snow-monkey-forms-setting-panel__body",children:(0,_.jsx)("div",{...b})})]})]})},save:function({attributes:e,className:o}){const{formStyle:n}=e,t=r()("smf-form",o,{[n]:!!n});return(0,_.jsx)("div",{...s.useInnerBlocksProps.save(s.useBlockProps.save({className:t}))})}})})()})();