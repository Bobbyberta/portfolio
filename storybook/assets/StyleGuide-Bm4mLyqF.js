import{d as p,M as m,T as u,e as f,f as g,g as l}from"./index-hsrlqYmR.js";import{u as h}from"./index-BqN8AeaN.js";import"./iframe-o6IYCuN7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-mS9C8s2F.js";import"./index-ogSvIofg.js";var a={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=p,b=Symbol.for("react.element"),_=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,T=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function j(s,e,o){var r,i={},c=null,t=null;o!==void 0&&(c=""+o),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(t=e.ref);for(r in e)S.call(e,r)&&!C.hasOwnProperty(r)&&(i[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:b,type:s,key:c,ref:t,props:i,_owner:T.current}}d.Fragment=_;d.jsx=j;d.jsxs=j;a.exports=d;var n=a.exports;function x(s){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3"},h(),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(m,{title:"Style Guide"}),`
`,n.jsx(u,{children:"Style Guide"}),`
`,n.jsx(f,{children:"Design tokens and visual guidelines for the portfolio website"}),`
`,n.jsx(e.h2,{id:"colors",children:"Colors"}),`
`,n.jsxs(g,{children:[n.jsx(l,{title:"Primary Colors",colors:{"--primary":"#00A7E1","--primary-dark":"#0089B8","--primary-light":"rgba(var(--primary-rgb), 0.1)"}}),n.jsx(l,{title:"Accent Colors",colors:{"--accent":"#FF5722","--accent-dark":"#E64A19"}}),n.jsx(l,{title:"Text Colors",colors:{"--text":"#333","--text-light":"#666","--text-dark":"#2c3e50"}}),n.jsx(l,{title:"Background Colors",colors:{"--bg":"#fff","--bg-light":"#f8f9fa","--border":"#ddd"}})]}),`
`,n.jsx(e.h2,{id:"spacing",children:"Spacing"}),`
`,n.jsx(e.p,{children:"The spacing system uses a consistent scale:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--spacing-xxs"}),": 0.25rem"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--spacing-xsm"}),": 0.75rem"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--spacing-sm"}),": 1rem"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--spacing-sm-md"}),": 1.5rem"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--spacing-md"}),": 2rem"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--spacing-lg"}),": 3rem"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--spacing-xl"}),": 4rem"]}),`
`]}),`
`,n.jsx(e.h2,{id:"border-radius",children:"Border Radius"}),`
`,n.jsx(e.p,{children:"Three levels of border radius are available:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--border-radius-small"}),": 4px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--border-radius-medium"}),": 12px"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--border-radius-large"}),": 24px"]}),`
`]}),`
`,n.jsx(e.h2,{id:"shadows",children:"Shadows"}),`
`,n.jsx(e.p,{children:"Shadow variants for depth:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--shadow-sm"}),": 0 2px 5px rgba(0,0,0,0.1)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--shadow-md"}),": 0 4px 12px rgba(0,0,0,0.1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"typography",children:"Typography"}),`
`,n.jsx(e.p,{children:"The site uses Roboto as its primary font family:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`font-family: 'Roboto', sans-serif;
`})}),`
`,n.jsx(e.h3,{id:"font-sizes",children:"Font Sizes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Headings:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"H1: 2.5rem (40px)"}),`
`,n.jsx(e.li,{children:"H2: 2rem (32px)"}),`
`,n.jsx(e.li,{children:"H3: 1.75rem (28px)"}),`
`,n.jsx(e.li,{children:"H4: 1.5rem (24px)"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Body Text:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Regular: 1rem (16px)"}),`
`,n.jsx(e.li,{children:"Small: 0.875rem (14px)"}),`
`,n.jsx(e.li,{children:"XSmall: 0.75rem (12px)"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"line-heights",children:"Line Heights"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Headings: 1.2"}),`
`,n.jsx(e.li,{children:"Body Text: 1.5"}),`
`,n.jsx(e.li,{children:"Tight: 1.3"}),`
`]}),`
`,n.jsx(e.h2,{id:"transitions",children:"Transitions"}),`
`,n.jsx(e.p,{children:"Common animation durations:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fast: 0.2s"}),`
`,n.jsx(e.li,{children:"Regular: 0.3s"}),`
`,n.jsx(e.li,{children:"Slow: 0.5s"}),`
`]}),`
`,n.jsxs(e.p,{children:["Default easing: ",n.jsx(e.code,{children:"ease-in-out"})]})]})}function H(s={}){const{wrapper:e}=Object.assign({},h(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(x,s)})):x(s)}export{H as default};
