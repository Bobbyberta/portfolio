const T={title:"Components/Images",tags:["autodocs"],parameters:{componentSubtitle:"images component styles"}},e={render:a=>`
    <div class="img-container">
      <img src="${a.src}" alt="${a.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${a.caption}</p>
    </div>
  `,args:{src:"../../assets/images/bubble-function-sketch.png",alt:"Default responsive image example",caption:"Default image container with responsive behavior"},argTypes:{src:{control:"text",name:"Image Source"},alt:{control:"text",name:"Alt Text"},caption:{control:"text",name:"Caption"}}},t={render:a=>`
    <div class="img-container full-width">
      <img src="${a.src}" alt="${a.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${a.caption}</p>
    </div>
  `,args:{src:"../../assets/images/ai-workflow-title-page-itterations.png",alt:"Full width comparison image showing before and after",caption:"Full width display - ideal for comparisons and iterations"},argTypes:{src:{control:"text",name:"Image Source"},alt:{control:"text",name:"Alt Text"},caption:{control:"text",name:"Caption"}}},s={render:a=>`
    <div class="img-container full-height">
      <img src="${a.src}" alt="${a.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${a.caption}</p>
    </div>
  `,args:{src:"../../assets/images/ai-workflow-CI.png",alt:"Full height workflow diagram showing CI/CD pipeline",caption:"Full height display - perfect for workflows and diagrams"},argTypes:{src:{control:"text",name:"Image Source"},alt:{control:"text",name:"Alt Text"},caption:{control:"text",name:"Caption"}}},l={render:a=>`
    <div class="img-container natural-size">
      <img src="${a.src}" alt="${a.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">${a.caption}</p>
    </div>
  `,args:{src:"../../assets/images/bubble-function-logo.png",alt:"Natural size image example",caption:"Natural size display - shows image at original dimensions"},argTypes:{src:{control:"text",name:"Image Source"},alt:{control:"text",name:"Alt Text"},caption:{control:"text",name:"Caption"}}},o={render:a=>`
    <div>
      <div class="img-container">
        <img src="${a.thumbSrc}" alt="${a.thumbAlt}" class="img-responsive" id="story-img-thumb" />
      </div>
      <div class="image-modal" id="modal" role="dialog">
        <div class="modal-content">
          <button class="modal-close" id="closeBtn" aria-label="Close image">&times;</button>
          <img src="${a.fullSrc}" alt="${a.fullAlt}" />
        </div>
      </div>
    </div>
  `,args:{thumbSrc:"../../assets/images/bubble-function-sketch.png",thumbAlt:"Design process visualization (thumbnail)",fullSrc:"../../assets/images/bubble-function-sketch.png",fullAlt:"Design process visualization (full size)"},argTypes:{thumbSrc:{control:"text",name:"Thumbnail Image Source"},thumbAlt:{control:"text",name:"Thumbnail Alt Text"},fullSrc:{control:"text",name:"Full Image Source"},fullAlt:{control:"text",name:"Full Image Alt Text"}},play:async({canvasElement:a})=>{const i=a.querySelector("#story-img-thumb"),n=a.querySelector("#modal"),r=a.querySelector("#closeBtn");!i||!n||!r||(i.onclick=()=>{n.classList.add("active")},r.onclick=()=>{n.classList.remove("active")},n.onclick=I=>{I.target===n&&n.classList.remove("active")})}};var c,m,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => \`
    <div class="img-container">
      <img src="\${args.src}" alt="\${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">\${args.caption}</p>
    </div>
  \`,
  args: {
    src: '../../assets/images/bubble-function-sketch.png',
    alt: 'Default responsive image example',
    caption: 'Default image container with responsive behavior'
  },
  argTypes: {
    src: {
      control: 'text',
      name: 'Image Source'
    },
    alt: {
      control: 'text',
      name: 'Alt Text'
    },
    caption: {
      control: 'text',
      name: 'Caption'
    }
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => \`
    <div class="img-container full-width">
      <img src="\${args.src}" alt="\${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">\${args.caption}</p>
    </div>
  \`,
  args: {
    src: '../../assets/images/ai-workflow-title-page-itterations.png',
    alt: 'Full width comparison image showing before and after',
    caption: 'Full width display - ideal for comparisons and iterations'
  },
  argTypes: {
    src: {
      control: 'text',
      name: 'Image Source'
    },
    alt: {
      control: 'text',
      name: 'Alt Text'
    },
    caption: {
      control: 'text',
      name: 'Caption'
    }
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,v,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => \`
    <div class="img-container full-height">
      <img src="\${args.src}" alt="\${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">\${args.caption}</p>
    </div>
  \`,
  args: {
    src: '../../assets/images/ai-workflow-CI.png',
    alt: 'Full height workflow diagram showing CI/CD pipeline',
    caption: 'Full height display - perfect for workflows and diagrams'
  },
  argTypes: {
    src: {
      control: 'text',
      name: 'Image Source'
    },
    alt: {
      control: 'text',
      name: 'Alt Text'
    },
    caption: {
      control: 'text',
      name: 'Caption'
    }
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,x,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => \`
    <div class="img-container natural-size">
      <img src="\${args.src}" alt="\${args.alt}" class="img-responsive" loading="lazy" />
      <p class="image-caption">\${args.caption}</p>
    </div>
  \`,
  args: {
    src: '../../assets/images/bubble-function-logo.png',
    alt: 'Natural size image example',
    caption: 'Natural size display - shows image at original dimensions'
  },
  argTypes: {
    src: {
      control: 'text',
      name: 'Image Source'
    },
    alt: {
      control: 'text',
      name: 'Alt Text'
    },
    caption: {
      control: 'text',
      name: 'Caption'
    }
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,$,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => \`
    <div>
      <div class="img-container">
        <img src="\${args.thumbSrc}" alt="\${args.thumbAlt}" class="img-responsive" id="story-img-thumb" />
      </div>
      <div class="image-modal" id="modal" role="dialog">
        <div class="modal-content">
          <button class="modal-close" id="closeBtn" aria-label="Close image">&times;</button>
          <img src="\${args.fullSrc}" alt="\${args.fullAlt}" />
        </div>
      </div>
    </div>
  \`,
  args: {
    thumbSrc: '../../assets/images/bubble-function-sketch.png',
    thumbAlt: 'Design process visualization (thumbnail)',
    fullSrc: '../../assets/images/bubble-function-sketch.png',
    fullAlt: 'Design process visualization (full size)'
  },
  argTypes: {
    thumbSrc: {
      control: 'text',
      name: 'Thumbnail Image Source'
    },
    thumbAlt: {
      control: 'text',
      name: 'Thumbnail Alt Text'
    },
    fullSrc: {
      control: 'text',
      name: 'Full Image Source'
    },
    fullAlt: {
      control: 'text',
      name: 'Full Image Alt Text'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const thumb = canvasElement.querySelector('#story-img-thumb');
    const modal = canvasElement.querySelector('#modal');
    const closeBtn = canvasElement.querySelector('#closeBtn');
    if (!thumb || !modal || !closeBtn) return;
    thumb.onclick = () => {
      modal.classList.add('active');
    };
    closeBtn.onclick = () => {
      modal.classList.remove('active');
    };
    modal.onclick = e => {
      if (e.target === modal) modal.classList.remove('active');
    };
  }
}`,...(w=($=o.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const A=["DefaultImage","FullWidthImage","FullHeightImage","NaturalSizeImage","ExpandableImage"];export{e as DefaultImage,o as ExpandableImage,s as FullHeightImage,t as FullWidthImage,l as NaturalSizeImage,A as __namedExportsOrder,T as default};
