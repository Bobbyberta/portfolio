const o='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 300 150"%3E%3Crect width="300" height="150" fill="%23cccccc"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23666666"%3EPlaceholder Image%3C/text%3E%3C/svg%3E',l={title:"Components/Cards",tags:["autodocs"],parameters:{componentSubtitle:"cards component styles"}},t={render:({title:s,description:r,category:d,date:i,readTime:c})=>`
    <div class="content-card">
      <div class="content-card-image">
        <img src="${o}" alt="Card image" />
      </div>
      <div class="content-card-content">
        <span class="content-category">${d}</span>
        <h3>${s}</h3>
        <p>${r}</p>
        <div class="content-meta">
          <span>${i}</span>
          <span>${c}</span>
        </div>
      </div>
    </div>
  `,args:{title:"Card Title",description:"Card description text",category:"Category",date:"Jan 1, 2024",readTime:"5 min read"}};var n,e,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: ({
    title,
    description,
    category,
    date,
    readTime
  }) => \`
    <div class="content-card">
      <div class="content-card-image">
        <img src="\${PLACEHOLDER_IMAGE}" alt="Card image" />
      </div>
      <div class="content-card-content">
        <span class="content-category">\${category}</span>
        <h3>\${title}</h3>
        <p>\${description}</p>
        <div class="content-meta">
          <span>\${date}</span>
          <span>\${readTime}</span>
        </div>
      </div>
    </div>
  \`,
  args: {
    title: 'Card Title',
    description: 'Card description text',
    category: 'Category',
    date: 'Jan 1, 2024',
    readTime: '5 min read'
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const p=["ContentCard"];export{t as ContentCard,p as __namedExportsOrder,l as default};
