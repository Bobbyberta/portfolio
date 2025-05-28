const s={title:"Components/Images",tags:["autodocs"],parameters:{componentSubtitle:"images component styles"}},t={render:e=>`
    <style>
      .modal-overlay {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0; top: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.7);
        justify-content: center;
        align-items: center;
      }
      .modal-overlay.active { display: flex; }
      .modal-content { background: #fff; padding: 1rem; border-radius: 8px; max-width: 90vw; max-height: 90vh; }
      .modal-content img { max-width: 80vw; max-height: 80vh; }
      .modal-close { position: absolute; top: 2rem; right: 2rem; font-size: 2rem; color: #fff; cursor: pointer; }
      .img-thumb { cursor: pointer; border: 2px solid #eee; border-radius: 4px; transition: box-shadow 0.2s; }
      .img-thumb:hover { box-shadow: 0 0 0 2px #007bff; }
    </style>
    <div>
      <img src="${e.thumbSrc}" alt="${e.thumbAlt}" class="img-thumb" width="200" />
      <div class="modal-overlay" id="modal">
        <span class="modal-close" id="closeBtn">&times;</span>
        <div class="modal-content">
          <img src="${e.fullSrc}" alt="${e.fullAlt}" />
        </div>
      </div>
    </div>
    <script>
      const thumb = document.currentScript.previousElementSibling.querySelector('.img-thumb');
      const modal = document.currentScript.previousElementSibling.querySelector('#modal');
      const closeBtn = document.currentScript.previousElementSibling.querySelector('#closeBtn');
      thumb.onclick = () => { modal.classList.add('active'); };
      closeBtn.onclick = () => { modal.classList.remove('active'); };
      modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
    <\/script>
  `,args:{thumbSrc:"../../assets/images/bubble-function-sketch.png",thumbAlt:"Design process visualization (thumbnail)",fullSrc:"../../assets/images/bubble-function-sketch.png",fullAlt:"Design process visualization (full size)"},argTypes:{thumbSrc:{control:"text",name:"Thumbnail Image Source"},thumbAlt:{control:"text",name:"Thumbnail Alt Text"},fullSrc:{control:"text",name:"Full Image Source"},fullAlt:{control:"text",name:"Full Image Alt Text"}}};var n,o,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => \`
    <style>
      .modal-overlay {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0; top: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.7);
        justify-content: center;
        align-items: center;
      }
      .modal-overlay.active { display: flex; }
      .modal-content { background: #fff; padding: 1rem; border-radius: 8px; max-width: 90vw; max-height: 90vh; }
      .modal-content img { max-width: 80vw; max-height: 80vh; }
      .modal-close { position: absolute; top: 2rem; right: 2rem; font-size: 2rem; color: #fff; cursor: pointer; }
      .img-thumb { cursor: pointer; border: 2px solid #eee; border-radius: 4px; transition: box-shadow 0.2s; }
      .img-thumb:hover { box-shadow: 0 0 0 2px #007bff; }
    </style>
    <div>
      <img src="\${args.thumbSrc}" alt="\${args.thumbAlt}" class="img-thumb" width="200" />
      <div class="modal-overlay" id="modal">
        <span class="modal-close" id="closeBtn">&times;</span>
        <div class="modal-content">
          <img src="\${args.fullSrc}" alt="\${args.fullAlt}" />
        </div>
      </div>
    </div>
    <script>
      const thumb = document.currentScript.previousElementSibling.querySelector('.img-thumb');
      const modal = document.currentScript.previousElementSibling.querySelector('#modal');
      const closeBtn = document.currentScript.previousElementSibling.querySelector('#closeBtn');
      thumb.onclick = () => { modal.classList.add('active'); };
      closeBtn.onclick = () => { modal.classList.remove('active'); };
      modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
    <\/script>
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
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const i=["ExpandableImage"];export{t as ExpandableImage,i as __namedExportsOrder,s as default};
