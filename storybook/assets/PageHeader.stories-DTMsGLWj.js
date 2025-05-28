const d={title:"Components/PageHeader",tags:["autodocs"],parameters:{componentSubtitle:"page-header component styles"}},e=s=>{const{title:r,category:o,date:i,readTime:c}=s;return`
    <div class="page-header">
      <h1>${r}</h1>
      <div class="page-meta">
        <span class="meta-item category">${o}</span>
        <span class="meta-item date">${i}</span>
        <span class="meta-item read-time">${c}</span>
      </div>
    </div>
  `};e.args={title:"Expanding Functionality: Enhancing the Usability of Bulk Actions in Health Tech",category:"UX Design",date:"September 2023",readTime:"5 min read"};e.argTypes={title:{control:"text",name:"Blog Title"},category:{control:"text",name:"Category"},date:{control:"text",name:"Date"},readTime:{control:"text",name:"Read Time"}};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const {
    title,
    category,
    date,
    readTime
  } = args;
  return \`
    <div class="page-header">
      <h1>\${title}</h1>
      <div class="page-meta">
        <span class="meta-item category">\${category}</span>
        <span class="meta-item date">\${date}</span>
        <span class="meta-item read-time">\${readTime}</span>
      </div>
    </div>
  \`;
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const m=["BlogSectionHeader"];export{e as BlogSectionHeader,m as __namedExportsOrder,d as default};
