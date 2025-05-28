const m={title:"Components/Images",tags:["autodocs"],parameters:{componentSubtitle:"images component styles"}},l={render:t=>`
    <div>
      <div class="img-container">
        <img src="${t.thumbSrc}" alt="${t.thumbAlt}" class="img-responsive" id="story-img-thumb" />
      </div>
      <div class="image-modal" id="modal" role="dialog">
        <div class="modal-content">
          <button class="modal-close" id="closeBtn" aria-label="Close image">&times;</button>
          <img src="${t.fullSrc}" alt="${t.fullAlt}" />
        </div>
      </div>
    </div>
  `,args:{thumbSrc:"../../assets/images/bubble-function-sketch.png",thumbAlt:"Design process visualization (thumbnail)",fullSrc:"../../assets/images/bubble-function-sketch.png",fullAlt:"Design process visualization (full size)"},argTypes:{thumbSrc:{control:"text",name:"Thumbnail Image Source"},thumbAlt:{control:"text",name:"Thumbnail Alt Text"},fullSrc:{control:"text",name:"Full Image Source"},fullAlt:{control:"text",name:"Full Image Alt Text"}},play:async({canvasElement:t})=>{const n=t.querySelector("#story-img-thumb"),e=t.querySelector("#modal"),s=t.querySelector("#closeBtn");!n||!e||!s||(n.onclick=()=>{e.classList.add("active")},s.onclick=()=>{e.classList.remove("active")},e.onclick=i=>{i.target===e&&e.classList.remove("active")})}};var a,o,c;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(o=l.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const r=["ExpandableImage"];export{l as ExpandableImage,r as __namedExportsOrder,m as default};
