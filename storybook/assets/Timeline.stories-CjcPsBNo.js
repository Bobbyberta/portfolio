const o={title:"Components/Timeline",tags:["autodocs"],parameters:{componentSubtitle:"timeline component styles"}},e=a=>{const{title:l,subtitle:c,items:d}=a;return`
    <div class="content-card timeline-card">
      <div class="card-header">
        <h2>${l}</h2>
        <span class="subtitle">${c}</span>
      </div>
      <div class="timeline-container">
        ${d.map(i=>`
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-date">${i.date}</span>
              <h3>${i.heading}</h3>
              <p>${i.description}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `};e.args={title:"Timeline",subtitle:"3 months total",items:[{date:"Month 1",heading:"Discovery & Research",description:"Initial research and concept development phase"},{date:"Month 2",heading:"MVP Development",description:"Core gameplay and basic functionality"},{date:"Month 3",heading:"MLP & Art",description:"Final polish and visual improvements"}]};e.argTypes={title:{control:"text",name:"Timeline Title"},subtitle:{control:"text",name:"Timeline Subtitle"},items:{control:"object",name:"Timeline Items"}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const {
    title,
    subtitle,
    items
  } = args;
  return \`
    <div class="content-card timeline-card">
      <div class="card-header">
        <h2>\${title}</h2>
        <span class="subtitle">\${subtitle}</span>
      </div>
      <div class="timeline-container">
        \${items.map(item => \`
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-date">\${item.date}</span>
              <h3>\${item.heading}</h3>
              <p>\${item.description}</p>
            </div>
          </div>
        \`).join('')}
      </div>
    </div>
  \`;
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const r=["TimelineSection"];export{e as TimelineSection,r as __namedExportsOrder,o as default};
