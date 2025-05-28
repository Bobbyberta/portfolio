const r={title:"Components/TagItems",tags:["autodocs"],parameters:{componentSubtitle:"tag-items component styles"}},s=n=>{const{heading:i,tags:o}=n;return`
    <div class="skills">
      <h2>${i}</h2>
      <ul class="tags-grid">
        ${o.map(g=>`<li class="tag-item"><span class="tag-text">${g}</span></li>`).join("")}
      </ul>
    </div>
  `};s.args={heading:"Skills & Expertise",tags:["Strong Communication","Visual Thinking","Workshop Facilitation","User Research","Collaborative Tools (Miro)","Usability Testing (Maze)","UI/UX Design","Game Design","Basic Coding Knowledge"]};s.argTypes={heading:{control:"text",name:"Section Heading"},tags:{control:"object",name:"Tags"}};var a,t,e;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const {
    heading,
    tags
  } = args;
  return \`
    <div class="skills">
      <h2>\${heading}</h2>
      <ul class="tags-grid">
        \${tags.map(tag => \`<li class="tag-item"><span class="tag-text">\${tag}</span></li>\`).join('')}
      </ul>
    </div>
  \`;
}`,...(e=(t=s.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const l=["TagsSection"];export{s as TagsSection,l as __namedExportsOrder,r as default};
